<script setup>
import { RouterView } from 'vue-router'
import Header from '../components/Header/HeaderView.vue'
import SidebarView from '../components/SideBar/SidebarView.vue'
</script>

<template>
  <Header />
  <div class="flex">
    <SidebarView />

    <div class="w-full min-h-screen">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
