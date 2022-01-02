import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAATBVxfG6cL9Gf01P-DXFbCNk7jKrgzNI",
  authDomain: "facebook-48eec.firebaseapp.com",
  projectId: "facebook-48eec",
  storageBucket: "facebook-48eec.appspot.com",
  messagingSenderId: "803433331336",
  appId: "1:803433331336:web:7427e2171b17c38bdebd3d",
  measurementId: "G-DVJ8Z53TWT",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
