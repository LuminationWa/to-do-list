import "./Styles/TaskCard.css";

const TaskCard = ({ Name = "No name", Description = "No desc", Priority = 0, Time = "No limit" }) => {
  return (
    <div class="task-card">
      <h1>{Name}</h1>
      <h2>{Description}</h2>
      <p>{Priority}</p>
      <p>{Time}</p>
    </div>
  );
};

export default TaskCard;
