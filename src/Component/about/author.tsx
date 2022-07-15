import React from 'react';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import {A11y,Autoplay  } from 'swiper';
import 'swiper/css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Author() {
  return (  
    <>
    <section className="our-team pb-0 pt-6">
        <div className="container">
          <div className="section-title mb-6 w-75 mx-auto text-center">
            <h4 className="mb-1 theme1">Tour Guides</h4>
            <h2 className="mb-1">Meet Our <span className="theme">Excellent Guides</span></h2>
            
          </div>
          <div className="team-main">
            <div className="row shop-slider">
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
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    
                }}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}                        
                >
                <SwiperSlide>
                    <div className=" mb-4">
                    <div className="team-list rounded">
                    <div className="team-image">
                    <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/team/img1.jpg" />
                    </div>
                    <div className="team-content text-center p-3 bg-theme">
                        <h4 className="mb-0 white">Salmon Thuir</h4>
                        <p className="mb-0 white">Senior Agent</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mb-4">
                    <div className="team-list rounded">
                    <div className="team-image">
                    <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/team/img2.jpg" />
                    </div>
                    <div className="team-content text-center p-3 bg-theme">
                        <h4 className="mb-0 white">Horke Pels</h4>
                        <p className="mb-0 white">Head Officer</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                        <div className=" mb-4">
                        <div className="team-list rounded">
                        <div className="team-image">
                        <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/team/img4.jpg" />
                        </div>
                        <div className="team-content text-center p-3 bg-theme">
                            <h4 className="mb-0 white">Solden kalos</h4>
                            <p className="mb-0 white">Supervisor</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mb-4">
                    <div className="team-list rounded">
                    <div className="team-image">
                    <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/team/img3.jpg" />
                    </div>
                    <div className="team-content text-center p-3 bg-theme">
                        <h4 className="mb-0 white">Nelson Bam</h4>
                        <p className="mb-0 white">Quality Assurance</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" mb-4">
                    <div className="team-list rounded">
                    <div className="team-image">
                    <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/team/img4.jpg" />
                    </div>
                    <div className="team-content text-center bg-theme p-3">
                        <h4 className="mb-0 white">Cacics Coold</h4>
                        <p className="mb-0 white">Asst. Manager</p>
                    </div>
                    </div>
                </div>
                </SwiperSlide>

                </Swiper>
              
              
              
             
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}