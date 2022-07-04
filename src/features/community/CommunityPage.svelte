<script>
  import Post from "./components/Post.svelte";
  import { getPosts, isUserFirstTimeLogin } from "../../utils/firebase";
  import { onMount } from "svelte";
  import { currentPageTitle, UserIdStore } from "../../utils/stores";
  import { navigate } from "svelte-routing";
  import News from "./components/News.svelte";

  currentPageTitle.set("Community");

  let posts = [];

  onMount(async () => {
    if (await isUserFirstTimeLogin($UserIdStore)) {
      navigate("/profile", { replace: true });
    }
    let postSnapshot = await getPosts();
    posts = [...postSnapshot];
  });
</script>

<main>
  <div class="content">
    {#each posts as post}
      <Post data={post} />
    {/each}
  </div>
  <News />
</main>

<style>
  .content {
    flex: 1;
  }
  main {
    height: 100%;
    width: 100%;
    overflow: scroll;
    display: flex;
  }
</style>
