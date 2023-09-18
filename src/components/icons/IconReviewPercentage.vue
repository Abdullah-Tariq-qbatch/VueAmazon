<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="152" height="16" viewBox="0 0 152 16" fill="none">
    <rect x="0.5" y="0.5" width="151" height="15" rx="2.5" fill="#F4F4F8" stroke="#C6D0DC" />
    <rect :width="width" height="16" rx="3" fill="#FF9900" />
  </svg>
</template>

<script setup>
const props = defineProps({
  width: String
})
</script>

<style></style>
