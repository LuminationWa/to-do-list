import "./Styles/TaskCard.css";
import edit from "../Images/edit.png";
import star from "../Images/star.png";
import starColored from "../Images/star (1).png";
import trash from "../Images/trash.png";
import firebase from "../firebase.js";
const db = firebase.firestore();

const TaskCard = (props) => {
  const deleteFromDB = (document, refresh) => {
    db.collection("tasks")
      .doc("Edel")
      .collection("Tasks")
      .doc(document)
      .delete()
      .then(() => {
        props.refresh();
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div class="task-card">
      <h1>{props.Name}</h1>
      <h2>{props.Description}</h2>
      <div class="action-bar">
        <input
          type="image"
          src={star}
          alt="Priority button"
          class="icon"
          onClick={(e) => {
            e.target.src = starColored;
          }}
        ></input>
        <input type="image" src={edit} alt="Edit button" class="icon"></input>
        <input
          type="image"
          src={trash}
          alt="Trash button"
          class="icon"
          onClick={() => {
            deleteFromDB(props.Name);
          }}
        ></input>
      </div>
    </div>
  );
};

export default TaskCard;
