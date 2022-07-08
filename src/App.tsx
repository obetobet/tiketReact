
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/home';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbarx from './Component/Layout/Navbar'

function App() {
  return (
    <div className="container-fuild">
      
      <Router>
        <div className="">
        <Navbarx/>
          <div className="container">
            <Routes>
              <Route  path="/" element={<Home />}  />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
