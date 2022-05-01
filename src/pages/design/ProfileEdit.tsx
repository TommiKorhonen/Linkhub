import React, { useState } from "react";
import Avatar from "../../components/avatar/Avatar";

import { useAuthContext } from "../../hooks/useAuthContext";

// firebase imports
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useFirestore } from "../../hooks/useFirestore";
import { DocumentData } from "firebase/firestore";
import { User as FirebaseUser } from "firebase/auth";

const ProfileEdit = (document: DocumentData, user: FirebaseUser) => {
  const [progress, setProgress] = useState(0);

  // Form inputs
  const [profileTitle, setProfileTitle] = useState("");
  const [bio, setBio] = useState("");
  const [thumbnail, setThumbnail] = useState<null | File>(null);
  // File Errors
  const [thumbnailError, setThumbnailError] = useState<null | string>(null);

  // Hooks
  const { updateDocument } = useFirestore("users");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProgress(0);
    // console.log(profileTitle, bio, thumbnail);
    if (thumbnail && user !== null) {
      // upload user thumbnail
      const uploadPath = `thumbnails/${user.uid}/profileImg`;
      const imgRef = await ref(storage, uploadPath);
      const uploadTask = uploadBytesResumable(imgRef, thumbnail);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => setThumbnailError(error.message),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateDocument(document.id, {
              photoURL: downloadURL,
            });
          });
        }
      );
    }
  };

  const handleFileChange = (e: React.ChangeEvent) => {
    setThumbnail(null);
    const target = e.target as HTMLInputElement;
    const selected: File = (target.files as FileList)[0];
    // console.log(selected);

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setThumbnailError("Image file size must be less than 100kb");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };
  return (
    <form className="p-4 bg-white rounded-md" onSubmit={handleSubmit}>
      <div className="flex gap-4 mt-0">
        <Avatar src={document.photoURL} h={96} w={96} />
        <div className="flex gap-4 items-center">
          <label className="m-0 ">
            <span>Choose image: {`${progress}%`}</span>
            <input
              type="file"
              className="bg-violet-500 font-semibold rounded-md text-white cursor-pointer"
              onChange={handleFileChange}
            />
            {thumbnailError && <div className="error">{thumbnailError}</div>}
          </label>
          {/* <button className="bg-gray-500 px-6 py-4 font-semibold rounded-md text-white">
            Set Default
          </button> */}
        </div>
      </div>
      <div>
        <label>
          <span>Profile Title</span>
          <input
            type="text"
            value={profileTitle}
            onChange={(e) => setProfileTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Bio</span>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength={80}
          />
        </label>
        <button className="bg-green-500 w-full px-6 py-4 font-semibold rounded-md text-white">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileEdit;
