<script>
  import Message from "./Message.svelte";
  import { getChatMessages, onChatChange } from "../../../utils/firebase";
  import { onMount } from "svelte";

  export let chatId;

  let chatElement;

  $: messages = [];

  onChatChange(chatId, async () => {
    let data = await getChatMessages("S5BQpsDjZNttfhvmzjlj");
    messages = [...data];
    chatElement.scrollTop = chatElement.scrollHeight;
  });

  onMount(async () => {
    let data = await getChatMessages("S5BQpsDjZNttfhvmzjlj");
    messages = [...data];
  });
</script>

<div bind:this={chatElement} class="chat">
  {#each messages as message}
    <Message data={message} />
  {/each}
</div>

<style>
  .chat {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
</style>
