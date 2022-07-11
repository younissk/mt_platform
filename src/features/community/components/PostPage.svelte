<script>
  import PostHeading from "./PostHeading.svelte";
  import Comment from "./Comment.svelte";
  import { addComment } from "../../../utils/firebase";
  import { UserIdStore } from "../../../utils/stores";
  import { expandPost } from "../../../utils/stores";

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

  let newComment;
</script>

<main>
  <div class="heading">
    <PostHeading
      date={data.date}
      userName={data.userName}
      postTitle={data.postTitle}
      profilePicture={data.profilePicture}
    />
    <button on:click={() => expandPost.set(!$expandPost)}>close</button>
  </div>
  <div class="content">
    {@html data.content}
  </div>
  <div class="comments">
    {#each comments as comment}
      <Comment CommentData={comment} />
    {/each}
  </div>
  <div class="bottom">
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
  </div>
</main>

<style>
  main {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .heading {
    margin: 20px;
  }

  .content {
    margin: 20px;
    flex: 1;
    margin: 8px;
    overflow: scroll;
  }

  .comments {
    flex: 1;
    overflow: scroll;
  }

  .bottom {
    display: flex;
  }
  .bottom input {
    flex: 1;
  }
</style>
