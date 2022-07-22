import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ArtikelList from '../artikel/artikel_list'
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
export default function Artikel () {
    const { language } = useSelector((state: RootState) => state.lang);

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
                    <h2 className="mb-1" >{translate('News', language)}</h2>
                    </div>
                </div>
                <div className="col-lg-5"></div>
                </div>
                <div className="trend-box">
                <div className="row item-slider slick-initialized slick-slider">
                    

                    <ArtikelList/>
                    
                    

                </div>


                </div>
                
            </div>
            </section>

        </>
        )
    
  }

