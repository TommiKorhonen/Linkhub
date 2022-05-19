import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import { Query } from "@firebase/firestore-types";

//firebase imports
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

// ["uid", "==", user.uid]

export const useCollection = (c: string, _query?: Query, _orderBy?: any) => {
  const [documents, setDocuments] = useState<any>(null);

  //set up query
  const q = useRef(_query).current;
  const orderBy = useRef(_orderBy).current;
  useEffect(() => {
    let ref = collection(db, c);
    // if (q) {
    //   ref = query(ref, where(...q));
    // }
    if (orderBy) {
      // ref = ref.orderBy();
      const q = query(ref, orderBy("createdAt", "desc"));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results: any[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });
    return () => unsub();
  }, [c, q, orderBy]);
  return { documents };
};
