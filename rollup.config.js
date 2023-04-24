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
};
