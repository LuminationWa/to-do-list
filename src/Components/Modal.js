import React, { useEffect, useState } from "react";
import "./Styles/Modal.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBx6hJiZBJZd2oHcuy5wYEjnGgaBn2OWCI",
  authDomain: "to-do-list-8980d.firebaseapp.com",
  projectId: "to-do-list-8980d",
  storageBucket: "to-do-list-8980d.appspot.com",
  messagingSenderId: "546499558325",
  appId: "1:546499558325:web:ee37de8335df85178277fc",
  measurementId: "G-N8SG6T6G9R"
};

const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let collectionRef = db.collection("tasks").doc("RV3OYwXeFV707cxLpiht");
console.log(collectionRef);

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
      <div class="dates">
        <label for="start">From</label>
        <input type="date" id="start" name="start"></input>
        <label for="end">To</label>
        <input type="date" id="end" name="end"></input>
      </div>
      <div class="form-btns">
        <button
          onClick={() => {
            props.toggleModal(".add-task");
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
