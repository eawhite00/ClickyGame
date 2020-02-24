import React from "react";
import "./style.css";


function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          Score: {props.score} | High Score: {props.highScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
