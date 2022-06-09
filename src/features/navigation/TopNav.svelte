<script>
  export let pageName;
  import NavItem from "./components/NavItem.svelte";
</script>

<div class="main">
  <h1 class="page-name">{pageName}</h1>
  <nav>
    <NavItem icon="settings" />
    <NavItem icon="notifications" />
    <NavItem icon="person" />
  </nav>
</div>

<style>
  .main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 40px;
    border-bottom: solid 1px #4e4f51;
    background-color: #1a1e23;
  }

  nav {
    display: flex;
  }
</style>
