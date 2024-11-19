<template>
  <div class="flex h-screen">
    <div class="w-1/2 bg-gradient-to-r from-green-400 to-blue-500"></div>

    <div class="w-1/2 bg-white flex items-center justify-center">
      <div class="p-8 w-3/4 max-w-md">
        <div class="text-2xl flex justify-center font-bold mb-4">
          {{ isLogin ? "Login" : "Register" }}
        </div>

        <div v-if="isLogin">
          <form @submit.prevent="submitLogin">
            <div class="mb-4">
              <label class="block text-gray-400 mb-2">Username</label>
              <input
                v-model="loginForm.username"
                type="text"
                class="w-full bg-gray-200 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-2">Password</label>
              <div class="relative">
                <input
                  v-model="loginForm.password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  class="w-full bg-gray-200 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                  required
                />

                <q-icon
                  :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
                  size="18px"
                  @click="toggleIcon"
                  class="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
                ></q-icon>
              </div>
            </div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Login
            </button>
          </form>
        </div>

        <div v-else>
          <form @submit.prevent="submitRegister">
            <div class="mb-4">
              <label class="block text-gray-400 mb-2">Username</label>
              <input
                v-model="registerForm.username"
                type="text"
                class="w-full bg-gray-200 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-2">Email</label>
              <input
                v-model="registerForm.email"
                type="email"
                class="w-full bg-gray-200 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-2">Password</label>
              <div class="relative">
                <input
                  v-model="registerForm.password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  class="w-full bg-gray-200 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                  required
                />

                <q-icon
                  :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
                  size="18px"
                  @click="toggleIcon"
                  class="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
                ></q-icon>
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-gray-400 mb-2">Confirm Password</label>
              <div class="relative">
                <input
                  v-model="registerForm.confirmPassword"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  class="w-full bg-gray-200 px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
                  required
                />

                <q-icon
                  :name="isPasswordVisible ? 'visibility_off' : 'visibility'"
                  size="18px"
                  @click="toggleIcon"
                  class="cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
                ></q-icon>
              </div>
            </div>
            <button
              type="submit"
              class="w-full bg-green-500 text-white py-2 rounded-md"
            >
              Register
            </button>
          </form>
        </div>

        <div class="mt-12 text-sm text-gray-500 flex justify-center">
          {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
          <a href="#" @click.prevent="toggleForm" class="text-blue-500 mx-2">{{
            isLogin ? "Register now" : "Login"
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useJwtStore } from "@/stores/jwt";
import axios from "axios";
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const JwtStore = useJwtStore();
const $q = useQuasar();
const $router = useRouter();

const isLogin = ref(true);
const isPasswordVisible = ref(false);
const loginForm = ref({
  username: "",
  password: "",
});
const registerForm = ref({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const toggleForm = () => {
  isLogin.value = !isLogin.value;
};
const toggleIcon = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
// const submitLogin = async () => {
//   // await JwtStore.getJWT({
//   //   username: username.value,
//   //   password: password.value,
//   // });

//   try {
//     const response = await axios.post(
//       "http://127.0.0.1:8000/api/token/",
//       loginForm.value
//     );

//     $q.notify({
//       message: "Login successfully",
//       type: "positive",
//       position: "top-right",
//     });

//     localStorage.setItem("access_token", response.data.access);
//     localStorage.setItem("refresh_token", response.data.refresh);

//     JwtStore.login();

//     $router.push({ name: "Home" });
//   } catch {
//     $q.notify({
//       message: "Invalid Credential",
//       type: "negative",
//       position: "top-right",
//     });
//   }
// };

const submitLogin = async () => {
  await JwtStore.getJWT(loginForm.value);
  $q.notify({
    message: "Logged in successfully",
    type: "positive",
    position: "top-right",
  });
  $router.push({ name: "Home" });
};
const submitRegister = async () => {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    $q.notify({
      message: "Password do not match!",
      type: "negative",
      position: "top-right",
    });
    return;
  }
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/register/",
      registerForm.value
    );
    $q.notify({
      message: response.data.message,
      type: "positive",
      position: "top-right",
    });
    registerForm.value = "";
    toggleForm();
  } catch (error) {
    $q.notify({
      message: "error registering user",
      type: "negative",
      position: "top-right",
    });
  }
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
