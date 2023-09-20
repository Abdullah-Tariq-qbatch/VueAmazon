<template>
  <div class="flex justify-between items-end">
    <div>
      <p for="fromDate" class="text-[#979797] text-[12px] font-[600] mb-[6px]">From</p>
      <input
        type="date"
        id="fromDate"
        v-model="fromDate"
        @input="validateDateRange"
        class="w-[262px] h-[36px] border border-[#E9E9EA] rounded-[5px] focus:outline-none focus:ring-0 text-[14px] text-[#031625] py-[10px] pl-[16px] pr-[10px]"
      />
    </div>

    <div>
      <p for="toDate" class="text-[#979797] text-[12px] font-[600] mb-[6px]">To</p>
      <input
        type="date"
        id="toDate"
        v-model="toDate"
        :min="fromDate"
        @input="validateDateRange"
        class="w-[262px] h-[36px] border border-[#E9E9EA] rounded-[5px] focus:outline-none focus:ring-0 text-[14px] text-[#031625] py-[10px] pl-[16px] pr-[10px]"
      />
    </div>

    <ButtonView
      role="primary"
      :on-click="updateDateRange"
      styles="w-[102px] h-[36px] p-0 flex items-center justify-center"
      >Filter Now</ButtonView
    >
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import ButtonView from '../Button/ButtonView.vue'

const props = defineProps({
  initialDateRange: Object
})

const emit = defineEmits(['update:dateRange'])

const fromDate = ref(props.initialDateRange.from)
const toDate = ref(props.initialDateRange.to)

watch([fromDate, toDate], () => {
  if (fromDate.value > toDate.value) {
    toDate.value = fromDate.value
  }
})

const updateDateRange = () => {
  const dateRange = {
    from: fromDate.value,
    to: toDate.value
  }
  emit('update:dateRange', dateRange)
}

const validateDateRange = () => {
  if (fromDate.value > toDate.value) {
    toDate.value = fromDate.value
  }
}
</script>

<style scoped>
input[type='date']::-webkit-calendar-picker-indicator {
  color: rgba(0, 0, 0, 0);
  opacity: 1;
  display: block;
  background-image: url('../../../assets/calender.svg');
  background-repeat: no-repeat;
  background-position: top 10px;
  width: 20px;
  height: 20px;
  border-width: thin;
}
</style>
