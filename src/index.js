import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

import { ToDo } from "./toDo/Conteiner/index";

ReactDOM.render(
  <div>
    <ToDo />
  </div>,
  document.getElementById("app")
);
