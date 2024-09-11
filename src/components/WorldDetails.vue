<template>
  <div
    class="bg-slate-950 min-h-screen p-6 text-white align-middle flex items-center justify-center text-center"
  >
    <div class="absolute top-0 left-0 m-6 mt-7">
      <button
        @click="goBack"
        class="px-7 py-2 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold"
      >
        Back
      </button>
    </div>

    <!-- World details framed in the center of the page -->
    <div
      v-if="world"
      class="justify-center align-middle bg-gray-800 p-8 rounded-lg shadow-md max-w-md w-full mt-8"
    >
      <p class="flex justify-center mt-12">
        <img :src="world.flag_url" alt="World Flag" width="100" />
      </p>
      <h2 class="text-3xl font-semibold mt-4">{{ world.name }}</h2>
      <div class="mt-4 text-left">
        <p><strong>ID:</strong> {{ world.id }}</p>
        <p class="mt-2">
          <strong>URL:</strong>
          <a :href="world.url" target="_blank" class="text-blue-400 underline">{{ world.url }}</a>
        </p>
        <p class="mt-2">
          <strong>Start Location:</strong> {{ world.start_position_lat }},
          {{ world.start_position_long }}
        </p>
        <p class="mt-2"><strong>Country Code:</strong> {{ world.country_code }}</p>
        <p class="mt-2"><strong>Language Code:</strong> {{ world.language_code }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useWorldStore } from '../stores/store'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const worldStore = useWorldStore()
    const worldId = parseInt(route.params.id, 10)
    const world = worldStore.worlds.find((w) => w.id === worldId)

    const goBack = () => {
      router.push('/')
    }

    return {
      world,
      worldStore,
      worldId,
      route,
      router,
      goBack
    }
  }
}
</script>
