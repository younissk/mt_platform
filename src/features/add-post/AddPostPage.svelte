<script>
  import { quill } from "svelte-quill";

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
</script>

<svelte:head>
  <!-- <link href="//cdn.quilljs.com/1.3.6/quill.bubble.css" rel="stylesheet" /> -->
  <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
</svelte:head>

<main>
  <div
    class="editor"
    use:quill={options}
    on:text-change={(e) => (content = e.detail)}
  />
</main>

<style>
  main {
    background-color: white;
    border-radius: 15px;
  }
</style>
