import { defineStore } from "pinia";
import type { Account } from "../models/Account.interface";
import type { PageFilter, Query } from "../models/Page.interface";
import API from "../api/account";
import { queryBuilder } from "../utils/api.utils";

export const useAccountStore = defineStore("Account", {
  state: () => {
    return {
      AccountList: {} as Account,
      AccountEdit: {} as Account,
    };
  },
  actions: {
    // setProjectTablePagination(data: QTablePagination) {
    //   this.ColdStorageTablePagination = data;
    // },
    async getAccount(params: PageFilter) {
      const query = queryBuilder(params as Query);
      const res = await API.getAccount(query);
      this.AccountList = res;
      return res;
    },
    // async getColdStorageById(id: number) {
    //   const response = await API.getColdStorageById(id);
    //   this.IndividualColdStorage = response;
    // },
    async addAccount(data: Object) {
      return await API.postAccount(data);
    },
    // async editColdStorage(data: Object, id: number) {
    //   return await API.updateColdStorage(data, id);
    // },
    // async deleteColdStorage(id: number) {
    //   await API.deleteColdStorage(id);
    // },
  },
});
