<script>
  import MainApp from "./MainApp.svelte";
  import Login from "./Login.svelte";
  import { UserIdStore } from "./stores";
</script>

{#if $UserIdStore === ""}
  <Login />
{:else}
  <MainApp />
{/if}
