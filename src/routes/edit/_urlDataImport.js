import LZString from "lz-string";

import { state } from './_store'

export async function loadData() {
  const hash = window.location.hash.substring(1);
  if (hash) {
    try {
    const decompressed = LZString.decompressFromEncodedURIComponent(hash)
    const json = JSON.parse(decompressed)
    console.log(json)
    state.update(() => json)
    } catch (error) {
      console.error(error)
    }
  }
}

export async function updateData(state) {
  const compressed = LZString.compressToEncodedURIComponent(JSON.stringify(state))
  window.location.hash = compressed// === 'N4IgNglgzgLiBcooINoF0A0ICGrMgCM8sBjYkAE3IFNyAzPAXywAcB7NsJoA' ? '' : compressed // if compressed is the default value, don't update the hash
}