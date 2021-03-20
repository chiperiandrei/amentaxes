import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { compose, createStore } from "redux";
import App from "./App";
import { rootReducer } from "./reducers/rootReducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
function loadUserFromLocalStorage() {
  const user = JSON.parse(localStorage.getItem("user_info") || "{}");

  if (user === null) {
    return undefined;
  }

  return user;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const user = loadUserFromLocalStorage();
const store = createStore(
  rootReducer,
  {
    user_information: user,
  },
  composeEnhancers()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
