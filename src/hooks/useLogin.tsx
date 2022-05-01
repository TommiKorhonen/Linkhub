import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email: string, password: string) => {
    setError(null);
    setIsPending(true);

    try {
      // login
      const res = await signInWithEmailAndPassword(auth, email, password);

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });
    } catch (err: any) {
      setError(err.message);
    }
  };

  return { error, login, isPending };
};
