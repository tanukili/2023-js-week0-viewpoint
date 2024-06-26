import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/2023-js-week0-viewpoint/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 跨域請求
  proxyTable: {
    '/api': {
      changeOrigin: true,
      target: 'http://localhost:3000',
      pathRewrite: {
        '^/api': '',
      },
    },
  },
});
