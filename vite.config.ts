import { defineConfig, PluginOption } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import visualizer from "rollup-plugin-visualizer";

const proxySetting = { target: "", rewrite: "" };

const plugins: (PluginOption | PluginOption[])[] = [vue()];
plugins.push(viteCompression()); // gzip
plugins.push(visualizer({ open: true, gzipSize: true, brotliSize: true })); // 依赖分析

// https://vitejs.dev/config/
export default defineConfig({
    plugins,
    resolve: {
        alias: {
            "@": "/src",
            "@img": "/src/assets/img",
            "@css": "/src/assets/css",
            "@api": "/src/api",
            "@comp": "/src/components",
            "#": "/src/types",
        },
    },
    build: {
        outDir: path.join(__dirname, "/dist"),
    },
    server: {
        proxy: {
            "/api": {
                target: proxySetting.target,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, proxySetting.rewrite),
            },
        },
    },
});
