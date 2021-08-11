import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCgYwJ1jGzYc0O2LVtDb6LPCf_SLdIGSY4",
  authDomain: "react-fb-clone-6a61c.firebaseapp.com",
  projectId: "react-fb-clone-6a61c",
  storageBucket: "react-fb-clone-6a61c.appspot.com",
  messagingSenderId: "467302301831",
  appId: "1:467302301831:web:198d610cd5955049b73822"
};

// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initial database
const db = firebaseApp.firestore();

// set auth
const auth = firebase.auth();

// set provider
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;