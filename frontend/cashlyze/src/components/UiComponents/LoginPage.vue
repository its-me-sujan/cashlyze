<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-semibold text-gray-700 text-center">Login</h2>

      <form @submit.prevent="onSubmit" class="mt-6">
        <div class="mb-4">
          <label class="block text-gray-600 text-sm font-medium"
            >Username</label
          >
          <input
            v-model="username"
            type="text"
            class="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-600 text-sm font-medium"
            >Password</label
          >
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useJwtStore } from "../../stores/jwt"; // Import your store
import axios from "axios";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const JwtStore = useJwtStore(); // Use the store instance
const $q = useQuasar();
const $router = useRouter();

const username = ref("");
const password = ref("");

const onSubmit = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/token/", {
      username: username.value,
      password: password.value,
    });

    $q.notify({
      message: "Login successfully",
      type: "positive",
      position: "top-right",
    });

    localStorage.setItem("access_token", response.data.access);
    localStorage.setItem("refresh_token", response.data.refresh);

    JwtStore.login(); // Call the login action

    $router.push({ name: "Home" });
  } catch {
    $q.notify({
      message: "Invalid Credential",
      type: "negative",
      position: "top-right",
    });
  }
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
