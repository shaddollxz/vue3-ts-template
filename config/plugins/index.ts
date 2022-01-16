import type { PluginOption } from "vite";

import vue from "./vue";
import viteCompression from "vite-plugin-compression";
import visualizer from "rollup-plugin-visualizer";
import globalHook from "./globalHook";

export default function getPlugins(Env: ImportMetaEnv, isBuild: boolean) {
    const plugins: (PluginOption | PluginOption[])[] = [];

    plugins.push(vue);
    plugins.push(globalHook);

    if (Env.VITE_BUILD == "true") {
        plugins.push(viteCompression()); // gzip
        if (Env.VITE_VISUALIZER == "true") {
            plugins.push(visualizer({ open: true, gzipSize: true, brotliSize: true })); // 依赖分析
        }
    } else {
    }

    return plugins;
}
