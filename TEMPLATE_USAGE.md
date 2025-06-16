# 工具库模板使用指南

## 📋 功能清单

✅ **已实现的功能：**

- [x] TypeScript 配置（支持 DOM 和 Node 环境）
- [x] ESLint 配置（最新 flat config 格式）
- [x] Prettier 代码格式化
- [x] Husky Git 钩子
- [x] lint-staged 预提交检查
- [x] Vitest 测试框架
- [x] Rollup 构建工具（ESM + CJS）
- [x] Conventional Commits 提交规范
- [x] GitHub Actions CI/CD
- [x] 自动发布 npm 包
- [x] 自动生成 Changelog
- [x] 双语 README

## 🚀 开始使用此模板

### 1. 克隆或下载模板

```bash
# 如果已经是模板项目目录
# 或者从GitHub克隆/下载此模板
```

### 2. 自定义项目信息

更新以下文件中的项目信息：

#### `package.json`

```json
{
  "name": "your-tool-name", // 改为你的包名
  "description": "Your tool description", // 改为你的描述
  "author": "Your Name <your.email@example.com>", // 改为你的信息
  "repository": {
    "url": "git+https://github.com/your-username/your-repo.git" // 改为你的仓库
  },
  "bugs": {
    "url": "https://github.com/your-username/your-repo/issues" // 改为你的issue地址
  },
  "homepage": "https://github.com/your-username/your-repo#readme" // 改为你的主页
}
```

#### `README.md` 和 `README_EN.md`

- 更新项目名称和描述
- 更新 GitHub badge 链接
- 更新示例代码
- 添加你的 API 文档

#### `LICENSE`

- 更新版权信息

### 3. 设置 GitHub 仓库

#### 创建 GitHub 仓库：

```bash
# 添加远程仓库
git remote add origin https://github.com/your-username/your-repo.git

# 设置默认分支为 main
git branch -M main

# 首次推送
git add .
git commit -m "feat: initial project setup"
git push -u origin main
```

#### 配置 GitHub Secrets：

在 GitHub 仓库设置中添加以下 secrets：

1. `NPM_TOKEN` - npm 发布token

   ```bash
   # 在 npmjs.com 生成 access token
   # 类型选择: Automation
   ```

2. `CODECOV_TOKEN` (可选) - 代码覆盖率报告
   ```bash
   # 在 codecov.io 获取项目 token
   ```

### 4. 开发你的工具库

#### 删除示例代码：

```bash
# 删除示例文件
rm -rf src/utils
rm src/index.ts

# 创建你的入口文件
touch src/index.ts
```

#### 创建你的功能：

```typescript
// src/index.ts
export * from './your-module';

// src/your-module.ts
export function yourFunction() {
  // 你的实现
}
```

#### 编写测试：

```typescript
// src/your-module.test.ts
import { describe, it, expect } from 'vitest';
import { yourFunction } from './your-module';

describe('Your Module', () => {
  it('should work correctly', () => {
    expect(yourFunction()).toBe(expectedResult);
  });
});
```

### 5. 开发工作流

#### 日常开发：

```bash
# 启动开发模式（热更新：构建+测试+类型检查）
pnpm dev

# 单独启动某项监听
pnpm dev:build      # 仅构建监听
pnpm dev:test       # 仅测试监听
pnpm dev:typecheck  # 仅类型检查监听

# 一次性执行
pnpm test           # 运行测试
pnpm lint           # 代码检查
pnpm format         # 格式化代码
```

#### 提交代码：

```bash
# Husky 会自动运行预提交检查
git add .
git commit -m "feat: add new feature"  # 遵循 conventional commits
```

#### 构建和发布：

```bash
# 本地构建测试
npm run build

# 更新版本并发布
npm version patch  # 或 minor, major
git push origin --tags  # 触发自动发布
```

## 🔧 配置说明

### 构建配置

项目使用 Rollup 构建，输出格式：

- `dist/index.js` - ESM 格式（优先）
- `dist/index.cjs` - CommonJS 格式
- `dist/index.d.ts` - TypeScript 类型定义

### 测试配置

使用 Vitest 测试框架：

- 支持 TypeScript
- 内置代码覆盖率
- 快速执行
- 兼容 Jest API

### 代码规范

- **ESLint**: 使用最新的 flat config 格式
- **Prettier**: 统一代码格式
- **Husky**: Git 钩子管理
- **lint-staged**: 预提交代码检查

### CI/CD 流程

GitHub Actions 包括：

- 代码检查（lint, format, typecheck）
- 单元测试和覆盖率
- 多 Node.js 版本测试
- 自动构建
- 标签推送时自动发布

## 📝 提交规范

使用 [Conventional Commits](https://conventionalcommits.org/):

- `feat:` 新功能
- `fix:` 修复 bug
- `docs:` 文档更新
- `style:` 代码格式化
- `refactor:` 重构
- `perf:` 性能优化
- `test:` 测试相关
- `chore:` 构建工具变动
- `ci:` CI 配置
- `build:` 构建相关

## 🎯 最佳实践

1. **保持代码简洁** - 工具库应该专注和轻量
2. **完善的测试** - 确保 100% 测试覆盖率
3. **清晰的文档** - 提供详细的使用示例
4. **语义化版本** - 严格遵循 semver 规范
5. **向后兼容** - 谨慎处理破坏性变更

## 🔄 升级指南

### 从其他模板迁移：

1. 复制核心配置文件
2. 安装依赖 `npm install`
3. 运行 `npm run prepare` 设置 Git 钩子
4. 调整配置以适应你的项目需求

### 保持模板更新：

定期检查和更新依赖版本：

```bash
npm update
npm audit fix
```

## ❗ 常见问题

### Q: 如何添加新的工具函数？

A: 在 `src/` 目录下创建新模块，在 `src/index.ts` 中导出，并编写相应测试。

### Q: 如何修改构建配置？

A: 编辑 `rollup.config.js` 文件，调整输入/输出配置。

### Q: 如何跳过某次提交的检查？

A: 使用 `git commit --no-verify` 跳过钩子检查（不推荐）。

### Q: 发布失败怎么办？

A: 检查 npm token 是否正确设置，版本号是否符合 semver 规范。

## 📞 获得帮助

如果在使用过程中遇到问题：

1. 查看项目 Issues
2. 阅读相关工具的官方文档
3. 在社区寻求帮助
