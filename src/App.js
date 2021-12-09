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
      <Route path="/" element={<PrivatePage component={Nicknames}/>}/>
      <Route path="*" element={<Signup/>}/>
    </Routes>
  );
}

export default App;
