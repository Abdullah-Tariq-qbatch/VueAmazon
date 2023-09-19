<template>
  <div class="bg-white p-[16px] flex justify-center w-[270px]">
    <div>
      <div class="w-[25px]"><CheckBoxView :on-check="setIsExport" /></div>
      <img
        v-if="product.image"
        :src="product.image"
        alt=""
        class="w-[220px] h-[125px] object-scale-down mb-[16px]"
      />
      <div v-else class="w-[220px] h-[125px] mb-[16px]">
        <div class="flex justify-center items-center">
          <IconProductPicture />
        </div>
        <p class="mt-[12px] text-[#979797] text-[12px] font-[500] text-center">
          Product Image Not Available
        </p>
      </div>
      <div class="border-t border-[#EEEBEB] pt-[16px]">
        <div>
          <router-link
            :to="`/products/${product?.id}`"
            class="text-[#031625] h-full text-[14px] font-[500] hover:text-[#27C498]"
            ><div class="h-20 max-h-20 overflow-hidden overflow-ellipsis">
              {{ product.title }}
            </div></router-link
          >
        </div>

        <p class="mt-[12px] text-[#979797] text-[12px] font-[500]">Price</p>
        <p class="text-[#031625] mt-[6px] text-[24px] font-[500]">${{ product.price }}</p>
        <p class="mt-[12px] text-[#979797] text-[12px] font-[500] mb-[6px]">Reviews</p>
        <div class="flex items-center w-[65%]">
          <StarRating :earned="product.reviews || 0" />
          <button @click="() => handleRatingCard()" class="mx-1">
            <IconRatingDropDown />
          </button>
          <p class="text-[#27C498] text-[12px] font-[600]">
            {{ numberWithCommas(product.reviews_count || 0) }}
          </p>
        </div>
        <p class="mt-[12px] text-[#979797] text-[12px] font-[500] mb-[6px]">BSR</p>
        <p class="text-[#031625] text-[14px] font-[400] mb-[17px]">
          <span class="text-white bg-[#0FB600] text-[12px] px-[3px] py-[2px] rounded-[2px]"
            >#{{ product.category_bsr }}</span
          >
          in {{ product.main_category_name }}
          <span v-if="product.category_bsr < 100" class="text-[#27C498] font-[600]">(Top 100)</span>
        </p>
        <div class="flex justify-center">
          <ButtonView role="secondary" styles="w-full">View More Details</ButtonView>
        </div>
        <ProductCardRating
          v-if="isRatingCardOpen"
          :rating="product.rating"
          v-on-click-outside="handleRatingCardClose"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import StarRating from '../StarRating/StarRatingView.vue'
import ButtonView from '../inputs/Button/ButtonView.vue'
import CheckBoxView from '../inputs/CheckBox/CheckBoxView.vue'
import { numberWithCommas } from '../../utils/helperMethods'
import IconRatingDropDown from '../icons/IconRatingDropDown.vue'
import ProductCardRating from './ProductCardRating.vue'
import IconProductPicture from '../icons/IconProductPicture.vue'
import { vOnClickOutside } from '@vueuse/components'
import { ref } from 'vue'

const prop = defineProps({
  product: Object,
  addToExport: {
    type: Function
  }
})

const isRatingCardOpen = ref(false)

const handleRatingCard = () => {
  isRatingCardOpen.value = !isRatingCardOpen.value
}

const handleRatingCardClose = () => {
  isRatingCardOpen.value = false
}

const setIsExport = (val) => {
  prop.addToExport(prop.product, val)
}
</script>

<style scoped></style>
