<template>
  <p :class="`text-[#979797] text-[12px] font-[500] mb-[6px] ${headingStyles}`">{{ heading }}</p>
  <div class="flex justify-between mb-[24px]">
    <input
      type="text"
      :class="`w-[153px] h-[36px] border border-[#E9E9EA] rounded-[5px] pl-[16px] ${InputOneStyles}`"
      :placeholder="`${placeholderOne}`"
    />
    <input
      type="text"
      :class="`w-[153px] h-[36px] border border-[#E9E9EA] rounded-[5px] pl-[16px] ${InputTwoStyles}`"
      :placeholder="`${placeholderTwo}`"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  heading: String,
  placeholderOne: String,
  placeholderTwo: String,
  headingStyles: String,
  InputOneStyles: String,
  InputTwoStyles: String
})
</script>

<style></style>
