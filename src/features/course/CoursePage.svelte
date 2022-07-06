<script>
  import { currentPageTitle } from "../../utils/stores";
  import VideoPlayer from "svelte-video-player";
  import LessonList from "./components/LessonsList.svelte";
  import { getLessons } from "../../utils/firebase";
  import { onMount } from "svelte";
  import { currentVideo } from "../../utils/stores";

  $: lessons = [];
  onMount(async () => {
    let data = await getLessons("xp4CyyC7voDEfTFmVIoQ");
    lessons = [...data];
    currentVideo.set(lessons[0].video);
  });

  currentPageTitle.set("Courses");
</script>

<main>
  <div class="video-container">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video controls src={$currentVideo} />
  </div>
  <LessonList {lessons} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
    /* margin: 20px; */
  }

  .video-container {
    display: flex;
  }

  .video-container video {
    width: 100%;
  }
</style>
