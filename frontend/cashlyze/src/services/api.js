const baseURL = "http://127.0.0.1:8000/api/"; // Django API base URL

const apiClient = {
  async getTransactionHistories() {
    try {
      const response = await fetch(`${baseURL}transaction-historys/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch transaction histories");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching transaction histories:", error);
      throw error;
    }
  },

  async getExpenses() {
    try {
      const response = await fetch(`${baseURL}expenses/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch expenses");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching expenses:", error);
      throw error;
    }
  },

  async getIncomes() {
    try {
      const response = await fetch(`${baseURL}incomes/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch incomes");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching incomes:", error);
      throw error;
    }
  },

  async getAccounts() {
    try {
      const response = await fetch(`${baseURL}accounts/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch accounts");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching accounts:", error);
      throw error;
    }
  },
};

export default apiClient;
