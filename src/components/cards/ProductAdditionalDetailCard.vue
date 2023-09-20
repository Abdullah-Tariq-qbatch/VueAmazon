<template>
  <div class="w-[722px] h-[730px] py-[24px] px-[24px] bg-white">
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
      <div v-if="activeTab === 'Price History'">Price History</div>
      <div v-else-if="activeTab === 'Sales History'">Sales History</div>
      <div v-else>Out of Stock History</div>
      <p class="text-[#979797] text-[12px] font-[600]">Variations:</p>
      <div class="flex mt-[6px] pb-[16px] mb-[16px] border-b border-[#EEEBEB]">
        <p
          v-for="(value, key) in product.variations"
          :key="key"
          class="text-[#031625] text-[14px] font-[400]"
        >
          {{ value }}{{ key === product.variations.length - 1 ? '' : ',' }} &nbsp;
        </p>
      </div>
      <p class="text-[#979797] text-[12px] font-[600]">Attributes Variations</p>
      <div class="flex mt-[6px] pb-[16px] mb-[16px] border-b border-[#EEEBEB]">
        <p
          v-for="(value, key) in product.attributeVariations"
          :key="key"
          :class="`${key === 0 ? 'pr-[8px]' : 'px-[8px]'} text-[14px] ${
            key === product.attributeVariations.length - 1
              ? 'border-r-0'
              : 'border-r-2 border-[#C4C4C4]'
          }`"
        >
          <span class="text-[#5A5F7D] font-[500]">Color: </span>
          <span class="text-[#031625] font-[400]">{{ value.color }}, </span>
          <span class="text-[#5A5F7D] font-[500]">Size: </span>
          <span class="text-[#031625] font-[400]">{{ value.size }}</span>
        </p>
      </div>
      <div class="flex w-full justify-between">
        <div>
          <p class="text-[#979797] text-[12px] font-[600]">Dimensions</p>
          <p class="text-[#031625] text-[14px] font-[400]">
            <span class="text-[#5A5F7D] font-[500]">Length: </span>
            <span class="pr-[8px]">{{ product.dimensions.length }} in</span>
            <span class="text-[#5A5F7D] font-[500] border-l-2 border-[#C4C4C4] pl-[8px]"
              >Width:
            </span>
            <span class="pr-[8px]">{{ product.dimensions.width }} in</span>
            <span class="text-[#5A5F7D] font-[500] border-l-2 border-[#C4C4C4] pl-[8px]"
              >Height:
            </span>
            <span class="pr-[8px]">{{ product.dimensions.height }} in</span>
          </p>
        </div>
        <div>
          <p class="text-[#979797] text-[12px] font-[600]">Weight</p>
          <p class="text-[#031625] text-[14px] font-[400]">{{ product.weight }} lbs</p>
        </div>
        <div>
          <p class="text-[#979797] text-[12px] font-[600]">Opportunity Score</p>
          <p
            class="text-[#0FB600] text-[12px] font-[400] bg-[#0FB6001A] text-center py-[4px] rounded-[6px]"
          >
            {{ product.opppertunityScore }} High Demand
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const prop = defineProps({
  product: Object
})

const activeTab = ref('Price History')

const handleTabChange = (tab) => (activeTab.value = tab)
</script>
