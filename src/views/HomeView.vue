<template>
  <div>
    <SearchBar @search="fetchPokemonByName" />
    <div class="space-y-8">
      <div v-for="region in regions" :key="region.name" className="bg-white shadow-lg rounded-lg p-4">
        <h2 class="text-xl font-semibold mb-4 text-indigo-700">{{ region.name }}</h2>
        <PokemonList :pokemons="region.pokemons" @add-favorite="addFavorite" />
      </div>
    </div>

    <div class="mt-10">
      <h2 class="text-2xl font-semibold mb-2">Favoritos ⭐</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <PokemonCard v-for="p in favorites" :key="p.name" :pokemon="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import PokemonList from '../components/PokemonList.vue'
import PokemonCard from '../components/PokemonCard.vue'

const favorites = ref([])
const regions = ref([])

const starterData = [
  { name: 'Kanto', starters: ['bulbasaur', 'charmander', 'squirtle'] },
  { name: 'Johto', starters: ['chikorita', 'cyndaquil', 'totodile'] },
  { name: 'Hoenn', starters: ['treecko', 'torchic', 'mudkip'] },
  { name: 'Sinnoh', starters: ['turtwig', 'chimchar', 'piplup'] },
  { name: 'Unova', starters: ['snivy', 'tepig', 'oshawott'] },
  { name: 'Kalos', starters: ['chespin', 'fennekin', 'froakie'] },
  { name: 'Alola', starters: ['rowlet', 'litten', 'popplio'] },
  { name: 'Galar', starters: ['grookey', 'scorbunny', 'sobble'] },
  { name: 'Paldea', starters: ['sprigatito', 'fuecoco', 'quaxly'] }
]

async function fetchInitialPokemons() {
  const regionRequests = await Promise.all(
    starterData.map(async region => {
      const starters = await Promise.all(
        region.starters.map(async name => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          const data = await res.json()
          return { name: data.name, url: `https://pokeapi.co/api/v2/pokemon/${data.id}` }
        })
      )
      return { name: region.name, pokemons: starters }
    })
  )
  regions.value = regionRequests
}

function addFavorite(pokemon) {
  if (!favorites.value.find(fav => fav.name === pokemon.name)) {
    favorites.value.push(pokemon)
  }
}

onMounted(fetchInitialPokemons)
</script>