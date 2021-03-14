import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import { TodoService } from "./services/Todo.service";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App todoService={new TodoService()} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
