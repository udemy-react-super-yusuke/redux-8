import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import reducer from "./reducer";

import { Provider } from "react-redux";

import App from "./containers/App";

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
