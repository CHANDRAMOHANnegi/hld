// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import counterReducer from "./counter/counterStore";
import App from "./App";
import "./index.css";
import { combineReducers, createStore, Provider } from "./libs/custom-redux";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
