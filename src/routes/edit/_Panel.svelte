<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';

  import download from '$lib/download.js'
  import { state, isRendering } from './_store'
  import Search from './_Search.svelte'
  import Item from '$lib/Item.svelte'

	function handle(e) {
		$state.pool = e.detail.items;
	}

  let copy_message = 'Copy link'

  function copyLink() {
    navigator.clipboard.writeText(window.location.href)
    copy_message = 'Copied link'
    setTimeout(() => {
      copy_message = 'Copy link'
    }, 1000);
  }
</script>

<div class="bg-black p-2.5 overflow-auto overflow-y-hidden flex flex-col gap-2">
  <Search />
	<div class="flex gap-2 children:flex-grow children:rounded">
		<button class="btn" on:click={() => { download('capture-area') }}>Download{$isRendering ? 'ing...' : ''}</button>
		<button class="btn" on:click={copyLink}>{copy_message}</button>
		<button class="btn">Main menu</button>
	</div>

	<div
		class="flex flex-wrap gap-2 rounded border-4 border-gray-700 mt-auto p-2 overflow-y-auto"
		style="grid-column: 2; height: 30vh; min-height: 30vh;"
		use:dndzone={{ items: $state.pool, flipDurationMs: 300, dropTargetStyle: {} }}
		on:consider={handle}
		on:finalize={handle}
	>
		{#each $state.pool as item (item.id)}
    <div animate:flip={{ duration: 300 }}>
      <Item url={item.url} />
    </div>
		{/each}
	</div>
</div>
