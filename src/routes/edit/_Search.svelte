<script>
import debounce from 'debounce'
	import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';
  import Item from '$lib/Item.svelte'

let term = ""
let results = []
let loading = false

function handle(e) {
		results = e.detail.items;
	}

async function search() {
  loading = true
  results = []
  try {
    const response = await (await fetch(`/image_search.json?term=${encodeURI(term)}`)).json()
    results = response.splice(0, 20).map(result => {
      return {
      url: result.url,
      id: randomId(),
      }
    })
  } catch (error) {
    alert(error)
  } finally {
    loading = false
  }
}

function randomId() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}
</script>

<input class="btn rounded {term ? 'rounded-b-none' : ''}" type="search" placeholder="Search for items" aria-label="Search" bind:value={term} on:input={debounce(search, 300)} />
{#if term}
<div class="bg-gray-700 rounded-b p-2 flex flex-wrap overflow-auto border-t-2 border-gray-400" style="margin-top: -0.5rem;" use:dndzone={{ items: results, flipDurationMs: 300, dropTargetStyle: {} }}
    on:consider={handle}
    on:finalize={handle}>
    {#if loading}
    Loading...
    {:else}
    {#each results as item (item.id)}
    <div animate:flip={{ duration: 300 }}>
    <Item url={item.url} margin="0.2rem" />
    </div>
    {/each}
    {/if}
</div>
{/if}
