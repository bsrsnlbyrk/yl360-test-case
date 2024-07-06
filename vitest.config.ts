import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from "vite-tsconfig-paths";
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [tsconfigPaths(), vue(), AutoImport({
    imports: [
      'vue',
      'pinia'
    ],
 }),],
  test: {
    environment: 'happy-dom',
    alias: {
      '@/': new URL('./', import.meta.url).pathname,
    }
  },
});
