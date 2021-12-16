import PrivatePage from "./components/common/PrivatePage";
import Login from "./components/pages/Login"
import SignupPage from "./components/pages/SignupPage"
import NicknamesPage from "./components/pages/NicknamesPage"
import Header from "./components/common/Header";
import CreateNickname from "./components/pages/CreateNickname";
import UserNicknames from "./components/pages/UserNicknames";
import React from "react"
import { Routes, Route } from "react-router-dom"
import { ApolloProvider } from "@apollo/client"
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

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Header/>
      <StyledMain>
        <Routes>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<PrivatePage component={NicknamesPage}/>}/>
          <Route path="/page/:page" element={<PrivatePage component={NicknamesPage}/>}/>
          <Route path="/user/:username" element={<PrivatePage component={UserNicknames}/>}/>
          <Route path="/create" element={<PrivatePage component={CreateNickname}/>}/>
          <Route path="*" element={<PrivatePage component={NicknamesPage}/>}/>
        </Routes>
      </StyledMain>
    </ApolloProvider>
  );
}

export default App;