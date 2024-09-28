import { getAPI, postAPI, patchAPI, deleteAPI } from "./index.ts";
import { Action } from "./actions";
import type { Expense } from "../models/Expense.interface";

import { pathReplacer } from "../utils/router.utils";

export default new (class ExpenseAPI {
  public async getExpense(query = "") {
    const response = await getAPI(Action.Expense, query);
    return response;
  }
  //   public async deleteColdStorage(id: number) {
  //     const url = pathReplacer(Action.ColdStorageDetails, [
  //       { name: "<id>", value: id },
  //     ]);
  //     const response = await deleteAPI(url);
  //     return response;
  //   }
  public async getExpenseById(id: number) {
    const url = pathReplacer(Action.ExpenseDetails, [
      { name: "<id>", value: id },
    ]);
    const response = await getAPI(url);
    return response;
  }
  public async postExpense(data: Object) {
    await postAPI(Action.Expense, data);
  }
  //   public async updateColdStorage(data: Object, id: number) {
  //     const url = pathReplacer(Action.ColdStorageDetails, [
  //       { name: "<id>", value: id },
  //     ]);
  //     await patchAPI(url, data);
  //   }
})();
