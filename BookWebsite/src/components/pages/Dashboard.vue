<template>
  <div class="w-[100%] h-[100vh] flex">
    <PanelView />
    <router-view></router-view>
  </div>
</template>

<script setup>
import PanelView from "@/views/PanelView.vue";
</script>

<style scoped></style>
