<script>
  import { Link } from "svelte-routing";
</script>

<nav>
  <Link to="/" style="width: 100%; text-decoration: none; color: #e5e5e5">
    <div class="nav-item">
      <i class="material-icons">group</i>
      <h3>Community</h3>
    </div>
  </Link>

  <div class="nav-item">
    <i class="material-icons">forum</i>
    <h3>Chat</h3>
  </div>

  <div class="nav-item">
    <i class="material-icons">slideshow</i>
    <h3>Course</h3>
  </div>

  <div class="nav-item">
    <i class="material-icons">folder</i>
    <h3>Material</h3>
  </div>
</nav>

<style>
  nav {
    transform: translateY(-30px);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
  }
  .nav-item {
    display: flex;
    align-items: center;
    margin: 10px;
    max-height: 32px;
    padding: 6px 10px;
    transition: all 0.5s ease-in;
    border-bottom: solid 1px #090a0b;
  }

  .nav-item:hover {
    cursor: pointer;
    border-bottom: solid 1px #e5e5e5;
  }

  i {
    color: #ca992c;
    margin-right: 10px;
    font-size: 18px;
  }
</style>
