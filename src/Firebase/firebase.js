import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAc2kwAxXqPtLAVVVBkXEomATte1gzWNig",
  authDomain: "edu-center-e5b6f.firebaseapp.com",
  projectId: "edu-center-e5b6f",
  storageBucket: "edu-center-e5b6f.appspot.com", 
  messagingSenderId: "304122159106",
  appId: "1:304122159106:web:17188d7e501fb77a01471b",
  measurementId: "G-XRPWTNBZ1W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };