import React from "react";
import ReactDom from "react-dom";
import { ContextProvider } from "./SocketContext";

import App from "./App";
import "./style.css";

ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
