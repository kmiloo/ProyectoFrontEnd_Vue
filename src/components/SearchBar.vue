<template>
  <div class="mb-6 flex justify-center">
    <input v-model="search" type="text" placeholder="Buscar Pokémon" class="border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
    <button @click="$emit('search', search)" class="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700">Buscar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
</script>
