<template>
    <div class="bg-white p-4 rounded shadow mb-6">
      <h3 class="text-lg font-semibold mb-2">Selecciona un nivel:</h3>
      <div class="grid grid-cols-6 gap-2">
        <button
          v-for="(n, i) in niveles"
          :key="n.id"
          :class="[
            'px-3 py-2 rounded text-sm font-medium',
            i === nivelActual ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
          ]"
          @click="$emit('cambiar-nivel', i)"
        >
          {{ n.id }}
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    niveles: Array,
    nivelActual: Number
  })
  </script>
  
  <style scoped>
  button {
    transition: background-color 0.2s;
  }
  </style>
  