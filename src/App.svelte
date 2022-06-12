<script>
  import TopNav from "./features/navigation/TopNav.svelte";
  import LeftNav from "./features/navigation/LeftNav.svelte";
  import RightNav from "./features/navigation/RightNav.svelte";
  import CommunityPage from "./features/community/CommunityPage.svelte";
  import AddPostPage from "./features/add-post/AddPostPage.svelte";
  import { Router, Route } from "svelte-routing";
</script>

<Router>
  <main>
    <div class="right">
      <TopNav pageName="Community" />
      <div class="content">
        <Route path="/">
          <CommunityPage />
          <!-- <AddPostPage /> -->
        </Route>
        <Route path="add-post">
          <AddPostPage />
        </Route>
      </div>
      <RightNav />
    </div>
    <div class="left">
      <LeftNav />
    </div>
  </main>
</Router>

<style>
  .content {
    overflow-y: auto;
    margin: 80px 40px;
  }

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
    right: 200px;
    left: 200px;
  }

  @media (max-width: 1000px) {
    .right {
      right: 0;
    }
  }

  @media (max-width: 600px) {
    .right {
      right: 0;
      left: 0;
    }
  }
</style>
