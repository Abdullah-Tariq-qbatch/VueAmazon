<template>
  <div
    class="bg-white h-[36px] w-[500px] flex-grow flex items-center p-3 shadow-sm border border-gray-200 rounded-[20px] pr-[8px]"
  >
    <div class="select">
      <button
        name=""
        id=""
        x-model="image_type"
        @click="setFilterModalToggle"
        class="text-sm outline-none focus:outline-none bg-transparent flex items-center border-r pr-[10px] border-[#9DA6C4]"
      >
        <span>{{ filterValue }}</span>
        <img src="@/assets/dropDown.svg" class="mx-3" />
      </button>
    </div>

    <input
      type="search"
      name=""
      id=""
      placeholder="Search Products, Keywords, or ASINs"
      class="w-96 pl-4 text-sm outline-none focus:outline-none bg-transparent"
    />
    <img src="@/assets/search.svg" class="mr-1" />
  </div>

  <FilterModal
    v-show="isFilterModalOpen"
    value="filterValue"
    :onClose="setFilterModalCLose"
    :option-click="optionClick"
    v-on-click-outside="setFilterModalCLose"
  />
</template>

<script setup>
import { ref } from 'vue'
import FilterModal from '../../Dialog/FilterModal.vue'
import { vOnClickOutside } from '@vueuse/components'

const isFilterModalOpen = ref(false)

const filterValue = ref('All')

const optionClick = (filter) => {
  filterValue.value = filter
}

function setFilterModalToggle() {
  isFilterModalOpen.value = !isFilterModalOpen.value
}

function setFilterModalCLose() {
  isFilterModalOpen.value = false
}
</script>

<style></style>
