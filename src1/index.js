import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.Fragment>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.Fragment>,
  document.getElementById("root")
);


reportWebVitals();
