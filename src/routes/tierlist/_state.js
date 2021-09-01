import { writable } from 'svelte/store'

export const state = writable({
  list: {
    s: [
      {
        id: 'ew34',
        url: 'https://picsum.photos/200'
      }
    ],
    a: [
      {
        id: 'werwer',
        url: 'https://picsum.photos/200'
      },
      {
        id: 'wrwerwerwer',
        url: 'https://picsum.photos/200'
      }
    ],
    b: [
      {
        id: '238h40p',
        url: 'https://picsum.photos/200'
      }
    ],
    c: [],
    d: [],
    e: [],
    f: [],
  },
  pool: [
    {
      id: 'owjbw',
      url: 'https://picsum.photos/200'
    }
  ],
})