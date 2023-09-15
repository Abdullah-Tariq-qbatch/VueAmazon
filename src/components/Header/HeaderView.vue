<template>
  <header>
    <div class="bg-[#161924] h-[68px] flex items-center px-[24px]">
      <div class="w-1/3 flex">
        <img src="@/assets/mainLogo.svg" />
        <h1 class="text-white ml-[6px] text-[18px]">Amazon Project</h1>
      </div>
      <div class="w-1/2">
        <SearchBarWithFilterView />
      </div>
      <div class="w-full flex justify-end items-center">
        <img src="@/assets/notifications.svg" />
        <img src="@/assets/user.png" class="rounded-full ml-[21px]" />
      </div>
    </div>
  </header>
</template>

<script setup>
import SearchBarWithFilterView from '../SearchBarWithFilter/SearchBarWithFilterView.vue'
</script>

<style></style>
