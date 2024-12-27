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
                @click="handleIncludeAccount(account)"
              />
            </div>

            <div class="flex justify-between">
              <q-btn flat round icon="repeat" size="sm" />

              <q-btn
                flat
                round
                icon="delete"
                size="sm"
                @click="(showDeleteAccount = true), (delAcc = account)"
              />
            </div>
          </div>
        </q-card>
      </div>
    </div>
    <q-dialog v-model="showAddAccount">
      <q-card class="w-[50vw]">
        <q-card-section>
          <div class="text-h6">Add New Account</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="account.name" label="Account Name" />
          <q-input
            v-model="account.balance"
            type="number"
            label="Initial Amount"
          />
          <!-- Add more input fields as needed -->
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" @click="showAddAccount = false" />
          <q-btn flat label="Save" @click="addAccount" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showDeleteAccount">
      <q-card class="w-[50vw]">
        <q-card-section>
          <div class="text-xl font-semibold">
            DELETE "{{ delAcc.name.toUpperCase() }}"?
          </div>
        </q-card-section>

        <q-card-section>
          <div>
            <p class="font-bold">
              Note:
              <span class="font-normal"
                >All income and expenses associated with this account will be
                erased.
              </span>
            </p>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-white">
          <q-btn
            flat
            label="Cancel"
            class="w-[5vw] bg-blue-500 hover:bg-blue-700"
            @click="showDeleteAccount = false"
          />
          <q-btn
            flat
            label="Ok"
            class="w-[5vw] bg-red-500 hover:bg-red-700"
            @click="deleteAccount(delAcc.id)"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="fixed bottom-20 right-20 space-y-3">
      <button
        id="fab_add_new_account"
        class="btn w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 text-white"
        @click="saveChanges"
      >
        <q-icon name="save" size="sm" />
        <q-tooltip class="text-sm" anchor="top middle" self="bottom middle">
          Save Changes
        </q-tooltip>
      </button>
      <button
        id="fab_add_new_account"
        class="btn w-16 h-16 rounded-full flex items-center justify-center bg-blue-500 text-white"
        @click="showAddAccount = true"
      >
        <q-icon name="add" size="sm" />
        <q-tooltip
          class="text-sm"
          anchor="top middle"
          self="bottom middle"
          arrow
        >
          Add New Account
        </q-tooltip>
      </button>
    </div>
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
import { Account } from "../../models/Account.interface";
import { useQuasar } from "quasar";

const $q = useQuasar();
const AccountStore = useAccountStore();

const showChart = ref(false);
const showAddAccount = ref(false);
const showDeleteAccount = ref(false);

const updatingAccounts = ref<Account[]>([]);
const account = ref({
  name: "",
  balance: 0,
  includewallet: true,
});
const delAcc = ref({
  id: 0,
  name: "",
});

const toggleChart = () => {
  showChart.value = !showChart.value;
};

const addAccount = async () => {
  try {
    if (
      AccountStore.AccountList.some(
        (acc) => acc.name.toLowerCase() === account.value.name.toLowerCase()
      )
    ) {
      $q.notify({
        message: "Account already exists",
        type: "negative",
        position: "top-right",
      });
      return;
    }
    await AccountStore.addAccount(account.value);
    showAddAccount.value = false;
    account.value = {
      name: "",
      balance: 0,
      includewallet: true,
    };
    await AccountStore.getAccount();
  } catch (error) {
    $q.notify({
      message: "Error adding account",
      type: "negative",
      position: "top-right",
    });
  }
};

const updateAccount = async (data: object, id: number) => {
  await AccountStore.updateAccount(data, id);
};

const deleteAccount = async (id: number) => {
  try {
    showDeleteAccount.value = false;
    await AccountStore.deleteAccount(id);
    await AccountStore.getAccount();
    $q.notify({
      message: "Account deleted successfully",
      type: "positive",
      position: "top-right",
    });
  } catch (error) {
    $q.notify({
      message: "Error deleting account",
      type: "negative",
      position: "top-right",
    });
  }
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

const handleIncludeAccount = (account: Account) => {
  const existingAccount = updatingAccounts.value.find(
    (item) => item.id === account.id
  );

  if (!existingAccount) {
    updatingAccounts.value.push(account);
  }
};
const saveChanges = async () => {
  if (updatingAccounts.value.length === 0) {
    return;
  }
  const promises = updatingAccounts.value.map((account) =>
    updateAccount({ include_account: account.include_account }, account.id)
  );

  try {
    await Promise.all(promises);
    updatingAccounts.value = [];
    $q.notify({
      message: "Changes saved successfully",
      type: "positive",
      position: "top-right",
    });
  } catch (error) {
    $q.notify({
      message: "Error saving changes",
      type: "negative",
      position: "top-right",
    });
  }
};

onMounted(() => {
  AccountStore.getAccount();
});
</script>

<style lang="scss" scoped></style>
