# 工具库模板

[![CI](https://github.com/fchc7/tool-template/workflows/CI/badge.svg)](https://github.com/fchc7/tool-template/actions)
[![npm version](https://badge.fury.io/js/tool-template.svg)](https://badge.fury.io/js/tool-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

一个现代化的 TypeScript 工具库开发模板，提供完整的开发、测试、构建和发布流程。

[English](./README_EN.md) | 中文

## ✨ 特性

- 🚀 **TypeScript** - 完整的类型支持，同时支持 DOM 和 Node 环境
- 📦 **双格式输出** - 同时支持 ESM 和 CommonJS，ESM 优先
- 🎯 **现代化工具链** - ESLint + Prettier + Husky + lint-staged
- 🧪 **测试框架** - Vitest 提供快速的单元测试和覆盖率报告
- 🔨 **构建工具** - Rollup 提供高效的打包构建
- 📝 **提交规范** - Conventional Commits 规范化提交信息
- 🤖 **自动化流程** - GitHub Actions 自动化 CI/CD
- 📖 **自动生成** - 自动生成 Changelog 和发布

## 🚀 快速开始

### 安装

```bash
npm install tool-template
# 或者
yarn add tool-template
# 或者
pnpm add tool-template
```

### 使用

```typescript
// ESM
import { camelToKebab, unique, deepClone } from 'tool-template';

// CommonJS
const { camelToKebab, unique, deepClone } = require('tool-template');

// 字符串工具
const kebabCase = camelToKebab('helloWorld'); // 'hello-world'

// 数组工具
const uniqueArray = unique([1, 2, 2, 3]); // [1, 2, 3]

// 对象工具
const cloned = deepClone({ a: { b: 1 } });
```

## 📚 API 文档

### 字符串工具

- `camelToKebab(str: string): string` - 驼峰命名转短横线命名
- `kebabToCamel(str: string): string` - 短横线命名转驼峰命名
- `capitalize(str: string): string` - 首字母大写
- `truncate(str: string, length: number, suffix?: string): string` - 截断字符串

### 数组工具

- `unique<T>(array: T[]): T[]` - 数组去重
- `chunk<T>(array: T[], size: number): T[][]` - 数组分块
- `shuffle<T>(array: T[]): T[]` - 随机打乱数组
- `intersection<T>(arr1: T[], arr2: T[]): T[]` - 数组交集
- `difference<T>(arr1: T[], arr2: T[]): T[]` - 数组差集

### 对象工具

- `deepClone<T>(obj: T): T` - 深拷贝对象
- `isEmpty(obj: Record<string, unknown>): boolean` - 检查对象是否为空
- `get(obj: Record<string, unknown>, path: string, defaultValue?: unknown): unknown` - 获取深层属性
- `set(obj: Record<string, unknown>, path: string, value: unknown): void` - 设置深层属性
- `pick<T, K>(obj: T, keys: K[]): Pick<T, K>` - 选择对象属性
- `omit<T, K>(obj: T, keys: K[]): Omit<T, K>` - 排除对象属性

## 🛠️ 开发

### 环境要求

- Node.js >= 16
- npm/yarn/pnpm

### 克隆项目

```bash
git clone https://github.com/your-username/tool-template.git
cd tool-template
npm install
```

### 开发脚本

```bash
# 开发模式（热更新：构建+测试+类型检查）
pnpm dev

# 单独启动各项监听
pnpm dev:build      # 构建监听
pnpm dev:test       # 测试监听
pnpm dev:typecheck  # 类型检查监听

# 一次性执行
pnpm build          # 构建项目
pnpm test           # 运行测试
pnpm test:coverage  # 测试覆盖率
pnpm lint           # 代码检查
pnpm format         # 代码格式化
pnpm typecheck      # 类型检查
```

### 提交规范

项目使用 [Conventional Commits](https://conventionalcommits.org/) 规范：

```bash
feat: 添加新功能
fix: 修复 bug
docs: 更新文档
style: 代码格式化
refactor: 重构代码
perf: 性能优化
test: 添加测试
chore: 构建过程或辅助工具的变动
```

## 📦 发布

### 自动发布

推送标签时会自动触发发布流程：

```bash
# 更新版本号
npm version patch  # 或 minor, major

# 推送标签
git push origin --tags
```

### 手动发布

```bash
npm run release
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feat/amazing-feature`)
3. 提交您的更改 (`git commit -m 'feat: add amazing feature'`)
4. 推送到分支 (`git push origin feat/amazing-feature`)
5. 打开一个 Pull Request

## 📄 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。

## 🙏 致谢

感谢所有为本项目做出贡献的开发者！
