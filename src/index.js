import React from 'react';
import {applyMiddleware, createStore} from "redux";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from './App';
import githubUsersReducer from "./redux/githubUsersReducer";
import initState from "./redux/initState";
import thunk from "redux-thunk";

const store = createStore(
  githubUsersReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
