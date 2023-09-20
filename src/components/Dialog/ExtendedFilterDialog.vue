<template>
  <div
    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
  >
    <div className="bg-white rounded-lg shadow-lg w-[762px] h-[620px]">
      <div class="flex justify-between py-[16px] px-[24px] border-b border-[#EEEBEB]">
        <h2 class="text-[#272B41] text-[20px] font-[700]">All Filters</h2>
        <img src="@/assets/redcross.svg" @click="props.onClose" class="cursor-pointer" />
      </div>
      <div class="h-[80%] flex justify-between border-b border-[#EEEBEB]">
        <div class="w-1/2 py-[16px] px-[24px]">
          <TwoTextFieldGroupView
            heading="Number of Reviews"
            placeholderOne="Min"
            placeholderTwo="Max"
            :on-change-one="(val) => productStore.setFilterValue('numberOfReviews', val, 'min')"
            :on-change-two="(val) => productStore.setFilterValue('numberOfReviews', val, 'max')"
            :value-one="
              productStore?.filters?.numberOfReviews?.min
                ? productStore.filters.numberOfReviews.min
                : ''
            "
            :value-two="
              productStore?.filters?.numberOfReviews?.max
                ? productStore.filters.numberOfReviews.max
                : ''
            "
          />
          <p class="text-[#979797] text-[12px] font-[500] mb-[6px]">Average Review Rating</p>
          <Slider
            :min="0"
            :max="5"
            class="mx-0 my-0 mr-1"
            :trackStyle="{ 'background-color': trackBackgroundColor }"
            :handleStyle="{ 'border-color': trackBackgroundColor }"
            @change="(val) => productStore.setFilterValue('averageReviewRating', val)"
          />
          <div class="flex justify-between text-[#031625] text-[12px] font-[400] mb-[30px]">
            <p>0</p>
            <p>5</p>
          </div>
          <ThreeTextFieldGroupView
            heading="Product Dimensions (in)"
            placeholderOne="Length"
            placeholderTwo="Width"
            placeholderThree="Height"
            :on-change-one="(val) => productStore.setFilterValue('dimensions', val, 'length')"
            :on-change-two="(val) => productStore.setFilterValue('dimensions', val, 'width')"
            :on-change-three="(val) => productStore.setFilterValue('dimensions', val, 'height')"
            :value-one="
              productStore?.filters?.dimensions?.length
                ? productStore.filters.dimensions.length
                : ''
            "
            :value-two="
              productStore?.filters?.dimensions?.width ? productStore.filters.dimensions.width : ''
            "
            :value-three="
              productStore?.filters?.dimensions?.height
                ? productStore.filters.dimensions.height
                : ''
            "
          />
          <SelectView
            heading="Small Business Certification"
            :options="[{ name: 'Select Small Business Certification', value: 0 }]"
          />

          <h2 class="text-[#272B41] text-[20px] font-[700] mb-[16px]">Other Filters</h2>
          <div class="mb-[12px]">
            <CheckBoxView
              label="Listing has a video"
              :on-check="(val) => productStore.setFilterValue('hasVideo', val)"
              :value="productStore?.filters?.hasVideo ? productStore.filters.hasVideo : false"
            />
          </div>
          <div class="mb-[12px]">
            <CheckBoxView
              label="The product has variations"
              :on-check="(val) => productStore.setFilterValue('hasVariations', val)"
            />
          </div>
          <div class="mb-[12px]">
            <CheckBoxView
              label="Description has 4+ bullet points"
              :on-check="(val) => productStore.setFilterValue('bulletsThreshold', val)"
            />
          </div>
        </div>
        <div class="w-1/2 py-[16px] px-[24px]">
          <TwoTextFieldGroupView
            heading="Price Range"
            placeholderOne="Min"
            placeholderTwo="Max"
            :on-change-one="(val) => productStore.setFilterValue('priceRange', val, 'min')"
            :on-change-two="(val) => productStore.setFilterValue('priceRange', val, 'max')"
            :value-one="
              productStore?.filters?.priceRange?.min ? productStore.filters.priceRange.min : ''
            "
            :value-two="
              productStore?.filters?.priceRange?.max ? productStore.filters.priceRange.max : ''
            "
          />
          <SelectView
            heading="Last Active Seller"
            :options="[{ name: 'Select Last Active Seller', value: 0 }]"
          />
          <TwoTextFieldGroupView
            heading="Product Weight (lbs)"
            placeholderOne="Min"
            placeholderTwo="Max"
            :on-change-one="(val) => productStore.setFilterValue('weightRange', val, 'min')"
            :on-change-two="(val) => productStore.setFilterValue('weightRange', val, 'max')"
            :value-one="
              productStore?.filters?.weightRange?.min ? productStore.filters.weightRange.min : ''
            "
            :value-two="
              productStore?.filters?.weightRange?.max ? productStore.filters.weightRange.max : ''
            "
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
          :onClick="onClose"
          >Cancel</ButtonView
        >
        <ButtonView
          styles="w-[74px] h-[36px] p-1 ml-[16px] text-[14px]"
          role="primary"
          :on-click="
            () => {
              productStore.applyFilter()
              onCloseApply()
            }
          "
          >Apply</ButtonView
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { Slider } from 'ant-design-vue'

import CheckBoxView from '../inputs/CheckBox/CheckBoxView.vue'
import ButtonView from '../inputs/Button/ButtonView.vue'
import TwoTextFieldGroupView from '../inputs/TextFieldGroup/TwoTextFieldGroupView.vue'
import ThreeTextFieldGroupView from '../inputs/TextFieldGroup/ThreeTextFieldGroupView.vue'
import SelectView from '../inputs/Select/SelectView.vue'

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
</script>
