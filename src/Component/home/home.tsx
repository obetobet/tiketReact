import React, { useState, useEffect } from "react";
import Artikel from './artikel';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation,A11y,Autoplay  } from 'swiper';
import 'swiper/css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import EventList from "../event/list_home"
import Partner from "./partner";
import { memoize } from "memoize-cache-decorator";
import { LazyLoadImage } from 'react-lazy-load-image-component';

type resultProps = {
    title: string;
    gambar:string;
    slug:string;
  };
const HomeIndex: React.FC = React.memo(props => {
    memoize()
    const swiperx = useSwiper();
    const navigationPrevRef = React.useRef<HTMLDivElement>(null)
    const navigationNextRef = React.useRef<HTMLDivElement>(null)

    const [result, setResult] = useState<resultProps[]>([]);
    useEffect(() => {
    const api = async () => {
      const data = await fetch("https://obet.pythonanywhere.com/v1/slider/", {
        method: "GET",
        headers: {
            'Authorization':'token 836a53db3ee059632f06a84ce3cebbee78a030f2'
        }
      });
      const jsonData = await data.json();
      setResult(jsonData);
    };

    api();
    }, []);


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
                <div className="slider top10">
                    <div className="swiper-container">
                    <div className="swiper-wrapper">
                    <Swiper
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                          }}
                        slidesPerView={1}
                        modules={[Navigation,Autoplay]}
                        speed= {1000}
                        
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                          }}>

                      {result.map(function (object, i) {
                              return  <SwiperSlide key={i}>
                                  
                                  <div className="swiper-slide" >
                                      <div className="slide-inner" >
                                      <LazyLoadImage className="slide-image img-fluid" effect="opacity" alt={object.title}  src={object.gambar}/>
                                          <div className="dot-overlay" />
                                      </div>
                                  </div>
                              </SwiperSlide>
                              })};
                        
            </Swiper>
                        
                        
                        

                    </div>
                    </div>
                    <div className='swiper-button-next' ref={navigationNextRef}></div>
                    <div className='swiper-button-prev' ref={navigationPrevRef} ></div>
                </div>
                
            </section>
            <EventList/>
            <Artikel/>
            <Partner/>
        </>
        )
    
  })
export default HomeIndex
