<template>
  <div v-if="world">
    <button @click="goBack">Back</button>
    <img :src="world.flag_url" alt="World Flag" width="100" />
    <h2>{{ world.name }}</h2>
    <p>ID: {{ world.id }}</p>
    <p>
      URL: <a :href="world.url" target="_blank">{{ world.url }}</a>
    </p>
    <p>Start Location: {{ world.start_position_lat }}, {{ world.start_position_long }}</p>
    <p>Country Code: {{ world.country_code }}</p>
    <p>Language Code: {{ world.language_code }}</p>
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
