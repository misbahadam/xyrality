import { describe, it, expect, beforeEach } from 'vitest'

// tests/unit/worldStore.spec.js
import { setActivePinia, createPinia } from 'pinia'
import { useWorldStore } from '../../stores/store'

describe('World Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('fetches worlds correctly', async () => {
    const store = useWorldStore()

    await store.fetchWorlds()
    expect(store.worlds.length).toBeGreaterThan(0)
  })

  it('sets sort mode', () => {
    const store = useWorldStore()

    store.setSortMode('name')
    expect(store.sortMode).toBe('name')
  })
})
