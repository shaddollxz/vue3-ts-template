import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteItem[] = [];
const modules = import.meta.globEager("./routes/*.ts");
for (const route in modules) {
    routes.push(modules[route].default);
}

const router = createRouter({
    history: createWebHistory(),
    routes: routes as RouteRecordRaw[],
    scrollBehavior: () => ({ top: 0 }),
});

export default router;
