import { createApp } from "vue";
import { createPinia } from "pinia";

import { Meta, Notify, Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css"; // Optional: Import icon set if needed

import "quasar/src/css/index.sass";
import router from "./router";
import "./styles/index.css";
import App from "./App.vue";
import { config } from "process";
import Toast, { type PluginOptions } from "vue-toastification";

const options: PluginOptions = {
  // You can set your default options here
  timeout: 3000,
};

const app = createApp(App);
app.use(Toast, options);
app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {
    Meta,
    Notify,
  },
  config: {
    notify: {
      position: "top-right",
      progress: true,
      timeout: 1000,
      actions: [
        {
          icon: "close",
          color: "white",
          attrs: { round: true, "aria-label": "Close" },
        },
      ],
    },
  },
});

app.mount("#app");
