<script>
  import { currentPageTitle } from "../../utils/stores";
  import NavItem from "./components/NavItem.svelte";
</script>

<div class="main">
  <h1 class="page-name">{$currentPageTitle}</h1>
  <nav>
    <NavItem icon="settings" />
    <NavItem icon="notifications" />
    <NavItem icon="person" redirect="profile" />
  </nav>
</div>

<style>
  .main {
    display: flex;
    margin: 0 20px;
    align-items: center;
    justify-content: space-between;
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
