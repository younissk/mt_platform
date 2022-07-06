<script>
  import Lesson from "./Lesson.svelte";
  import { currentVideo } from "../../../utils/stores";

  export let lessons;
</script>

<!-- Overlay content -->
<div class="overlay-content">
  {#each lessons as lesson}
    <div on:click={() => currentVideo.set(lesson.video)}>
      <Lesson name={lesson.name} />
    </div>
  {/each}
</div>

<style>
  /* Position the content inside the overlay */
  .overlay-content {
    max-height: 100%;
    width: 100%; /* 100% width */
    display: flex;
    flex-direction: column;
    overflow: scroll;
    margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
  }
</style>
