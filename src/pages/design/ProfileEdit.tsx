import React, { useState } from "react";
import Avatar from "../../components/avatar/Avatar";

// firebase imports
import { storage } from "../../firebase/config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useFirestore } from "../../hooks/useFirestore";

import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useStorage } from "../../hooks/useStorage";

const ProfileEdit = () => {
  // Form inputs
  const [profileTitle, setProfileTitle] = useState("");
  const [bio, setBio] = useState("");
  const [bioLength, setBioLength] = useState(0);
  const [thumbnail, setThumbnail] = useState<null | File>(null);

  // File Errors
  const [thumbnailError, setThumbnailError] = useState<null | string>(null);

  // Hooks
  const { updateDocument } = useFirestore("users");
  const { user } = useAuthContext();
  const { document, error } = useDocument("users", user?.displayName);
  const { fileUrl, progress } = useStorage(
    `thumbnails/${user?.uid}/profileImg`,
    thumbnail
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (bio.length > 0) {
      updateDocument(document.id, {
        bio: bio,
      });
      setBio("");
      setBioLength(0);
    }

    if (thumbnail && user !== null && progress === 100) {
      // upload user thumbnail
      updateDocument(document.id, {
        photoURL: fileUrl,
      });
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
  const calculateBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
    setBioLength(e.target.value.length);
  };

  return (
    <form className="p-4 bg-white rounded-md" onSubmit={handleSubmit}>
      <div className="flex gap-4 mt-0">
        {document && <Avatar src={document.photoURL} h={96} w={96} />}
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
        {/* <label>
          <span>Profile Title</span>
          <input
            type="text"
            value={profileTitle}
            onChange={(e) => setProfileTitle(e.target.value)}
          />
        </label> */}
        <label className="mb-0">
          <span>Bio</span>
          <textarea value={bio} onChange={calculateBio} maxLength={80} />
        </label>
        <span className="float-right mb-2">{bioLength}/80</span>
        <button className="bg-violet-500 w-full px-6 py-4 font-semibold rounded-md text-white">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileEdit;
