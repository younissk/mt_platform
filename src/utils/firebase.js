// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
  query,
  orderBy,
  Timestamp,
  updateDoc,
  arrayUnion,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADUWn01SwguftP4ugbEYBuQIqgqeeYfGg",
  authDomain: "mytazkiyahplatform.firebaseapp.com",
  projectId: "mytazkiyahplatform",
  storageBucket: "mytazkiyahplatform.appspot.com",
  messagingSenderId: "956658368247",
  appId: "1:956658368247:web:74ad91633ba707fd191df2",
  measurementId: "G-QDSZSK32X8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function getUsers() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().name}`);
  });
}

export async function getSingleUser(id) {
  const snapshot = await getDoc(doc(collection(db, "users"), id));
  return snapshot.data();
}

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp.seconds * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

const fbDataToJson = async (snapshot) => {
  let posts = [];

  let snapshotData = [];

  snapshot.forEach((doc) => {
    snapshotData.push(doc);
  });

  for (let post of snapshotData) {
    let userData = await getSingleUser(post.data().author);

    let postData = {
      date: timeConverter(post.data().date),
      userName: userData.userName,
      postTitle: post.data().title,
      profilePicture: userData.profilePicture,
      content: post.data().content,
      id: post.id,
      author: post.data().author,
      comments: post.data().comments,
    };
    posts.push(postData);
  }

  return posts;
};

export async function getPosts() {
  const q = query(collection(db, "posts"), orderBy("date", "desc"));
  const querySnapshot = await getDocs(q);

  let posts = await fbDataToJson(querySnapshot);

  return posts;
}

export async function addPost(data) {
  await addDoc(collection(db, "posts"), { ...data, date: Timestamp.now() });
}

export async function addComment(id, commentText, authorID) {
  const postRef = doc(db, "posts", id);

  // Set the "capital" field of the city 'DC'
  await updateDoc(postRef, {
    comments: arrayUnion({
      author: authorID,
      text: commentText,
    }),
  });
}

export const isUserFirstTimeLogin = async (id) => {
  let data = await getSingleUser(id);
  if (data.userName === "") {
    return true;
  } else {
    return false;
  }
};

export const isUser = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return true;
  } else {
    return false;
  }
};

export async function changeProfile(id, userName, pictureURL) {
  const postRef = doc(db, "users", id);

  await updateDoc(postRef, {
    userName: userName,
    profilePicture: pictureURL,
  });
}

export async function getChatMessages(chatId) {
  const snapshot = await getDoc(doc(collection(db, "chats"), chatId));
  return snapshot.data().messages;
}

export async function addChatMessage(chatId, messageText, authorID) {
  const postRef = doc(db, "chats", chatId);

  await updateDoc(postRef, {
    messages: arrayUnion({
      author: authorID,
      text: messageText,
      date: Timestamp.now(),
    }),
  });
}

export async function onChatChange(chatId, func) {
  onSnapshot(doc(db, "chats", chatId), (doc) => {
    func();
  });
}

export async function getLessons(courseId) {
  const snapshot = await getDoc(doc(collection(db, "courses"), courseId));
  return snapshot.data().lessons;
}
