import PrivatePage from "./components/common/PrivatePage";
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Nicknames from "./components/pages/Nicknames"
import Header from "./components/common/Header";
import CreateNickname from "./components/pages/CreateNickname";
import React, { useMemo } from "react"
import { Routes, Route } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { connect } from "react-redux"
import "./styles/reset.css"

function App(props) {
  const { token } = props 

  const client = useMemo(() => {
      return new ApolloClient({
        uri: "https://schneider-nicknames.herokuapp.com/",
        cache: new InMemoryCache(),
        headers: {
          Authorization: token
        }
      }
    )
  }, [token])

  return (
    <ApolloProvider client={client}>
      <Header/>
      <main>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<PrivatePage component={Nicknames}/>}/>
          <Route path="/create" element={<PrivatePage component={CreateNickname}/>}/>
          <Route path="*" element={<Signup/>}/>
        </Routes>
      </main>
    </ApolloProvider>
  );
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps)(App);
