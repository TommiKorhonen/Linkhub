// import { initializeApp } from "firebase/app";
// import { getAuth, signOut } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: "AIzaSyAdunmca4jJKI95WFFDlrksMTzXIevEWio",
//   authDomain: "linkhub-3a46d.firebaseapp.com",
//   projectId: "linkhub-3a46d",
//   storageBucket: "linkhub-3a46d.appspot.com",
//   messagingSenderId: "1057493039311",
//   appId: "1:1057493039311:web:5259c4d95bae1746815fba",
// };
// initializeApp(firebaseConfig);
// const auth = getAuth();

// // eslint-disable-next-line no-undef
// Cypress.Commands.add(
//   "login",
//   (email = "test-user@gmail.com", password = "test1234") => {
//     return signInWithEmailAndPassword(auth, email, password);
//   }
// );
// // eslint-disable-next-line no-undef
// Cypress.Commands.add("logout", () => {
//   return signOut(auth);
// });

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";

const fbConfig = {
  apiKey: "AIzaSyAdunmca4jJKI95WFFDlrksMTzXIevEWio",
  authDomain: "linkhub-3a46d.firebaseapp.com",
  projectId: "linkhub-3a46d",
  storageBucket: "linkhub-3a46d.appspot.com",
  messagingSenderId: "1057493039311",
  appId: "1:1057493039311:web:5259c4d95bae1746815fba",
};

firebase.initializeApp(fbConfig);

// eslint-disable-next-line no-undef
attachCustomCommands({ Cypress, cy, firebase });
