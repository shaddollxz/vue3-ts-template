import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import plugins from "@/plugins";

createApp(App).use(router).use(createPinia()).use(plugins).mount("#app");
