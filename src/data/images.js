import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const config = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

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
