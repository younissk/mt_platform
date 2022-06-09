<script>
  import Post from "./components/Post.svelte";

  let posts = [
    {
      date: "17:40 07.06.2022",
      userName: "name",
      postTitle: "This is a cool article I found",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/6/67/Kaaba_Masjid_Haraam_Makkah.jpg",
      content:
        '<div class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem illum eius consequatur nemo recusandae porro voluptas consectetur doloribus voluptatum deleniti, quidem ratione vel unde, sit distinctio, aspernatur aliquam eum! Veritatis qui recusandae iusto nostrum. </div>',
    },
    {
      date: "17:40 07.06.2022",
      userName: "Test Username",
      postTitle: "This is a heading for a post / discussion",
      profilePicture:
        "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
      content:
        '<h1 id="test-heading">Test heading</h1><p>This is a test article to see how It may look. This is a test article to see how It may look. This is a test article to see how It may look. This is a test article to see how It may look. This is a test article to see how It may look. This is a test article to see how It may look. </p><h2 id="heading-two">Heading two</h2><p>This is a test article to see how It may look. This is a test article to see how It may look. </p>',
    },
    {
      date: "17:40 07.06.2022",
      userName: "Testing",
      postTitle: "What do you think of this?",
      profilePicture:
        "https://th-thumbnailer.cdn-si-edu.com/NaExfGA1op64-UvPUjYE5ZqCefk=/fit-in/1600x0/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
      content:
        '<div class="content"> <img style="width: 100%" src="https://hpd.de/sites/hpd.de/files/field/image/taj_mahal.jpg" /> </div>',
    },
    {
      date: "17:40 07.06.2022",
      userName: "name",
      postTitle: "This is a cool article I found",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/6/67/Kaaba_Masjid_Haraam_Makkah.jpg",
      content:
        '<div class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem illum eius consequatur nemo recusandae porro voluptas consectetur doloribus voluptatum deleniti, quidem ratione vel unde, sit distinctio, aspernatur aliquam eum! Veritatis qui recusandae iusto nostrum. </div>',
    },
    {
      date: "17:40 07.06.2022",
      userName: "Test Username",
      postTitle: "This is a heading for a post / discussion",
      profilePicture:
        "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
      content:
        '<div class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem illum eius consequatur nemo recusandae porro voluptas consectetur doloribus voluptatum deleniti, quidem ratione vel unde, sit distinctio, aspernatur aliquam eum! Veritatis qui recusandae iusto nostrum. </div>',
    },
    {
      date: "17:40 07.06.2022",
      userName: "Testing",
      postTitle: "What do you think of this?",
      profilePicture:
        "https://th-thumbnailer.cdn-si-edu.com/NaExfGA1op64-UvPUjYE5ZqCefk=/fit-in/1600x0/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg",
      content:
        '<div class="content"> <img style="width: 100%" src="https://hpd.de/sites/hpd.de/files/field/image/taj_mahal.jpg" /> </div>',
    },
  ];
</script>

<main>
  {#each posts as post}
    <Post headingData={post} />
  {/each}
</main>

<style>
  main {
    overflow-y: auto;
    margin: 20px 40px;
  }
</style>
