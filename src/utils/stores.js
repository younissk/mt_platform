import { writable } from "svelte/store";

const stored = localStorage.id;
export const UserIdStore = writable(stored || "");
UserIdStore.subscribe((value) => (localStorage.id = value));

export const currentPageTitle = writable("");

export const currentVideo = writable(0);
