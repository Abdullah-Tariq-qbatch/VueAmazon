<template>
  <p :class="`text-[#979797] text-[12px] font-[500] mb-[6px] ${headingStyles}`">{{ heading }}</p>
  <select
    name="category"
    :class="`focus:outline-none w-full h-[36px] text-[14px] p-[7px] pr-[48px] rounded-md text-[#031625] border border-[#E9E9EA] appearance-none mb-[24px] ${selectStyles}`"
  >
    <option v-for="(opt, index) in options" :key="index" :value="opt.value">{{ opt.name }}</option>
  </select>
</template>

<script setup>
const props = defineProps({
  heading: String,
  options: Array,
  headingStyles: String,
  selectStyles: String
})
</script>

<style scoped>
select {
  background-image: url('../../../assets/dropDown.svg');
  background-position: right 16px top 50%;
  background-repeat: no-repeat;
  background-size: 6%;
}
</style>
