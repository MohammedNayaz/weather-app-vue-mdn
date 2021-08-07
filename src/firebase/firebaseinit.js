import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBqI7CQNp8kqGjKfjl-Vsx0T9Fb09kB58c",
    authDomain: "weatherappvuemdn.firebaseapp.com",
    projectId: "weatherappvuemdn",
    storageBucket: "weatherappvuemdn.appspot.com",
    messagingSenderId: "640782126953",
    appId: "1:640782126953:web:aaf66119402b60f7a237f8",
    measurementId: "G-6YFX7LGD3P"
  };
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
