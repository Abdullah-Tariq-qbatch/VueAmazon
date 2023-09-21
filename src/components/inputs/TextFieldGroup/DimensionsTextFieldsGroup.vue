<template>
  <div>
    <p class="text-[#979797] text-[12px] font-[500] mb-[6px]">{{ label }}</p>
    <div class="flex justify-between mb-[24px]">
      <input
        type="number"
        v-model="lengthValue"
        @input="updateDimension"
        placeholder="Length"
        class="w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px]"
      />
      <input
        type="number"
        v-model="widthValue"
        @input="updateDimension"
        placeholder="Width"
        class="w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px]"
      />
      <input
        type="number"
        v-model="heightValue"
        @input="updateDimension"
        placeholder="Height"
        class="w-[97px] h-[36px] pl-[16px] text-[14px] border border-[#E9E9EA] rounded-[5px]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  initialValues: Object,
  label: String
})

const emit = defineEmits(['update:value'])

const lengthValue = ref(props.initialValues.length)
const widthValue = ref(props.initialValues.width)
const heightValue = ref(props.initialValues.height)

watch([lengthValue, widthValue, heightValue], () => {
  if (lengthValue.value < 0) lengthValue.value = 0
  if (widthValue.value < 0) widthValue.value = 0
  if (heightValue.value < 0) heightValue.value = 0
})

const updateDimension = () =>
  emit('update:value', lengthValue.value, widthValue.value, heightValue.value)
</script>

<style></style>
