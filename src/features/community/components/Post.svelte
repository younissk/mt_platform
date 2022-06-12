<script>
  import PostHeading from "./PostHeading.svelte";
  import NavItem from "../../navigation/components/NavItem.svelte";
  import Comment from "./Comment.svelte";

  export let comments = [];

  export let headingData = {
    date: "17:40 07.06.2022",
    userName: "name",
    postTitle: "This is a cool article I found",
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Kaaba_Masjid_Haraam_Makkah.jpg",
    content:
      '<div class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem illum eius consequatur nemo recusandae porro voluptas consectetur doloribus voluptatum deleniti, quidem ratione vel unde, sit distinctio, aspernatur aliquam eum! Veritatis qui recusandae iusto nostrum. </div>',
  };

  $: commentsActive = false;
</script>

<div class="card">
  <PostHeading
    date={headingData.date}
    userName={headingData.userName}
    postTitle={headingData.postTitle}
    profilePicture={headingData.profilePicture}
  />
  <div class="content">
    {@html headingData.content}
  </div>
  <div class="bottom">
    <NavItem icon="thumb_up" />
    <div
      class="comments-button"
      on:click={() => (commentsActive = !commentsActive)}
    >
      <NavItem />
    </div>
  </div>
  {#if commentsActive}
    {#each comments as comment}
      <Comment CommentData={comment} />
    {/each}
  {/if}
</div>

<style>
  .content {
    margin: 8px;
  }

  .card {
    margin: 20px 0;
    padding: 12px;
    border-radius: 15px;
    background-color: #171718;
  }

  .bottom {
    margin-top: 5px;
    display: flex;
  }
</style>
