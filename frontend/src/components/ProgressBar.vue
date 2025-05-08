<template>
    <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner mb-6">
      <div
        class="h-full bg-pink-500 transition-all duration-500 ease-out rounded-r-full"
        :style="{ width: progreso + '%' }"
      ></div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  
  const props = defineProps({
    total: Number,
    actual: Number
  })
  
  const progreso = computed(() => Math.round((props.actual / props.total) * 100))
  </script>