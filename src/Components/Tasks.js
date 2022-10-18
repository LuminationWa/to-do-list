import "./Styles/Tasks.css";
import Modal from "./Modal";

const Tasks = () => {
  const toggleModal = (element) => {
    let modal = document.querySelector(element);
    modal.classList.toggle("visible");
  };
  return (
    <div class="tasks">
      <Modal toggleModal={toggleModal}/>
      <div class="side-bar">test</div>
      <div class="top-bar">test</div>
      <div class="content">test</div>
      <button class="add-btn" onClick={() => toggleModal(".add-task")}>
        +
      </button>
    </div>
  );
};

export default Tasks;
