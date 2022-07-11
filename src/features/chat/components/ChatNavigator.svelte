<script>
  import {
    currentPageTitle,
    showChats,
    currentChat,
  } from "../../../utils/stores";

  let chats = [
    {
      name: "Brothers",
      id: "S5BQpsDjZNttfhvmzjlj",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg",
    },
  ];
</script>

<aside>
  <ul>
    {#each chats as chat}
      <li
        on:click={() => {
          showChats.set(false);
          currentPageTitle.set(chat.name);
          currentChat.set(chat.id);
        }}
      >
        <img src={chat.image} alt="" />
        <div>
          <h2>{chat.name}</h2>
        </div>
      </li>
    {/each}
  </ul>
</aside>

<style>
  aside {
    width: 100%;
    height: 100%;
    display: inline-block;
    font-size: 15px;
    vertical-align: top;
  }
  aside ul {
    padding-left: 0;
    margin: 0;
    list-style-type: none;
    overflow-y: scroll;
    height: 690px;
  }
  aside li {
    padding: 10px 0;
    cursor: pointer;
  }
  aside li:hover {
    background-color: #5e616a;
  }
  aside li img {
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 8px;
  }
  aside li div {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
  }
  aside li h2 {
    font-size: 14px;
    color: #fff;
    font-weight: normal;
    margin-bottom: 5px;
  }
  aside li h3 {
    font-size: 12px;
    color: #7e818a;
    font-weight: normal;
  }
  .orange {
    background-color: #ff725d;
  }
</style>
