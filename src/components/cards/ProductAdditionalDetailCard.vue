<template>
  <div class="w-[722px] py-[24px] px-[24px] bg-white">
    <p class="text-[20px] text-[#272B41] font-[700] mb-[28px]">Additional Details</p>
    <div class="text-[12px] font-[500] text-center">
      <ul class="flex w-full pt-[5px]">
        <li class="w-1/3">
          <p
            @click="handleTabChange('Price History')"
            :class="`inline-block w-full p-4 border-b-2 rounded-t-lg cursor-pointer ${
              activeTab === 'Price History'
                ? 'text-[#27C498] border-[#27C498]'
                : 'text-[#979797] border-[#979797]'
            }`"
          >
            Price History
          </p>
        </li>
        <li class="w-1/3">
          <p
            @click="handleTabChange('Sales History')"
            :class="`inline-block w-full p-4 border-b-2 rounded-t-lg cursor-pointer ${
              activeTab === 'Sales History'
                ? 'text-[#27C498] border-[#27C498]'
                : 'text-[#979797] border-[#979797]'
            }`"
          >
            Sales History
          </p>
        </li>
        <li class="w-1/3">
          <p
            @click="handleTabChange('Out of Stock History')"
            :class="`inline-block w-full p-4 border-b-2 rounded-t-lg cursor-pointer ${
              activeTab === 'Out of Stock History'
                ? 'text-[#27C498] border-[#27C498]'
                : 'text-[#979797] border-[#979797]'
            }`"
          >
            Out of Stock History
          </p>
        </li>
      </ul>
    </div>
    <div class="h-full">
      <div v-if="activeTab === 'Price History'" class="mb-[40px] pt-[24px]">
        <DateRangePicker :initialDateRange="dateRange" @update:dateRange="updateDateRange" />
        <div class="flex justify-center mt-[24px]">
          <div class="w-full h-full">
            <ChartView />
          </div>
        </div>
      </div>
      <div v-else-if="activeTab === 'Sales History'" class="mb-[40px] pt-[24px]">
        <DateRangePicker :initialDateRange="dateRange" @update:dateRange="updateDateRange" />
        <div class="flex justify-center mt-[24px]">
          <div class="w-full h-full">
            <ChartView />
          </div>
        </div>
      </div>
      <div v-else class="mb-[40px] pt-[24px]">
        <DateRangePicker :initialDateRange="dateRange" @update:dateRange="updateDateRange" />
        <div class="flex justify-center mt-[24px]">
          <div class="w-full h-full">
            <ChartView />
          </div>
        </div>
      </div>
      <p class="text-[#979797] text-[12px] font-[600]">Variations:</p>
      <div
        class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-[6px] border-b border-black mb-[16px]"
      >
        <span
          v-for="(value, key) in product.variations"
          :key="key"
          class="text-[#031625] text-[14px] font-[400] w-full"
        >
          {{ value.asin }}{{ key === product?.variations.length - 1 ? '' : ',' }} &nbsp;
        </span>
      </div>
      <p class="text-[#979797] text-[12px] font-[600]">Attributes Variations</p>
      <div
        class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-[6px] border-b border-black mb-[16px]"
      >
        <span
          v-for="(value, key) in product.variations"
          :key="key"
          :class="`${key === 0 ? 'pr-[8px]' : 'pr-[8px]'} text-[14px] ${
            key === product.variations.length - 1 ? 'border-r-0' : 'border-r-2 border-[#C4C4C4]'
          }`"
        >
          <span v-for="(val, key) in value.attributes" :key="key" class="text-[#5A5F7D] font-[500]"
            >{{ val.dimension }}:
            <span class="text-[#031625] font-[400]">{{ val.value }}, </span>
          </span>
        </span>
      </div>
      <div class="flex w-full justify-between">
        <div>
          <p class="text-[#979797] text-[12px] font-[600]">Dimensions</p>
          <p class="text-[#031625] text-[14px] font-[400]">
            <span class="text-[#5A5F7D] font-[500]">Length: </span>
            <span class="pr-[8px]">{{ product.length }} in</span>
            <span class="text-[#5A5F7D] font-[500] border-l-2 border-[#C4C4C4] pl-[8px]"
              >Width:
            </span>
            <span class="pr-[8px]">{{ product.width }} in</span>
            <span class="text-[#5A5F7D] font-[500] border-l-2 border-[#C4C4C4] pl-[8px]"
              >Height:
            </span>
            <span class="pr-[8px]">{{ product.height }} in</span>
          </p>
        </div>
        <div>
          <p class="text-[#979797] text-[12px] font-[600]">Weight</p>
          <p class="text-[#031625] text-[14px] font-[400]">{{ product?.weight }} lbs</p>
        </div>
        <div>
          <p class="text-[#979797] text-[12px] font-[600]">Opportunity Score</p>
          <p
            class="text-[#0FB600] text-[12px] font-[400] bg-[#0FB6001A] text-center py-[4px] rounded-[6px]"
          >
            {{ product.opppertunityScore || 0 }} High Demand
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ChartView from '../charts/ChartView.vue'
import DateRangePicker from '../inputs/DateRangePicker/DateRangePicker.vue'

const canvasRef = ref(null)

const dateRange = ref({
  from: '',
  to: ''
})

function updateDateRange(newDateRange) {
  dateRange.value = newDateRange
}

const prop = defineProps({
  product: Object
})

const activeTab = ref('Price History')

const handleTabChange = (tab) => {
  activeTab.value = tab
}

console.log(canvasRef.value)
</script>
