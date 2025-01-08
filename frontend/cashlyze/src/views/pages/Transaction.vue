<template>
  <div class="w-[70%] mx-auto my-2">
    <div class="flex w-10/12 ml-1/12">
      <pre>{{ transactionlist }}</pre>
      <div>
        <div>filter</div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex flex-row items-center px-0 px-md-1 mb-3"
          id="month_title_container"
        >
          <div
            id="button_previous_month"
            class="flex justify-center items-center"
          >
            <q-icon name="arrow_back_ios" size="sm"></q-icon>
          </div>
          <div id="month_title" class="text-center mx-auto">December 2024</div>
          <div id="button_next_month" class="flex justify-center items-center">
            <q-icon name="arrow_forward_ios" size="sm"></q-icon>
          </div>
        </div>
        <div id="tr_page_list_container" style="min-height: 120px">
          <div id="list_transactions_header_container" class="flex flex-col">
            <div class="flex">
              <div id="list_transactions_count"></div>
              <div id="list_transactions_header">
                "Total:"
                <span>1000</span>
              </div>
            </div>
            <div
              id="list_transactions_second_header_container"
              class="row"
            ></div>
            <hr class="list_divider" />
          </div>
          <div id="list_transaction"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useTransactionStore } from "../../stores/transaction";
import { Transaction } from "../../models/Transaction.interface";
import { useQuasar } from "quasar";

const $q = useQuasar();
const TransactionStore = useTransactionStore();

const transactionlist = computed(() => {
  return TransactionStore.TransactionList;
});

onMounted(() => {
  TransactionStore.getTransaction();
});
</script>

<style scoped></style>
