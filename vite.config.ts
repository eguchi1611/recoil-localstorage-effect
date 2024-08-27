import react from "@vitejs/plugin-react";
import { resolve } from "path";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), preserveDirectives()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        entryFileNames({ name }) {
          return `${name}.js`;
        },
      },
      external: [/^react/],
    },
  },
});
