import firebase from "firebase";
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

export const auth = firebase.auth();
export const firesotre = firebase.firestore();

// Sign-in with Google Auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
