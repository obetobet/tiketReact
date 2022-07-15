import React from 'react';
import { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
type resultProps = {
    title: string;
    location: string;
    image:string;
    date:string;
  };

export default function TopEventIndex() {
    const [result, setResult] = useState<resultProps[]>([]);
    useEffect(() => {
    const api = async () => {
      const data = await fetch("https://obet.pythonanywhere.com/v1/event/?limit=4&offset=2", {
        method: "GET",
        headers: {
            'Authorization':'token 836a53db3ee059632f06a84ce3cebbee78a030f2'
        }
      });
      const jsonData = await data.json();
    //   console.log(jsonData.results)
      setResult(jsonData.results);
    };

    api();
    }, []);

      return (
        <>  
        <section className="trending pb-3 pt-0">
            <div className="container">
                <div className="section-title mb-6 w-50 mx-auto text-center">
                <h4 className="mb-1 theme1">Top Destinations</h4>
                <h2 className="mb-1">
                    Explore <span className="theme">Top Destinations</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore.
                </p>
                </div>
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="row">
                    <div className="col-lg-12 mb-4">
                        <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                            <LazyLoadImage
                                alt='image'
                                effect="blur"
                                src="images/destination/destination2.jpg" />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                            <div className="trend-content-title">
                                <h5 className="mb-0">
                                <a href="tour-grid.html" className="theme1">
                                    Italy
                                </a>
                                </h5>
                                <h3 className="mb-0 white">Caspian Valley</h3>
                            </div>
                            <span className="white bg-theme p-1 px-2 rounded">
                                18 Tours
                            </span>
                            </div>
                            <div className="color-overlay" />
                        </div>
                        </div>
                    </div>
                    {result.map((value,i) => {
                        return (
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4" key={i}>
                        <div className="trend-item1">
                        <div className="trend-image position-relative rounded">
                            <LazyLoadImage
                                    alt={value.image}
                                    effect="blur"
                                    src={value.image} />
                            <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100">
                            <div className="trend-content-title">
                                <h5 className="mb-0">
                                <a href="tour-grid.html" className="theme1">
                                    {value.location}
                                </a>
                                </h5>
                                <h3 className="mb-0 white">{value.title}</h3>
                            </div>
                            <span className="white bg-theme p-1 px-2 rounded">
                                15Tours
                            </span>
                            </div>
                            <div className="color-overlay" />
                        </div>
                        </div>
                    </div>
                     );
                    })}
                    </div>
                </div>
                <div className="col-lg-5 mb-4">
                    <div className="trend-item1">
                    <div className="trend-image position-relative rounded">
                        <LazyLoadImage
                                    alt="image"
                                    effect="blur"
                                    src="images/destination/destination1.jpg" />
                        <div className="trend-content d-flex align-items-center justify-content-between position-absolute bottom-0 p-4 w-100 z-index">
                        <div className="trend-content-title">
                            <h5 className="mb-0">
                            <a href="tour-grid.html" className="theme1">
                                England
                            </a>
                            </h5>
                            <h3 className="mb-0 white">London</h3>
                        </div>
                        <span className="white bg-theme p-1 px-2 rounded">15 Tours</span>
                        </div>
                        <div className="color-overlay" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        </>
        )
    
  }

