import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { HashRouter as Router } from "react-router-dom";
import { Context } from "./context/Context";

import App from "./App";

ReactDOM.render(
  <Router basename="/mock-ecommerce">
    <Context>
      <App />
    </Context>
  </Router>,
  document.getElementById("root")
);
