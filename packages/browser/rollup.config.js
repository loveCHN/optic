import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: ["@optic/core"],
};
