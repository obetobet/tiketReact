import BaseService from "../../service/service";
import * as toastr from "toastr";
import {EventModel} from "../../models/event"
import React from 'react';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Navigation,A11y,Autoplay  } from 'swiper';
import 'swiper/css';
import Moment from 'moment';
import { useParams,useLocation,useNavigate } from 'react-router-dom';

type IProps = {
  params?:{
    Id:string
  }
}

export const withRouter = (Component: React.ComponentType<any>) => {
  const WithRouter = (props: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return <Component {...props} location={location} navigate={navigate} params={params} />;
  }
  return WithRouter;
}
interface IState {
  // person: ArtikelModel,
  Id: string,
  Category: string,
  Gambar: string,    
  Date: string,
  Visit: string,
  Title: string,
  Description: string,
  Location : string,
  Latitude : string,
  Longitude : string,

  Galery:any,
  Tiket:any,
  
}
interface RouteParams {
  id: string
}


class EventDetail extends React.Component<IProps,IState> {
  
      constructor(props: IProps) {
        super(props);
        this.state = {
          Id: '',
          Category: '',
          Gambar: '',    
          Date: '',
          Visit: '',
          Title: '',
          Description: '',
          Location : '',
          Latitude : '',
          Longitude : '',
          Galery:[],
          Tiket:[],
            
        }

    }

   
  
    public componentDidMount() { 
      
      BaseService.getdetail<EventModel>('/event/',this.props.params?.Id).then(
          (rp) => {
            
              if (rp.Status) {
                  const p = rp.Data; 
                  console.log(p)
                  this.setState(
                    { Id : p.id,Category : p.title_Category,Gambar: p.image,Title: p.title,Description: p.description, Date: p.date, Visit: p.visit,Galery : p.galery, Tiket : p.tiket,Latitude:p.latitude,Longitude:p.longitude,Location:p.location},                        );              
                } else {
                  toastr.error(rp.Messages);
                  console.log("Messages: " + rp.Messages);
                  console.log("Exception: " + rp.Exception);
              }
          }

      );
      
  }




    render (){

     
    return (
        <>
        <section className="trending pt-6 pb-0 bg-lgrey">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-content">
                  <div id="highlight" className="mb-4">
                    <div className="single-full-title border-b mb-2 pb-2">
                      <div className="single-title">
                        <h2 className="mb-1">{this.state.Title}</h2>
                        <div className="rating-main d-flex align-items-center">
                          <p className="mb-0 me-2">
                            <i className="icon-location-pin" /> {this.state.Location}
                          </p>
                          <div className="rating me-2">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                          </div>
                          <span>(1,186 Reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="description-images mb-4">
                    <LazyLoadImage className="w-100 rounded" height={400} src={this.state.Gambar} alt={this.state.Title} />             
                    </div>
                    <div className="description mb-2">
                      <h4>Description</h4>
                      <p>{this.state.Description}</p>
                        
                    </div>
                    <div className="description d-md-flex">
                      <div className="desc-box bg-grey p-4 rounded me-md-2 mb-2">
                        <h5 className="mb-2">Price Includes</h5>
                        <ul>
                          <li className="d-block pb-1">
                            <i className="fa fa-check pink mr-1" /> Air Fares
                          </li>
                          <li className="d-block pb-1">
                            <i className="fa fa-check pink mr-1" /> 3 Nights Hotel
                            Accomodation
                          </li>
                          <li className="d-block pb-1">
                            <i className="fa fa-check pink mr-1" /> Tour Guide
                          </li>
                          <li className="d-block">
                            <i className="fa fa-check pink mr-1" /> Entrance Fees
                          </li>
                        </ul>
                      </div>
                      <div className="desc-box bg-grey p-4 rounded ms-md-2 mb-2">
                        <h4 className="mb-2">Departure &amp; Return Location</h4>
                        <ul>
                          <li className="d-block pb-1">
                            <i className="fa fa-close pink mr-1" /> Guide Service Fee
                          </li>
                          <li className="d-block pb-1">
                            <i className="fa fa-close pink mr-1" /> Driver Service Fee
                          </li>
                          <li className="d-block pb-1">
                            <i className="fa fa-close pink mr-1" /> Any Private Expenses
                          </li>
                          <li className="d-block">
                            <i className="fa fa-close pink mr-1" /> Room Service Fees
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="description mb-2">
                    <h4 className="mb-2">Gallery</h4>
                    <div className="services-image d-md-flex">
                      <div className="me-md-2 rounded overflow-hidden mb-2">
                        <img
                          src="images/trending/trending12.jpg"
                          alt="123"
                          className="w-100"
                        />
                      </div>
                      <div className="ms-md-2 rounded overflow-hidden mb-2">
                        <img
                          src="images/trending/trending12.jpg"
                          alt="321"
                          className="w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div id="single-map" className="single-map mb-4">
                    <h4>Map</h4>
                    <div className="map rounded overflow-hidden">
                      <div style={{ width: "100%" }}>
                      <iframe 
                        className=" rounded overflow-hidden"
                        height={400}
                        src={"//maps.google.com/maps?q="+ this.state.Latitude + ',' + this.state.Longitude +"&z=15&output=embed"}
                        >
                        </iframe>
                        
                      </div>
                    </div>
                  </div>
                
                  <div id="single-add-review" className="single-add-review">
                    <h4>Write a Review</h4>
                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <input type="text" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-2">
                            <input type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-2">
                            <textarea defaultValue={"Comment"} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-btn">
                            <a href="#" className="nir-btn">
                              Submit Review
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar-sticky">
                  <div className="list-sidebar">
                    <div className="author-news mb-4 border-all box-shadow p-5 text-center rounded">
                      <div className="author-news-content">
                        <div className="author-thumb mb-1">
                          <img src="images/team/img2.jpg" alt="author" />
                        </div>
                        <div className="author-content">
                          <h3 className="title mb-1">
                            <a href="#">Relson Dulux</a>
                          </h3>
                          <p className="mb-2">
                            Hello, We’re content writer who is fascinated by content
                            fashion, celebrity and lifestyle. We helps clients bring the
                            right content to the right people.
                          </p>
                          <div className="header-social">
                            <ul>
                              <li>
                                <a href="#">
                                  <i className="fab fa-facebook-f rounded" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-google-plus-g rounded" />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="fab fa-twitter rounded" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="sidebar-item mb-4">
                      <h4 className="">Tags</h4>
                      <ul className="sidebar-tags">
                        <li>
                          <a href="#">Tour</a>
                        </li>
                        <li>
                          <a href="#">Rental</a>
                        </li>
                        <li>
                          <a href="#">City</a>
                        </li>
                        <li>
                          <a href="#">Yatch</a>
                        </li>
                        <li>
                          <a href="#">Activity</a>
                        </li>
                        <li>
                          <a href="#">Museum</a>
                        </li>
                        <li>
                          <a href="#">Beauty</a>
                        </li>
                        <li>
                          <a href="#">Classic</a>
                        </li>
                        <li>
                          <a href="#">Creative</a>
                        </li>
                        <li>
                          <a href="#">Designs</a>
                        </li>
                        <li>
                          <a href="#">Featured</a>
                        </li>
                        <li>
                          <a href="#">Free Style</a>
                        </li>
                        <li>
                          <a href="#">Programs</a>
                        </li>
                        <li>
                          <a href="#">Travel</a>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebar-item mb-4">
                      <div className="sidebar-image rounded overflow-hidden">
                        <img src="images/destination/destination4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        </>
    );
}
}

export default  withRouter(EventDetail);