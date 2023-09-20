<template>
  <div class="relative">
    <div
      class="absolute bg-white -left-8 -top-28 w-[270px] px-[16px] pt-[16px] pb-[24px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.16)]"
    >
      <div class="flex items-center mb-[12px]">
        <StarRatingView :earned="rating.accumulative" />
        <p class="ml-[6px] text-[#272B41] text-[16px] font-[600]">
          {{ rating.accumulative }} out of 5
        </p>
      </div>
      <p class="text-[#272B41] text-[14px] font-[500] mb-[16px]">
        {{ rating.total }} Global Ratings
      </p>

      <RatingPercentageView
        v-for="(value, key) in Object.keys(rating.ratingPercentages).reverse()"
        :key="key"
        :star="value"
        :percentage="rating.ratingPercentages[value]"
      />

      <div class="pt-[24px] flex justify-center">
        <p class="text-[#27C498] text-[14px] font-[500]">See Customer Reviews ></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import StarRatingView from '../StarRating/StarRatingView.vue'
import RatingPercentageView from '../StarRating/RatingPercentageView.vue'

const prop = defineProps({
  rating: Object
})
</script>
