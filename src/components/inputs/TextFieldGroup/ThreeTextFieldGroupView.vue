<template>
  <p :class="`text-[#979797] text-[12px] font-[500] mb-[6px] ${headingStyles}`">{{ heading }}</p>
  <div class="flex justify-between mb-[24px]">
    <input
      type="text"
      :class="`w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px] ${InputOneStyles}`"
      :placeholder="`${placeholderOne}`"
    />
    <input
      type="text"
      :class="`w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px] ${InputTwoStyles}`"
      :placeholder="`${placeholderTwo}`"
    />
    <input
      type="text"
      :class="`w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px] ${InputThreeStyles}`"
      :placeholder="`${placeholderThree}`"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  heading: String,
  placeholderOne: String,
  placeholderTwo: String,
  placeholderThree: String,
  headingStyles: String,
  InputOneStyles: String,
  InputTwoStyles: String,
  InputThreeStyles: String
})
</script>

<style></style>
