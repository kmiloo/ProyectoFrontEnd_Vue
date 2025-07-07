<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-100 to-white text-gray-800">
    <header class="bg-indigo-600 text-white py-4 shadow-md">
      <h1 class="text-center text-3xl font-bold">PokeDex Interactiva</h1>
    </header>
    <main class="max-w-6xl mx-auto px-4 py-6">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>