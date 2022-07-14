
import logo from './logo.svg';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbarx from './Component/Layout/Navbar';
import Footer from './Component/Layout/Footer';
import HomeIndex from './Component/home/home';
function App() {
  return (
    <div className="container-fuild">
      <Router>
        <div className="">
        <Navbarx/>
            <Routes>
              <Route  path="/" element={<HomeIndex/>}  />
            </Routes>
            <HomeIndex/>
        <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
