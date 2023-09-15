<template>
  <div class="absolute">
    <div class="relative bg-white left-10 top-2 h-[412px] w-[907px] rounded-[5px]">
      <div class="w-full p-5 flex items-center justify-between border-b border-[#EEEBEB]">
        <h2 class="font-bold text-md">Filters</h2>
        <img src="@/assets/redcross.svg" @click="prop.onClose" />
      </div>
      <Radio.Group
        class="h-[65%] w-full justify-between flex px-5 my-[17px] border-b pb-5 border-[#EEEBEB]"
        :value="value"
      >
        <div>
          <div class="h-[12.5%]" v-for="(filter, index) in filters.slice(0, 8)" :key="index">
            <Radio :value="filter" class="text-[#5a5f7d]">{{ filter }}</Radio>
          </div>
        </div>
        <div>
          <div class="h-[12.5%]" v-for="(filter, index) in filters.slice(9, 16)" :key="index">
            <Radio :value="filter" class="text-[#5a5f7d]">{{ filter }}</Radio>
          </div>
        </div>
        <div>
          <div class="h-[12.5%]" v-for="(filter, index) in filters.slice(17, 24)" :key="index">
            <Radio :value="filter" class="text-[#5a5f7d]">{{ filter }}</Radio>
          </div>
        </div>
        <div>
          <div class="h-[12.5%]" v-for="(filter, index) in filters.slice(25, 28)" :key="index">
            <Radio :value="filter" class="text-[#5a5f7d]">{{ filter }}</Radio>
          </div>
        </div>
      </Radio.Group>
      <div class="flex justify-end">
        <button
          class="text-[#9299B8] py-1 px-3 rounded-[6px] border border-[#E3E6EF] hover:bg-[#E3E6EF] hover:text-w"
        >
          Cancel
        </button>
        <button
          class="bg-[#27C498] text-white ml-[16px] hover:bg-[#26bf94] hover:text-white py-1 px-3 rounded-[6px]"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Radio } from 'ant-design-vue'
import filters from '../../constants/FilterData'

const props = defineProps(['value', 'onClose'])
</script>

<style></style>
