<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
import { useAuthStore } from '../../stores/authStore'

const toast = useToast()
const authStore = useAuthStore()

const authMessage = ref(authStore.message)
const authError = ref(authStore.error)

function triggerSuccessToast() {
  toast(authMessage.value, {
    position: 'top-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    draggable: false,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false
  })
}

function trigger
</script>

<template></template>

<style></style>
