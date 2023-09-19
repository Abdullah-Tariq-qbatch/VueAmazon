import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import router from '../router'
import { isSuccess } from '../utils/helperMethods'
import { triggerSuccessToast, triggerErrorToast } from '../services/Toast/ToastService'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || {})
  const accessToken = ref(localStorage.getItem('accessToken') || '')
  const error = ref('')
  const message = ref('')
  const loading = ref(false)

  const login = async (temp_username, password) => {
    loading.value = true
    try {
      const res = await api.post('/user/login', {
        email: temp_username,
        password: password
      })

      if (isSuccess(res)) {
        accessToken.value = res.data.token
        user.value = res.data.user
        message.value = res.data.message
        triggerSuccessToast(message.value)
        localStorage.setItem('accessToken', accessToken.value)
        localStorage.setItem('user', JSON.stringify(user.value))
        router.push('/')
      }
    } catch (err) {
      error.value = err.message
      triggerErrorToast(error.value)
      console.error(error.value);
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('user')
    accessToken.value = ""
    triggerSuccessToast('Logout Successful')
    router.push('/login')
   }
  
  const getAccessToken = () => accessToken.value

  const getLocalAccessToken = () => localStorage.getItem('accessToken')

  const isAuthenticated = () => {
    const localToken = getLocalAccessToken()
    if (localToken && getAccessToken()) {
      return true
    }
    return false
  }

  return { user, accessToken, error, message, loading, login, logout, getAccessToken, isAuthenticated };
})
