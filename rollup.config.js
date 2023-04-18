import resolve from "@rollup/plugin-node-resolve:";


export default {
  input: "src/index.js",
  output: 
    {
      format: "ems",
      file: "src/build/bundle.js",
    },
  
  plugins: [resolve()],
};