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
  var a = new Date(UNIX_timestamp * 1000);
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
    snapshotData.push(doc.data());
  });

  for (let post of snapshotData) {
    let userData = await getSingleUser(post.author);

    let postData = {
      date: timeConverter(post.date),
      userName: userData.userName,
      postTitle: post.title,
      profilePicture: userData.profilePicture,
      content: post.content,
      // comments: [
      //   {
      //     userName: "Username",
      //     profilePicture:
      //       "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
      //     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam?",
      //   },
      //   {
      //     userName: "testing",
      //     profilePicture:
      //       "https://www.middleeasteye.net/sites/default/files/styles/article_page/public/2022-04/al-aqsa-israeli-forces-aim-weapons-15apr2022-reuters-edit.jpg?itok=7pxNQaV8",
      //     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim assumenda facilis quod! Quo aspernatur ab ullam alias perferendis deleniti voluptatibus. Libero tempore culpa possimus omnis facilis repudiandae. Libero perferendis eum reprehenderit eos, ipsa expedita numquam quasi repudiandae porro sequi non?",
      //   },
      // ],
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
