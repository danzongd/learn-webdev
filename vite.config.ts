import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            input: {
                // 配置所有的入口页面 (Entry points)
                main: resolve(__dirname, "index.html"),
                archives: resolve(__dirname, "archives.html"),
                galerie: resolve(__dirname, "galerie.html"),
                contact: resolve(__dirname, "contact.html"),
            },
        },
    },
});
