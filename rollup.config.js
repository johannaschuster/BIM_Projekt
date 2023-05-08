import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'main.js',
  output: {
    file: "build/main.js",
    format: 'iife',
    inlineDynamicImports: true, 
  },
  plugins: [ nodeResolve(), commonjs() ]
};
