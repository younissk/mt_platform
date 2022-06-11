<script>
  import Navbar from "./components/Navbar.svelte";
  import AddPostButton from "./components/AddPostButton.svelte";
  import MobileNav from "./components/MobileNav.svelte";
</script>

<div class="main">
  <img
    src="https://www.mytazkiyah.com/wp-content/uploads/My-Tazkiyah-logo-2.png"
    alt=""
    class="logo"
  />
  <Navbar />
  <AddPostButton />
</div>
<div class="mobile-nav">
  <MobileNav />
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

  @media (min-width: 600px) {
    .mobile-nav {
      display: none;
    }
  }
</style>
