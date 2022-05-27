import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import axios from "axios"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import money from "v-money3"

const globalApp = {
  data() {
    return {
      base_url: "http://localhost:3001",
      http: axios,
      currencymask: {
        prefix: "R$ ",
        thousands: ".",
        decimal: ",",
        precision: 2,
      },
    }
  },
  methods: {
    mensagem(title, message, type) {
      console.log(title)
      console.log(message)
      console.log(type)
    },
  },
}

const app = createApp(App).use(router)
app.mixin(globalApp)
app.use(money)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount("#app")
