
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { useApiGet, TApiResponse } from '../../hooks/getapi';
import React, { useState, useEffect } from "react";
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type EventProps = {
  title : string
  judul : string
}
export const EventList = (props : EventProps) =>{
  const { language } = useSelector((state: RootState) => state.lang);

  const [result, setResult] = useState([]);
  
    useEffect(() => {
    const api = async () => {
      const data = await fetch("https://obet.pythonanywhere.com/v1/event/?limit=20", {
        method: "GET",
      });
      const jsonData = await data.json();
      console.log(jsonData.results)
      setResult(jsonData.results);
    };

    api();
    }, []);

    const formatDate = Moment().format("MMM Do YY");

  return (  
    <>
      <HelmetProvider>
              <Helmet>
                <title>{props.title}</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
                <meta
                    name="description"
                    content="Event List"
                  />
   
              </Helmet>
      </HelmetProvider>


      <section className="trending pb-0 pt-6">
        <div className="container">
          <div className="section-title mb-6 w-50 mx-auto text-center">
            {/* <h4 className="mb-1 theme1">Top Destinations</h4> */}
            <h2 className="mb-1">{translate('event_list', language)}</h2>
           
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p> */}
          </div>
          <div className="row align-items-center">

            {result.map((value :any ,i) => {
                return (   
                  <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={i}>
                  <div className="trend-item1">
                    <div className="trend-image position-relative rounded">
                    <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src={value.image} />
                      <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                        <div className="trend-content-title">
                          <h4 className="mb-0"><a href="#" className="theme1">{value.title}</a></h4>
                          <h6 className="mb-0 white"><i className="icon-location-pin" />{value.location}</h6>
                        </div>
                        <span className="white bg-theme p-1 px-2 rounded">{Moment(value.date).format('DD/MMM/YY')}</span>
                      </div>
                      <div className="color-overlay" />
                    </div>
                  </div>
                </div>
                

                  );
            })}

            


            
          </div>
        </div>
      </section>  
    </>
  )
}