import React from 'react';
import ServiceHome from './service';
import TopEventIndex from './top_event';
import RelatedEventIndex from './related_event';
import BlogIndex from './blog';
export default class HomeIndex extends React.Component {
    render() {
      return (
        <>  
            <section className="banner overflow-hidden">
                <div className="slider top50">
                    <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                        <div className="slide-inner">
                            <div
                            className="slide-image"
                            style={{ backgroundImage: "url(images/slider/1.jpg)" }}
                            />
                            <div className="swiper-content">
                            <div className="entry-meta mb-2">
                                <h5 className="entry-category mb-0 white">Amazing Places</h5>
                            </div>
                            <h1 className="mb-2">
                                <a href="detail-leftside.html" className="white">
                                Make Your Trip Fun &amp; Noted
                                </a>
                            </h1>
                            <p className="white mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <a href="detail-leftside.html" className="nir-btn">
                                Discover More
                            </a>
                            </div>
                            <div className="dot-overlay" />
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="slide-inner">
                            <div
                            className="slide-image"
                            style={{ backgroundImage: "url(images/slider/2.jpg)" }}
                            />
                            <div className="swiper-content">
                            <div className="entry-meta mb-2">
                                <h5 className="entry-category mb-0 white">Explore Travel</h5>
                            </div>
                            <h1 className="mb-2">
                                <a href="detail-leftside.html" className="white">
                                Start Planning Your Dream Trip
                                </a>
                            </h1>
                            <p className="white mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <div className="slider-button d-flex justify-content-center">
                                <a href="detail-rightside.html" className="nir-btn me-4">
                                Read More
                                </a>
                                <a href="detail-leftside.html" className="nir-btn-black">
                                Contact Us
                                </a>
                            </div>
                            </div>
                            <div className="dot-overlay" />
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div className="slide-inner">
                            <div
                            className="slide-image"
                            style={{ backgroundImage: "url(images/slider/3.jpg)" }}
                            />
                            <div className="swiper-content">
                            <div className="entry-meta mb-2">
                                <h5 className="entry-category mb-0 white">Road To Travel</h5>
                            </div>
                            <h1 className="mb-2">
                                <a href="detail-leftside.html" className="white">
                                Begin your adventure with us
                                </a>
                            </h1>
                            <p className="white mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </p>
                            <a href="detail-leftside.html" className="nir-btn">
                                Make An Enquiry
                            </a>
                            </div>
                            <div className="dot-overlay" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
            </section>
            <ServiceHome/>
            <TopEventIndex/>
            <RelatedEventIndex/>
            <BlogIndex/>
        </>
        )
    }
  }

