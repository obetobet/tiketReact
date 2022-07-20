import React from 'react';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation,A11y,Autoplay  } from 'swiper';
import { Link,NavLink  } from 'react-router-dom';
import 'swiper/css';

import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ScrollButton from '../helpers/ScrollButton';
export default function Footer () {
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <>  
  <footer className="pt-20 pb-4"
    style={{ backgroundImage: "url(images/background_pattern.png)" }}>
  <div
    className="section-shape top-0"
    style={{ backgroundImage: "url(images/shape8.png)" }}
  />
  {/* <div className="insta-main pb-10">
    <div className="container">
      <div className="insta-inner">
        <div className="follow-button">
          <h5 className="m-0 rounded">
            Follow on Instagram
          </h5>
        </div>
        <div className="row attract-slider">
        <Swiper
            breakpoints={{
                499: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                390: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                900: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                755: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                1333: {
                    slidesPerView: 8,
                    spaceBetween: 50,
                  },
                
              }}
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}                        
            >
              <SwiperSlide>
                  <div className="insta-image rounded">
                    <a href="gallery.html">
                      <img src="images/insta/ins-3.jpg" alt="insta" />
                    </a>
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="insta-image rounded">
                    <a href="gallery.html">
                      <img src="images/insta/ins-4.jpg" alt="insta" />
                    </a>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="insta-image rounded">
                    <a href="gallery.html">
                      <img src="images/insta/ins-5.jpg" alt="insta" />
                    </a>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="insta-image rounded">
                    <a href="gallery.html">
                      <img src="images/insta/ins-1.jpg" alt="insta" />
                    </a>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="insta-image rounded">
                    <a href="gallery.html">
                      <img src="images/insta/ins-7.jpg" alt="insta" />
                    </a>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="insta-image rounded">
                      <a href="gallery.html">
                        <img src="images/insta/ins-8.jpg" alt="insta" />
                      </a>
                    </div>
              </SwiperSlide>
              <SwiperSlide>
                    <div className="insta-image rounded">
                      <a href="gallery.html">
                        <img src="images/insta/ins-2.jpg" alt="insta" />
                      </a>
                    </div>
              </SwiperSlide>
              <SwiperSlide> 
                  <div className="insta-image rounded">
                    <a href="gallery.html">
                      <img src="images/insta/ins-6.jpg" alt="insta" />
                    </a>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-9.jpg" alt="insta" />
              </a>
            </div>
              </SwiperSlide>
              </Swiper>
          
          
          
          
          
          
          
          
          
        </div>
      </div>
    </div>
  </div> */}
  <div className="footer-upper pb-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 pe-4">
          <div className="footer-about">
            <img src="images/logo-white.png" alt="" />
            <p className="mt-3 mb-3 white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              suspendisse leo neque iaculis molestie sagittis maecenas aenean
              eget molestie sagittis.
            </p>
            <ul>
              <li className="white">
                <strong>PO Box:</strong> +47-252-254-2542
              </li>
              <li className="white">
                <strong>Location:</strong> Collins Street, sydney, Australia
              </li>
              <li className="white">
                <strong>Email:</strong>{" "}
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="f79e999198b7a3859681929b9e99d994989a"
                >
                </a>
              </li>
              <li className="white">
                <strong>Website:</strong> www.Travelin.com
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
          <div className="footer-links">
            <h3 className="white">{translate('Helps', language)}</h3>
            <ul>
              <li>
                <a href="about-us.html">{translate('Privacy Policy', language)}</a>
              </li>
              <li>
                <a href="about-us.html">{translate('Terms & Conditions', language)}</a>
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
              <li>
                <a href="about-us.html">Travel</a>
              </li>
              <li>
                <a href="about-us.html">Technology</a>
              </li>
              <li>
                <a href="about-us.html">Lifestyle</a>
              </li>
              <li>
                <a href="about-us.html">Destinations</a>
              </li>
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
                <input type="text" placeholder="Email Address" />
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
          <p className="m-0 white">2022 Travelin. All rights reserved. </p>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin" aria-hidden="true" />
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

<div className="modal fade log-reg" id="exampleModal" tabIndex={-1} aria-hidden="true">
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
                      <div className="col-lg-6">
                        <div className="blog-image rounded">
                          <a href="#" style={{backgroundImage: 'url(images/trending/trending5.jpg)'}} />
                        </div>
                      </div>
                      <div className="col-lg-6">
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
                        <form method="post" action="#" name="contactform" id="contactform">
                          <div className="form-group mb-2">
                            <input type="text" name="user_name" className="form-control" id="fname" placeholder="User Name or Email Address" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="password" name="password_name" className="form-control" id="lpass" placeholder="Password" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="checkbox" className="custom-control-input" id="exampleCheck" />
                            <label className="custom-control-label mb-0" htmlFor="exampleCheck1">Remember me</label>
                            <a className="float-end" href="#">Lost your password?</a>
                          </div>
                          <div className="comment-btn mb-2 pb-2 text-center border-b">
                            <input type="submit" className="nir-btn w-100" id="submit" defaultValue="Login" />
                          </div>
                          <p className="text-center">Don't have an account? <a href="#" className="theme">Register</a></p>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div aria-labelledby="register-tab" className="tab-pane fade" id="register" role="tabpanel">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="blog-image rounded">
                          <a href="#" style={{backgroundImage: 'url(images/trending/trending5.jpg)'}} />
                        </div>
                      </div>
                      <div className="col-lg-6">
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
                        <form method="post" action="#" name="contactform1" id="contactform1">
                          <div className="form-group mb-2">
                            <input type="text" name="user_name" className="form-control" id="fname1" placeholder="User Name" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="text" name="user_name" className="form-control" id="femail" placeholder="Email Address" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="password" name="password_name" className="form-control" id="lpass1" placeholder="Password" />
                          </div>
                          <div className="form-group mb-2">
                            <input type="password" name="password_name" className="form-control" id="lrepass" placeholder="Re-enter Password" />
                          </div>
                          <div className="form-group mb-2 d-flex">
                            <input type="checkbox" className="custom-control-input" id="exampleCheck1" />
                            <label className="custom-control-label mb-0 ms-1 lh-1" htmlFor="exampleCheck1">I have read and accept the Terms and Privacy Policy?</label>
                          </div>
                          <div className="comment-btn mb-2 pb-2 text-center border-b">
                            <input type="submit" className="nir-btn w-100" id="submit1" defaultValue="Register" />
                          </div>
                          <p className="text-center">Already have an account? <a href="#" className="theme">Login</a></p>
                        </form>
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