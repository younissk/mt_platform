<script>
  import { quill } from "svelte-quill";
  import { addPost } from "../../utils/firebase";
  import { Link } from "svelte-routing";
  import { UserIdStore } from "../../utils/stores";

  let options = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        ["link", "image"],
      ],
    },
    placeholder: "Type something...",
  };

  let content = { html: "", text: "" };
  let title;
  let author = $UserIdStore;
</script>

<svelte:head>
  <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
</svelte:head>

<main>
  <div class="title">
    <input
      type="text"
      id="fname"
      name="fname"
      placeholder="Title"
      bind:value={title}
    /><br />
    <Link to="/">
      <button
        on:click={() => {
          addPost({
            author: author,
            title: title,
            content: content.html,
            comments: [],
          });
        }}
      >
        Publish
      </button>
    </Link>
  </div>

  <div
    class="editor"
    use:quill={options}
    on:text-change={(e) => {
      content = e.detail;
    }}
  />
</main>

<style>
  input {
    margin: 20px 0px;
    min-height: 40px;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  main {
    background-color: white;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
