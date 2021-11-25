<template>
    <img src="~@img/logo.png" alt="" />
    <span v-show="msg.show">
        {{ msg.value }}
    </span>
</template>

<script setup lang="ts">
import type { Msg } from "./types";
interface Props {
    msg?: Msg;
}
const props = withDefaults(defineProps<Props>(), {
    msg: () => ({
        value: "helloWorld",
        show: true,
    }),
});
</script>

<style scoped></style>
