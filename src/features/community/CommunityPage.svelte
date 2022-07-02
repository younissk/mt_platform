<script>
  import Post from "./components/Post.svelte";
  import { getPosts, isUserFirstTimeLogin } from "../../firebase";
  import { onMount } from "svelte";
  import { currentPageTitle, UserIdStore } from "../../stores";
  import { navigate } from "svelte-routing";

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
</main>
