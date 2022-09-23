import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useDocument = (
  collection: string,
  id: string | undefined | null
) => {
  const [document, setDocument] = useState<any>(null);
  const [error, setError] = useState<null | string>(null);

  // realtime data for document

  useEffect(() => {
    if (collection && id) {
      const docRef = doc(db, collection, id);
      const unsub = onSnapshot(
        docRef,
        (doc) => {
          if (doc.data()) {
            setDocument({ ...doc.data(), id: doc.id });
            setError(null);
          } else {
            setError("no such document exists");
          }
        },
        (err) => {
          setError("Failed to get document");
        }
      );
      return () => unsub();
    }
  }, [collection, id]);
  return { document, error };
};
