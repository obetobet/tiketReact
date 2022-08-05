import React, { useState, useEffect,Suspense  } from "react";
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { Navigation,A11y,Autoplay  } from 'swiper';
import 'swiper/css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { memoize } from "memoize-cache-decorator";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { SkeletonHome } from "./Sekeleton";

type resultProps = {
    title: string;
    gambar:string;
    slug:string;
  };
const EventList = React.lazy(() => import('../event/list_home'));
const Artikel = React.lazy(() => import('./artikel'));
const Partner = React.lazy(() => import('./partner'));
const HomeIndex: React.FC = React.memo(props => {
    memoize({ ttl: 10 * 60 * 1000 })
    
    const navigationPrevRef = React.useRef<HTMLDivElement>(null)
    const navigationNextRef = React.useRef<HTMLDivElement>(null)

    const [result, setResult] = useState<resultProps[]>([]);
    const [isLoading, setisLoading] = useState(true);
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
      setisLoading(false);
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
            {(isLoading) ? <SkeletonHome/> 
                : 
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
                                        <LazyLoadImage  className="slide-image img-fluid" alt={object.title}  src={object.gambar}/>
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
                }
            </section>
            <Suspense >
              <EventList />
              <Artikel/>
              <Partner/>
            </Suspense>
            
        </>
        )
    
  })
export default HomeIndex
