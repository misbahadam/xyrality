<template>
  <div class="bg-slate-950 min-h-screen p-6 text-white align-middle">
    <!-- Loading state -->
    <div v-if="worldStore?.loading" class="text-center">
      <div class="text-lg font-semibold">Loading...</div>
    </div>

    <!-- World list data fetched -->
    <div v-else-if="worldStore?.worlds?.length > 0">
      <!-- Sort Toggle using ToggleComponent -->
      <div class="flex items-center justify-center mb-6">
        <div class="flex items-center">
          <ToggleComponent
            v-model="isSortByName"
            v-bind:value="isSortByName"
            @toggle-sort="toggle"
          />
          <span class="ml-3 text-lg">{{ isSortByName ? 'Sort by ID' : 'Sort by Name' }}</span>
        </div>
      </div>

      <!-- Grid view for the Worlds -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="world in worldStore?.sortedWorlds"
          :key="world.id"
          @click="viewDetails(world)"
          class="cursor-pointer bg-slate-800 rounded-lg p-4 shadow-lg hover:bg-slate-700 transition duration-300"
        >
          <img :src="world.flag_url" alt="World Flag" class="w-12 h-12 mb-3 mx-auto" />
          <div class="text-center">
            <h3 class="text-xl font-semibold">{{ world.name }}</h3>
            <p class="text-sm text-gray-400">
              {{ world.id }}
            </p>
            <p class="text-sm text-gray-400">
              {{ world.country_code }} - {{ world.language_code }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Fallback message for no worlds -->
    <div
      v-show="!worldStore?.loading && worldStore?.worlds?.length === 0"
      class="text-center text-lg"
    >
      No worlds available.
    </div>
  </div>
</template>

<script>
import { useWorldStore } from '../stores/store.js'
import { useRouter } from 'vue-router'
import { ref, onMounted, watch } from 'vue'
import ToggleComponent from './ToggleComponent.vue'

export default {
  components: {
    ToggleComponent // Register the component here
  },
  methods: {
    toggle() {
      this.isSortByName = !this.isSortByName
    }
  },
  setup() {
    const worldStore = useWorldStore()
    const router = useRouter()
    const isSortByName = ref(false) // Default is sorting by ID

    onMounted(() => {
      worldStore.fetchWorlds() // Fetch world data when component mounts
    })

    //watch(isSortByName, (newValue) => {
    //  const sortMode = newValue ? 'name' : 'id'
    //  worldStore.setSortMode(sortMode)
    //})

    watch(isSortByName, (newValue, oldValue) => {
      console.log('Toggle value unchanged:', oldValue) // Debugging statement
      console.log('Toggle value changed:', newValue) // Debugging statement
      const sortMode = newValue ? 'name' : 'id'
      console.log('Setting sort mode to:', sortMode) // Debugging statement
      worldStore.setSortMode(sortMode)
    })

    // Watch for changes in `toggleValue` and set sort mode in Pinia store
    watch(
      () => isSortByName.value, // Watch the reactive `toggleValue`
      (newValue) => {
        console.log('Toggle value changed:', newValue) // Debugging log
        const sortMode = newValue ? 'name' : 'id' // Set sort mode based on toggle value
        worldStore.setSortMode(sortMode) // Update sort mode in Pinia store
      },
      { immediate: true } // This will trigger the watch handler immediately after mounting
    )

    // Method to toggle sorting between ID and Name
    const toggleSortMode = () => {
      const newSortMode = worldStore.sortMode === 'id' ? 'name' : 'id'
      worldStore.setSortMode(newSortMode)
    }

    const viewDetails = (world) => {
      router.push(`/world/${world.id}`)
    }

    return {
      worldStore,
      toggleSortMode, // Return toggle function for use in template
      viewDetails,
      isSortByName
    }
  }
}
</script>

<style>
.sort-toggle {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.sort-toggle span {
  margin-left: 10px;
  font-size: 16px;
}
</style>
