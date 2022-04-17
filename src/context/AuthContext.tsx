import { createContext, useReducer, useEffect, ReactNode } from "react";

//firebase imports
import { auth } from "../firebase/config";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";

interface IState {
  user: FirebaseUser | null;
  authIsReady: boolean;
}

type Actions =
  | { type: "LOGIN"; payload: FirebaseUser }
  | { type: "LOGOUT"; user: null }
  | { type: "AUTH_IS_READY"; payload: null | FirebaseUser };

export const AuthContext = createContext<
  | {
      user: FirebaseUser | null;
      authIsReady: boolean;
      dispatch: React.Dispatch<Actions>;
    }
  | undefined
>({
  user: null,
  authIsReady: false,
  dispatch: () => null,
});

export const authReducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
