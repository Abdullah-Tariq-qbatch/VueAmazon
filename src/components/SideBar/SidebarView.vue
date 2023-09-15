<template>
  <div class="w-[220px] min-h-screen bg-white pl-[24px] pt-[16px]">
    <router-link
      to="/"
      :class="`text-[14px]  ${$route.name === 'dashboard' ? 'text-[#27C498]' : 'text-[#ADB4D2]'}`"
    >
      <div class="flex items-center">
        <IconDashboardVue /> <span class="ml-[12px]">Dashboard</span>
      </div>
    </router-link>
    <br />
    <router-link
      to="/product-listings"
      :class="`text-[14px]  ${
        $route.name === 'productListing' ? 'text-[#27C498]' : 'text-[#ADB4D2]'
      }`"
    >
      <div class="flex items-center">
        <IconProductListingVue /> <span class="ml-[12px]">Product Listings</span>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import IconDashboardVue from '../icons/IconDashboard.vue'
import IconProductListingVue from '../icons/IconProductListing.vue'
</script>

<style></style>
