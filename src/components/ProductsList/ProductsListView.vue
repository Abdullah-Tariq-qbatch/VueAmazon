<template>
  <div>
    <div class="py-[24px]">
      <div
        class="grid grid-cols-1 gap-y-[40px] gap-x-[50px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <ProductCard
          v-for="(product, index) in dummyProducts"
          :key="index"
          :product="product"
          :add-to-export="addToExport"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import dummyProducts from '../../utils/dummyData/dummyProducts'
import ProductCard from '../cards/ProductCard.vue'
const props = defineProps({
  addToExport: {
    type: Function
  }
})
</script>

<style></style>
