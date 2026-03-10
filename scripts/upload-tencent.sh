#!/bin/bash
# G-ART 网站 - 腾讯云静态网站托管上传脚本
# 使用方式：./scripts/upload-tencent.sh

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  G-ART 网站上传到腾讯云${NC}"
echo -e "${GREEN}========================================${NC}"

# 检查是否已登录腾讯云CLI
if ! command -v cloudbase &> /dev/null; then
    echo -e "${YELLOW}安装腾讯云CLI工具...${NC}"
    npm install -g @cloudbase/cli
    echo -e "${GREEN}✓ 腾讯云CLI工具已安装${NC}"
fi

# 检查是否已登录
if ! cloudbase env:list &> /dev/null; then
    echo -e "${YELLOW}请先登录腾讯云...${NC}"
    echo -e "${YELLOW}运行以下命令登录：${NC}"
    echo "cloudbase login"
    echo ""
    echo -e "${YELLOW}登录方式：${NC}"
    echo "1. 扫描二维码登录（推荐）"
    echo "2. 或使用密钥登录"
    echo ""
    echo -e "${YELLOW}登录后请重新运行此脚本${NC}"
    exit 1
fi

# 列出可用环境
echo -e "${YELLOW}可用的腾讯云环境：${NC}"
cloudbase env:list

# 询问环境ID
echo ""
read -p "请输入环境ID（例如：g-art-website）: " ENV_ID

if [ -z "$ENV_ID" ]; then
    echo -e "${RED}❌ 错误：环境ID不能为空${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}准备上传文件...${NC}"
echo -e "${YELLOW}源目录：${NC}out/"
echo -e "${YELLOW}目标环境：${NC}${ENV_ID}"
echo ""

# 确认上传
read -p "确认上传？(y/n): " CONFIRM
if [ "$CONFIRM" != "y" ]; then
    echo -e "${YELLOW}已取消上传${NC}"
    exit 0
fi

# 上传文件
echo -e "${YELLOW}正在上传文件到腾讯云...${NC}"
if cloudbase hosting deploy out -e "$ENV_ID"; then
    echo -e "${GREEN}✓ 上传成功！${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}🎉 网站已部署到腾讯云！${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "${YELLOW}访问地址：${NC}"
    echo "https://${ENV_ID}.service.tcloudbase.com"
    echo ""
    echo -e "${YELLOW}提示：${NC}"
    echo "1. 可以在腾讯云控制台查看部署状态"
    echo "2. 可以配置自定义域名"
    echo "3. 可以配置HTTPS证书"
else
    echo -e "${RED}❌ 上传失败${NC}"
    exit 1
fi
