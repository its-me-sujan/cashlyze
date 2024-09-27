<template>
  <main>
    <section class="spacing bg-light">
      <div>account</div>
      <div class="container">
        <div v-for="account in accounts">
          <p>{{ account.balance }}</p>
        </div>
      </div>
      <div>add Account</div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useAccountStore } from "../stores/account";
import { computed, onBeforeMount, ref } from "vue";

const loading = ref(false);
const AccountStore = useAccountStore();

const accounts = computed(() => {
  return AccountStore.AccountList;
});

const filter = async (page: number = 1) => {
  loading.value = true;
  await AccountStore.getAccount({
    page: page,
  });
  loading.value = false;
};

onBeforeMount(async () => {
  await AccountStore.getAccount({});
});
</script>

<style scoped></style>
