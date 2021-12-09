import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import PrivatePage from "./components/common/PrivatePage";
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Nicknames from "./components/pages/Nicknames"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { connect } from "react-redux"

const client = new ApolloClient({
  uri: "https://schneider-nicknames.herokuapp.com/",
  cache: new InMemoryCache(),
  headers: {
    Authorization: localStorage.getItem("token")
  }
})

function App(props) {
  const { token } = props 
  const [clientState, setClientState] = useState(client)

  useEffect(() => {
    setClientState(
      new ApolloClient({
        uri: "https://schneider-nicknames.herokuapp.com/",
        cache: new InMemoryCache(),
        headers: {
          Authorization: token
        }
      }
    ))
  }, [token])
  return (
    <ApolloProvider client={clientState}>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<PrivatePage component={Nicknames}/>}/>
        <Route path="*" element={<Signup/>}/>
      </Routes>
    </ApolloProvider>
  );
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps)(App);
