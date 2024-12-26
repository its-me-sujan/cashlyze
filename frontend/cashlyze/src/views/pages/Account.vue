<template>
  <div>
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
            id="accounts_total_container"
            class="flex items-start space-x-2 mr-2"
          >
            <span class="mr-2">Total:</span>
            <span
              id="accounts_total"
              class="flex items-start min-w-[30px] text-green-600"
              >{{ accounts_total }}</span
            >
          </div>
        </div>
      </q-card>

      <div>
        <q-card
          class="q-pa-md my-4"
          v-for="account in accountlist"
          :key="account.id"
        >
          <div class="flex justify-between px-2 py-2">
            <div id="t_account_full_name" class="text-lg font-semibold">
              {{ account.name }}
            </div>
            <div id="t_account_full_value" class="text-green-600 text-lg">
              {{ account.balance }}
            </div>
          </div>

          <div class="flex justify-between py-2 mt-2">
            <div class="flex">
              <q-toggle
                v-model="account.include_account"
                :label="account.include_account ? 'Normal' : 'Hidden'"
                @click="updateAccount(account, account.id)"
              />
            </div>

            <div class="flex justify-between">
              <q-btn flat round icon="repeat" size="sm" />

              <q-btn flat round icon="delete" size="sm" />
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="showDialog">
      <q-card class="w-[50vw]">
        <q-card-section>
          <div class="text-h6">Add New Account</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="account.name" label="Account Name" />
          <q-input v-model="account.balance" label="Initial Amount" />
          <!-- Add more input fields as needed -->
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" @click="showDialog = false" />
          <q-btn flat label="Save" @click="addAccount" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <button
      id="fab_add_new_account"
      class="btn fixed bottom-8 right-20 w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 text-white"
      @click="showDialog = true"
    >
      <q-icon name="add" size="sm" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import {
  QDialog,
  QCard,
  QCardSection,
  QCardActions,
  QInput,
  QBtn,
} from "quasar";
import { useAccountStore } from "../../stores/account";

const AccountStore = useAccountStore();

const showDialog = ref(false);
const account = ref({
  name: "",
  balance: 0,
  includewallet: true,
});

const showChart = ref(false);

function toggleChart() {
  showChart.value = !showChart.value;
}

const addAccount = async () => {
  await AccountStore.addAccount(account.value);
  showDialog.value = false;
  await AccountStore.getAccount();
};

const updateAccount = async (data: object, id: number) => {
  await AccountStore.updateAccount(data, id);
};

const accountlist = computed(() => {
  return AccountStore.AccountList;
});

const accounts_total = computed(() => {
  return AccountStore.AccountList.reduce(
    (acc, account) =>
      account.include_account ? acc + parseFloat(account.balance) : acc,
    0
  );
});

onMounted(() => {
  AccountStore.getAccount();
});
</script>

<style lang="scss" scoped></style>
