<template>
    <div class="home">
        <HelloWorld></HelloWorld>
    </div>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld";
</script>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
