import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxqy9beyA2UiCJJbSqmLL3DNFrYmMe8hM",
  authDomain: "crwn-react-db-c9fa8.firebaseapp.com",
  projectId: "crwn-react-db-c9fa8",
  storageBucket: "crwn-react-db-c9fa8.appspot.com",
  messagingSenderId: "576820983638",
  appId: "1:576820983638:web:971626df3ad17925cec8f7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async function (userAuth) {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.error(err);
    }
  }
  return userDocRef;
};
