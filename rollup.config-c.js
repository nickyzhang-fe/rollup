import resolve from '@rollup/plugin-node-resolve';
import common from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from 'rollup-plugin-json';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  output: [{
    file: 'dist/bundles.js',
    format: 'amd',
    sourcemap : false,
    globals: {
      lodash: '_'
    }
  }, {
    file: 'dist/bundlumd.js',
    format: 'umd',
    sourcemap : false,
    name: 'rollup',
    globals: {
      lodash: '_'
    }
  }, {
    file: 'dist/bundlcjs.js',
    format: 'cjs',
    sourcemap : false,
    globals: {
      lodash: '_'
    },
    exports: "default",
  }, {
    file: 'dist/bundliife.js',
    format: 'iife',
    name: 'iife',
    sourcemap : false,
    globals: {
      lodash: '_'
    }
  }, {
    file: 'dist/bundliife.js',
    format: 'es',
    sourcemap : false,
    globals: {
      lodash: '_'
    },
    exports: "default",
  }],
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
};