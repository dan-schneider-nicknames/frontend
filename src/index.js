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
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const store = createStore(reducer, applyMiddleware(thunk))

const client = new ApolloClient({
  uri: "https://schneider-nicknames.herokuapp.com/",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

