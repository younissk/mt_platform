<script>
  import { Link } from "svelte-routing";
</script>

<nav class="mobile-nav">
  <Link to="/" style="text-decoration: none; color: #e5e5e5">
    <div class="nav-item">
      <i class="material-icons">group</i>
    </div>
  </Link>

  <Link to="/chat" style="text-decoration: none; color: #e5e5e5">
    <div class="nav-item">
      <i class="material-icons">forum</i>
    </div>
  </Link>

  <Link to="/add-post" style="text-decoration: none; color: #e5e5e5">
    <div class="nav-item" id="add">
      <i class="material-icons">add</i>
    </div>
  </Link>

  <Link to="/courses" style="text-decoration: none; color: #e5e5e5">
    <div class="nav-item">
      <i class="material-icons">slideshow</i>
    </div>
  </Link>

  <div class="nav-item">
    <i class="material-icons">folder</i>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #090a0b;
    width: 100%;
  }
  .nav-item {
    margin: 10px;
    height: 32px;
    padding: 6px 10px;
  }

  i {
    color: #ca992c;
    margin-right: 10px;
    font-size: 22px;
  }

  @media (min-width: 600px) {
    nav {
      display: none;
    }
  }
</style>
