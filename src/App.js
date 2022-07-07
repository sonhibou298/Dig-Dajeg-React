
import './App.css';
import Header from "./components/Header";
import React from "react";

import Menu from "./components/Menu";
import Home from "./components/Home";
import '../node_modules/font-awesome/css/font-awesome.min.css';


function App() {
  return (
      <React.Fragment>
          <Header/>
          <Menu/>
          <Home/>
      </React.Fragment>

  );
}

export default App;
