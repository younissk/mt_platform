<script>
  import { currentPageTitle, showChats, currentChat } from "../../utils/stores";
  import SendMessage from "./components/SendMessage.svelte";
  import Chat from "./components/Chat.svelte";
  import ChatNavigator from "./components/ChatNavigator.svelte";

  currentPageTitle.set("Chat");
</script>

<div class="chat-app">
  <div class="app">
    {#if $showChats}
      <ChatNavigator />
    {:else}
      <header>
        <button on:click={() => showChats.set(true)}>Chats</button>
      </header>
      <Chat {$currentChat} />
    {/if}
    <SendMessage {$currentChat} />
  </div>
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

  header {
    background-color: black;
  }
</style>
