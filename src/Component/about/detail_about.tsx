import React, { useState, useEffect } from "react";
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Image from 'react-bootstrap/Image'
import CountUp from 'react-countup';
import SkeletonCard from "./Sekeleton";
type AboutProps = {
    Trans_id? : any
    Trans_en? : any
    Gambar? : any
    Counter? : any
    isLoading:boolean
}
export const DetailAbout = (props : AboutProps) =>{
  const { language } = useSelector((state: RootState) => state.lang);
  return (
    <div className="about-image-box">
      <div className="row d-flex align-items-center justify-content-between">
      {props.isLoading && <SkeletonCard/>}
        <div className="col-lg-6 ">
          <div className="about-content text-center text-lg-start">
          <h4 className="theme d-inline-block mb-0" style={{textTransform:"capitalize"}}>{translate('about', language)}</h4>
            <h2 className="border-b mb-2 pb-1">{localStorage.getItem('language') == 'Indonesia' ? props.Trans_id.title : props.Trans_en.title}  </h2>
            <p className="border-b mb-2 pb-2"> {localStorage.getItem('language') == 'Indonesia' ? props.Trans_id.description : props.Trans_en.description } </p>
              <div className="about-listing">
                <ul className="d-flex justify-content-between">
                  <li><i className="icon-location-pin theme" />{translate('Tour Guide',language)} </li>
                  <li><i className="icon-briefcase theme" />{translate('Friendly Price',language)} </li>
                  <li><i className="icon-folder theme" /> {translate('Reliable Tour Package',language)}</li>
                </ul>
              </div>
          
          </div>
        </div>
        <div className="col-lg-6 mb-4 pe-4">
          <div className="about-image" style={{animation: 'none', background: 'transparent'}}>
            <Image src={props.Gambar} rounded/>
          </div>
        </div>
        <div className="col-lg-12">
                  <div className="counter-main w-75 float-start z-index3 position-relative">
                    <div className="counter p-4 pb-0 box-shadow bg-white rounded mt-minus">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className="counter-item border-end pe-4">
                            <div className="counter-content">
                              <h2 className="value mb-0 theme"><CountUp end={20} /></h2>
                              <span className="m-0">Artikel</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className="counter-item border-end pe-4">
                            <div className="counter-content">
                              <h2 className="value mb-0 theme"><CountUp end={50} /></h2>
                              <span className="m-0">{translate('event', language)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className="counter-item border-end pe-4">
                            <div className="counter-content">
                              <h2 className="value mb-0 theme"><CountUp end={120} /></h2>
                              <span className="m-0">{translate('Happy Customers', language)}</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className="counter-item">
                            <div className="counter-content">
                              <h2 className="value mb-0 theme"><CountUp end={10} /></h2>
                              <span className="m-0">{translate('Award Winning', language)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
        </div>
      </div>
    </div>
  );


}