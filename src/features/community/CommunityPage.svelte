<script>
  import Post from "./components/Post.svelte";
  import { getPosts } from "../../firebase";
  import { onMount } from "svelte";

  let posts = [];

  onMount(async () => {
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
</main>
