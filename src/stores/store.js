import { defineStore } from 'pinia'
import axios from 'axios'

export const useWorldStore = defineStore('worldStore', {
  state: () => ({
    worlds: [],
    loading: [],
    sortMode: 'id' // Default sorting by world ID
  }),
  getters: {
    //loading: (state) => state.worlds.length > 0,
    sortedWorlds(state) {
      return [...state.worlds].sort((a, b) => {
        if (state.sortMode === 'id') {
          return a.id - b.id
        }
        return a.name.localeCompare(b.name)
      })
    }
  },
  actions: {
    async fetchWorlds() {
      this.worlds.push('fetchWorlds')
      this.loading = true
      try {
        const response = await axios.get('https://routing.missionchief.com/api/v1/routing.json')
        this.worlds = response.data.worlds
        console.log('Worlds fetched:', this.worlds)
      } catch (error) {
        console.error('Error fetching worlds:', error)
      } finally {
        this.loading = false
      }
    },
    setSortMode(mode) {
      this.sortMode = mode
    }
  }
})
