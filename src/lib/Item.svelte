<script>
  import { isRendering } from './../routes/edit/_store.js';

  export let url = '';
  export let margin = '';
  export let in_list = false;
  let show = true;
</script>

<div class="items-center justify-center bg-gray-800" style="height: calc(100vh / 7 - 0.25rem); width: calc(100vh / 7 - 0.25rem); display: {show ? 'flex' : 'none'}; margin: {margin || '0rem'}">
  <img class="max-h-full max-w-full flex-shrink" src="{$isRendering && in_list ? 'https://images.weserv.nl/?url=' : ''}{decodeURIComponent(JSON.parse('"' + url.replace(/\"/g, '\\"') + '"'))}" on:error={() => {show = false}}/>
</div>