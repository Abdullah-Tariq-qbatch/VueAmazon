<template>
  <button
    :class="`${
      role === 'primary'
        ? 'bg-[#27C498] text-white hover:bg-white hover:text-[#27C498]'
        : 'bg-white text-[#27C498] hover:bg-[#27C498] hover:text-white'
    } p-2 rounded-[5px] border border-[#27C498] ease-linear ${styles}`"
    @click="props.onClick"
  >
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  role: String,
  onClick: {
    type: Function
  },
  styles: String
})
</script>

<style></style>
