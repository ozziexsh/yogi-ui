import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/yogi-ui.ts',
      name: 'YogiUI',
      fileName: 'yogi-ui',
    },
    rollupOptions: {
      external: ['react'],
    },
  },
});
