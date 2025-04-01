import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      // any time the endpoint is /api, it will port the request over to port 3000
      '/api': 'http://localhost:3000',
      '/ws': {
        target:'ws://localhost:3000',
        ws: true,
      }
    }
  },
});