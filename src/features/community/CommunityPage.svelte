<script>
  import Post from "./components/Post.svelte";
  import { getPosts } from "../../firebase";
  import { onMount } from "svelte";
  let postsTest = [
    {
      date: "17:40 07.06.2022",
      userName: "name",
      postTitle: "This is a cool article I found",
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/6/67/Kaaba_Masjid_Haraam_Makkah.jpg",
      content:
        '<div class="content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem illum eius consequatur nemo recusandae porro voluptas consectetur doloribus voluptatum deleniti, quidem ratione vel unde, sit distinctio, aspernatur aliquam eum! Veritatis qui recusandae iusto nostrum. </div>',
      comments: [
        {
          userName: "Username",
          profilePicture:
            "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam?",
        },
        {
          userName: "testing",
          profilePicture:
            "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim assumenda facilis quod! Quo aspernatur ab ullam alias perferendis deleniti voluptatibus. Libero tempore culpa possimus omnis facilis repudiandae. Libero perferendis eum reprehenderit eos, ipsa expedita numquam quasi repudiandae porro sequi non?",
        },
      ],
    },
    {
      date: "17:40 07.06.2022",
      userName: "Test Username",
      postTitle: "This is a heading for a post / discussion",
      profilePicture:
        "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
      content:
        '<h1 id="test-heading">Test heading</h1><p>This is a test article to see how It may look. This is a test article to see how It may look. This is a test article to see how It may look. This is a test article to see how It may look. This is a test article to see how It may look. This is a test article to see how It may look. </p><h2 id="heading-two">Heading two</h2><p>This is a test article to see how It may look. This is a test article to see how It may look. </p>',
      comments: [
        {
          userName: "test",
          profilePicture:
            "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
          text: "Lorem",
        },
        {
          userName: "testing",
          profilePicture:
            "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
          text: "Lorem ipsum, quasi repudiandae porro sequi non?",
        },
        {
          userName: "testing",
          profilePicture:
            "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
          text: "Lorem ipsum, quasi repudiandae porro sequi non?",
        },
      ],
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
      comments: [
        {
          userName: "test",
          profilePicture:
            "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
          text: "Lorem",
        },
        {
          userName: "testing",
          profilePicture:
            "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
          text: "Lorem ipsum, quasi repudiandae porro sequi non?",
        },
        {
          userName: "testing",
          profilePicture:
            "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
          text: "Lorem ipsum, quasi repudiandae porro sequi non?",
        },
      ],
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

  let posts = [];

  onMount(async () => {
    let postSnapshot = await getPosts();
    posts = [...postSnapshot];
  });
</script>

<main>
  <div class="content">
    {#each posts as post}
      <!-- <Post headingData={post.data()} comments={post.comments} /> -->
      <Post headingData={post} />
    {/each}
  </div>
</main>
