import React from 'react';
import axios from "axios";


export default class Footer extends React.Component {
    render() {
        return (
          <>  
            <footer
  className="pt-20 pb-4"
  style={{ backgroundImage: "url(images/background_pattern.png)" }}
>
  <div
    className="section-shape top-0"
    style={{ backgroundImage: "url(images/shape8.png)" }}
  />
  {/* <div className="insta-main pb-10">
    <div className="container">
      <div className="insta-inner">
        <div className="follow-button">
          <h5 className="m-0 rounded">
            <i className="fab fa-instagram" /> Follow on Instagram
          </h5>
        </div>
        <div className="row attract-slider">
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-3.jpg" alt="insta" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-4.jpg" alt="insta" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-5.jpg" alt="insta" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-1.jpg" alt="insta" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-7.jpg" alt="insta" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-8.jpg" alt="insta" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-2.jpg" alt="insta" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-6.jpg" alt="insta" />
              </a>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="insta-image rounded">
              <a href="gallery.html">
                <img src="images/insta/ins-9.jpg" alt="insta" />
              </a>
            </div>
          </div>
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
                  [email&nbsp;protected]
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
            <h3 className="white">Quick link</h3>
            <ul>
              <li>
                <a href="about-us.html">About Us</a>
              </li>
              <li>
                <a href="about-us.html">Delivery Information</a>
              </li>
              <li>
                <a href="about-us.html">Privacy Policy</a>
              </li>
              <li>
                <a href="about-us.html">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="about-us.html">Customer Service</a>
              </li>
              <li>
                <a href="#about-us.html">Return Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-12 mb-4">
          <div className="footer-links">
            <h3 className="white">Categories</h3>
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
              <li>
                <a href="about-us.html">Entertainment</a>
              </li>
              <li>
                <a href="about-us.html">Business</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="footer-links">
            <h3 className="white">Newsletter</h3>
            <div className="newsletter-form ">
              <p className="mb-3">
                Jin our community of over 200,000 global readers who receives
                emails filled with news, promotions, and other good stuff.
              </p>
              <form
                action="#"
                method="get"
                acceptCharset="utf-8"
                className="border-0 d-flex align-items-center"
              >
                <input type="text" placeholder="Email Address" />
                <button className="nir-btn ms-2">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="footer-payment">
    <div className="container">
      <div className="row footer-pay align-items-center justify-content-between text-lg-start text-center">
        <div className="col-lg-8 footer-payment-nav mb-4">
          <ul className="">
            <li className="me-2">We Support:</li>
            <li className="me-2">
              <i className="fab fa-cc-mastercard fs-4" />
            </li>
            <li className="me-2">
              <i className="fab fa-cc-paypal fs-4" />
            </li>
            <li className="me-2">
              <i className="fab fa-cc-stripe fs-4" />
            </li>
            <li className="me-2">
              <i className="fab fa-cc-visa fs-4" />
            </li>
            <li className="me-2">
              <i className="fab fa-cc-discover fs-4" />
            </li>
          </ul>
        </div>
        <div className="col-lg-4 footer-payment-nav mb-4">
          <ul className="d-flex align-items-center">
            <li className="me-2 w-75">
              <select className="niceSelect rounded">
                <option>English</option>
                <option>Chinese</option>
                <option>Russian</option>
                <option>Japanese</option>
                <option>Korean</option>
              </select>
            </li>
            <li className="w-25">
              <select className="niceSelect rounded">
                <option>$ USD</option>
                <option>$ AUD</option>
                <option>$ YEN</option>
                <option>$ IN</option>
                <option>$ NP</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div> */}
  <div className="footer-copyright">
    <div className="container">
      <div className="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between">
        <div className="copyright-text">
          <p className="m-0 white">2022 Travelin. All rights reserved.</p>
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

          </>
        )
    }
}