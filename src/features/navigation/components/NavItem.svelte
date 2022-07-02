<script>
  export let icon = "forum";
  export let redirect = "profile";
  import { Link } from "svelte-routing";
</script>

<Link to={redirect}>
  <div class="main">
    <i class="material-icons">{icon}</i>
  </div>
</Link>

<style>
  .main {
    background-color: #ca992c;
    margin: 10px;
    border-radius: 50%;
  }

  .main:hover {
    cursor: pointer;
  }

  i {
    font-size: 15px;
    padding: 7px;
    color: #090a0b;
  }
</style>
