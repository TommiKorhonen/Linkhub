import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase/config";

// Give filepath and file you want to upload
export const useStorage = (path: string, file: File | null) => {
  const [progress, setProgress] = useState(0);
  const [fileUrl, setFileUrl] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setProgress(0);

    if (file) {
      const uploadPath = path;
      const imgRef = ref(storage, uploadPath);
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
    }
  }, [file, path]);

  return { progress, error, fileUrl };
};
