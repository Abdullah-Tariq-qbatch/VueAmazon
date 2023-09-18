import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import router from '../router'
import { isSuccess } from '../utils/helperMethods'

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: '',
    user: {},
    error: ref(''),
    message: ref('')
  }),

  persist: {
    paths: ['token', 'user']
  },

  actions: {
    async login(temp_username, password) {
      try {
        const res = await api.post('/auth/login', {
          username: temp_username,
          password: password
        })

        if (isSuccess(res)) {
          const tempUser = res.data
          this.token = tempUser.token
          delete tempUser.token
          this.user = tempUser
          localStorage.setItem('token', this.token)
          router.push('/')
        }
      } catch (err) {
        this.error = err.message
      }
    },
    async logout() {},
    isAuthenticated() {
      const localToken = localStorage.getItem('token')

      if (localToken || this.token) {
        return true
      }

      return false
    }
  }
})
