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
      <div class=""><ProductCardDetailVue :product="product" /></div>
      <div class="">
        <ProductAdditionDetailCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import dummyProducts from '../utils/dummyData/dummyProducts'
import ButtonView from '../components/inputs/Button/ButtonView.vue'
import IconHeart from '../components/icons/IconHeart.vue'
import IconAmazon from '../components/icons/IconAmazon.vue'
import IconLocation from '../components/icons/IconLocation.vue'
import IconBackArrow from '../components/icons/IconBackArrow.vue'
import router from '../router'
import { ref } from 'vue'
import ProductCardDetailVue from '../components/cards/ProductCardDetail.vue'
import ProductAdditionDetailCard from '../components/cards/ProductAdditionDetailCard.vue'

const props = defineProps({
  id: String
})

const fetchProduct = dummyProducts.filter((product) => product.id === parseInt(props.id))

const product = ref(fetchProduct[0])

const handleBackClick = () => {
  router.go(-1)
}
</script>

<style></style>
