import $ from "jquery";
import React, { useEffect, useState } from "react";
import "./Styles/Modal.css";
import firebase from "../firebase.js";
const db = firebase.firestore();

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
  const addToDB = ({ name, description }) => {
    db.collection("tasks")
      .doc("Edel")
      .collection("Tasks")
      .doc(name)
      .set({
        Name: name,
        Description: description,
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };

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
            let rawInfo = $("form").serializeArray();
            let taskInfo = {
              name: rawInfo[0].value,
              description: rawInfo[1].value,
            };
            addToDB(taskInfo);
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
