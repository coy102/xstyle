import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/button.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  external: ["react"],
  ...options,
}));
