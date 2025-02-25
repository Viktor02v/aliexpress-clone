<script setup lang="ts">
import { defineProps, defineEmits,toRefs } from 'vue'

const emit = defineEmits(['update:input'])

const props = defineProps(['modelValue', 'placeholder', 'max', 'inputType', 'error'])

const { modelValue, placeholder, max, inputType, error } = toRefs(props)

let isFocused = ref(false)

const inputComputed = computed({
  get: () => modelValue.value,
  set: (val) => emit('update:modelValue', val)
})
</script>

<template>
  <div>
    <client-only>
      <input
        :placeholder="placeholder"
        :maxlength="max"
        class="w-full bg-white text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none"
        :class="{ 'border-gray-500': isFocused, 'border-red-500': error }"
        @focus="isFocused = true"
        @blur="isFocused = false"
        :type="inputType"
        autocomplete="off"
        v-model="inputComputed"
      />
    </client-only>
    <span v-if="error" class="text-red-500 text-[14px] font-semibold">
      {{ error }}
    </span>
  </div>
</template>

<style scoped>

</style>
