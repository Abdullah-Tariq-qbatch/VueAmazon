<template>
  <div
    class="bg-white h-[36px] flex items-center w-[500px] ml-[41px] p-3 shadow-sm border border-gray-200 rounded-[20px] pr-[8px]"
  >
    <div class="select">
      <button
        name=""
        id=""
        x-model="image_type"
        @click="setFilterModalToggle"
        class="text-sm outline-none focus:outline-none bg-transparent flex items-center border-r pr-[10px] border-[#9DA6C4] max-w-[150px]"
      >
        {{ filterValue }}
        <img src="@/assets/dropDown.svg" class="mx-3" />
      </button>
    </div>

    <input
      type="search"
      name=""
      id=""
      placeholder="Search Products, Keywords, or ASINs"
      class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
    />
    <img src="@/assets/search.svg" class="mr-1" />
  </div>
  <!-- <div v-show="isFilterModalOpen"></div> -->
  <FilterModalView v-show="isFilterModalOpen" value="filterValue" onClose="setFilterModalToggle" />
</template>

<script setup>
import { ref } from 'vue'
import FilterModalView from '../Modals/FilterModalView.vue'

const isFilterModalOpen = ref(false)

const filterValue = ref('All')

function setFilterModalToggle() {
  isFilterModalOpen.value = !isFilterModalOpen.value
}
</script>

<style></style>
