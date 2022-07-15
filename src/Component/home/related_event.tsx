import React from 'react';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation,A11y,Autoplay  } from 'swiper';
import 'swiper/css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function RelatedEventIndex () {
    const navigationPrevRef = React.useRef<HTMLDivElement>(null)
    const navigationNextRef = React.useRef<HTMLDivElement>(null)
      return (
        <>  
            <section className="trending bg-grey pt-17 pb-6">
            <div
                className="section-shape top-0"
                style={{ backgroundImage: "url(images/shape8.png)" }}
            />
            <div className="container">
                <div className="row align-items-center justify-content-between mb-6 ">
                <div className="col-lg-7">
                    <div className="section-title text-center text-lg-start">
                    <h4 className="mb-1 theme1">Top Pick</h4>
                    <h2 className="mb-1">
                        Best <span className="theme">Tour Packages</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore.
                    </p>
                    </div>
                </div>
                <div className="col-lg-5"></div>
                </div>
                <div className="trend-box">


                <div className="row item-slider slick-initialized slick-slider">
               
                    <Swiper
                        breakpoints={{
                            499: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                            },
                            900: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            755: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1333: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            
                        }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                          }}
                        modules={[Autoplay,Navigation]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            }}                        
                        >

                    <SwiperSlide>
                        <div className="trend-item rounded box-shadow bg-white">
                        <div className="trend-image position-relative">
                        <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/trending/trending2.jpg" />
                        <div className="color-overlay" />
                        </div>
                        <div className="trend-content p-4 pt-5 position-relative">
                        <div className="trend-meta bg-theme white px-3 py-2 rounded">
                            <div className="entry-author">
                            <i className="icon-calendar" />
                            <span className="fw-bold"> 9 Days Tours</span>
                            </div>
                        </div>
                        <h5 className="theme mb-1">
                            <i className="flaticon-location-pin" /> Croatia
                        </h5>
                        <h3 className="mb-1">
                            <a href="tour-grid.html">Piazza Castello</a>
                        </h3>
                        <div className="rating-main d-flex align-items-center pb-2">
                            <div className="rating">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            </div>
                            <span className="ms-2">(12)</span>
                        </div>
                        <p className=" border-b pb-2 mb-2">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum
                        </p>
                        <div className="entry-meta">
                            <div className="entry-author d-flex align-items-center">
                            <p className="mb-0">
                                <span className="theme fw-bold fs-5"> $170.00</span> | Per
                                person
                            </p>
                            </div>
                        </div>
                        </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trend-item box-shadow rounded bg-white">
                            <div className="trend-image position-relative">
                            <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/trending/trending3.jpg" />
                            <div className="color-overlay" />
                            </div>
                            <div className="trend-content p-4 pt-5 position-relative">
                            <div className="trend-meta bg-theme white px-3 py-2 rounded">
                                <div className="entry-author">
                                <i className="icon-calendar" />
                                <span className="fw-bold"> 9 Days Tours</span>
                                </div>
                            </div>
                            <h5 className="theme mb-1">
                                <i className="flaticon-location-pin" /> Greece
                            </h5>
                            <h3 className="mb-1">
                                <a href="tour-grid.html">Santorini, Oia</a>
                            </h3>
                            <div className="rating-main d-flex align-items-center pb-2">
                                <div className="rating">
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                </div>
                                <span className="ms-2">(38)</span>
                            </div>
                            <p className=" border-b pb-2 mb-2">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum
                            </p>
                            <div className="entry-meta">
                                <div className="entry-author d-flex align-items-center">
                                <p className="mb-0">
                                    <span className="theme fw-bold fs-5"> $180.00</span> | Per
                                    person
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trend-item box-shadow rounded bg-white">
                            <div className="trend-image position-relative">
                            <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/trending/trending4.jpg" />
                            <div className="color-overlay" />
                            </div>
                            <div className="trend-content p-4 pt-5 position-relative">
                            <div className="trend-meta bg-theme white px-3 py-2 rounded">
                                <div className="entry-author">
                                <i className="icon-calendar" />
                                <span className="fw-bold"> 9 Days Tours</span>
                                </div>
                            </div>
                            <h5 className="theme mb-1">
                                <i className="flaticon-location-pin" /> Maldives
                            </h5>
                            <h3 className="mb-1">
                                <a href="tour-grid.html">Hurawalhi Island</a>
                            </h3>
                            <div className="rating-main d-flex align-items-center pb-2">
                                <div className="rating">
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                </div>
                                <span className="ms-2">(18)</span>
                            </div>
                            <p className=" border-b pb-2 mb-2">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum
                            </p>
                            <div className="entry-meta">
                                <div className="entry-author d-flex align-items-center">
                                <p className="mb-0">
                                    <span className="theme fw-bold fs-5"> $260.00</span> | Per
                                    person
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="trend-item box-shadow rounded bg-white">
                            <div className="trend-image position-relative">
                            <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/trending/trending1.jpg" />
                            <div className="color-overlay" />
                            </div>
                            <div className="trend-content p-4 pt-5 position-relative">
                            <div className="trend-meta bg-theme white px-3 py-2 rounded">
                                <div className="entry-author">
                                <i className="icon-calendar" />
                                <span className="fw-bold"> 5 Days Tours</span>
                                </div>
                            </div>
                            <h5 className="theme mb-1">
                                <i className="flaticon-location-pin" /> Greece
                            </h5>
                            <h3 className="mb-1">
                                <a href="tour-grid.html">Santorini, Oia</a>
                            </h3>
                            <div className="rating-main d-flex align-items-center pb-2">
                                <div className="rating">
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                <span className="fa fa-star checked" />
                                </div>
                                <span className="ms-2">(38)</span>
                            </div>
                            <p className=" border-b pb-2 mb-2">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum
                            </p>
                            <div className="entry-meta">
                                <div className="entry-author d-flex align-items-center">
                                <p className="mb-0">
                                    <span className="theme fw-bold fs-5"> $180.00</span> | Per
                                    person
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                    </Swiper>
                    <div id='spr' className="slick-prev slick-arrow text-center" aria-label="Previous"   ref={navigationNextRef}>Previous</div>
                    <div id='spn' className="slick-next slick-arrow text-center" aria-label="Next"  ref={navigationPrevRef} >Next</div>

                </div>


                </div>
                
            </div>
            </section>

        </>
        )
    
  }

