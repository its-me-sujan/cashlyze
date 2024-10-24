<template>
  <router-view />
</template>

<script setup>
import { onBeforeMount } from "vue";
import { useJwtStore } from "@/stores/jwt";

const JwtStore = useJwtStore();

onBeforeMount(async () => {
  await JwtStore.refreshAccessToken();
});
</script>
