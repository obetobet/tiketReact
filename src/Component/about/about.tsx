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
import {DetailAbout} from './detail_about'

interface IProps {}
interface IState {
  person: AboutModel
  Trans_id : any
  Trans_en : any
}

export default class About extends React.Component<IProps, IState> {
        constructor(props: IProps) {

          super(props);

          this.state = {
            Trans_id: [],
            Trans_en: [],
              person: {
                  Gambar: '',      
                  Visit: '',
                  Id: '',
                  Translations:{}
              },
              
          }

      }

      public componentDidMount() { 
          BaseService.getAll<AboutModel>('/about/2/').then(
              (rp) => {
                  if (rp.Status) {
                      const person = rp.Data; 
                      this.setState(
                        { Trans_id :person.translations.id,Trans_en :person.translations.en,person: new AboutModel(person._id, person.gambar,person.visit, person.translations )});  
                    } else {
                      toastr.error(rp.Messages);
                      console.log("Messages: " + rp.Messages);
                      console.log("Exception: " + rp.Exception);
                  }
                  
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
                  <DetailAbout Trans_id={this.state.Trans_id} Trans_en={this.state.Trans_en}/>
                  
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
        {/* <Testimonails/> */}
    </>
  )
}
}