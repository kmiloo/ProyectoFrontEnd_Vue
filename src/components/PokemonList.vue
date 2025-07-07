<template>
  <div class="grid grid-cols-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
    <PokemonCard
      v-for="p in pokemons"
      :key="p.name"
      :pokemon="p"
      @add-favorite="$emit('add-favorite', p)"
    />
  </div>
</template>

<script setup>
import PokemonCard from './PokemonCard.vue'

const props = defineProps({
  pokemons: Array
})
</script>