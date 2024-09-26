<template>
  <div>
    <h1>Transaction Histories</h1>
    <ul v-if="transactions.length">
      <li v-for="transaction in transactions" :key="transaction.id">
        {{ transaction.amount }} - {{ transaction.date }}
      </li>
    </ul>
    <p v-else>No transactions available</p>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import apiClient from "../services/api";

export default {
  setup() {
    const transactions = ref([]);

    const fetchTransactions = async () => {
      try {
        const data = await apiClient.getTransactionHistories();
        transactions.value = data;
      } catch (error) {
        console.error("Failed to fetch transaction histories:", error);
      }
    };

    onMounted(() => {
      fetchTransactions();
    });

    return {
      transactions,
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles */
</style>
