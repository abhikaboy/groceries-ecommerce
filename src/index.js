import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require("axios");
axios.defaults.headers.get["token"] =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHBzOi8vcnVubW9iaWxlYXBwcy5jb20vc2FsZXNfaW50aWcvZ3JvY2VycnlfYmFja2VuZC9hcGkvY3VzdG9tZXItbG9naW4iLCJpYXQiOjE1OTQwNTk0MjIsImV4cCI6MTU5NjY1MTQyMiwibmJmIjoxNTk0MDU5NDIyLCJqdGkiOiJ5VEJLT0Yza1o5MW56RGVpIn0.Rr5wXknyi6yInYBnVrXZpQUmap84a2qP5aCDx5_8XSg";
axios.defaults.headers.post["token"] =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHBzOi8vcnVubW9iaWxlYXBwcy5jb20vc2FsZXNfaW50aWcvZ3JvY2VycnlfYmFja2VuZC9hcGkvY3VzdG9tZXItbG9naW4iLCJpYXQiOjE1OTQwNTk0MjIsImV4cCI6MTU5NjY1MTQyMiwibmJmIjoxNTk0MDU5NDIyLCJqdGkiOiJ5VEJLT0Yza1o5MW56RGVpIn0.Rr5wXknyi6yInYBnVrXZpQUmap84a2qP5aCDx5_8XSg";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
