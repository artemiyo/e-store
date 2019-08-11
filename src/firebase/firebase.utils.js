import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDcifALmFg5py68f1WdoMOiZALmryhs2Rc",
  authDomain: "e-store-456bb.firebaseapp.com",
  databaseURL: "https://e-store-456bb.firebaseio.com",
  projectId: "e-store-456bb",
  storageBucket: "",
  messagingSenderId: "774835382458",
  appId: "1:774835382458:web:b0b3178fef92de6c"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;

    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Sign-in with Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
