<template>
  <div class="w-[70%] mx-auto my-2">
    <q-card class="q-pa-md">
      <div class="flex flex-row justify-between" @click="toggleChart">
        <q-icon name="arrow_drop_down" size="sm" v-if="!showChart"></q-icon>
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
            >{{ list_accounts_total }}</span
          >
        </div>
      </div>
    </q-card>
    <div class="my-4">
      <q-card class="q-pa-md">
        <div class="flex justify-between px-2 py-2">
          <div id="t_account_full_name" class="text-lg font-semibold">
            Wallet
          </div>
          <div id="t_account_full_value" class="text-green-600 text-lg">
            $90.24
          </div>
        </div>

        <div class="flex justify-between py-2 mt-2">
          <div class="flex">
            <q-toggle
              v-model="includeWallet"
              :label="includeWallet ? 'Hidden' : 'Normal'"
            />
          </div>

          <div class="flex justify-between">
            <q-btn flat round icon="repeat" size="sm" />

            <q-btn flat round icon="remove_red_eye" size="sm" />

            <q-btn flat round icon="more_vert">
              <q-menu>
                <q-list>
                  <q-item clickable v-close-popup @click="editAccount">
                    <q-item-section>Edit Account</q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup @click="deleteAccount">
                    <q-item-section>Delete Account</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showChart = ref(false);
const includeWallet = ref(false);
const includeBank = ref(false);
const list_accounts_total = 0;
function toggleChart() {
  showChart.value = !showChart.value;
}
</script>

<style lang="scss" scoped></style>
