import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "use-client-banner",
      generateBundle(_options, bundle) {
        for (const key in bundle) {
          const chunk = bundle[key];
          if (chunk.type === "chunk") {
            chunk.code = `"use client";\n${chunk.code}`;
          }
        }
      },
    },
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames({ name }) {
          return `${name}.js`;
        },
      },
      external: [/^react/],
    },
  },
});
