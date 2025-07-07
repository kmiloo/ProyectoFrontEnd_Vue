<template>
  <div class="bg-white rounded-lg shadow-md p-4 text-center hover:scale-105 transform transition duration-200">
    <router-link :to="`/detalle/${id}`">
      <img :src="img" alt="pokemon" class="w-24 h-24 mx-auto mb-2" />
      <h2 class="capitalize font-semibold text-lg">{{ pokemon.name }}</h2>
    </router-link>
    <button @click="$emit('add-favorite', pokemon)" class="mt-3 text-sm bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-full">⭐ Favorito</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({ pokemon: Object })
const id = ref('')
const img = ref('')

onMounted(async () => {
  const res = await fetch(props.pokemon.url)
  const data = await res.json()
  id.value = data.id
  img.value = data.sprites.front_default
})
</script>