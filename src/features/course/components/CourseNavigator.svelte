<script>
  import LessonsList from "./LessonsList.svelte";
  let nav;

  function openNav() {
    nav.style.width = "200px";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    nav.style.width = "0%";
  }
</script>

<!-- The overlay -->
<div bind:this={nav} id="myNav" class="overlay">
  <!-- Button to close the overlay navigation -->
  <div class="closebtn" on:click={() => closeNav()}>&times;</div>

  <LessonsList />
</div>

<!-- Use any element to open/show the overlay navigation menu -->
<span on:click={() => openNav()}>open</span>

<style>
  /* The Overlay (background) */
  .overlay {
    /* Height & width depends on how you want to reveal the overlay (see JS below) */
    height: 100%;
    width: 0;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    background-color: rgb(0, 0, 0); /* Black fallback color */
    overflow-x: scroll; /* Disable horizontal scroll */
    transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  }

  /* Position the close button (top right corner) */
  .overlay .closebtn {
    position: absolute;
    cursor: pointer;
    top: 2px;
    right: 5px;
    font-size: 20px;
  }

  /* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
  @media screen and (max-height: 600px) {
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
  }
</style>
