import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      allowedHosts: [
        'ais-dev-alhqutb2uhqexyjuas5mhs-851623560969.asia-northeast1.run.app',
        'ais-pre-alhqutb2uhqexyjuas5mhs-851623560969.asia-northeast1.run.app',
        '.run.app',
        'localhost',
        '127.0.0.1',
      ],
      // Respect DISABLE_HMR in AI Studio; when active over HTTPS proxy, use clientPort 443 to avoid 3000/443 WebSocket mismatch
      hmr:
        process.env.DISABLE_HMR === 'true'
          ? false
          : {
              clientPort: process.env.HMR_CLIENT_PORT
                ? Number(process.env.HMR_CLIENT_PORT)
                : 443,
            },
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
