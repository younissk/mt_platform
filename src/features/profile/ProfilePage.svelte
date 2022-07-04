<script>
  import { currentPageTitle, UserIdStore } from "../../utils/stores";
  import { changeProfile } from "../../utils/firebase";
  currentPageTitle.set("Profile");
  import { navigate } from "svelte-routing";

  let pictures = [
    "https://theculturetrip.com/wp-content/uploads/2020/10/rkm48m-e1603870286120.jpg",
    "https://zamzam.com/blog/wp-content/uploads/2021/05/most-beautiful-mosques.jpg",
    "https://www.islamicfinder.org/iqra/image/download/post57_92_20161111_085616.jpg/92",
    "https://www.islamicfinder.org/iqra/image/download/post57_86_20161111_084140.jpg/86",
    "https://www.islamicfinder.org/iqra/image/download/post57_87_20161111_083619.jpg/87",
    "https://www.islamicfinder.org/iqra/image/download/post57_89_20161111_083802.jpg/89",
    "https://www.islamicfinder.org/iqra/image/download/post57_92_20161111_085616.jpg/92",
    "https://previews.123rf.com/images/rglinsky/rglinsky1203/rglinsky120300046/12958404-famous-dome-of-the-rock-mosque-in-jerusalem-israel.jpg",
  ];

  let username;
  let selectedPhoto;
</script>

<main>
  <h2>Please set your Username</h2>
  <input type="text" bind:value={username} />
  <button
    on:click={async () => {
      await changeProfile($UserIdStore, username, selectedPhoto);
      navigate("/", { replace: true });
    }}>Save</button
  >
  <h2>Select a profile picture</h2>
  <div class="pictures">
    {#each pictures as picture}
      <div
        class="image"
        on:click={() => {
          selectedPhoto = picture;
        }}
        style="background-image: url({picture})"
      />
    {/each}
  </div>
</main>

<style>
  .pictures {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .pictures .image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid 1px #ca992c;
    margin: 20px;
    background: transparent no-repeat center;
    background-size: cover;
  }
</style>
