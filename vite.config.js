import { defineConfig } from "vite";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                learning: './learning.html',
                perlin: './perlin.html',
            }
        }
    }
})