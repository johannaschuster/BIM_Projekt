<<<<<<< HEAD
// rollup.config.js
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
export default {
  input: "./src/index.js",
  output: {
    format: "iife",
    file: "./build/bundle.js",
  },
  plugins: [nodeResolve(), commonjs()],
=======
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
>>>>>>> c1f6ba6c80c59398ba8ee27423af9536b2eda266
};
