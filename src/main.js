import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from "vue-toastification"
import { plugin, defaultConfig } from '@formkit/vue'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/authStore'
import { triggerErrorToast } from './services/Toast/ToastService'

import './assets/main.css'
import 'vue-toastification/dist/index.css'

const app = createApp(App)
const pinia = createPinia();


pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(Toast, {
  transition: "Vue-Toastification__fade",
  maxToasts: 5,
  newestOnTop: true,
})
app.use(plugin, defaultConfig)

const authStore = useAuthStore();

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authStore.isAuthenticated()) {
      next()
    } else {
      triggerErrorToast("Please Login to continue")
      next({ name: 'login' })
    }
  } else if (to.matched.some((record) => record.name === 'login')) {
    if (authStore.isAuthenticated()) {
      triggerErrorToast("You are already logged in")
      next({ name: 'dashboard' })
    } else {
      next()
    }
  } else {
    next()
  }
 
})

app.mount('#app')
