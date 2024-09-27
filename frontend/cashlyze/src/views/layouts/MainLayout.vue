<template>
  <div>
    <header-bar />
    <router-view />
    <footer-component />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
// import HeaderBar from "@/components/UiComponents/HeaderComponent.vue";
// import FooterComponent from "@/components/UiComponents/FooterComponent.vue";
</script>

<style lang="sass" scoped></style>
