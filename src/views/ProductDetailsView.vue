<template>
  <div class="bg-[#F4F4F8] w-full h-full">hello {{ id }}</div>
</template>

<script setup>
const props = defineProps({
  id: String
})
</script>

<style></style>
