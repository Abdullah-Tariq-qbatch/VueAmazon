<script setup>
import { RouterView, useRoute } from 'vue-router'
import Header from '../components/Header/HeaderView.vue'
import SidebarView from '../components/SideBar/SidebarView.vue'
import FooterView from '../components/Footer/FooterView.vue'
const route = useRoute()
</script>

<template>
  <div v-if="route.path !== '/login'">
    <Header />
    <div class="flex">
      <SidebarView />
      <div class="min-h-screen flex-grow">
        <RouterView />
        <FooterView />
      </div>
    </div>
  </div>
  <div v-else><RouterView /></div>
</template>

<style scoped></style>
