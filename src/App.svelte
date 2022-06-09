<script>
  import TopNav from "./features/navigation/TopNav.svelte";
  import LeftNav from "./features/navigation/LeftNav.svelte";
  import CommunityPage from "./features/community/CommunityPage.svelte";
</script>

<main>
  <div class="left">
    <LeftNav />
  </div>
  <div class="right">
    <TopNav pageName="Community" />
    <CommunityPage />
  </div>
</main>

<style>
  main {
    display: flex;
    height: 100%;
    width: 100%;
  }

  .left {
    position: fixed;
    width: 200px;
    height: 100%;
    top: 0;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .right {
    position: absolute;
    top: 0;
    right: 0;
    left: 200px;
  }
</style>
