<script>
  import Post from "./components/Post.svelte";
  import { getPosts, isUserFirstTimeLogin } from "../../utils/firebase";
  import { onMount } from "svelte";
  import {
    currentPageTitle,
    UserIdStore,
    expandPost,
  } from "../../utils/stores";
  import { navigate } from "svelte-routing";
  import PostPage from "./components/PostPage.svelte";
  import News from "./components/News.svelte";

  currentPageTitle.set("Community");

  let posts = [];

  $: currentPostData = {};
  $: singlePostView = false;

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
    {#if $expandPost}
      <PostPage data={currentPostData} />
    {:else}
      {#each posts as post}
        <div class="post-container">
          <Post data={post} />
          <button
            on:click={() => {
              expandPost.set(!$expandPost);
              currentPostData = { ...post };
              console.log(singlePostView, currentPostData);
            }}>Expand</button
          >
        </div>
      {/each}
    {/if}
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

  .post-container {
    position: relative;
  }

  button {
    position: absolute;
    top: 10px;
    right: 30px;
  }
</style>
