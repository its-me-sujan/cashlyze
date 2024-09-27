<template>
  <div>
    <p class="text-red-500 text-2xl">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium totam
      possimus perspiciatis culpa, harum, nam impedit accusamus corporis
      obcaecati dignissimos, rerum ratione. Hic fugiat corrupti repellat enim.
      Quidem, ipsum porro!
    </p>
    <div class="q-pa-md q-gutter-sm">
      <button class="bg-red-600">click me</button>
      <q-btn color="white" text-color="black" label="Standard" />
      <q-btn color="primary" label="Primary" />
      <q-btn color="secondary" label="Secondary" />
      <q-btn color="amber" glossy label="Amber" />
      <q-btn color="brown-5" label="Brown 5" />
      <q-btn color="deep-orange" glossy label="Deep Orange" />
      <q-btn color="purple" label="Purple" />
      <q-btn class="bg-red-700" />
    </div>
  </div>
</template>

<script setup>
import { QBtn } from "quasar";
</script>

<style lang="scss" scoped></style>
