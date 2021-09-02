import { writable } from 'svelte/store'

export const state = writable({
  list: {
    s: [],
    a: [],
    b: [],
    c: [],
    d: [],
    e: [],
    f: [],
  },
  pool: [],
})