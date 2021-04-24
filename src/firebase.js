// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLkX8znBobz_CdYDhOGCffitKx_80VSuE",
  authDomain: "e-clone-851cd.firebaseapp.com",
  projectId: "e-clone-851cd",
  storageBucket: "e-clone-851cd.appspot.com",
  messagingSenderId: "444813554472",
  appId: "1:444813554472:web:51d6c8367e49ec10a3d61d",
  measurementId: "G-C1B7RMB0D8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth, db };
