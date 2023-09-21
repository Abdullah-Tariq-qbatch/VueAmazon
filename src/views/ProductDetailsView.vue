<template>
  <div class="bg-[#F4F4F8] w-full h-full py-[24px] px-[24px]">
    <div class="flex items-center">
      <IconBackArrow @click="handleBackClick" class="cursor-pointer" />
      <h2 class="text-[#272B41] text-[24px] font-bold w-[18%] ml-[12px]">Product Details</h2>
      <div class="flex w-[80%] justify-end">
        <ButtonView styles="py-1 w-[174px] h-[40px] flex items-center justify-center ml-[16px]"
          ><IconHeart /><span class="ml-2">Add to Favorites</span></ButtonView
        >
        <ButtonView styles="py-1 w-[176px] h-[40px] flex items-center justify-center ml-[16px]"
          ><IconAmazon /><span class="ml-2">View on Amazon</span></ButtonView
        >
        <ButtonView
          styles="py-1 w-[188px] h-[40px] flex items-center justify-center ml-[16px]"
          role="primary"
          ><IconLocation /><span class="ml-2">Track this Product</span></ButtonView
        >
      </div>
    </div>
    <div class="flex justify-between h-full py-[24px]">
      <div class=""><ProductDetailCard :product="product" /></div>
      <div class="">
        <ProductAdditionalDetailCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

import ButtonView from '../components/inputs/Button/ButtonView.vue'
import ProductDetailCard from '../components/cards/ProductDetailCard.vue'
import ProductAdditionalDetailCard from '../components/cards/ProductAdditionalDetailCard.vue'

import IconHeart from '../components/icons/IconHeart.vue'
import IconAmazon from '../components/icons/IconAmazon.vue'
import IconLocation from '../components/icons/IconLocation.vue'
import IconBackArrow from '../components/icons/IconBackArrow.vue'

import router from '../router'
import { useProductsStore } from '../stores/productsStore'

const props = defineProps({
  id: String
})

const productStore = useProductsStore()

const product = ref({})

watchEffect(async () => (product.value = await productStore.getProductDetail(props.id)))

const handleBackClick = () => {
  router.push('/products')
}
</script>

<style></style>
