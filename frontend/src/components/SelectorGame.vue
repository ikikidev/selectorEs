<template>
  <div class="min-h-screen p-8 font-sans bg-gray-50">
    <div class="max-w-5xl mx-auto bg-white p-6 rounded shadow">
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-pink-600">
            Selectores CSS Challenge
          </h1>
          <p class="text-gray-600 text-sm mt-1">
            Aprende y practica selectores CSS de forma divertida e interactiva
            ✨
          </p>
        </div>
      </div>
      <NivelMenu
        :niveles="niveles"
        :nivelActual="nivelActual"
        @cambiar-nivel="irANivel"
      />

      <ProgressBar :actual="nivelActual + 1" :total="niveles.length" />
      <h2 class="text-2xl font-bold mb-4">
        Nivel {{ nivelActual + 1 }}: {{ nivel.titulo }}
      </h2>

      <!-- Código fuente bonito -->
      <div class="mb-6">
        <div
          class="bg-pink-50 border border-pink-200 rounded-md overflow-hidden shadow-md"
        >
          <div class="bg-pink-200 px-3 py-1 flex gap-2">
            <span class="w-3 h-3 rounded-full bg-pink-400"></span>
            <span class="w-3 h-3 rounded-full bg-amber-400"></span>
            <span class="w-3 h-3 rounded-full bg-teal-400"></span>
          </div>
            <pre class="language-markup bg-pink-50 p-4 overflow-x-auto max-h-64 text-base leading-relaxed rounded-md shadow-md"><code class="language-markup font-mono text-gray-800" v-html="highlightedHtml"></code></pre>
        </div>
      </div>

      <div class="mb-4">
        <label class="block font-semibold mb-1">Escribe tu selector CSS:</label>
        <input
          v-model="selector"
          class="border rounded px-3 py-1 w-full"
          placeholder="Ej: .activo"
        />
      </div>

      <div class="mb-6">
        <button
          @click="verificarSelector"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Verificar
        </button>
        <p class="mt-3 font-semibold" :class="resultadoColor">
          {{ resultado }}
        </p>
        <p
          v-if="intentosFallidos >= 3 && !esCorrecto"
          class="mt-2 text-sm text-yellow-700 bg-yellow-100 border border-yellow-300 px-4 py-2 rounded"
        >
          💡 Pista: prueba con alguno de estos selectores:
          <span class="font-mono text-blue-700">
            {{ nivel.selector.join(", ") }}
          </span>
        </p>
      </div>

      <button
        v-if="esCorrecto && nivelActual + 1 < niveles.length"
        @click="siguienteNivel"
        class="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Siguiente nivel
      </button>
      <p v-else-if="esCorrecto" class="text-green-700 font-semibold mt-4">
        🎉 ¡Has completado todos los niveles!
      </p>
    </div>
  </div>
  <footer
    class="fixed bottom-0 left-0 w-full bg-gray-100 border-t text-center text-sm text-gray-600 py-2 z-50"
  >
    <p>
      Desarrollado por
      <a
        href="https://github.com/ikikidev"
        target="_blank"
        class="text-blue-600 hover:underline"
        >ikikidev</a
      >
      |
      <a
        href="https://www.linkedin.com/in/victoria-n-9b8423180/"
        target="_blank"
        class="text-blue-600 hover:underline"
        >LinkedIn</a
      >
      |
      <a
        href="https://www.instagram.com/ikikidev/"
        target="_blank"
        class="text-blue-600 hover:underline"
        >Instagram</a
      >
      | Código abierto bajo licencia
      <a
        href="https://opensource.org/licenses/MIT"
        target="_blank"
        class="text-blue-600 hover:underline"
        >MIT</a
      >
    </p>
  </footer>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import niveles from "../niveles_css_json.json";
import nivelesPretty from "../niveles_css_json_con_pretty.json";
import NivelMenu from "./NivelMenu.vue";
import ProgressBar from "./ProgressBar.vue";
import confetti from "canvas-confetti";
import { html as beautifyHtml } from "js-beautify";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';



const nivelActual = ref(0);
const selector = ref("");
const resultado = ref("");
const resultadoColor = ref("");
const esCorrecto = ref(false);
const preview = ref(null);
const intentosFallidos = ref(0);

const highlightedHtml = computed(() => {
  const raw = decodeHtml(nivelesPretty[nivelActual.value].html_pretty);
  console.log(JSON.stringify(decodeHtml(nivelesPretty[nivelActual.value].html_pretty)));
  return Prism.highlight(raw, Prism.languages.markup, "markup");
});

const nivel = computed(() => niveles[nivelActual.value]);

const nivelesPrettyHtml = computed(() => nivel.value.html_pretty);

onMounted(() => {
  Prism.highlightAll();
});

function irANivel(index) {
  nivelActual.value = index;
  selector.value = "";
  resultado.value = "";
  resultadoColor.value = "";
  esCorrecto.value = false;
}
function decodeHtml(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function verificarSelector() {
  const respuestasCorrectas = Array.isArray(nivel.value.selector)
    ? nivel.value.selector
    : [nivel.value.selector];

  const normalizar = (str) => str.trim().replace(/\s+/g, " ").toLowerCase();
  const respuestaAlumno = normalizar(selector.value);

  const acierto = respuestasCorrectas.some(
    (correcta) => normalizar(correcta) === respuestaAlumno
  );

  esCorrecto.value = acierto;

  if (acierto) {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.4 },
    });
    intentosFallidos.value = 0; // reiniciar en caso de acierto
  } else {
    intentosFallidos.value++;
  }

  resultado.value = acierto
    ? "✅ ¡Correcto!"
    : "❌ Incorrecto, intenta otra vez.";
  resultadoColor.value = acierto ? "text-green-600" : "text-red-600";
}

function siguienteNivel() {
  nivelActual.value++;
  selector.value = "";
  resultado.value = "";
  resultadoColor.value = "";
  intentosFallidos.value = 0;
  esCorrecto.value = false;
}
</script>
