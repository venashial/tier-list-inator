<script>
import { onMount } from 'svelte';
import {page} from "$app/stores"
import { browser } from '$app/env';

import { state } from './_store'
import List from './_List.svelte';
import Panel from './_Panel.svelte';
import { loadData, updateData } from './_urlDataImport.js'

let checkedHash = false

onMount(() => {
  loadData();
  checkedHash = true;
});

state.subscribe((value) => {
  if (browser && checkedHash) {
    updateData(value)
  }
})
</script>

<svelte:head>
	<title>Editing a tier list</title>
</svelte:head>

<div class="grid grid-cols-list h-full">
    <List />
    <Panel />
</div>