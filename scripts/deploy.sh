#!/bin/bash
# G-ART 网站 - 自动部署脚本
# 使用方式：./scripts/deploy.sh

set -Eeuo pipefail

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 项目配置
PROJECT_ID="qlgart-website"
ORG_ID="lshymks-projects"

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  G-ART 网站自动部署脚本${NC}"
echo -e "${GREEN}========================================${NC}"

# 检查 Vercel Token
if [ -z "${VERCEL_TOKEN}" ]; then
    echo -e "${RED}❌ 错误：未设置 VERCEL_TOKEN 环境变量${NC}"
    echo -e "${YELLOW}请先获取 Vercel Token：${NC}"
    echo "1. 访问 https://vercel.com/account/tokens"
    echo "2. 点击 'Create Token'"
    echo "3. 复制 Token 并设置为环境变量："
    echo "   export VERCEL_TOKEN=your-token-here"
    exit 1
fi

echo -e "${GREEN}✓ Vercel Token 已设置${NC}"

# 检查项目配置
if [ ! -f ".vercel/project.json" ]; then
    echo -e "${YELLOW}创建 Vercel 项目配置...${NC}"
    mkdir -p .vercel
    cat > .vercel/project.json << EOF
{
  "projectId": "${PROJECT_ID}",
  "orgId": "${ORG_ID}"
}
EOF
    echo -e "${GREEN}✓ 项目配置已创建${NC}"
else
    echo -e "${GREEN}✓ 项目配置已存在${NC}"
fi

# 运行类型检查
echo -e "${YELLOW}正在运行类型检查...${NC}"
if pnpm run ts-check; then
    echo -e "${GREEN}✓ 类型检查通过${NC}"
else
    echo -e "${RED}❌ 类型检查失败${NC}"
    exit 1
fi

# 构建项目
echo -e "${YELLOW}正在构建项目...${NC}"
if pnpm run build; then
    echo -e "${GREEN}✓ 构建成功${NC}"
else
    echo -e "${RED}❌ 构建失败${NC}"
    exit 1
fi

# 部署到 Vercel
echo -e "${YELLOW}正在部署到 Vercel...${NC}"
if VERCEL_TOKEN="${VERCEL_TOKEN}" npx vercel --prod --yes --force; then
    echo -e "${GREEN}✓ 部署成功${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}🎉 部署完成！${NC}"
    echo -e "${GREEN}========================================${NC}"
else
    echo -e "${RED}❌ 部署失败${NC}"
    exit 1
fi

echo -e "${YELLOW}提示：可以在 Vercel 控制台查看部署详情${NC}"
echo -e "${YELLOW}地址：https://vercel.com/lshymks-projects/${PROJECT_ID}/deployments${NC}"
