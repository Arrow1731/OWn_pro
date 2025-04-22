// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // import { getAuth } from "firebase/auth";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyAc2kwAxXqPtLAVVVBkXEomATte1gzWNig",
// //   authDomain: "edu-center-e5b6f.firebaseapp.com",
// //   projectId: "edu-center-e5b6f",
// //   storageBucket: "edu-center-e5b6f.firebasestorage.app",
// //   messagingSenderId: "304122159106",
// //   appId: "1:304122159106:web:17188d7e501fb77a01471b",
// //   measurementId: "G-XRPWTNBZ1W"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

// // export const auth = getAuth(app);

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAc2kwAxXqPtLAVVVBkXEomATte1gzWNig",
//   authDomain: "edu-center-e5b6f.firebaseapp.com",
//   projectId: "edu-center-e5b6f",
//   storageBucket: "edu-center-e5b6f.firebasestorage.app",
//   messagingSenderId: "304122159106",
//   appId: "1:304122159106:web:17188d7e501fb77a01471b",
//   measurementId: "G-XRPWTNBZ1W"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();






import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAc2kwAxXqPtLAVVVBkXEomATte1gzWNig",
  authDomain: "edu-center-e5b6f.firebaseapp.com",
  projectId: "edu-center-e5b6f",
  storageBucket: "edu-center-e5b6f.appspot.com", 
  messagingSenderId: "304122159106",
  appId: "1:304122159106:web:17188d7e501fb77a01471b",
  measurementId: "G-XRPWTNBZ1W"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }