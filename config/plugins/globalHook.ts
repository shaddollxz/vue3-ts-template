import globalHook from "unplugin-auto-import/vite";
import { resolve } from "path";

export default globalHook({
    imports: ["vue", "vue-router"],
    dts: resolve(__dirname, "../../src/typings/globalHook.d.ts"),
});
