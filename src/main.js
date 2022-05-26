import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"

const globalApp = {
  data() {
    return {
      base_url: "http://localhost:3001",
      http: axios,
    }
  },
}

const app = createApp(App).use(router)
app.mixin(globalApp)
app.mount("#app")
