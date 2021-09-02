<script>
  export let url = '';
  let show = true;
</script>

<div class="items-center justify-center bg-gray-800" style="height: calc(100vh / 7 - 0.25rem); width: calc(100vh / 7 - 0.25rem); display: {show ? 'flex' : 'none'}">
  <img class="max-h-full max-w-full flex-shrink" src={decodeURIComponent(JSON.parse('"' + url.replace(/\"/g, '\\"') + '"'))} on:error={() => {show = false}}/>
</div>