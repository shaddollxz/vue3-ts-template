export default <RouteItem>{
    name: "Home",
    path: "/",
    component: () => import("@/views/Home.vue"),
    meta: { title: "home", keepAlive: false },
};
