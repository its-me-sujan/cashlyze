import { getAPI, postAPI, patchAPI, deleteAPI } from "./index.ts";
import { Action } from "./actions";
import type { Account } from "../models/Account.interface";

import { pathReplacer } from "../utils/router.utils";

export default new (class AccountAPI {
  public async getAccount(query = "") {
    const response = await getAPI(Action.Account, query);
    return response;
  }
  public async getAccountsTotal(query = "") {
    const response = await getAPI(Action.AccountsTotal, query);
    return response;
  }
  public async getAccountById(id: number) {
    const url = pathReplacer(Action.AccountDetails, [
      { name: "<id>", value: id },
    ]);
    const response = await getAPI(url);
    return response;
  }
  public async postAccount(data: Object) {
    await postAPI(Action.Account, data);
  }
  public async updateAccount(data: Object, id: number) {
    const url = pathReplacer(Action.AccountDetails, [
      { name: "<id>", value: id },
    ]);
    await patchAPI(url, data);
  }
})();
