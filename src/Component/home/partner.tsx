import React from 'react';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation,A11y,Autoplay  } from 'swiper';
import 'swiper/css';
import { useState, useEffect } from "react";

type resultProps = {
    title: string;
    gambar:string;
    slug:string;
  };
export default function Partner()  {
    return (
        <>
        <section className="our-partner pt-0 " style={{padding:'0px'}}>
        <div className="container">
    
          <div className="row align-items-center partner-in partner-slider">
            <Swiper
            breakpoints={{
                499: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                900: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                755: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                1333: {
                    slidesPerView: 5,
                  },
                
              }}
            // slidesPerView={5}
            modules={[Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}                        
            >
                <SwiperSlide>
                    <div className="partner-item p-4 py-2 rounded bg-lgrey text-center">
                        <img src="images/cl-1.png" alt="" />
                    </div>
                </SwiperSlide>  
                <SwiperSlide>
                    <div className="partner-item p-4 py-2 rounded bg-lgrey text-center">
                        <img src="images/cl-5.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item p-4 py-2 rounded bg-lgrey text-center">
                        <img src="images/cl-2.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item p-4 py-2 rounded bg-lgrey text-center">
                        <img src="images/cl-3.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item p-4 py-2 rounded bg-lgrey text-center">
                        <img src="images/cl-4.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="partner-item p-4 py-2 rounded bg-lgrey text-center">
                        <img src="images/cl-5.png" alt="" />
                    </div>
                </SwiperSlide>              
                            
                            
                            
            </Swiper>
            
            
          </div>
        </div>
      </section>
        
        </>

    );

}