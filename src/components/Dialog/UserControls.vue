<template>
  <div class="relative">
    <div
      class="absolute bg-white right-0 top-5 w-[110px] h-[50px] rounded-sm shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]"
    >
      <div class="w-full h-full flex items-center justify-center px-[5px]">
        <ButtonView
          styles="w-full h-[30px] p-0 flex items-center justify-center"
          :on-click="authStore.logout"
          >Logout</ButtonView
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonView from '../inputs/Button/ButtonView.vue'

import { useAuthStore } from '../../stores/authStore'

const authStore = useAuthStore()
</script>

<style></style>
