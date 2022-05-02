import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase/config";

export const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState("");

  // Give filepath and file you want to upload

  const addFile = async (path: string, file: File) => {
    setProgress(0);

    const uploadPath = path;
    const imgRef = await ref(storage, uploadPath);
    const uploadTask = uploadBytesResumable(imgRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => setError(error.message),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL);
        });
      }
    );
  };
  return { addFile, progress, error, fileUrl };
};
