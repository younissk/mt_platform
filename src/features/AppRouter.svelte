<script>
  import { Router, Route } from "svelte-routing";
  import ChatPage from "./chat/ChatPage.svelte";
  import ProfilePage from "./profile/ProfilePage.svelte";
  import AddPostPage from "./add-post/AddPostPage.svelte";
  import CommunityPage from "./community/CommunityPage.svelte";
</script>

<Router>
  <Route path="/">
    <!-- <ChatPage /> -->
    <CommunityPage />
  </Route>
  <Route path="profile">
    <ProfilePage />
  </Route>
  <Route path="add-post">
    <AddPostPage />
  </Route>
  <Route path="chat">
    <ChatPage />
  </Route>
</Router>
