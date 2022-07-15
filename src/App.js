
import './App.css';
import React from "react";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./components/Login";
import LoginPatient from "./components/LoginPatient";
import InscriptionPatient from "./components/InscriptionPatient";



function App() {
  return (
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/loginPatient" element={<LoginPatient/>}></Route>
          <Route path="/inscription" element={<InscriptionPatient/>}></Route>

      </Routes>
  );
}

export default App;
