<template>
  <div class="w-[70%] mx-auto my-2">
    <q-card class="q-pa-md">
      <div
        class="flex flex-row justify-between border border-black px-2"
        @click="toggleChart"
      >
        <q-icon name="arrow_drop_down" size="24px" v-if="!showChart" />
        <q-slide-transition>
          <div v-show="showChart" class="mx-2 my-2">
            <canvas
              id="canvas_accounts_pie_chart"
              style="display: block; box-sizing: border-box"
              height="375"
              width="500"
            ></canvas>
          </div>
        </q-slide-transition>
        <div
          id="list_accounts_total_container"
          class="flex items-start space-x-2 mr-2"
        >
          <span class="mr-2">Total:</span>
          <span
            id="list_accounts_total"
            class="flex items-start min-w-[30px] text-green-600"
            >$13,627.71</span
          >
        </div>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showChart = ref(false);

function toggleChart() {
  showChart.value = !showChart.value;
}
</script>

<style lang="scss" scoped></style>
