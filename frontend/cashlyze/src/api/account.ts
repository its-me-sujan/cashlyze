import { getAPI, postAPI, patchAPI, deleteAPI } from "./index.ts";
import { Action } from "./actions";
import type { Account } from "../models/Account.interface";

import { pathReplacer } from "../utils/router.utils";

export default new (class AccountAPI {
  public async getAccount(query = "") {
    const response = await getAPI(Action.Account, query);
    return response;
  }
  //   public async deleteColdStorage(id: number) {
  //     const url = pathReplacer(Action.ColdStorageDetails, [
  //       { name: "<id>", value: id },
  //     ]);
  //     const response = await deleteAPI(url);
  //     return response;
  //   }
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
  //   public async updateColdStorage(data: Object, id: number) {
  //     const url = pathReplacer(Action.ColdStorageDetails, [
  //       { name: "<id>", value: id },
  //     ]);
  //     await patchAPI(url, data);
  //   }
})();
