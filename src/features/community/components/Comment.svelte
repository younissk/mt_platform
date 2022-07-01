<script>
  import { getSingleUser } from "../../../firebase";
  import { onMount } from "svelte";
  export let CommentData = {
    author: "",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam?",
  };

  $: authorData = {};

  onMount(async () => {
    let data = await getSingleUser(CommentData.author);
    authorData = { ...data };
  });
</script>

<div class="comment">
  <div class="user">
    <img src={authorData.profilePicture} alt="" class="profilePicture" />
    <p class="userName">{authorData.userName}</p>
  </div>
  <p class="comment-text">
    {CommentData.text}
  </p>
</div>

<style>
  .comment {
    display: flex;
    padding-top: 10px;
    border-top: dashed 1px #4e4f51;
  }

  .comment-text {
    font-size: 12px;
    padding: 0;
    margin: 0;
  }
  /* User */
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    max-width: 50px;
    text-align: center;
  }

  .profilePicture {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: solid 1px #ca992c;
  }

  .userName {
    text-transform: uppercase;
    font-size: 8px;
  }
</style>
