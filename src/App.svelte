<script>
  import TopNav from "./features/navigation/TopNav.svelte";
  import LeftNav from "./features/navigation/LeftNav.svelte";
  import MobileNav from "./features/navigation/components/MobileNav.svelte";
  import Login from "./features/login/Login.svelte";
  import { Router, Route } from "svelte-routing";
  import { UserIdStore } from "./utils/stores";
  import AppRouter from "./features/AppRouter.svelte";
</script>

<Router>
  {#if $UserIdStore === ""}
    <Login />
  {:else}
    <main>
      <LeftNav />
      <div class="right">
        <TopNav />
        <AppRouter />
      </div>
      <MobileNav />
    </main>
  {/if}
</Router>

<style>
  main {
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
