import React, { useCallback, useState, useEffect, useRef, FC } from 'react';
import { BrowserRouter, Route, Routes ,Link } from 'react-router-dom';
import About from '../about/about';
import HomeIndex from '../home/home';
import {EventList} from '../event/list';
import BlogList from '../blog/list';
import { Loginuser } from '../user/auth';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { setLanguage } from '../../store/actions/langActions';
import { translate } from '../../i18n';
import Dropdown from 'react-bootstrap/Dropdown';

interface HeaderProps {
    fixed?: boolean;
    transparent?: boolean;
  }

const Navbarx: FC<HeaderProps> = ({ fixed, transparent }) => {
    const { language } = useSelector((state: RootState) => state.lang);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);


    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        dispatch(setLanguage(value));
      }
 
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
        <nav className="navbar navbar-default" >
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
                   
                    <Link to="/">{translate('home', language)}</Link>
                </li>
                <li>
                    <Link to="/about">{translate('about', language)}</Link>
                </li>
                <li>
                    <Link to="/event">{translate('event', language)}</Link>
                </li>
                <li>
                    <Link to="/blog">{translate('blog', language)}</Link>
                </li>

                
                
                <li className="search-main">
                    <a href="#search1" className="mt_search">
                    <i className="fa fa-search" />
                    </a>
                </li>


                </ul>

                
            </div>
                
            <div className="register-login d-flex align-items-center">
               
                <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic">
                    {language =='English' ? <span><img
  alt="United States" style={{width:'20px'}}
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/> English</span>:
    <span><img
  alt="United States" style={{width:'20px'}}
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg"/> Indonesia</span>
                    
                        }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => chooseLanguageHandler('English')}>
                            <img
  alt="United States" style={{width:'20px'}}
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/>English</Dropdown.Item>
                        <Dropdown.Item onClick={() => chooseLanguageHandler('Indonesia')}><img
  alt="United States" style={{width:'20px'}}
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg"/>Indonesia</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                
                    <Loginuser/>
                
                
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
                            <li> <Link role="menuitem" tabIndex={-1} to="/">{translate('home', language)}</Link></li>
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
          <Route path="/event" element={<EventList title='Event List' judul='Event List'/>}></Route>
          <Route path="/blog" element={<BlogList/>}></Route>
        </Routes>
  </>
  );

}
export default Navbarx;
