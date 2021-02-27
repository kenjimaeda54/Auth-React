import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyAhMDu2fkhx607Y-4aFfX7mrf9iJ81I00M",
    authDomain: "reactudemy-24d1f.firebaseapp.com",
    databaseURL: "https://reactudemy-24d1f-default-rtdb.firebaseio.com",
    projectId: "reactudemy-24d1f",
    storageBucket: "reactudemy-24d1f.appspot.com",
    messagingSenderId: "768025376357",
    appId: "1:768025376357:web:99c5c87fe90cdd99abf88c"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {      
    firebase.initializeApp(firebaseConfig);
  }   

export default firebase;