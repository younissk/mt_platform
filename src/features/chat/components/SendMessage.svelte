<script>
  import { addChatMessage } from "../../../utils/firebase";
  import { UserIdStore } from "../../../utils/stores";
  let newMessage = "";
  export let chatId;
</script>

<div class="add-message">
  <input placeholder="Write a message" bind:value={newMessage} type="text" />
  <button
    on:click={async () => {
      await addChatMessage(chatId, newMessage, $UserIdStore);
      newMessage = "";
    }}
    ><i class="material-icons">arrow_forward</i>
  </button>
</div>

<style>
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
