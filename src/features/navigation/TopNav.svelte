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
    position: fixed;
    top: 0;
    right: 0;
    left: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 40px;
    border-bottom: solid 1px #4e4f51;
    background-color: #1a1e23;
  }

  nav {
    display: flex;
  }

  @media (max-width: 600px) {
    .main {
      left: 0;
    }
  }
</style>
