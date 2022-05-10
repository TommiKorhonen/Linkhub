// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAdunmca4jJKI95WFFDlrksMTzXIevEWio",
  authDomain: "linkhub-3a46d.firebaseapp.com",
  projectId: "linkhub-3a46d",
  storageBucket: "linkhub-3a46d.appspot.com",
  messagingSenderId: "1057493039311",
  appId: "1:1057493039311:web:5259c4d95bae1746815fba",
};
initializeApp(firebaseConfig);
const auth = getAuth();

// eslint-disable-next-line no-undef
Cypress.Commands.add(
  "login",
  (email = "test-user@gmail.com", password = "test1234") => {
    return signInWithEmailAndPassword(auth, email, password);
  }
);
// eslint-disable-next-line no-undef
Cypress.Commands.add("logout", () => {
  return signOut(auth);
});
