import { createApp } from "vue";
import { Meta, Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css"; // Optional: Import icon set if needed

// Import Quasar css
import "quasar/src/css/index.sass";

import "./styles/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(Quasar, {
  plugins: {
    Meta,
  },
});
app.mount("#app");
