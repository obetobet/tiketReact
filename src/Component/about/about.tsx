import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutModel from "../../models/about";
import * as toastr from 'toastr';
import BaseService from '../../service/service';
import {DetailAbout} from './detail_about';

interface IProps {}
interface IState {
  person: AboutModel
  Trans_id : any
  Trans_en : any
  isLoading:boolean
}

export default class About extends React.Component<IProps, IState> {
        constructor(props: IProps) {
          super(props);
          this.state = {
            Trans_id: [],
            Trans_en: [],
            isLoading:true,
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
                        { isLoading:false,Trans_id :person.translations.id,Trans_en :person.translations.en,person: new AboutModel(person._id, person.gambar,person.visit, person.translations )});  
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
                <meta name="description" content="Aboutht"/>
              </Helmet>
        </HelmetProvider>
        
        <section className="about-us pt-6" style={{backgroundImage: 'url(images/background_pattern.png)', backgroundPosition: 'bottom right'}}>
          <div className="container">
          <div>
        </div>
            <div className="about-image-box">
              <div className="row d-flex align-items-center justify-content-between">       
                  <DetailAbout isLoading={this.state.isLoading}Trans_id={this.state.Trans_id} Trans_en={this.state.Trans_en} Gambar={this.state.person.Gambar}/>
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