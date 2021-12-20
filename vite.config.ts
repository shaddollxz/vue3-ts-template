import { defineConfig, loadEnv } from "vite";
import type { ConfigEnv } from "vite";
import path from "path";
import getPlugins from "./config/plugins";
import getServer from "./config/server";

const outDir = path.join(__dirname, "/dist"); // 打包输出路径

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
    const Env = loadEnv(mode, path.resolve("./env")) as ImportMetaEnv;
    const isBuild = command == "build";

    return defineConfig({
        plugins: getPlugins(Env, isBuild),
        server: getServer(Env, isBuild),
        envDir: path.resolve("./env"), // 环境变量文件夹位置
        build: {
            outDir,
            target: "modules", // 打包文件支持的es语法 这里指支持<script type="module">标签的浏览器 具体见https://vitejs.cn/config/#build-target
        },
        resolve: {
            alias: {
                "@": "/src",
                "@img": "/src/assets/img",
                "@css": "/src/assets/css",
                "@apis": "/src/apis",
                "@views": "/src/views",
                "#": "/src/typings",
            },
        },
    });
};
