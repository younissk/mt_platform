import { writable } from "svelte/store";

const stored = localStorage.id;
export const UserIdStore = writable(stored || "");
UserIdStore.subscribe((value) => (localStorage.id = value));

export const currentPageTitle = writable(
  "https://firebasestorage.googleapis.com/v0/b/mytazkiyahplatform.appspot.com/o/Y2Mate.is%20-%20SURAH%20YASEEN%20(EXTREMELY%20POWERFUL%20QURAN)-33rtr3fZvi0-480p-1656522796754.mp4?alt=media&token=6faae8d6-7303-4cfd-bf7b-49f7bf17cc77"
);

export const currentVideo = writable(0);

export const expandPost = writable(false);

export const currentChat = writable("S5BQpsDjZNttfhvmzjlj");

export const showChats = writable(true);
