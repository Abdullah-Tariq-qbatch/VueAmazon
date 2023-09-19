<template>
  <p :class="`text-[#979797] text-[12px] font-[500] mb-[6px] ${headingStyles}`">{{ heading }}</p>
  <div class="flex justify-between mb-[24px]">
    <input
      type="text"
      :class="`w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px] ${InputOneStyles}`"
      :placeholder="`${placeholderOne}`"
      :value="valueOne"
      @change="(e) => onChangeOne(e.target.value)"
    />
    <input
      type="text"
      :class="`w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px] ${InputTwoStyles}`"
      :placeholder="`${placeholderTwo}`"
      :value="valueTwo"
      @change="(e) => onChangeTwo(e.target.value)"
    />
    <input
      type="text"
      :class="`w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px] ${InputThreeStyles}`"
      :placeholder="`${placeholderThree}`"
      :value="valueThree"
      @change="(e) => onChangeThree(e.target.value)"
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
  InputThreeStyles: String,
  onChangeOne: {
    type: Function
  },
  onChangeTwo: {
    type: Function
  },
  onChangeThree: {
    type: Function
  },
  valueOne: String,
  valueTwo: String,
  valueThree: String
})
</script>

<style></style>
