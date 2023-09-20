<template>
  <div>
    <div class="py-[24px]">
      <div
        class="grid grid-cols-1 gap-y-[40px] gap-x-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <ProductCard
          v-for="(product, index) in list"
          :key="index"
          :product="product"
          :add-to-export="addToExport"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../cards/ProductCard.vue'

const props = defineProps({
  addToExport: {
    type: Function
  },
  list: Array
})

console.log(props.list)
</script>

<style></style>
