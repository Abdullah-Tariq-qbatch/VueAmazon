import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: "",
    user: {},
    error: ref(""),
    message: ref("")
  }),

  persist: {
    paths: ["token", "user"]
  },

  actions: {
    async login() { },
    async logout() { },
    isAuthenticated() {
      const localToken = localStorage.getItem('access_token');

      if (localToken || this.token) {
        console.log(localToken);
        return true;
      }

      return false;
    }
  }
})
