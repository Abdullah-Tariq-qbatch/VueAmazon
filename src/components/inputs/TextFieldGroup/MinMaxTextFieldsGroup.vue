<template>
  <div>
    <p class="text-[#979797] text-[12px] font-[500] mb-[6px]">{{ label }}</p>
    <div class="flex justify-between mb-[24px]">
      <input
        type="number"
        v-model="minValue"
        @input="updateMinMax"
        placeholder="Min"
        class="w-[153px] h-[36px] border border-[#E9E9EA] rounded-[5px] pl-[16px]"
      />
      <input
        type="number"
        v-model="maxValue"
        @input="updateMinMax"
        placeholder="Max"
        class="w-[153px] h-[36px] border border-[#E9E9EA] rounded-[5px] pl-[16px]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  initialValues: Object,
  label: String,
  minBoundary: Number,
  maxBoundary: Number
})

const emit = defineEmits(['update:value'])

const minValue = ref(props.initialValues.min)
const maxValue = ref(props.initialValues.max)

watch([minValue, maxValue], () => {
  if (props.minBoundary !== undefined && minValue.value < props.minBoundary) {
    minValue.value = props.minBoundary
  }
  if (props.maxBoundary !== undefined && maxValue.value > props.maxBoundary) {
    maxValue.value = props.maxBoundary
  }

  if (props.minBoundary === undefined && minValue.value < 0) {
    minValue.value = 0
  }

  if (props.minBoundary === undefined && maxValue.value < 0) {
    maxValue.value = 0
  }

  if (minValue.value !== null && maxValue.value !== null && minValue.value >= maxValue.value) {
    const temp = minValue.value
    minValue.value = maxValue.value
    maxValue.value = temp
  }
})

const updateMinMax = () => emit('update:value', minValue.value, maxValue.value)
</script>
