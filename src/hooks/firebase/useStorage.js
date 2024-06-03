import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import useFirebaseConfig from "./useFirebaseConfig";

const useStorage = () => {
  const { storage } = useFirebaseConfig();

  const uploadStorage = (table, file, setProgress) => {
    const storageRef = ref(storage, `${table}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (typeof setProgress === "function") {
            setProgress(progress);
          }
        },
        (error) => {
          switch (error.code) {
            case "storage/unauthorized":
              reject("storage/unauthorized");
              break;
            case "storage/canceled":
              reject("storage/canceled");
              break;
            case "storage/unknown":
              reject("storage/unknown");
              break;
            default:
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  return {
    uploadStorage
  };
};

export default useStorage;
