<script>
  import PostHeading from "./PostHeading.svelte";
  import NavItem from "../../navigation/components/NavItem.svelte";
  import Comment from "./Comment.svelte";
  import { addComment } from "../../../utils/firebase";
  import { UserIdStore } from "../../../utils/stores";
  import { Link } from "svelte-routing";

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

  $: expandedView = false;

  $: commentsActive = false;

  let newComment;
</script>

<main>
  <header>
    <PostHeading
      date={data.date}
      userName={data.userName}
      postTitle={data.postTitle}
      profilePicture={data.profilePicture}
    />
  </header>
  <article>
    <div class="content">
      {@html data.content}
    </div>
  </article>
  <footer>
    <div class="bottom">
      <NavItem icon="thumb_up" />
      <div
        class="comments-button"
        on:click={() => (commentsActive = !commentsActive)}
      >
        <NavItem redirect="" />
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
  </footer>
</main>

<style>
  main {
    position: relative;
    margin: 20px;
    padding: 12px;
    border-radius: 15px;
    background-color: #171718;
    transition: all 1s ease-in;
  }

  .content {
    margin: 8px;
  }

  .bottom {
    margin-top: 5px;
    display: flex;
  }
</style>
