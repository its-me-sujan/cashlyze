export enum Action {
  API = "api/",

  Token = "auth/token",
  RefreshToken = "auth/token/refresh",
  ClearToken = "auth/token/clear",

  Account = "accounts",
  AccountDetails = "accounts/<id>",

  Income = "incomes",
  IncomeDetails = "incomes/<id>",

  Expense = "expenses",
  ExpenseDetails = "expenses/<id>",

  TransactionHisotry = "transaction-historys",
  TransactionHisotryDetails = "transaction-historys/<id>",
}
