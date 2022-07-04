<script>
  export let data;
  import { getSingleUser } from "../../../utils/firebase";
  import { UserIdStore } from "../../../utils/stores";
  import { onMount } from "svelte";
  $: user = {};
  $: isUserMessage = false;
  onMount(async () => {
    let userData = await getSingleUser(data.author);
    user = { ...userData };
    if ($UserIdStore === data.author) {
      isUserMessage = true;
    }
  });
</script>

{#if isUserMessage}
  <div class="user-message-container">
    <div class="user">
      <img src={user.profilePicture} alt="" class="profilePicture" />
      <p class="userName">{user.userName}</p>
    </div>
    <p class="message user-message">{data.text}</p>
  </div>
{:else}
  <div class="message-container">
    <div class="user">
      <img src={user.profilePicture} alt="" class="profilePicture" />
      <p class="userName">{user.userName}</p>
    </div>
    <p class="message">{data.text}</p>
  </div>
{/if}

<style>
  .user-message-container {
    display: flex;
    flex-direction: row-reverse;
    margin: 20px;
  }

  .message-container {
    display: flex;
    margin: 20px;
  }
  .message {
    background-color: #4e4f51;
    padding: 10px;
    min-height: 40px;
    height: 100%;
    width: 100%;
    margin: 10px;
    border-radius: 0px 5px 5px 5px;
  }

  .user-message {
    background-color: #345b9a;
    border-radius: 5px 0px 5px 5px;
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    max-width: 50px;
    text-align: center;
  }

  .profilePicture {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: solid 1px #ca992c;
  }

  .userName {
    text-transform: uppercase;
    font-size: 10px;
  }
</style>
