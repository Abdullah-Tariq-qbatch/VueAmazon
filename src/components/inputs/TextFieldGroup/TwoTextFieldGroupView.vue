<!-- eslint-disable vue/no-mutating-props -->
<template>
  <p :class="`text-[#979797] text-[12px] font-[500] mb-[6px] ${headingStyles}`">{{ heading }}</p>
  <div class="flex justify-between mb-[24px]">
    <input
      type="number"
      :class="`w-[153px] h-[36px] border border-[#E9E9EA] rounded-[5px] pl-[16px] ${InputOneStyles}`"
      :placeholder="`${placeholderOne}`"
      :value="valueOne"
      @change="(e) => onChangeOne(e.target.value)"
    />
    <input
      type="number"
      :class="`w-[153px] h-[36px] border border-[#E9E9EA] rounded-[5px] pl-[16px] ${InputTwoStyles}`"
      :placeholder="`${placeholderTwo}`"
      :value="valueTwo"
      @change="(e) => onChangeTwo(e.target.value)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const val1 = ref('')

const props = defineProps({
  heading: String,
  placeholderOne: String,
  placeholderTwo: String,
  headingStyles: String,
  InputOneStyles: String,
  InputTwoStyles: String,
  onChangeOne: {
    type: Function
  },
  onChangeTwo: {
    type: Function
  },
  valueOne: String,
  valueTwo: String
})
</script>

<style></style>
