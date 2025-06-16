import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { readFileSync } from 'fs';
import dts from 'rollup-plugin-dts';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  'node:path',
  'node:fs',
  'node:url',
  'node:crypto',
  'node:os',
  'node:util',
];

const isWatch = process.env.ROLLUP_WATCH === 'true';

export default [
  // ESM 构建
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    external,
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        // 开发模式下启用增量编译
        incremental: isWatch,
      }),
    ],
    // 开发模式优化
    ...(isWatch && {
      watch: {
        include: 'src/**',
        exclude: 'node_modules/**',
        clearScreen: false,
      },
    }),
  },

  // CommonJS 构建
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'auto',
    },
    external,
    plugins: [
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: false,
        declarationMap: false,
        incremental: isWatch,
      }),
    ],
    ...(isWatch && {
      watch: {
        include: 'src/**',
        exclude: 'node_modules/**',
        clearScreen: false,
      },
    }),
  },

  // 类型定义文件 (仅在非watch模式或生产构建时生成)
  ...(!isWatch
    ? [
        {
          input: 'src/index.ts',
          output: {
            file: 'dist/index.d.ts',
            format: 'es',
          },
          external,
          plugins: [dts()],
        },
      ]
    : []),
];
