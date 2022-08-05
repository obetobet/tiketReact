import React from 'react';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation,A11y,Autoplay  } from 'swiper';
import { Link,NavLink  } from 'react-router-dom';
import 'swiper/css';

import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ScrollButton from '../helpers/ScrollButton';
import Kategori from './Kategori'
import Register from '../user/register'
import LoginForm from '../user/login'
type FooterProps = {
  telp?: string;
  website?: string;
  alamat?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  email?:string;
  logo?:string;
}
export const Footer =( props : FooterProps) =>{
  const { language } = useSelector((state: RootState) => state.lang);
  const [isLoading,setisLoading]=React.useState(true);

  setTimeout( () => {
    setisLoading(false)
  }, 700);
  return (
    <>  
  <footer className="pt-20 pb-4"
    style={{ backgroundImage: "url(images/background_pattern.png)" }}>
  <div
    className="section-shape top-0"
    style={{ backgroundImage: "url(images/shape8.png)" }}
  />
  <div className="footer-upper pb-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 pe-4">
          <div className="footer-about">
            <img src="images/logotik.png" alt="asd" />
            <p className="mt-3 mb-3 white">
              {translate('fodeskripsi', language)}
            </p>
            <ul>
              <li className="white">
                <strong>{translate('Telp', language)}:</strong> {props.telp} 
              </li><br/>
              <li className="white">
                <strong>{translate('Location', language)}:</strong> {props.alamat}
              </li><br/>
              <li className="white">
                <strong>Email:</strong> {props.email}
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="f79e999198b7a3859681929b9e99d994989a"
                >
                </a>
              </li><br/>
              <li className="white">
                <strong>Website:</strong> {props.website}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
          <div className="footer-links">
            <h3 className="white">{translate('Helps', language)}</h3>
            <ul>
              <li>
              <Link  to="/faq" >{translate('Privacy Policy', language)}</Link>
              </li>
              <li>
              <Link  to="/contact-us" >{translate('Terms & Conditions', language)}</Link>
              </li>
              <li>
                <Link  to="/contact-us" >{translate('contact-us', language)}</Link>
              </li>
              <li>
                  <Link  to="/faq" >Faq</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
          <div className="footer-links">
            <h3 className="white">{translate('Categories', language)}</h3>
            <ul>
               <Kategori/>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="footer-links">
            <h3 className="white">{translate('Newsletter', language)}</h3>
            <div className="newsletter-form ">
              <p className="mb-3">
              {translate('joinwith', language)}
              </p>
              <form
                action="#"
                method="get"
                acceptCharset="utf-8"
                className="border-0 d-flex align-items-center"
              >
                <input type="text" placeholder={translate('Email Address', language)} />
                <button className="nir-btn ms-2">{translate('Subscribe', language)}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div className="footer-copyright">
    <div className="container">
      <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
        <div className="copyright-text">
          <p className="m-0 white">2022 {props.website}. All rights reserved. </p>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href={props.facebook} target='_blank'>
                <i className="fab fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={props.twitter} target='_blank'>
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={props.instagram} target='_blank'>
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={props.youtube} target='_blank'>
                <i className="fab fa-youtube" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div id="particles-js" />
</footer>

<div id="wawax">
  <a href="https://wa.me/6287886524614" target='_blank'></a>
</div>
<ScrollButton/>

<div className="modal fade log-reg" id="exampleModal" data-keyboard="false" data-backdrop="static" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-body">
        <div className="post-tabs">
          <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button aria-controls="login" aria-selected="false" className="nav-link active" data-bs-target="#login" data-bs-toggle="tab" id="login-tab" role="tab" type="button">Login</button>
            </li>
            <li className="nav-item" role="presentation">
              <button aria-controls="register" aria-selected="true" className="nav-link" data-bs-target="#register" data-bs-toggle="tab" id="register-tab" role="tab" type="button">Register</button>
            </li>
          </ul>
          <div className="tab-content blog-full" id="postsTabContent">
            <div aria-labelledby="login-tab" className="tab-pane fade active show" id="login" role="tabpanel">
              <div className="row">
                
                <div className="col-lg-12">
                  <h4 className="text-center border-b pb-2">Login</h4>
                  <div className="log-reg-button d-flex align-items-center justify-content-between">
                    <button type="submit" className="btn btn-fb">
                      <i className="fab fa-facebook" /> Login with Facebook
                    </button>
                    <button type="submit" className="btn btn-google">
                      <i className="fab fa-google" /> Login with Google
                    </button>
                  </div>
                  <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                    <LoginForm/>
                </div>
              </div>
            </div>
            <div aria-labelledby="register-tab" className="tab-pane fade" id="register" role="tabpanel">
              <div className="row">
                <div className="col-lg-12">
                  <h4 className="text-center border-b pb-2">Register</h4>
                  <div className="log-reg-button d-flex align-items-center justify-content-between">
                    <button type="submit" className="btn btn-fb">
                      <i className="fab fa-facebook" /> Login with Facebook
                    </button>
                    <button type="submit" className="btn btn-google">
                      <i className="fab fa-google" /> Login with Google
                    </button>
                  </div>
                  <hr className="log-reg-hr position-relative my-4 overflow-visible" />
                    <Register/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </>
        )
    
}

export default Footer;