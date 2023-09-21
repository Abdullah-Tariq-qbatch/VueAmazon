<template>
  <div
    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
  >
    <div className="bg-white rounded-lg shadow-lg w-[762px] h-[620px]">
      <div class="flex justify-between py-[16px] px-[24px] border-b border-[#EEEBEB]">
        <h2 class="text-[#272B41] text-[20px] font-[700]">All Filters</h2>
        <img src="@/assets/redcross.svg" @click="closeClick" class="cursor-pointer" />
      </div>
      <div class="h-[80%] flex justify-between border-b border-[#EEEBEB]">
        <div class="w-1/2 py-[16px] px-[24px]">
          <MinMaxTextFieldsGroup
            label="Number of Reviews"
            :initial-values="reviewsRange"
            @update:value="updateReviewsRange"
          />
          <p class="text-[#979797] text-[12px] font-[500] mb-[6px]">Average Review Rating</p>
          <Slider
            :min="0"
            :max="5"
            class="mx-0 my-0 mr-1"
            :trackStyle="{ 'background-color': trackBackgroundColor }"
            :handleStyle="{ 'border-color': trackBackgroundColor }"
            v-model:value="avgReviews"
          />
          <div class="flex justify-between text-[#031625] text-[12px] font-[400] mb-[30px]">
            <p>0</p>
            <p>5</p>
          </div>
          <DimensionsTextFieldsGroup
            label="Product Dimensions (in)"
            :initial-values="productDimensions"
            @update:value="updateProductDimensions"
          />
          <SelectView
            heading="Small Business Certification"
            :options="[{ name: 'Select Small Business Certification', value: 0 }]"
          />

          <h2 class="text-[#272B41] text-[20px] font-[700] mb-[16px]">Other Filters</h2>
          <div class="mb-[12px]">
            <CheckBox
              label="Listing has a video"
              :value="hasVideo"
              @update:value="updateHasVideo"
            />
          </div>
          <div class="mb-[12px]">
            <CheckBox
              label="The product has variations"
              :value="hasVariations"
              @update:value="updateHasVariations"
            />
          </div>
          <div class="mb-[12px]">
            <CheckBox
              label="Description has 4+ bullet points"
              :value="hasBullets"
              @update:value="updateHasBullets"
            />
          </div>
        </div>
        <div class="w-1/2 py-[16px] px-[24px]">
          <MinMaxTextFieldsGroup
            label="Price Range"
            :initial-values="priceRange"
            @update:value="updatePriceRange"
          />
          <SelectView
            heading="Last Active Seller"
            :options="[{ name: 'Select Last Active Seller', value: 0 }]"
          />
          <MinMaxTextFieldsGroup
            label="Product Weight (lbs)"
            :initial-values="weightRange"
            @update:value="updateWeightRange"
          />
          <SelectView
            heading="Intellectual Property (IP) Status"
            :options="[{ name: 'Select Intellectual Property (IP) Status', value: 0 }]"
          />
        </div>
      </div>
      <div class="flex justify-end px-[24px] items-center h-[10%]">
        <ButtonView
          styles="w-[74px] h-[36px] p-1 text-[#9299B8] border-[#E3E6EF] text-[14px]"
          :onClick="closeClick"
          >Cancel</ButtonView
        >
        <ButtonView
          styles="w-[74px] h-[36px] p-1 ml-[16px] text-[14px]"
          role="primary"
          :on-click="applyClick"
          >Apply</ButtonView
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Slider } from 'ant-design-vue'

import ButtonView from '../inputs/Button/ButtonView.vue'
import SelectView from '../inputs/Select/SelectView.vue'
import MinMaxTextFieldsGroup from '../inputs/TextFieldGroup/MinMaxTextFieldsGroup.vue'
import DimensionsTextFieldsGroup from '../inputs/TextFieldGroup/DimensionsTextFieldsGroup.vue'
import CheckBox from '../inputs/CheckBox/CheckBox.vue'

import { useProductsStore } from '../../stores/productsStore'

const props = defineProps({
  onClose: {
    type: Function
  },
  onCloseApply: {
    type: Function
  }
})

const trackBackgroundColor = '#27C498'

const productStore = useProductsStore()

// Reviews Range
const reviewsRange = ref({
  min: null,
  max: null
})

const updateReviewsRange = (newMin, newMax) => {
  reviewsRange.value.max = newMax
  reviewsRange.value.min = newMin
}

// Average Review Rating
const avgReviews = ref(null)

// Product Dimensions
const productDimensions = ref({
  length: null,
  width: null,
  height: null
})

const updateProductDimensions = (newLength, newWidth, newHeight) => {
  productDimensions.value.length = newLength
  productDimensions.value.width = newWidth
  productDimensions.value.height = newHeight
}

// Has video
const hasVideo = ref(null)

const updateHasVideo = (newValue) => (hasVideo.value = newValue)

// Has Variations
const hasVariations = ref(null)

const updateHasVariations = (newValue) => (hasVariations.value = newValue)

// Has Bullets
const hasBullets = ref(null)

const updateHasBullets = (newValue) => (hasBullets.value = newValue)

// Price Range
const priceRange = ref({
  min: null,
  max: null
})

const updatePriceRange = (newMin, newMax) => {
  priceRange.value.max = newMax
  priceRange.value.min = newMin
}

// Weight Range
const weightRange = ref({
  min: null,
  max: null
})

const updateWeightRange = (newMin, newMax) => {
  weightRange.value.max = newMax
  weightRange.value.min = newMin
}

const clearFields = () => {
  reviewsRange.value.min = null
  reviewsRange.value.max = null
  avgReviews.value = null
  productDimensions.value.length = null
  productDimensions.value.width = null
  productDimensions.value.height = null
  hasVideo.value = null
  hasVariations.value = null
  hasBullets.value = null
  priceRange.value.min = null
  priceRange.value.max = null
  weightRange.value.max = null
  weightRange.value.min = null
}

const closeClick = () => {
  clearFields()
  props.onClose()
}

const applyClick = () => {
  const filter = {}

  if (reviewsRange.value.min || reviewsRange.value.max) {
    let min = reviewsRange.value.min ? reviewsRange.value.min : ''
    let max = reviewsRange.value.max ? reviewsRange.value.max : ''
    filter['numberOfReviews'] = `${min}, ${max}`
  }

  if (avgReviews.value !== null) filter['averageReviewRating'] = avgReviews.value

  if (
    productDimensions.value.length ||
    productDimensions.value.width ||
    productDimensions.value.height
  ) {
    let length = productDimensions.value.length ? productDimensions.value.length : ''
    let width = productDimensions.value.width ? productDimensions.value.width : ''
    let height = productDimensions.value.height ? productDimensions.value.height : ''
    filter['dimensions'] = `${length}, ${width}, ${height}`
  }

  if (hasVideo.value) filter['hasVideo'] = hasVideo.value

  if (hasVariations.value) filter['hasVariations'] = hasVariations.value

  if (hasBullets.value) filter['bulletsThreshold'] = hasBullets.value

  if (priceRange.value.min || priceRange.value.max) {
    let min = priceRange.value.min ? priceRange.value.min : ''
    let max = priceRange.value.max ? priceRange.value.max : ''
    filter['priceRange'] = `${min}, ${max}`
  }

  if (weightRange.value.min || weightRange.value.max) {
    let min = weightRange.value.min ? weightRange.value.min : ''
    let max = weightRange.value.max ? weightRange.value.max : ''
    filter['weightRange'] = `${min}, ${max}`
  }

  productStore.applyFilter(filter)
  props.onCloseApply()
}
</script>
