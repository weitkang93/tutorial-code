import { createApp } from "vue";
import App from "./App.vue";
import LearnVueButton from "lv-button";
import "lv-button/dist/style.css";

const app = createApp(App);

app.use(LearnVueButton);

app.mount("#app");
