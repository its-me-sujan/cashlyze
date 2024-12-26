import { getAPI, postAPI } from "./index.ts";
import { Action } from "./actions";
import type { Transaction } from "../models/Transaction.interface";

import { pathReplacer } from "../utils/router.utils";

export default new (class TransactionAPI {
  public async getTransaction(query = "") {
    const response = await getAPI(Action.Transaction, query);
    return response;
  }

  public async getTransactionById(id: number) {
    const url = pathReplacer(Action.TransactionDetails, [
      { name: "<id>", value: id },
    ]);
    const response = await getAPI(url);
    return response;
  }
  public async postTransaction(data: Object) {
    await postAPI(Action.Transaction, data);
  }
})();
