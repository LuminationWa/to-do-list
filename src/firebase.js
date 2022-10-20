import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let config = {
  apiKey: "AIzaSyBx6hJiZBJZd2oHcuy5wYEjnGgaBn2OWCI",
  authDomain: "to-do-list-8980d.firebaseapp.com",
  projectId: "to-do-list-8980d",
  storageBucket: "to-do-list-8980d.appspot.com",
  messagingSenderId: "546499558325",
  appId: "1:546499558325:web:ee37de8335df85178277fc",
  measurementId: "G-N8SG6T6G9R",
};
firebase.initializeApp(config);

export default firebase;
