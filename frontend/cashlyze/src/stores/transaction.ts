import { defineStore } from "pinia";
import type { Transaction } from "../models/Transaction.interface";
import type { PageFilter, Query } from "../models/Page.interface";
import API from "../api/transaction";
import { queryBuilder } from "../utils/api.utils";

export const useTransactionStore = defineStore("Transaction", {
  state: () => {
    return {
      TransactionList: {} as Transaction,
    };
  },
  actions: {
    async getTransaction(params: PageFilter) {
      const query = queryBuilder(params as Query);
      const res = await API.getTransaction(query);
      this.TransactionList = res;
      return res;
    },
    async addTransaction(data: Object) {
      return await API.postTransaction(data);
    },
  },
});
