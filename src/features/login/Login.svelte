<script>
  import { UserIdStore } from "../../utils/stores";
  import { isUser, isUserFirstTimeLogin } from "../../utils/firebase";
  $: id = "";
  $: errormessage = "";
</script>

<main>
  <div class="container">
    <h1>Login</h1>
    <p>{errormessage}</p>
    <input type="text" placeholder="Enter your given ID" bind:value={id} />
    <button
      on:click={async () => {
        if (await isUser(id)) {
          UserIdStore.set(id);
        } else {
          errormessage = "We're sorry, the ID you have entered is not correct.";
        }
      }}>→</button
    >
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .container {
    background-color: rgb(37, 36, 36);
    padding: 50px;
    border-radius: 20px;
  }

  h1 {
    text-align: center;
  }

  input {
    border-radius: 2px;
    border: none;
    padding: 5px 20px;
  }

  button {
    border-radius: 2px;
    border: none;
    padding: 5px 20px;
    background-color: white;
  }
</style>
