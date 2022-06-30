<script>
  import Navbar from "./components/Navbar.svelte";
  import AddPostButton from "./components/AddPostButton.svelte";
</script>

<div class="main">
  <img
    src="https://57775.smushcdn.com/895344/wp-content/uploads/cropped-My-Tazkiyah-logo-2.png?lossy=1&strip=1&webp=1"
    alt=""
    class="logo"
  />
  <Navbar />
  <AddPostButton />
</div>

<style>
  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #090a0b;
    min-width: 200px;
    height: 100%;
  }

  .logo {
    transform: translateY(20px);
    max-width: 100px;
    margin: 10px;
  }

  @media (max-width: 600px) {
    .main {
      display: none;
    }
  }
</style>
