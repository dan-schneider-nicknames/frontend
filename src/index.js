import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from "./styles/theme"
import { Routes, Route } from "react-router-dom"
import {
  CreatePage,
  LoginPage,
  NicknamesPage,
  ResetPasswordPage,
  RequestResetPage,
  LandingPage,
  UserNicknames,
  SignupPage
} from "./components/pages"
import PrivatePage from "./components/common/HigherOrder/PrivatePage"
import FourOFour from "./components/common/FourOFour"


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<App/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="signup" element={<SignupPage/>}/>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="reset" element={<RequestResetPage/>}/>
            <Route path="reset/:resetToken" element={<ResetPasswordPage/>}/>
            <Route path="page/:ranked" element={<PrivatePage component={NicknamesPage}/>}/>
            <Route path="user" element={<PrivatePage component={UserNicknames}/>}>
              <Route path=":username" element={<PrivatePage component={UserNicknames}/>}/>
            </Route>
            <Route path="create" element={<PrivatePage component={CreatePage}/>}/>
            <Route path="*" element={<FourOFour/>}/>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

