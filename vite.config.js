import { defineConfig } from 'vite';
import { resolve } from 'path';
const __dirname = resolve();
// export default defineConfig({})
export default defineConfig({
    build: {
        modulePreload: false,
        rollupOptions: {

            input: {
                main: resolve(__dirname, 'index.html'),
                learning: resolve(__dirname, 'src', 'pages', 'learning.html'),
                perlin: resolve(__dirname, 'src', 'pages', 'perlin.html'),
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
    },
})