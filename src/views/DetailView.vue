<template>
  <div class="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto">
    <div v-if="pokemon">
      <h1 class="text-3xl font-bold mb-4 capitalize text-center">{{ pokemon.name }}</h1>
      <img :src="pokemon.sprites.front_default" alt="pokemon" class="w-40 mx-auto mb-4" />
      <div class="mb-4 text-center">
        <p class="font-semibold">Tipos:</p>
        <div class="flex justify-center gap-2 mt-1">
          <span v-for="t in pokemon.types" :key="t.type.name" class="bg-indigo-200 px-2 py-1 rounded text-sm">
            {{ t.type.name }}
          </span>
        </div>
      </div>
      <div>
        <p class="font-semibold mb-1">Estadísticas:</p>
        <ul class="list-disc list-inside">
          <li v-for="stat in pokemon.stats" :key="stat.stat.name">
            {{ stat.stat.name }}: {{ stat.base_stat }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="text-center text-gray-600">Cargando...</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const pokemon = ref(null)

onMounted(async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`)
  pokemon.value = await res.json()
})
</script>