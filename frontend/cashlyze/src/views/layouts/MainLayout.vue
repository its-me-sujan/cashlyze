<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Overview </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      :width="300"
      :breakpoint="400"
    >
      <header class="h-14 px-4 max-w-xs flex items-center">
        <img
          src="../../assets/cashly_logo.png"
          draggable="false"
          class="w-8 h-8 mr-2"
        />
        <div class="text-lg font-bold select-none">Cashly</div>

        <div class="h-14"></div>
      </header>

      <q-scroll-area
        style="
          height: calc(100% - 150px);

          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="/" clickable v-ripple exact active-class="text-primary">
            <q-item-section avatar>
              <q-icon name="dashboard" active-class="bg-primary" />
            </q-item-section>

            <q-item-section> Overview </q-item-section>
          </q-item>
          <q-item
            to="/accounts"
            clickable
            v-ripple
            exact
            active-class="text-primary"
          >
            <q-item-section avatar>
              <q-icon
                name="account_balance_rounded"
                active-class="bg-primary"
              />
            </q-item-section>

            <q-item-section> Accounts </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>
