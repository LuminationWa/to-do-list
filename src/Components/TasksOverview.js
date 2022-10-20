import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import "./Styles/TasksOverview.css";
import "./loading.css";
import firebase from "../firebase.js";

const db = firebase.firestore();

const TasksOverview = () => {
  const [tasksInfo, setTasksInfo] = useState([]);
  const [tasksArray, setTasksArray] = useState([]);
  const getInfo = async () => {
    let loadingElement = document.querySelector(".lds-ellipsis");
    loadingElement.classList.toggle("hidden");
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
    loadingElement.classList.toggle("hidden");
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    // Needs fixing. Will add multiple copies of the same task. Rest working as intended tho.
    if (tasksInfo.length > 0)
      tasksInfo.forEach((task) => {
        setTasksArray((prevArray) => [
          ...prevArray,
          <TaskCard key={task} {...task} />,
        ]);
      });
  }, [tasksInfo]);

  return <div class="tasks-overview">
    <div class="lds-ellipsis hidden"><div></div><div></div><div></div><div></div></div>
    {tasksArray}
    </div>;
};

export default TasksOverview;
