<template>
  <div class="bg-[#F4F4F8] w-full h-full py-[24px] px-[24px]">
    <div class="flex items-center">
      <h2 class="text-[#272B41] text-[24px] font-bold w-[20%]">Results</h2>
      <div class="flex w-[80%] justify-end">
        <select
          name="category"
          class="focus:outline-none w-[194px] h-[40px] text-[14px] p-[9px] pr-[48px] rounded-md text-[#27C498] border border-[#27C498] appearance-none"
        >
          <option value="0">Select a Category</option>
        </select>
        <select
          name="category"
          class="focus:outline-none ml-[16px] w-[194px] h-[40px] text-[14px] p-[9px] pr-[48px] rounded-md text-[#27C498] border border-[#27C498] appearance-none"
        >
          <option value="0">Select Brands</option>
        </select>
        <ButtonView
          role="primary"
          styles="ml-[16px] w-[178px] h-[40px] flex items-center"
          :on-click="handleFilterDialog"
          ><IconFilterVue /><span class="ml-2">View More Filters</span></ButtonView
        >
        <ButtonView
          role="primary"
          styles="ml-[16px] w-[100px] h-[40px] flex items-center"
          v-show="displayExportButton"
          ><IconExportVue /><span class="ml-2">Export</span></ButtonView
        >
        <ExtendedFilterModal v-show="isFilterDialogOpen" :on-close="handleFilterDialog" />
      </div>
    </div>
    <ProductsListViewVue :add-to-export="addtoExport" />
  </div>
</template>

<script setup>
import ButtonView from '../components/inputs/Button/ButtonView.vue'
import IconFilterVue from '../components/icons/IconFilter.vue'
import IconExportVue from '../components/icons/IconExport.vue'
import ProductsListViewVue from '../components/ProductsList/ProductsListView.vue'
import ExtendedFilterModal from '../components/Dialog/ExtendedFilterDialog.vue'
import { ref } from 'vue'

const isFilterDialogOpen = ref(false)

const handleFilterDialog = () => {
  isFilterDialogOpen.value = !isFilterDialogOpen.value
}

const displayExportButton = ref(false)

let exportedItems = []

const addtoExport = (product, checked) => {
  checked
    ? exportedItems.push(product)
    : (exportedItems = exportedItems.filter((obj) => obj.id !== product.id))
  displayExportButton.value = exportedItems.length ? true : false
}
</script>

<style scoped>
select {
  background-image: url('../assets/dropDown.svg');
  background-position: right 16px top 50%;
  background-repeat: no-repeat;
  background-size: 10%;
}
</style>
