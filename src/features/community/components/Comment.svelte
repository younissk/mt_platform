<script>
  export let CommentData = {
    userName: "Test Username",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam?",
    profilePicture:
      "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
  };
</script>

<div class="comment">
  <div class="user">
    <img src={CommentData.profilePicture} alt="" class="profilePicture" />
    <p class="userName">{CommentData.userName}</p>
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
