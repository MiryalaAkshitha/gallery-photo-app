import   firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';




var firebaseConfig = {
    apiKey: "AIzaSyCWFUup1qV0vx8y4OOJBuOmE3KEcvCQDd4",
    authDomain: "photo-gallery-app-dc9b3.firebaseapp.com",
    projectId: "photo-gallery-app-dc9b3",
    storageBucket: "photo-gallery-app-dc9b3.appspot.com",
    messagingSenderId: "949696922216",
    appId: "1:949696922216:web:90ba6c4dabd38464f871dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage= firebase.storage();
  const projectFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage,projectFirestore,timestamp };