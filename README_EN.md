# Tool Template

[![CI](https://github.com/fchc7/tool-template/workflows/CI/badge.svg)](https://github.com/fchc7/tool-template/actions)
[![npm version](https://badge.fury.io/js/tool-template.svg)](https://badge.fury.io/js/tool-template)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern TypeScript tool library development template with complete development, testing, building, and publishing workflow.

English | [中文](./README.md)

## ✨ Features

- 🚀 **TypeScript** - Full type support with DOM and Node environments
- 📦 **Dual Format** - Support both ESM and CommonJS, ESM first
- 🎯 **Modern Toolchain** - ESLint + Prettier + Husky + lint-staged
- 🧪 **Testing Framework** - Vitest for fast unit testing and coverage reports
- 🔨 **Build Tool** - Rollup for efficient bundling
- 📝 **Commit Convention** - Conventional Commits for standardized commit messages
- 🤖 **Automation** - GitHub Actions for automated CI/CD
- 📖 **Auto Generation** - Automatic Changelog and release generation

## 🚀 Quick Start

### Installation

```bash
npm install tool-template
# or
yarn add tool-template
# or
pnpm add tool-template
```

### Usage

```typescript
// ESM
import { camelToKebab, unique, deepClone } from 'tool-template';

// CommonJS
const { camelToKebab, unique, deepClone } = require('tool-template');

// String utilities
const kebabCase = camelToKebab('helloWorld'); // 'hello-world'

// Array utilities
const uniqueArray = unique([1, 2, 2, 3]); // [1, 2, 3]

// Object utilities
const cloned = deepClone({ a: { b: 1 } });
```

## 📚 API Documentation

### String Utilities

- `camelToKebab(str: string): string` - Convert camelCase to kebab-case
- `kebabToCamel(str: string): string` - Convert kebab-case to camelCase
- `capitalize(str: string): string` - Capitalize first letter
- `truncate(str: string, length: number, suffix?: string): string` - Truncate string with ellipsis

### Array Utilities

- `unique<T>(array: T[]): T[]` - Remove duplicates from array
- `chunk<T>(array: T[], size: number): T[][]` - Chunk array into smaller arrays
- `shuffle<T>(array: T[]): T[]` - Shuffle array randomly
- `intersection<T>(arr1: T[], arr2: T[]): T[]` - Get intersection of two arrays
- `difference<T>(arr1: T[], arr2: T[]): T[]` - Get difference between two arrays

### Object Utilities

- `deepClone<T>(obj: T): T` - Deep clone object
- `isEmpty(obj: Record<string, unknown>): boolean` - Check if object is empty
- `get(obj: Record<string, unknown>, path: string, defaultValue?: unknown): unknown` - Get deep property value
- `set(obj: Record<string, unknown>, path: string, value: unknown): void` - Set deep property value
- `pick<T, K>(obj: T, keys: K[]): Pick<T, K>` - Pick object properties
- `omit<T, K>(obj: T, keys: K[]): Omit<T, K>` - Omit object properties

## 🛠️ Development

### Requirements

- Node.js >= 16
- npm/yarn/pnpm

### Clone Repository

```bash
git clone https://github.com/your-username/tool-template.git
cd tool-template
npm install
```

### Development Scripts

```bash
# Development mode (hot reload: build+test+typecheck)
pnpm dev

# Individual watch modes
pnpm dev:build      # Build watch
pnpm dev:test       # Test watch
pnpm dev:typecheck  # TypeScript watch

# One-time execution
pnpm build          # Build project
pnpm test           # Run tests
pnpm test:coverage  # Test coverage
pnpm lint           # Code linting
pnpm format         # Code formatting
pnpm typecheck      # Type checking
```

### Commit Convention

This project uses [Conventional Commits](https://conventionalcommits.org/) specification:

```bash
feat: add new feature
fix: fix bug
docs: update documentation
style: code formatting
refactor: refactor code
perf: performance optimization
test: add tests
chore: build process or auxiliary tools changes
```

## 📦 Release

### Automatic Release

Push tags to automatically trigger the release process:

```bash
# Update version
npm version patch  # or minor, major

# Push tags
git push origin --tags
```

### Manual Release

```bash
npm run release
```

## 🤝 Contributing

1. Fork this repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

Thanks to all the developers who contributed to this project!
