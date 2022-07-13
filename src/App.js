
import './App.css';
import React from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./components/Login";
import LoginPatient from "./components/LoginPatient";



function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/loginPatient" element={<LoginPatient/>}></Route>

      </Routes>
  );
}

export default App;
