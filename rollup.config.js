import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "packages/browser/src/index.ts",
  output: {
    file: "packages/browser/dist/index.js",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: "packages/browser/dist",
          emitDeclarationOnly: false,
        },
        include: ["packages/browser/src"],
        exclude: ["**/__tests__", "**/*.test.ts"],
      },
      clean: true,
    }),
  ],
  external: ["@mito/core"],
};
