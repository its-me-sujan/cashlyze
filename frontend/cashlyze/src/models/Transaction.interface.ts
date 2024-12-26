export interface Transaction {
  id: number;
  user: number;
  user_name: string;
  transaction_type: string;
  amount: string;
  income_category?: null;
  expense_category?: null;
  from_account: number;
  from_account_name: string;
  from_account_balance: number;
  to_account: number;
  to_account_name: string;
  to_account_balance: number;
  description: string;
  date_created: string;
}
