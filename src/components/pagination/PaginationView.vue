<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useProductsStore } from '../../stores/productsStore'
import { generateRange } from '../../utils/helperMethods'

const productStore = useProductsStore()
const route = useRoute()

const currentPage = ref(parseInt(route.query.pageNo, 10) || 1)
const totalPages = ref(0)
const pagesToShow = 2
const displayArray = ref([])

createPages()

watch(currentPage, () => {
  createPages()
})

function createPages() {
  totalPages.value = productStore.totalPagesCount

  let startPage = Math.max(currentPage.value - pagesToShow, 1)
  let endPage = Math.min(currentPage.value + pagesToShow, totalPages.value)

  if (currentPage.value <= pagesToShow) {
    endPage = Math.min(startPage + pagesToShow * 2, totalPages.value)
  } else if (currentPage.value >= totalPages.value - pagesToShow) {
    startPage = Math.max(endPage - pagesToShow * 2, 1)
  }

  displayArray.value = generateRange(startPage, endPage)
}

const pageButtonOnClick = (i) => {
  productStore.setFilterValue('pageNo', i)
  productStore.applyFilter()
}
</script>

<template>
  <div class="mr-0 mt-5 flex flex-col items-center justify-center pb-10 sm:items-end">
    <nav aria-label="Page navigation example bg-white dark:bg-gray-700">
      <ul class="inline-flex -space-x-px text-sm">
        <li key="first">
          <button
            type="button"
            @click="() => pageButtonOnClick(1)"
            class="hidden h-8 items-center justify-center rounded-l-lg border border-[#27C498] bg-white px-1 leading-tight text-[#27C498] hover:bg-gray-100 hover:text-[#27C498] sm:px-3 md:flex"
          >
            First
          </button>
        </li>
        <li v-for="i in displayArray" :key="i">
          <button
            type="button"
            :class="`flex h-8 items-center justify-center px-3 border ${
              i === currentPage
                ? 'border-[#27C498] bg-[#27C498] text-white hover:bg-[#23B089] hover:text-white'
                : 'border-[#27C498] bg-white text-[#27C498] hover:bg-gray-100 hover:text-[#27C498]'
            } `"
            @click="() => pageButtonOnClick(i)"
          >
            {{ i }}
          </button>
        </li>
        <li key="last">
          <button
            type="button"
            @click="() => pageButtonOnClick(totalPages)"
            class="md:flex hidden h-8 items-center justify-center rounded-r-lg border border-[#27C498] bg-white px-1 leading-tight text-[#27C498] hover:bg-gray-100 hover:text-[#27C498] sm:px-3"
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
    <span class="mt-3 text-sm text-[#272B41]">
      Page Number :
      <span class="font-semibold text-[#27C498]">{{ currentPage }} </span> out of
      <span class="font-semibold text-[#27C498]">{{ totalPages }}</span>
    </span>
  </div>
</template>

<style></style>
