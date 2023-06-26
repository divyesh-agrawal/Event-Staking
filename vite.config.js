import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  server: {
    // For Custom port
    port: 3000,
    open: true,
  },
  plugins: [
    react(),
    jsconfigPaths(),
    viteImagemin({
      jpegTran: {},
    }),
  ],
  build: {
    sourcemap: true,
  },
});
