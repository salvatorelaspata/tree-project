import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                learning: './src/pages/learning.html',
                perlin: './src/pages/perlin.html',
            }
        }
    }
})