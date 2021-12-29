
import Header from "./components/common/Header";

import React from "react"

import { Outlet } from "react-router";
import { ApolloProvider } from "@apollo/client"
import "./styles/reset.css"
import styled from "styled-components";
import client from "../src/services/client"

import Footer from "./components/common/Footer";
const StyledMain = styled.main`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.tan};
  ${({ theme }) => theme.setFont(2)};
  min-height: 100vh;
  @media (max-width: 450px) {
    margin-top: 240px;
  }
  @media (max-width: 400px) {
    margin-top: 350px;
  }
`

function App() {
  
  return (
    <ApolloProvider client={client}>
      <Header/>
        <StyledMain>
          <Outlet/>
        </StyledMain>
      <Footer/>
    </ApolloProvider>
  );
}

export default App;