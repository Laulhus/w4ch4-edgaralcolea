import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import FormContextProvider from "./contexts/FormContext/FormContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
