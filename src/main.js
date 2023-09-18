import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useAuthStore } from './stores/authStore'


const app = createApp(App)
const pinia = createPinia();


pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

const authStore = useAuthStore();

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log(authStore.isAuthenticated());
    if (authStore.isAuthenticated()) {
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

app.mount('#app')
