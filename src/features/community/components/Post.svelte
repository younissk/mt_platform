<script>
  import PostHeading from "./PostHeading.svelte";
  import NavItem from "../../navigation/components/NavItem.svelte";
  import Comment from "./Comment.svelte";
  import { addComment } from "../../../firebase";
  import { UserIdStore } from "../../../stores";

  export let data = {
    date: "17:40 07.06.2022",
    id: "",
    author: "",
    userName: "name",
    postTitle: "This is a cool article I found",
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Kaaba_Masjid_Haraam_Makkah.jpg",
    content:
      '<div class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem illum eius consequatur nemo recusandae porro voluptas consectetur doloribus voluptatum deleniti, quidem ratione vel unde, sit distinctio, aspernatur aliquam eum! Veritatis qui recusandae iusto nostrum. </div>',
  };

  $: comments = [...data.comments];

  $: commentsActive = false;

  let newComment;
</script>

<div class="card">
  <PostHeading
    date={data.date}
    userName={data.userName}
    postTitle={data.postTitle}
    profilePicture={data.profilePicture}
  />
  <div class="content">
    {@html data.content}
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
    <input
      type="text"
      id="fname"
      name="fname"
      placeholder="Title"
      bind:value={newComment}
    />
    <button
      on:click={() => {
        addComment(data.id, newComment, $UserIdStore);
        comments = [...comments, { author: data.author, text: newComment }];
        newComment = "";
      }}>+</button
    >
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
