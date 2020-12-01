import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdI2csE6d4ocs_q3g75t5qQH7i9qQMcqA",
  authDomain: "flipkart-clone-7.firebaseapp.com",
  databaseURL: "https://flipkart-clone-7.firebaseio.com",
  projectId: "flipkart-clone-7",
  storageBucket: "flipkart-clone-7.appspot.com",
  messagingSenderId: "107819443633",
  appId: "1:107819443633:web:25434bcc33c656ece7c990",
  measurementId: "G-1EQXLNQ40G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
