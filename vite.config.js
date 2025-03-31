import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    root: './src',
    plugins: [react()],
    server: {
        host: 'localhost',
        port: 3000,
        open: true,
        hmr: true,
    },
    build: {
        outDir: '../dist'
    }
});