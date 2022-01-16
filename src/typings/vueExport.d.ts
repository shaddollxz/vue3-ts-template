import { RouterView, RouterLink } from "vue-router";
import SvgIcon from "@/plugins/GlobalComponents/SvgIcon.vue";

declare module "vue" {
    interface ComponentCustomProperties {}
    interface GlobalComponents {
        RouterView: typeof RouterView;
        RouterLink: typeof RouterLink;
        SvgIcon: typeof SvgIcon;
    }
}
