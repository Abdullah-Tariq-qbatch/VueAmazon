<template>
  <div class="w-[346px] bg-white flex justify-center py-[24px] px-[24px]">
    <div>
      <img :src="product.image" alt="" class="w-[298px] h-[195px] object-scale-down mb-[16px]" />
      <div class="border-t border-[#EEEBEB]">
        <p class="text-[#031625] text-[16px] font-[500] mt-[16px]">
          {{ product.name }}
        </p>
        <p class="mt-[12px] text-[#979797] text-[12px] font-[500]">Price</p>
        <p class="text-[#031625] mt-[6px] text-[24px] font-[500]">${{ product.price }}</p>
        <p class="mt-[12px] text-[#979797] text-[12px] font-[500] mb-[6px]">Reviews</p>
        <div class="flex items-center w-[50%] justify-between">
          <StarRating :earned="product.rating.accumulative" />
          <button @click="() => handleRatingCard()">
            <IconRatingDropDown />
          </button>
          <p class="text-[#27C498] text-[12px] font-[600]">
            {{ numberWithCommas(product.rating.total) }}
          </p>
        </div>
        <p class="mt-[12px] text-[#979797] text-[12px] font-[500] mb-[6px]">BSR</p>
        <p class="text-[#031625] text-[14px] font-[400]">
          <span class="text-white bg-[#0FB600] text-[12px] px-[3px] py-[2px] rounded-[2px]"
            >#{{ product.rank }}</span
          >
          in {{ product.category }}
          <span class="text-[#27C498] font-[600]">(Top {{ product.TotalItems }})</span>
        </p>
        <ProductRatingCard
          v-if="isRatingCardOpen"
          :rating="product.rating"
          v-on-click-outside="handleRatingCardClose"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

import ProductRatingCard from './ProductRatingCard.vue'
import StarRating from '../StarRating/StarRatingView.vue'

import IconRatingDropDown from '../icons/IconRatingDropDown.vue'

import { numberWithCommas } from '../../utils/helperMethods'

const prop = defineProps({
  product: Object
})

const isRatingCardOpen = ref(false)

const handleRatingCard = () => {
  isRatingCardOpen.value = !isRatingCardOpen.value
}

const handleRatingCardClose = () => {
  isRatingCardOpen.value = false
}
</script>
