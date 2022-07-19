
import Favicon from 'react-favicon'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbarx from './Component/Layout/Navbar';

import Footer from './Component/Layout/Footer';
import HomeIndex from './Component/home/home';
import Partner from './Component/home/partner';
import React, { useState, useEffect } from "react";
type resultProps = {
  webiste: string;
  email:string;
  telp:string;
  alamat:string;
  logo:string;
  favicon:string;
  facebook:string;
  instagram:string;
  twitter:string;
  youtube:string;
};
function App() {
  const [result, setResult] = useState<resultProps[]>([]);
  
    useEffect(() => {
    const api = async () => {
      const data = await fetch("https://obet.pythonanywhere.com/v1/website/", {
        method: "GET",
        headers: {
            'Authorization':'token 836a53db3ee059632f06a84ce3cebbee78a030f2'
        }
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };


    api();
    }, []);
  return (
    
    <div className="container-fuild">
      {result.map((value,i) => {
              return (   
                <Favicon key={i} url={value.favicon} />
                );
      })}
      
      <Router>
          <Navbarx/>
              <Partner/>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
