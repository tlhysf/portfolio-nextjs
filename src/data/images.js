import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const config = {
  apiKey: "AIzaSyD19JTvn5HSoZYjBCqAVqqmusB01PtCWCE",
  authDomain: "talha-yousuf.firebaseapp.com",
  databaseURL: "https://talha-yousuf-default-rtdb.firebaseio.com",
  projectId: "talha-yousuf",
  storageBucket: "talha-yousuf.appspot.com",
  messagingSenderId: "188227464815",
  appId: "1:188227464815:web:7b20f33e83ab01630fa79a",
  measurementId: "G-EPXP2LZJZH",
};

const app = initializeApp(config);
const storage = getStorage(app);

export const getImageRefs = async (folderName) => {
  const folderRef = ref(storage, "portfolio/images/" + folderName);

  let listOfImageRefs = [];

  await listAll(folderRef)
    .then((res) => {
      listOfImageRefs = res.items;
    })
    .catch((e) => {
      console.log(e);
    });

  return listOfImageRefs;
};

export const getImageURL = async (imageRef) => {
  let url = "";

  await getDownloadURL(imageRef)
    .then((res) => {
      url = res;
    })
    .catch((e) => console.log(e));

  return url;
};
