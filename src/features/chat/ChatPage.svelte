<script>
  import { currentPageTitle } from "../../utils/stores";
  import SendMessage from "./components/SendMessage.svelte";
  import Chat from "./components/Chat.svelte";

  let chatId = "S5BQpsDjZNttfhvmzjlj";
  currentPageTitle.set("Chat");
</script>

<div class="chat-app">
  <div class="app">
    <Chat {chatId} />
    <SendMessage {chatId} />
  </div>
  <!-- <div class="user-list" /> -->
</div>

<style>
  .chat-app {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
