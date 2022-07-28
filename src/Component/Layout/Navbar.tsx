import React, { useCallback, useState, useEffect, useRef, FC } from 'react';
import { Link,NavLink  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setLanguage } from '../../store/actions/langActions';
import { translate } from '../../i18n';
import Dropdown from 'react-bootstrap/Dropdown';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AuthService from "../../service/auth.service";
type NavbarProps = {
    fixed?: boolean;
    transparent?: boolean;
    logo?: string;
  }

export const Navbarx =( props : NavbarProps) =>{

    const { language } = useSelector((state: RootState) => state.lang);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);
    const [show,setShow]=useState(false);
    const [userReady,setuserReady]=useState(false);

    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        setShow(!show)
        dispatch(setLanguage(value));
      }

    const currentUser = AuthService.getCurrentUser();
 
  return (  
    <>
    <header className="main_header_area">
    <div className="header_menu" id="header_menu">
        <nav className="navbar navbar-default" >
            <div className="container">
                <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-3 pt-3">
                <div className="navbar-header">
                    <Link className="navbar-brand" to='/'>
                    <LazyLoadImage
                        alt='logo'
                        effect="blur"
                        src={props.logo} />   
                    </Link>
                </div>
                <div  className="navbar-collapse1 d-flex align-items-center"id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav" id="responsive-menu">
                    <li> <NavLink  to="/" >{translate('home', language)}</NavLink> </li>     
                    <li><NavLink to="/about-us">{translate('about', language)}</NavLink></li>                    
                    <li><NavLink to="/event">{translate('event', language)}</NavLink></li>                       
                    <li><NavLink to="/blog">{translate('blog', language)}</NavLink></li>
                    </ul>
                </div>
                    
                <div className="register-login d-flex align-items-center">               
                    <Dropdown>
                        <Dropdown.Toggle variant="default" style={{fontSize:'15px', fontFamily:"poppins,sans-serif",color:'#777'}}>
                            {
                                language =='English' ? 
                                <span><img alt="United States" style={{width:'20px'}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/> English</span>: 
                                <span><img alt="United States" style={{width:'20px'}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg"/> Indonesia</span>
                            }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => chooseLanguageHandler('English')}>
                                <img alt="United States" style={{width:'20px'}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/> English
                            </Dropdown.Item>
    
    
                            <Dropdown.Item onClick={() => chooseLanguageHandler('Indonesia')}>
                                <img alt="United States" style={{width:'20px'}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg"/> Indonesia
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {(currentUser) ?
                    <NavLink className="me-3 userlog"  to='/user-profile'><i className="icon-user" /> </NavLink>
                        :
                        <a  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"  className="me-3 userlog" ><i className="icon-user" /> Login</a>
                    }
                </div>
                <div id="slicknav-mobile">
                    <div className="slicknav_menu">
                        <button  onClick={() => setShow(!show)}   className="slicknav_btn slicknav_collapsed" style={{outline: 'none'}}>
                            <span className="slicknav_menutxt" ></span>
                            <span className="slicknav_icon slicknav_no-text">
                                <span className="slicknav_icon-bar"></span>
                                <span className="slicknav_icon-bar"></span>
                                <span className="slicknav_icon-bar"></span>
                            </span>
                        </button>
                        {
                            show?
                            <ul className="slicknav_nav slicknav_hidden" role="menu" aria-hidden="true" >    
                            <li><NavLink onClick={() => setShow(!show)}  to="/" >{translate('home', language)}</NavLink> </li>     
                            <li><NavLink onClick={() => setShow(!show)} to="/about-us">{translate('about', language)}</NavLink></li>                    
                            <li><NavLink onClick={() => setShow(!show)} to="/event">{translate('event', language)}</NavLink></li>                       
                            <li><NavLink onClick={() => setShow(!show)} to="/blog">{translate('blog', language)}</NavLink></li>
                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="default" style={{fontSize:'15px', fontFamily:"poppins,sans-serif",color:'#777'}}>
                                        {
                                            language =='English' ? 
                                            <span><img alt="United States" style={{width:'20px'}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/> English</span>: 
                                            <span><img alt="United States" style={{width:'20px'}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg"/> Indonesia</span>
                                        }
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item   onClick={() => chooseLanguageHandler('English')}>
                                            <img alt="United States" style={{width:'20px'}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/> English
                                        </Dropdown.Item>
                
                
                                        <Dropdown.Item   onClick={() => chooseLanguageHandler('Indonesia')}>
                                            <img alt="United States" style={{width:'20px'}} src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg"/> Indonesia
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
                            {(currentUser) ?
                                <NavLink className="me-3 userlog" onClick={() => setShow(!show)}  to='/user-profile'><i className="icon-user" /> </NavLink>
                                    :
                                    <a  href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"  className="me-3 userlog" ><i className="icon-user" /> Login</a>
                                }

                            </li>
                        </ul>
                            
                            :null
                        }
                        
                        
                    </div>                        
                </div>
                    
                </div>
            </div>
        </nav>
    </div>
</header>

  </>
  );
 }
export default Navbarx;
