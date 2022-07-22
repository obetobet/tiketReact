import React from "react";
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Testimonails from './testimonial';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutModel from "../../models/about";
import * as toastr from 'toastr';
import BaseService from '../../service/service'
import Image from 'react-bootstrap/Image'


interface IProps {}
interface IState {
  person: AboutModel
}

export default class About extends React.Component<IProps, IState> {
  
        constructor(props: IProps) {

          super(props);

          this.state = {
              person: {
                  Gambar: '',      
                  Visit: '',
                  Id: '',
                  Translations:{}
              }
          }

      }

      public componentDidMount() { 
          BaseService.getAll<AboutModel>('/about/2/').then(
              (rp) => {
                  if (rp.Status) {
                      const person = rp.Data; 
                      this.setState(
                        { person: new AboutModel(person._id, person.gambar,person.visit, person.translations )},                        );
                        
                        
                    } else {
                      toastr.error(rp.Messages);
                      console.log("Messages: " + rp.Messages);
                      console.log("Exception: " + rp.Exception);
                  }
                  console.log(this.state.person.Translations.en.title)
              }

          );
          
      }
      

    render() {
      
  return (  
    <>
        <HelmetProvider>
              <Helmet>
                <title>Halaman About</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
                <meta
                    name="description"
                    content="Aboutht"
                  />
   
              </Helmet>
        </HelmetProvider>
        
        <section className="about-us pt-6" style={{backgroundImage: 'url(images/background_pattern.png)', backgroundPosition: 'bottom right'}}>
          <div className="container">
            <div className="about-image-box">
              <div className="row d-flex align-items-center justify-content-between">
                <div className="col-lg-6 ps-4">
                  <div className="about-content text-center text-lg-start">
                    <h4 className="theme d-inline-block mb-0"></h4>
                    <h2 className="border-b mb-2 pb-1"></h2>
                    <p className="border-b mb-2 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="about-listing">
                      <ul className="d-flex justify-content-between">
                        <li><i className="icon-location-pin theme" /> Tour Guide</li>
                        <li><i className="icon-briefcase theme" /> Friendly Price</li>
                        <li><i className="icon-folder theme" /> Reliable Tour Package</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4 pe-4">
                  <div className="about-image" style={{animation: 'none', background: 'transparent'}}>
                    <Image src={this.state.person.Gambar} rounded/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="counter-main w-75 float-start z-index3 position-relative">
                    <div className="counter p-4 pb-0 box-shadow bg-white rounded mt-minus">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className="counter-item border-end pe-4">
                            <div className="counter-content">
                              <h2 className="value mb-0 theme">20</h2>
                              <span className="m-0">Years Experiences</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className="counter-item border-end pe-4">
                            <div className="counter-content">
                              <h2 className="value mb-0 theme">530</h2>
                              <span className="m-0">Tour Packages</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className="counter-item border-end pe-4">
                            <div className="counter-content">
                              <h2 className="value mb-0 theme">850</h2>
                              <span className="m-0">Happy Customers</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                          <div className="counter-item">
                            <div className="counter-content">
                              <h2 className="value mb-0 theme">320</h2>
                              <span className="m-0">Award Winning</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="white-overlay" />
        </section>

        {/* <Author/> */}
        <Testimonails/>
    </>
  )
}
}