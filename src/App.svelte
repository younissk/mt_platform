<script>
  export let name;
  import TopNav from "./features/navigation/TopNav.svelte";
  import LeftNav from "./features/navigation/LeftNav.svelte";
</script>

<main>
  <LeftNav />
  <div class="app">
    <TopNav />
    <h1>test</h1>
  </div>
</main>

<style>
  main {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .app {
    background-color: #1a1e23;
    width: 100%;
  }
</style>
