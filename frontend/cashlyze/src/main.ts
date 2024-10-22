import { createApp } from "vue";
import { createPinia } from "pinia";

import { Meta, Notify, Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css"; // Optional: Import icon set if needed

// Import Quasar css
import "quasar/src/css/index.sass";
import router from "./router";
import "./styles/index.css";
import App from "./App.vue";
import { config } from "process";

const app = createApp(App);

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
app.use(createPinia());
app.use(router);
app.mount("#app");
