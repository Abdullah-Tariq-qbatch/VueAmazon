<template>
  <OnClickOutside @trigger="onClose">
    <div class="relative">
      <div
        class="absolute bg-white top-2 h-[412px] w-[907px] rounded-[5px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]"
      >
        <div class="w-full p-5 flex items-center justify-between border-b border-[#EEEBEB]">
          <h2 class="font-bold text-md">Filters</h2>
          <img src="@/assets/redcross.svg" @click="onClose" class="cursor-pointer" />
        </div>
        <div
          class="h-[65%] w-full justify-between flex px-5 my-[17px] border-b pb-5 border-[#EEEBEB]"
        >
          <div>
            <div
              class="h-[12.5%] flex items-center"
              v-for="(filter, index) in filters.slice(0, 8)"
              :key="index"
            >
              <label class="flex justify-center items-center">
                <input
                  class="h-[14px] w-[14px] appearance-none rounded-full border-[1px] border-[#C6D0DC] checked:border-transparent checked:bg-[#27C498]"
                  type="radio"
                  :value="filter"
                  v-model="selectedFilter"
                  @click="setSelectedFilter(filter)"
                />
                <span class="absolute bg-white h-[7px] w-[7px] rounded-full"> </span>
              </label>
              <p class="ml-[8px] text-[#5A5F7D] text-[14px]">{{ filter }}</p>
            </div>
          </div>
          <div>
            <div
              class="h-[12.5%] flex items-center"
              v-for="(filter, index) in filters.slice(8, 16)"
              :key="index"
            >
              <label class="flex justify-center items-center">
                <input
                  class="h-[14px] w-[14px] appearance-none rounded-full border-[1px] border-[#C6D0DC] checked:border-transparent checked:bg-[#27C498]"
                  type="radio"
                  :value="filter"
                  v-model="selectedFilter"
                  @click="setSelectedFilter(filter)"
                />
                <span class="absolute bg-white h-[7px] w-[7px] rounded-full"> </span>
              </label>
              <p class="ml-[8px] text-[#5A5F7D] text-[14px]">{{ filter }}</p>
            </div>
          </div>
          <div>
            <div
              class="h-[12.5%] flex items-center"
              v-for="(filter, index) in filters.slice(16, 24)"
              :key="index"
            >
              <label class="flex justify-center items-center">
                <input
                  class="h-[14px] w-[14px] appearance-none rounded-full border-[1px] border-[#C6D0DC] checked:border-transparent checked:bg-[#27C498]"
                  type="radio"
                  :value="filter"
                  v-model="selectedFilter"
                  @click="setSelectedFilter(filter)"
                />
                <span class="absolute bg-white h-[7px] w-[7px] rounded-full"> </span>
              </label>
              <p class="ml-[8px] text-[#5A5F7D] text-[14px]">{{ filter }}</p>
            </div>
          </div>
          <div>
            <div
              class="h-[12.5%] flex items-center"
              v-for="(filter, index) in filters.slice(24, 28)"
              :key="index"
            >
              <label class="flex justify-center items-center">
                <input
                  class="h-[14px] w-[14px] appearance-none rounded-full border-[1px] border-[#C6D0DC] checked:border-transparent checked:bg-[#27C498]"
                  type="radio"
                  :value="filter"
                  v-model="selectedFilter"
                  @click="setSelectedFilter(filter)"
                />
                <span class="absolute bg-white h-[7px] w-[7px] rounded-full"> </span>
              </label>
              <p class="ml-[8px] text-[#5A5F7D] text-[14px]">{{ filter }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-end px-[24px]">
          <ButtonView
            styles="w-[74px] h-[36px] p-1 text-[#9299B8] border-[#E3E6EF] text-[14px]"
            :onClick="onClose"
            >Cancel</ButtonView
          >
          <ButtonView
            styles="w-[74px] h-[36px] p-1 ml-[16px] text-[14px]"
            role="primary"
            :onClick="applyClick"
            >Apply</ButtonView
          >
        </div>
      </div>
    </div>
  </OnClickOutside>
</template>

<script setup>
import { ref } from 'vue'
import { OnClickOutside } from '@vueuse/components'

import ButtonView from '../inputs/Button/ButtonView.vue'

import filters from '../../utils/constants/FilterData'

const props = defineProps({
  value: String,
  optionClick: {
    type: Function
  },
  onClose: {
    type: Function
  }
})

const selectedFilter = ref(props.value)

const setSelectedFilter = (filter) => {
  selectedFilter.value = filter
}

const applyClick = () => {
  props.optionClick(selectedFilter.value)
  props.onClose()
}
</script>
