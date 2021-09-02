<script>
	import { dndzone } from 'svelte-dnd-action';
  import { flip } from 'svelte/animate';

	import { state } from './_state';
  import Item from '$lib/Item.svelte'

	function handle(e, letter) {
		$state.list[letter] = e.detail.items;
	}

	const rows = [
		{
			letter: 's',
			color: 'bg-red-500'
		},
		{
			letter: 'a',
			color: 'bg-yellow-500'
		},
		{
			letter: 'b',
			color: 'bg-yellow-400'
		},
		{
			letter: 'c',
			color: 'bg-green-500'
		},
		{
			letter: 'd',
			color: 'bg-blue-500'
		},
		{
			letter: 'e',
			color: 'bg-purple-500'
		},
		{
			letter: 'f',
			color: 'bg-pink-500'
		}
	];
</script>

<div class="grid gap-1 bg-black" style="grid-template-columns: auto 1fr" id="capture-area">
	{#each rows as row, index (index)}
		<div
			class="flex items-center justify-center {row.color} text-3xl text-black"
			style="width: calc(100vh / 7 - 0.25rem); height: calc(100vh / 7 - 0.25rem); grid-column: 1"
		>
			{row.letter.toUpperCase()}
		</div>
		<div
			class="bg-gray-700 flex gap-1 overflow-x-auto hide-scrollbar"
			style="grid-column: 2"
			use:dndzone={{ items: $state.list[row.letter], flipDurationMs: 300, dropTargetStyle: {} }}
			on:consider={(e) => handle(e, row.letter)}
			on:finalize={(e) => handle(e, row.letter)}
		>
			{#each $state.list[row.letter] as item (item.id)}
				<div animate:flip={{ duration: 300 }}>
          <Item url={item.url} />
				</div>
			{/each}
		</div>
	{/each}
</div>