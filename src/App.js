import PrivatePage from "./components/common/PrivatePage";
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Nicknames from "./components/pages/Nicknames"
import Header from "./components/common/Header";
import CreateNickname from "./components/pages/CreateNickname";
import UserNicknames from "./components/pages/UserNicknames";
import React, { useMemo, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import { connect } from "react-redux"
import "./styles/reset.css"
import styled from "styled-components";
import client from "../src/services/client"

const StyledMain = styled.main`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.tan};
  ${({ theme }) => theme.setFont(2)};
  min-height: 100vh;
`

function App(props) {
  const { token } = props 

  // const client = useMemo(() => {
  //   return new ApolloClient({
  //     uri: process.env.REACT_APP_API_URL,
  //     cache: new InMemoryCache(),
  //     headers: {
  //       authorization: token
  //     }
  //   })
  // }, [token])

  // useEffect(() => {
  //   console.log(client)
  // }, [client])

  return (
    <ApolloProvider client={client}>
      <Header/>
      <StyledMain>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<PrivatePage component={Nicknames}/>}/>
          <Route path="/user/:username" element={<PrivatePage component={UserNicknames}/>}/>
          <Route path="/create" element={<PrivatePage component={CreateNickname}/>}/>
          <Route path="*" element={<Signup/>}/>
        </Routes>
      </StyledMain>
    </ApolloProvider>
  );
}

const mapStateToProps = state => ({
  token: state.token
})

export default connect(mapStateToProps)(App);
