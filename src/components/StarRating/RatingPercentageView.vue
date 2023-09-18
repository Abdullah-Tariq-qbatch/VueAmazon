<template>
  <div class="flex justify-between items-center mb-[16px]">
    <p class="text-[#27C498] text-[14px] font-[500]">{{ star }} Star</p>

    <IconReviewPercentage :width="perc" />

    <p class="text-[#27C498] text-[14px] font-[500]">{{ percentage }}%</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import IconReviewPercentage from '../icons/IconReviewPercentage.vue'
const props = defineProps({
  star: String,
  percentage: String
})
const percFloat = parseFloat(props.percentage)
const multiplier = percFloat / 100
const perc = ref(152 * multiplier)
</script>

<style></style>
