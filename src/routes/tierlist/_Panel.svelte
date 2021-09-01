<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';

  import { state } from './_state'

	function handle(e) {
		$state.pool = e.detail.items;
	}
</script>

<div class="bg-black p-2.5 overflow-auto overflow-y-hidden flex flex-col gap-2">
	<input class="btn" type="search" placeholder="Search for items" aria-label="Search" />
	<div class="flex gap-2 children:flex-grow">
		<button class="btn">Screenshot</button>
		<button class="btn">Copy link</button>
		<button class="btn">Exit</button>
	</div>

	<div
		class="flex flex-wrap gap-2 rounded border-4 border-gray-700 mt-auto p-2 overflow-y-auto"
		style="grid-column: 2; height: 30vh;"
		use:dndzone={{ items: $state.pool, flipDurationMs: 300, dropTargetStyle: {} }}
		on:consider={handle}
		on:finalize={handle}
	>
		{#each $state.pool as item (item.id)}
			<div animate:flip={{ duration: 300 }} >
				<img
					src={item.url}
					alt="Item in pool area"
					style="height: calc(100vh / 7 - 0.25rem);"
				/>
			</div>
		{/each}
	</div>
</div>
