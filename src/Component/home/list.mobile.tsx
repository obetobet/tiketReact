// import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaBeer,FaGem,FaHeart,FaFilter } from 'react-icons/fa';
import { slide as Menu } from 'react-burger-menu';
import '../../App.css'
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import React, { useCallback, useState, useEffect, useRef, FC } from 'react';

type ListMobileProps = {
    isLogined?: boolean,
    openedFilter?: boolean
}

export const ListMobile = (props:ListMobileProps) => {
    const { language } = useSelector((state: RootState) => state.lang);
    
    return (
        <>
        <div className='fltrh'>
            <Menu right   disableOverlayClick width={ '500px' } customBurgerIcon={ <FaFilter/> }>
          
                <div className="list-sidebar">
                  <div className="sidebar-item mb-4">                    
                  </div>
                  <div className="sidebar-item mb-4">
                    <h3 className='mb-0'>{translate('Price Range', language)}</h3>
                    {/* <div className="range-slider mt-0"> */}
                 
                      {/* <div data-min={0} data-max={2000} data-unit="$" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
                        <span className="min-value">0 $</span>
                        <span className="max-value">20000 $</span>
                        <div className="ui-slider-range ui-widget-header ui-corner-all full" style={{left: '0%', width: '100%'}} />
                      </div> */}
                      {/* <div className="clearfix" />
                    </div> */}
                  </div>
                  <div className="sidebar-item mb-4">
                    <h3 className='mb-0'>{translate('Categories', language)}</h3>
                    <ul className="sidebar-category1">
                      <li><input type="checkbox" defaultChecked /> Nonstop <span className="float-end">$92</span></li>
                      <li><input type="checkbox" /> 1 Stop <span className="float-end">$40</span></li>
                      <li><input type="checkbox" /> 2+ Stops <span className="float-end">$22</span></li>
                    </ul>
                  </div>
                  
                </div>
            </Menu>
        </div>
        </>
        
    );

}
