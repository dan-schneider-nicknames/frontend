import React from "react"
import { Routes, Route } from "react-router-dom"
import PrivatePage from "./components/common/PrivatePage";
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"
import Nicknames from "./components/pages/Nicknames"

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/nicknames" element={<PrivatePage component={Nicknames}/>}/>
    </Routes>
  );
}

export default App;
