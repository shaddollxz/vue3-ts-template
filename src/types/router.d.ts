import type { RouteRecordRaw } from "vue-router";

interface Meta {
    keepAlive: boolean;
    title: string;
}

declare global {
    export interface RouteItem extends Omit<RouteRecordRaw, "children" | "meta"> {
        children?: RouteItem[];
        meta: Meta;
    }
}

declare module "vue-router" {
    export interface RouteMeta extends Meta {}
}
