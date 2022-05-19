import { useReducer, useState } from "react";
import { db } from "../firebase/config";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  updateDoc,
} from "firebase/firestore";

interface IState {
  isPending: boolean;
  document: null | any;
  error: null | any;
  success: null | boolean;
}

type Actions =
  | { type: "IS_PENDING" }
  | { type: "ADDED_DOCUMENT"; payload: DocumentData }
  | { type: "DELETED_DOCUMENT"; payload: null }
  | { type: "UPDATED_DOCUMENT"; payload: any }
  | { type: "ERROR"; payload: string };

let initialState = {};

const firestoreReducer = (state: IState, action: Actions) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETED_DOCUMENT":
      return { isPending: false, document: null, success: true, error: null };
    case "UPDATED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (c: string) => {
  const [response, dispatch] = useReducer(firestoreReducer, {
    isPending: false,
    document: null,
    error: null,
    success: null,
  });
  const [isCancelled, setIsCancelled] = useState(false);

  // collection ref
  const collectionRef = collection(db, c);

  // only dispatch is not cancelled
  const dispatchIfNotCancelled = (action: Actions) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add a document
  const addDocument = async (doc: DocumentData) => {
    dispatch({ type: "IS_PENDING" });

    try {
      //   const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await addDoc(collectionRef, { doc });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err: any) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // update document
  const updateDocument = async (id: string, updates: any) => {
    dispatch({ type: "IS_PENDING" });
    const docRef = doc(db, c, id);

    try {
      const updatedDocument = await updateDoc(docRef, updates);
      //   await ref.doc(id).update(updates);
      dispatchIfNotCancelled({
        type: "UPDATED_DOCUMENT",
        payload: updatedDocument,
      });
      return updatedDocument;
    } catch (err: any) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
      return null;
    }
  };

  // delete document
  const deleteDocument = async (id: string) => {
    dispatch({ type: "IS_PENDING" });
    try {
      await deleteDoc(doc(db, c, id));
      dispatchIfNotCancelled({ type: "DELETED_DOCUMENT", payload: null });
    } catch (err: any) {
      dispatchIfNotCancelled({ type: "ERROR", payload: "could not delete" });
    }
  };
  return { response, addDocument, updateDocument, deleteDocument };
};
