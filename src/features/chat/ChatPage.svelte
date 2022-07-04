<script>
  import { currentPageTitle, UserIdStore } from "../../utils/stores";
  import Message from "./components/Message.svelte";
  import { getChatMessages, addChatMessage } from "../../utils/firebase";
  import { onMount } from "svelte";

  let chatId = "S5BQpsDjZNttfhvmzjlj";
  let newMessage = "";
  currentPageTitle.set("Chat");
  $: messages = [];

  onMount(async () => {
    let data = await getChatMessages("S5BQpsDjZNttfhvmzjlj");
    messages = [...data];
  });
</script>

<div class="chat-app">
  <div class="app">
    <div class="chat">
      {#each messages as message}
        <Message data={message} />
      {/each}
    </div>
    <div class="add-message">
      <input
        placeholder="Write a message"
        bind:value={newMessage}
        type="text"
      />
      <button
        on:click={async () => {
          await addChatMessage(chatId, newMessage, $UserIdStore);
          messages.push({ text: newMessage, author: $UserIdStore });
          newMessage = "";
        }}
        ><i class="material-icons">arrow_forward</i>
      </button>
    </div>
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

  .user-list {
    width: 150px;
    height: 100%;
    background-color: black;
  }

  .chat {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  .add-message {
    max-height: 50px;
    background-color: #111317;
    color: #dae3ea;
    display: flex;
    margin: 10px;
    border-radius: 20px;
  }

  .add-message input {
    width: 100%;
    background: none;
    border: none;
    color: #dae3ea;
    padding: 10px;
  }

  .add-message button {
    border-radius: 5px;
    background: none;
    color: #dae3ea;
    border: none;
  }
</style>
