import React, { useState, useEffect } from "react";
import { useAxiosget, TApiResponse } from '../../services/rest-api';
import { slider } from '../../services/model';
import TopEventIndex from './top_event';
import RelatedEventIndex from './related_event';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation,A11y,Autoplay  } from 'swiper';
import 'swiper/css';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function HomeIndex()  {
  const swiperx = useSwiper();
  const navigationPrevRef = React.useRef<HTMLDivElement>(null)
  const navigationNextRef = React.useRef<HTMLDivElement>(null)

  const responseAPI: slider[] = useAxiosget('slider/').data;

  return (
    <>  
    <HelmetProvider>
      <Helmet>
        <title>HOME</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
        <meta
            name="description"
            content="Home"
          />

      </Helmet>
    </HelmetProvider>
      <section className="banner overflow-hidden">
          <div className="slider top50">
              <div className="swiper-container">
              <div className="swiper-wrapper">
              <Swiper
                  navigation={{
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }}
                  slidesPerView={1}
                  modules={[Navigation, A11y,Autoplay]}
                  spaceBetween={50}
                  pagination={{ clickable: true }}
                  autoplay={{
                      delay: 7000,
                      disableOnInteraction: false,
                    }}
                  
                  >
            {responseAPI?.map((value: slider,i: number) => {
                  return (   
          <SwiperSlide key={i}>
              <div className="swiper-slide" >

                  <div className="slide-inner" >
                      <div className="slide-image" 
                      style={{ backgroundImage: `url(${value.gambar})` }}
                      />
                      <div className="dot-overlay" />
                  </div>
              </div>
          </SwiperSlide>
              );
          })}
          <SwiperSlide >xx</SwiperSlide>
                  
      </Swiper>
                  
                  
                  

              </div>
              </div>
              <div className='swiper-button-next' ref={navigationNextRef}></div>
              <div className='swiper-button-prev' ref={navigationPrevRef} ></div>
          </div>
          
      </section>
      {/* <ServiceHome/> */}
      {/* <TopEventIndex/> */}
      <RelatedEventIndex/>
      {/* <BlogIndex/> */}
    </>
  )
    
}

