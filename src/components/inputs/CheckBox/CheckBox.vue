<template>
  <label class="flex items-center">
    <input type="checkbox" v-model="isChecked" @input="updateValue" class="w-[0px] h-[0px]" />
    <span
      :class="` cursor-pointer checkmark input-checked:bg-[#27C498] flex items-center justify-center h-[20px] w-[20px] border rounded-md ${
        label ? 'border-[#E9E9EA]' : 'border-[#27C498]'
      }`"
    >
      <img src="@/assets/checkBox.svg" alt="" class="h-[15px] w-[15px]" />
    </span>
    <span v-if="label" class="text-[#031625] text-[14px] ml-[6px]">{{ label }}</span>
  </label>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  value: Boolean,
  label: String
})

const emit = defineEmits(['update:value'])

const isChecked = ref(props.value)

const updateValue = () => {
  isChecked.value = !isChecked.value
  emit('update:value', isChecked.value)
}
</script>

<style scoped>
input:checked ~ .checkmark {
  @apply bg-[#27C498];
}
</style>
