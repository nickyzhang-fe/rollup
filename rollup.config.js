import resolve from '@rollup/plugin-node-resolve';
import common from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from 'rollup-plugin-json';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
const rollup = require('rollup');
// 解析参数
const argv = require('minimist')(process.argv.slice(2));
const { npmName, pathName, publish } = argv
console.log(npmName, pathName, publish);
// 输入参数
const inputOptions = {
  input: 'src/main.js',
  plugins: [
    typescript({
      compilerOptions: {
        lib: ['es5', 'es6', 'dom'],
        target: 'es5'
      }
    }),
    resolve(),
    common(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    json()
  ],
  external: ['lodash']
}
// 输出参数
const outputOptions = [
  {
    file: 'dist/bundles.js',
    format: 'amd',
    sourcemap : false,
  }, {
    file: 'dist/bundlumd.js',
    format: 'umd',
    sourcemap : false,
    name: 'rollup'
  }, {
    file: 'dist/bundlcjs.js',
    format: 'cjs',
    sourcemap : false,
  }, {
    file: 'dist/bundliife.js',
    format: 'iife',
    sourcemap : false,
  }, {
    file: 'dist/bundliife.js',
    format: 'es',
    sourcemap : false,
  }
]
// watch
const watchOptions = {
  ...inputOptions,
  output: [...outputOptions],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
};

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  const { imports, exports, modules } = bundle
  console.log(imports, exports, modules)
  const watcher = rollup.watch(watchOptions);
  watcher.on('event', event => {
    eventHandler(event)
  });
}
build()

/**
 * watch 监听
 * @param {*} event 
 * @param {*} filename 
 */
function eventHandler(event, filename) {
  switch (event.code) {
    case 'START':
      console.log('rollup-watch start');
      break
    case 'BUNDLE_START':
      console.log(`bundling ${filename}...`)
      break
    case 'BUNDLE_END':
      console.log(`${filename} bundled in ${event.duration}ms. Watching for changes...`)
      break
    case 'END':
      console.log('rollup-watch end');
      break
    case 'ERROR':
      console.log(`error: ${event.error}`)
      break
    case 'FATAL':
      console.log(`FATAL: ${event.error}`)
      break
    default:
      console.log(`unknown event: ${event.code}`)
      break
  }
}