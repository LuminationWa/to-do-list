import $ from "jquery";
import React, { useEffect, useState } from "react";
import "./Styles/Modal.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBx6hJiZBJZd2oHcuy5wYEjnGgaBn2OWCI",
  authDomain: "to-do-list-8980d.firebaseapp.com",
  projectId: "to-do-list-8980d",
  storageBucket: "to-do-list-8980d.appspot.com",
  messagingSenderId: "546499558325",
  appId: "1:546499558325:web:ee37de8335df85178277fc",
  measurementId: "G-N8SG6T6G9R",
};

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// let collectionRef = db.collection("tasks").doc("Edel").collection("Tasks");
// console.log(collectionRef);
// collectionRef.doc("LA").set({
//   name: "Aliens",
//   state: "CA",
//   country: "USA"
// })
// .then(() => {
//   console.log("Document successfully written!");
// })
// .catch((error) => {
//   console.error("Error writing document: ", error);
// });

const getInfo = async () => {
  // Gets the database info
  const collRef = db.collection("tasks").doc("Edel").collection("Tasks");
  let placeHolder = [];
  await collRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      placeHolder.push(doc.data());
    });
  });
  return placeHolder;
};

console.log(getInfo());

const Modal = (props) => {
  return (
    <form className="add-task modal" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label for="name">Task</label>
        <input type="text" id="name" name="name" required></input>
      </div>
      <div>
        <label for="desc">Description</label>
        <input type="text" id="desc" name="desc"></input>
      </div>
      <div class="form-btns">
        <button
          onClick={() => {
            props.toggleModal(".add-task");
            let aliens = $("form").serializeArray();
            console.log(aliens);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            props.toggleModal(".add-task");
          }}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default Modal;
