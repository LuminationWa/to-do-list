import $ from "jquery";
import { Link } from "react-router-dom";
import "./Styles/Nav.css";
import MenuIcon from "../Images/menu.png";
import TasksIcon from "../Images/tasks.png";
import ClockIcon from "../Images/clock.png";
import CalendarIcon from "../Images/calendar.png";

const Nav = () => {
  return (
    <nav>
      <button
        class="nav-btn menu-btn"
        onClick={() => {
          if ($(".hidden-btn").first().is(":hidden")) {
            $(".hidden-btn").slideDown(400);
          } else {
            $(".hidden-btn").slideUp(400);
          }
        }}
      ></button>
      <ul class="hidden-btn">
        <Link to="./tasks">
          <li>
            <button class="nav-btn tasks-btn"></button>
          </li>
        </Link>
        <li>
          <button class="nav-btn timeline-btn"></button>
        </li>
        <li>
          <button class="nav-btn calendar-btn"></button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
