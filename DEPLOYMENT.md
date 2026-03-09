# G-ART 网站 - 部署说明文档

## 📋 快速开始

### 一键部署

```bash
# 设置 Vercel Token（仅第一次需要）
export VERCEL_TOKEN=your-token-here

# 运行部署脚本
./scripts/deploy.sh
```

---

## 🚀 完整部署流程

### 步骤 1：获取 Vercel Token（仅第一次需要）

1. 访问 https://vercel.com/account/tokens
2. 点击 "Create Token"
3. 给 Token 命名（例如：`g-art-website-token`）
4. 点击 "Create"
5. **立即复制 Token**（只显示一次！）

### 步骤 2：配置环境变量

#### 临时设置（当前会话）：
```bash
export VERCEL_TOKEN=vcp_your-token-here
```

#### 永久设置：
创建 `.env.local` 文件：
```bash
cp .env.example .env.local
# 编辑 .env.local，填入你的 VERCEL_TOKEN
```

### 步骤 3：运行部署

```bash
./scripts/deploy.sh
```

---

## 📊 部署流程说明

部署脚本会自动执行以下步骤：

1. ✅ 检查 Vercel Token 是否设置
2. ✅ 检查/创建项目配置文件
3. ✅ 运行 TypeScript 类型检查
4. ✅ 构建项目（`pnpm run build`）
5. ✅ 部署到 Vercel（生产环境）
6. ✅ 显示部署结果

---

## 🔧 开发 vs 部署

### 本地开发
```bash
pnpm run dev
# 访问 http://localhost:5000
```

### 预览构建
```bash
pnpm run build
pnpm run start
```

### 生产部署
```bash
./scripts/deploy.sh
```

---

## 🌐 访问网站

### 生产环境
- 主域名：https://projects-self-one.vercel.app
- 备用域名：https://projects-3awle7elp-lshymks-projects.vercel.app

### 本地预览
- http://localhost:5000

---

## 📦 项目配置

### Vercel 项目信息
- **项目 ID**: qlgart-website
- **组织 ID**: lshymks-projects
- **框架**: Next.js
- **包管理器**: pnpm
- **构建命令**: pnpm run build
- **输出目录**: .next

### 文件结构
```
.
├── scripts/
│   ├── deploy.sh          # 自动部署脚本
│   ├── build.sh           # 构建脚本
│   ├── dev.sh             # 开发脚本
│   └── start.sh           # 启动脚本
├── .vercel/
│   └── project.json       # Vercel 项目配置
├── .env.example           # 环境变量模板
├── .env.local             # 本地环境变量（不提交到 Git）
├── package.json
└── README.md
```

---

## 🛠️ 故障排除

### 问题 1：未设置 VERCEL_TOKEN
```
❌ 错误：未设置 VERCEL_TOKEN 环境变量
```
**解决方案**：
```bash
export VERCEL_TOKEN=vcp_your-token-here
```

### 问题 2：构建失败
```
❌ 构建失败
```
**解决方案**：
- 检查代码是否有语法错误
- 运行 `pnpm run ts-check` 查看类型错误
- 检查依赖是否完整：`pnpm install`

### 问题 3：部署失败
```
❌ 部署失败
```
**解决方案**：
- 检查 VERCEL_TOKEN 是否正确
- 检查网络连接
- 查看 Vercel 控制台的错误日志

### 问题 4：权限被拒绝
```
❌ Deployment Blocked: commit author does not have contributing access
```
**原因**：Vercel Hobby 套餐不支持多用户协作
**解决方案**：使用 Vercel CLI 部署（我们的脚本已解决此问题）

---

## 📝 常用命令

```bash
# 开发
pnpm run dev

# 构建
pnpm run build

# 类型检查
pnpm run ts-check

# 代码检查
pnpm run lint

# 部署
./scripts/deploy.sh

# 查看 Vercel 部署列表
VERCEL_TOKEN=xxx npx vercel list

# 查看部署日志
VERCEL_TOKEN=xxx npx vercel logs
```

---

## 🎯 最佳实践

### ✅ 推荐做法

1. **部署前检查**
   - 先运行 `pnpm run ts-check`
   - 本地测试功能正常
   - 提交代码到 Git

2. **使用自动化脚本**
   - 始终使用 `./scripts/deploy.sh` 部署
   - 避免手动运行 Vercel 命令

3. **保护敏感信息**
   - 不要将 `.env.local` 提交到 Git
   - 定期更新 Vercel Token

4. **查看部署日志**
   - 部署后检查 Vercel 控制台
   - 确认构建和部署都成功

### ❌ 避免做法

1. **不要**使用 Git webhook 推送（会导致权限问题）
2. **不要**在不同账户之间切换
3. **不要**跳过类型检查直接部署
4. **不要**将 VERCEL_TOKEN 提交到代码仓库

---

## 📞 技术支持

### 部署状态查看
- Vercel 控制台：https://vercel.com/lshymks-projects/qlgart-website
- 部署历史：https://vercel.com/lshymks-projects/qlgart-website/deployments

### 相关链接
- Vercel 文档：https://vercel.com/docs
- Next.js 文档：https://nextjs.org/docs
- 项目仓库：https://github.com/lshymk/qlgart-website

---

## 🔄 更新日志

### 2026-03-09
- ✅ 添加自动部署脚本
- ✅ 配置 Vercel CLI 部署
- ✅ 解决权限问题（Hobby 套餐限制）
- ✅ 添加首页轮播功能
- ✅ 优化图片加载性能（17MB → 4MB）

---

## 💡 提示

- **首次部署**需要获取并配置 VERCEL_TOKEN
- **后续部署**只需运行 `./scripts/deploy.sh` 即可
- 部署过程大约需要 **2-3 分钟**
- 部署成功后会自动获得访问 URL

---

**最后更新**: 2026-03-09
**维护者**: AI 助手
