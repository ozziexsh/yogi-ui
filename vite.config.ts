import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    insertTypesEntry: true,
  }),],
  build: {
    sourcemap: true,
    lib: {
      entry: './lib/yogi-ui.ts',
      fileName: 'yogi-ui',
      name: 'YogiUI',
    },
    rollupOptions: {
      external: ['react', 'react-dm', '@headlessui/react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    },
  },
});
