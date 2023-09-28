import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Calculator from "./Pages/Calculator";
import { store } from "./store/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Calculator />
    </Provider>
  </React.StrictMode>
);
