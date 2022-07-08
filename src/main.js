import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
// import router from "./router";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// Import styles
import "@/assets/base.scss";

// Setup app
const app = createApp(App);

// Add Solid and Regular Fontawesome Icons to library
library.add(fas);
library.add(far);

// Setup Fontawesome Components
app.component("FontAwesomeIcon", FontAwesomeIcon);

// Setup Pinia store
app.use(createPinia());

// Setup router
// app.use(router);

// Mount the application
app.mount("#app");
