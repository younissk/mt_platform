<script>
  import { Link } from "svelte-routing";
</script>

<Link to="add-post" style="width: 100%">
  <button class="add-post">Add post</button>
</Link>

<style>
  .add-post {
    padding: 10px;
    text-transform: uppercase;
    margin: 16px;
    width: 80%;
    border-radius: 10px;
    color: #e5e5e5;
    background-color: #ca992c;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.5s ease-in;
    border: solid 0.1px #ca992c;
  }

  .add-post:hover {
    color: #ca992c;
    background-color: #090a0b;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .add-post {
      display: none;
    }
  }
</style>
