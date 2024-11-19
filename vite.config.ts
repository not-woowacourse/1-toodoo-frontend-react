import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 10242,
    proxy: {
      '/backend-api': {
        target: 'https://not-woowacourse-api.yopark.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend-api/, ''),
      },
    },
  },
  preview: {
    port: 10242,
  },
});
