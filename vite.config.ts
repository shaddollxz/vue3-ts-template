import { defineConfig, PluginOption } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import visualizer from "rollup-plugin-visualizer";

const proxySetting = { target: "", rewrite: "" }; // 配置代理
const outDir = path.join(__dirname, "/dist"); // 打包输出路径

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
        outDir,
        target: "module", // 打包文件支持的es语法 这里指支持<script type="module">标签的浏览器 具体见https://vitejs.cn/config/#build-target
    },
    server: {
        open: true, // dev时是否自动打开浏览器
        port: 8000, // 开发服务器的端口
        proxy: {
            "/api": {
                target: proxySetting.target,
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, proxySetting.rewrite),
            },
        },
    },
});
