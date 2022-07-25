import React, { useState, useEffect } from "react";
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Moment from 'moment';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type AboutProps = {
    Trans_id? : any
    Trans_en? : any
}
export const DetailAbout = (props : AboutProps) =>{
  const { language } = useSelector((state: RootState) => state.lang);

  return (
    <div className="about-content text-center text-lg-start">
    <h4 className="theme d-inline-block mb-0"></h4>
      <h2 className="border-b mb-2 pb-1">{localStorage.getItem('language') == 'Indonesia' ? props.Trans_id.title : props.Trans_en.title}  </h2>
      <p className="border-b mb-2 pb-2"> {localStorage.getItem('language') == 'Indonesia' ? props.Trans_id.description : props.Trans_en.description} </p>
        <div className="about-listing">
          <ul className="d-flex justify-content-between">
            <li><i className="icon-location-pin theme" />{translate('Tour Guide',language)} </li>
            <li><i className="icon-briefcase theme" />{translate('Friendly Price',language)} </li>
            <li><i className="icon-folder theme" /> {translate('Reliable Tour Package',language)}</li>
          </ul>
        </div>
    
  </div>
  );


}