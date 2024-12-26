export enum Action {
  API = "api/",

  Token = "auth/token",
  RefreshToken = "auth/token/refresh",
  ClearToken = "auth/token/clear",

  Account = "accounts",
  AccountDetails = "accounts/<id>",
  AccountsTotal = "accounts/total_balance",

  // Income = "incomes",
  // IncomeDetails = "incomes/<id>",

  // Expense = "expenses",
  // ExpenseDetails = "expenses/<id>",

  Transaction = "transaction",
  TransactionDetails = "transaction/<id>",
}
