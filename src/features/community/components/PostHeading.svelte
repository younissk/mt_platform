<script>
  export let date = "17:40 07.06.2022";
  export let userName = "Test Username";
  export let postTitle = "This is a heading for a post / discussion";
  export let profilePicture =
    "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8";
</script>

<div class="heading">
  <div class="user">
    <img src={profilePicture} alt="" class="profilePicture" />
    <p class="userName">{userName}</p>
  </div>
  <div class="title">
    <div class="date">{date}</div>
    <p class="postTitle">{postTitle}</p>
  </div>
</div>

<style>
  .heading {
    display: flex;
  }

  /* Right part */

  .date {
    font-size: 10px;
    font-weight: bold;
  }

  .postTitle {
    font-size: 20px !important;
  }

  /* Left part */

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    max-width: 50px;
    text-align: center;
  }

  .profilePicture {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 1px #ca992c;
  }

  .userName {
    text-transform: uppercase;
    font-size: 10px;
  }
</style>
