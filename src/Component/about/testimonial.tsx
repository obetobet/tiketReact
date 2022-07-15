import React from 'react';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import {A11y,Autoplay  } from 'swiper';
import 'swiper/css';
export default function Testimonails() {
  return (  
    <>
     <section className="testimonial pt-9" style={{backgroundImage: 'url(images/testimonial.png)'}}>
        <div className="container">
          <div className="section-title mb-6 text-center w-75 mx-auto">
            <h2 className="mb-1">Our<span className="theme"> Testimonails</span></h2>
           
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pe-4">
              <div className="testimonial-image">
                <img src="images/travel2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-7 ps-4">
              <div className="row review-slider">
              <Swiper
                
                slidesPerView= {1}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}                        
                >
                
                <SwiperSlide>
                    <div className=" item">
                    <div className="testimonial-item1 rounded">
                        <div className="author-info mt-2 d-flex align-items-center mb-4">
                        <a href="#"><img src="images/testimonial/img1.jpg" alt="" /></a>
                        <div className="author-title ms-3">
                            <h5 className="m-0 theme">Jared Erondu</h5>
                            <span>Supervisor</span>
                        </div>
                        </div>
                        <div className="details">
                        <p className="m-0"><i className="fa fa-quote-left me-2 fs-1" />Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" item">
                  <div className="testimonial-item1 rounded">
                    <div className="author-info mt-2 d-flex align-items-center mb-4">
                      <a href="#"><img src="images/testimonial/img1.jpg" alt="" /></a>
                      <div className="author-title ms-3">
                        <h5 className="m-0 theme">Jared Erondu</h5>
                        <span>Supervisor</span>
                      </div>
                    </div>
                    <div className="details">
                      <p className="m-0"><i className="fa fa-quote-left me-2 fs-1" />Lorem Ipsum is simply dummy text of the printing andypesetting industry. Lorem ipsum a simple Lorem Ipsum has been the industry's standard dummy hic et quidem. Dignissimos maxime velit unde inventore quasi vero dolorem.</p>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                </Swiper>

                

                

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}