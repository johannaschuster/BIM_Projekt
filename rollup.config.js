import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  input: "src/3D.js",
  input: "IFC.js",
  output: 
    {
      format: "esm",
      file: "src/bundle.js",
    },
  
  plugins: [resolve()],
};