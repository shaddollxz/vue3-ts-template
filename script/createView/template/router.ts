export default <RouteItem>{
    name: "pageName",
    path: "/",
    component: () => import("@/views/PageName/index.vue"),
    meta: { title: "routeTitle", keepAlive: isKeepAlive },
};
