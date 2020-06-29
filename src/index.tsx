import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Styles
import "./styles/main.css";

import { App } from "./App";

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  MOUNT_NODE
);
