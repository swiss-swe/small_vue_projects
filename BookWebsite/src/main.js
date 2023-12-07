import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import toast from "vue-toastification"
import "vue-toastification/dist/index.css"
const app = createApp(App);

app.use(toast)
app.use(router);
app.mount("#app");
