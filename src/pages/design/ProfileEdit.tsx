import React, { useState } from "react";
import Avatar from "../../components/avatar/Avatar";

// hooks
import { useFirestore } from "../../hooks/useFirestore";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDocument } from "../../hooks/useDocument";
import { useStorage } from "../../hooks/useStorage";
import { FormEditor } from "../../components/styles/Form.styled";
import { AvatarEditContainer, BioEdit, BioLength } from "./ProfileEdit.styled";
import { Button } from "../../components/styles/Button.styled";

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
  };
  const calculateBio = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
    setBioLength(e.target.value.length);
  };

  return (
    <FormEditor onSubmit={handleSubmit}>
      <AvatarEditContainer className="flex gap-4 mt-0">
        {document && <Avatar src={document.photoURL} h={96} w={96} />}
        <div>
          <label>
            <span>Choose image: {`${progress}%`}</span>
            <input type="file" onChange={handleFileChange} />
            {thumbnailError && <div className="error">{thumbnailError}</div>}
          </label>
        </div>
      </AvatarEditContainer>
      <BioEdit>
        <label>
          <span>Bio</span>
          <textarea value={bio} onChange={calculateBio} maxLength={80} />
        </label>
        <BioLength>{bioLength}/80</BioLength>
        <Button data-cy="submitProfile">Save Changes</Button>
      </BioEdit>
    </FormEditor>
  );
};

export default ProfileEdit;
