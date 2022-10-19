import React, { useEffect, useState } from "react";
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

const TasksOverview = () => {
  const [tasksInfo, setTasksInfo] = useState([]);

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
    setTasksInfo(placeHolder);
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    console.log(tasksInfo);
  }, [tasksInfo]);

  return <div>Algo</div>;
};

export default TasksOverview;
