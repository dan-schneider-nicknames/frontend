import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import reducer from "./state/reducer"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme"

const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

