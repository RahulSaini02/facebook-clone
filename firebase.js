import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDhHXwFrUGW_9ua1Hpk1iT9XDlrHKTsTx4",
  authDomain: "facebook-clone-2171c.firebaseapp.com",
  projectId: "facebook-clone-2171c",
  storageBucket: "facebook-clone-2171c.appspot.com",
  messagingSenderId: "230536602338",
  appId: "1:230536602338:web:3376b9907516f091c634bb",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
