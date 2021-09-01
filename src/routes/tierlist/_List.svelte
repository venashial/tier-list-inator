<script>
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';

	import { state } from './_state';

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
			color: 'bg-green-400'
		},
		{
			letter: 'd',
			color: 'bg-blue-400'
		},
		{
			letter: 'e',
			color: 'bg-purple-400'
		},
		{
			letter: 'f',
			color: 'bg-pink-500'
		}
	];
</script>

<div class="grid gap-1 bg-black" style="grid-template-columns: auto 1fr">
	{#each rows as row, index (index)}
		<div
			class="flex items-center justify-center {row.color} text-2xl text-black"
			style="width: calc(100vh / 7 - 0.25rem); height: calc(100vh / 7 - 0.25rem); grid-column: 1"
		>
			{row.letter.toUpperCase()}
		</div>
		<div
			class="bg-gray-700 flex gap-1"
			style="grid-column: 2"
			use:dndzone={{ items: $state.list[row.letter], flipDurationMs: 300, dropTargetStyle: {} }}
			on:consider={(e) => handle(e, row.letter)}
			on:finalize={(e) => handle(e, row.letter)}
		>
			{#each $state.list[row.letter] as item (item.id)}
				<div animate:flip={{ duration: 300 }} class="h-full" style="aspect-ratio: 1/1">
					<img
						src={item.url}
						alt="Item in tier list row"
						style="height: calc(100vh / 7 - 0.25rem);"
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>
