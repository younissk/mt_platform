<script>
  import PostHeading from "./PostHeading.svelte";
  import NavItem from "../../navigation/components/NavItem.svelte";

  export let headingData = {
    date: "17:40 07.06.2022",
    userName: "name",
    postTitle: "This is a cool article I found",
    profilePicture:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Kaaba_Masjid_Haraam_Makkah.jpg",
    content:
      '<div class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem illum eius consequatur nemo recusandae porro voluptas consectetur doloribus voluptatum deleniti, quidem ratione vel unde, sit distinctio, aspernatur aliquam eum! Veritatis qui recusandae iusto nostrum. </div>',
  };
</script>

<div class="card">
  <PostHeading
    date={headingData.date}
    userName={headingData.userName}
    postTitle={headingData.postTitle}
    profilePicture={headingData.profilePicture}
  />
  {@html headingData.content}
  <div class="bottom">
    <NavItem icon="thumb_up" />
    <NavItem />
  </div>
</div>

<style>
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
