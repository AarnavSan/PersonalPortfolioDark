import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from 'vuetify'; // Import createVuetify
import 'vuetify/dist/vuetify.min.css'; // Ensure you import the Vuetify styles
import "/public/css/custom.css";
import "/public/css/dark.css";
import "/public/css/plugins.css";
import "/public/css/style.css";

const app = createApp(App);

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Use createVuetify to create an instance of Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Use Vuetify as a plugin with the created instance
app.use(vuetify);

app.use(router);
app.mount("#app");
