import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

const ReactRedux = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ReactRedux, document.getElementById("root"));
