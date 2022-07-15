import React from 'react';
import { BrowserRouter, Route, Routes ,Link } from 'react-router-dom';
import About from '../about/about';
import HomeIndex from '../home/home';
import EventList from '../event/list';
import BlogList from '../blog/list';
export class Navbarx extends React.Component {
  
  render() {
  return (  
    <>
    <header className="main_header_area">
        <div className="header-content py-1 bg-theme">
            <div className="container d-flex align-items-center justify-content-between">
            <div className="links">
                <ul>
                <li>
                    <a href="#" className="white">
                    <i className="icon-calendar white" /> Thursday, Mar 26, 2021
                    </a>
                </li>
                <li>
                    <a href="#" className="white">
                    <i className="icon-location-pin white" /> Hollywood, America
                    </a>
                </li>
                <li>
                    <a href="#" className="white">
                    <i className="icon-clock white" /> Mon-Fri: 10 AM – 5 PM
                    </a>
                </li>
                </ul>
            </div>
            <div className="links float-right">
                <ul>
                <li>
                    <a href="#" className="white">
                    <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="#" className="white">
                    <i className="fab fa-twitter" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="#" className="white">
                    <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="#" className="white">
                    <i className="fab fa-linkedin " aria-hidden="true" />
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    <div className="header_menu" id="header_menu">
        <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-3 pt-3">
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="image" />
                </a>
            </div>
            <div
                className="navbar-collapse1 d-flex align-items-center"
                id="bs-example-navbar-collapse-1"
            >
                <ul className="nav navbar-nav" id="responsive-menu">
                <li className="dropdown submenu active">
                   
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/event">Event</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                
                <li className="search-main">
                    <a href="#search1" className="mt_search">
                    <i className="fa fa-search" />
                    </a>
                </li>
                </ul>
            </div>
            <div className="register-login d-flex align-items-center">
                <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="me-3"
                >
                <i className="icon-user" /> Login/Register
                </a>
                <a href="#" className="nir-btn white">
                Book Now
                </a>
            </div>
            <div id="slicknav-mobile">
                    <div className="slicknav_menu">
                        <a href="#" aria-haspopup="true" tabIndex={0} className="slicknav_btn slicknav_collapsed" style={{outline: 'none'}}>
                            <span className="slicknav_menutxt" ></span>
                            <span className="slicknav_icon slicknav_no-text">
                                <span className="slicknav_icon-bar"></span>
                                <span className="slicknav_icon-bar"></span>
                                <span className="slicknav_icon-bar"></span>
                            </span>
                        </a>
                        <ul className="slicknav_nav slicknav_hidden" role="menu" aria-hidden="true" >    
                            <li> <Link role="menuitem" tabIndex={-1} to="/">Home</Link></li>
                            <li> <Link role="menuitem" tabIndex={-1} to="/about">About Us</Link></li>
                            <li> <Link role="menuitem" tabIndex={-1} to="/event">Event</Link></li>
                            <li> <Link role="menuitem" tabIndex={-1} to="/blog">Blog</Link></li>
                            <li className="search-main"><a href="#search1" className="mt_search" role="menuitem" tabIndex={-1}><i className="fa fa-search" /></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
        </nav>
    </div>
</header>

        <Routes>
          <Route path="/" element={<HomeIndex/>}>
          </Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/event" element={<EventList/>}></Route>
          <Route path="/blog" element={<BlogList/>}></Route>
        </Routes>
  </>
  );
}
}
export default Navbarx;
