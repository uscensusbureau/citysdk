import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCommonjs, esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteCommonjs(), react()],
  define: {
    global: {},
  },
  build: {
    commonjsOptions: {
      ignoreTryCatch: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        // Solves:
        // https://github.com/vitejs/vite/issues/5308
        // add the name of your package
        esbuildCommonjs(["../../census/census", "xhr2"]),
      ],
    },
  },
});
