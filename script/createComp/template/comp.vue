<template>
    <div class="compName"></div>
</template>

<script setup lang="ts">
interface Props {}
interface Emits {}
const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits<Emits>();

defineExpose({});
</script>

<style lang="scss" scoped>
.compName {
}
</style>
