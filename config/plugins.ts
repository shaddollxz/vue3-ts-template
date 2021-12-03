import type { PluginOption } from "vite";

import vue from "@vitejs/plugin-vue";
import viteCompression from "vite-plugin-compression";
import visualizer from "rollup-plugin-visualizer";

export default function getPlugins(Env: ImportMetaEnv, isBuild: boolean) {
    const plugins: (PluginOption | PluginOption[])[] = [vue()];

    if (Env.VITE_BUILD) {
        plugins.push(viteCompression()); // gzip
        if (Env.VITE_VISUALIZER) {
            plugins.push(visualizer({ open: true, gzipSize: true, brotliSize: true })); // 依赖分析
        }
    } else {
    }

    return plugins;
}
