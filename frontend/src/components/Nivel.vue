<template>
  <div class="flex gap-10 p-6 font-sans bg-gray-50 min-h-screen">
    <div class="flex-1">
      <h1 class="text-3xl font-bold mb-4">🎨 Juego de Selectores CSS</h1>
      <h2 class="text-xl font-semibold mb-2">Visualización</h2>
      <p class="mb-4">
        Escribe un selector CSS que seleccione solo las bolas de helado de sabor
        <strong class="text-yellow-500">limón</strong>.
      </p>

      <div class="flex gap-6 mb-6">
        <div
          class="w-24 h-24 bg-gray-300 relative flex items-end justify-center rounded-md"
        >
          <div
            class="w-12 h-12 rounded-full bg-yellow-300 absolute bottom-2"
          ></div>
        </div>
        <div
          class="w-24 h-24 bg-gray-300 relative flex items-end justify-center rounded-md"
        >
          <div
            class="w-12 h-12 rounded-full bg-pink-300 absolute bottom-2"
          ></div>
        </div>
        <div
          class="w-24 h-24 bg-gray-300 relative flex items-end justify-center rounded-md"
        >
          <div
            class="w-12 h-12 rounded-full bg-yellow-300 absolute bottom-2"
          ></div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <label class="font-semibold">Selector CSS:</label>
        <input
          v-model="selector"
          placeholder="Ej: .limon"
          class="px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          @click="verificarSelector"
          class="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
        >
          Verificar
        </button>
      </div>
      <p class="mt-3 font-semibold" :class="resultadoColor">{{ resultado }}</p>
    </div>

    <div class="flex-1">
      <h2 class="text-xl font-semibold mb-2">HTML de referencia</h2>
      <pre
        class="bg-gray-100 p-4 rounded text-sm border border-gray-300 overflow-x-auto"
      >
&lt;div class="copa"&gt;
  &lt;div class="bola limon"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="copa"&gt;
  &lt;div class="bola fresa"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="copa"&gt;
  &lt;div class="bola limon"&gt;&lt;/div&gt;
&lt;/div&gt;
      </pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const selector = ref("");
const resultado = ref("");
const resultadoColor = ref("");

function verificarSelector() {
  let seleccionados;
  try {
    seleccionados = document.querySelectorAll(selector.value);
  } catch (e) {
    resultado.value = "⚠️ Selector inválido.";
    resultadoColor.value = "text-yellow-600";
    return;
  }

  const correctos = document.querySelectorAll(".bola.limon");

  const esCorrecto =
    seleccionados.length === correctos.length &&
    Array.from(seleccionados).every((el) => el.classList.contains("limon"));

  resultado.value = esCorrecto
    ? "✅ ¡Correcto! Has seleccionado todas las bolas de limón."
    : "❌ Aún no es correcto. Intenta de nuevo.";

  resultadoColor.value = esCorrecto ? "text-green-600" : "text-red-600";
}
</script>
