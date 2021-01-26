import { createApp } from "vue";
import App from "./App.vue";
import Toast, { POSITION } from "vue-toastification";
import router from "./router";

import "./assets/tailwind.css";
import "./assets/fonts.css";
import "vue-toastification/dist/index.css";

import "animate.css";

const app = createApp(App);
app.use(router);
app.use(Toast, { position: POSITION.BOTTOM_RIGHT });
app.mount("#app");
