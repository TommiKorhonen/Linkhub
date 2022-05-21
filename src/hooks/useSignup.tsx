import { useEffect, useState } from "react";
import { useAuthContext } from "./useAuthContext";

//firebase imports
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setError(null);
    setIsPending(true);

    try {
      //signup
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // add display name to user
      await updateProfile(res.user, { displayName, photoURL: null });

      // create a user document
      await setDoc(doc(db, "users", displayName), {
        displayName,
        photoURL: null,
        background_color: "#E3D9D9",
        text_color: "#000000",
        id: res.user.uid,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      setIsPending(false);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setIsPending(false);
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, signup, isPending };
};
