import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from "redux";

import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
