/// <reference types="vite/client" />

declare module "*.vue" {
    import { DefineComponent } from "vue";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    readonly VITE_VISUALIZER: "true" | "false";
    readonly VITE_BUILD: "true" | "false";
    readonly VITE_LOCAL: "true" | "false";
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
