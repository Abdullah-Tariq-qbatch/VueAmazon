<template lang="">
  <label class="flex h-[20px] cursor-pointer items-center">
    <input type="checkbox" class="w-[0px] h-[0px]" @input="(e) => onCheck(e.target.checked)" />
    <span
      :class="`checkmark input-checked:bg-[#27C498] flex items-center justify-center h-full w-[20px] border rounded-md ${
        label ? 'border-[#E9E9EA]' : 'border-[#27C498]'
      }`"
    >
      <img src="@/assets/checkBox.svg" alt="" class="h-[15px] w-[15px]" />
    </span>
    <span class="text-[#031625] text-[14px] ml-[6px]">{{ props.label }}</span>
  </label>
</template>
<script setup>
const props = defineProps({
  label: String,
  onCheck: {
    type: Function
  }
})
</script>

<style scoped>
input:checked ~ .checkmark {
  @apply bg-[#27C498];
}
</style>
