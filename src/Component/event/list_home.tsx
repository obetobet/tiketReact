import BaseService from "../../service/service";
import {EventModel} from "../../models/event"
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Moment from 'moment';
import { Link,NavLink  } from 'react-router-dom';
import { FaMapMarkerAlt,FaCalendar,FaClipboardCheck } from 'react-icons/fa';
import {memoize} from 'memoize-cache-decorator';
import {SkeletonCardEventHome} from "./Sekeleton";
interface IProps {}
interface IState {
  list: Array<EventModel>;
  isReady: Boolean;
  hasError: Boolean;
  navigationPrevRef?: any;
  navigationNextRef?:any;
  isLoading:boolean;
}

class EventList extends React.Component<IProps, IState>  {
  
    public state: IState = {
        list: new Array<EventModel>(),
        isLoading:true,
        isReady: false,
        hasError: false,
        navigationPrevRef : React.createRef(),
        navigationNextRef : React.createRef()
      };
      constructor(props: IProps) {
        super(props);
        this.state = {
          isReady: false,
          isLoading:true,
          list: Array<EventModel>(),
          hasError: false,
          navigationPrevRef :React.createRef(),
          navigationNextRef : React.createRef()

        };
      }
      
      public componentDidMount() {
        BaseService.getAll<EventModel>("/event/?limit=6&offset=1/").then((rp) => {
          if (rp.Status) {
            const data = rp.Data.results;
            const list = new Array<EventModel>();
            
            (data || []).forEach((p: any) => {
                list.push(new EventModel(p.id,p.title_category, p.image, p.title, p.description, p.date, p.slug, p.visit,p.location));
            });
    
            this.setState(
              { list: list,isLoading:false },
              function (){
                
              }); 
            this.setState({ isReady: true });
          } else {
            this.setState({ isReady: true });
            this.setState({ hasError: true });
            console.log("Messages: " + rp.Messages);
            console.log("Exception: " + rp.Exception);
          }
        });
    }

    
    public tabRow = () => {

        return this.state.list.map(function (object, i) {
          return  <div className="col-lg-4"  key={i}>
          <div className="flight-list">
              <div className="flight-full">
              <div className="item mb-2 border-all p-3 px-4 rounded">
                  <div className="row d-flex align-items-center justify-content-between" >
                    <div className="row" >
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="item-inner-image text-start">
                            <Link to={"/event/detail/" + object.Id} >
                              <LazyLoadImage   alt={object.Title}
                                effect="blur"
                                src={object.Image} />
                            </Link>
                            <h5 className="mb-0 text-center" style={{padding:"15px"}}>{object.Title}</h5>
                            </div>
                        </div>
                    </div>

                  <div className="col-lg-12">
                      <div className="accordion accordion-flush border-t mt-1 pt-1" id={object.Id}>
                      <div className="accordion-item overflow-hidden">
                          <p className="accordion-header" id="flush-headingOne">
                          <button className="accordion-button collapsed p-0 border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target={"#push" + object.Id } aria-expanded="false" aria-controls="flush-collapseOne">
                              Details
                          </button>
                          </p>
                          <div id={"push" + object.Id } className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#{object.Id}">
                          <div className="accordion-body p-0">
                              <div className="row flight-detail-wrap align-items-center border-t pt-1 mt-1" style={{}}>
                              <div className="col-lg-12">
                                  <div className="flight-date">
                                  <ul>
                                      <li><FaClipboardCheck/> {object.Category}</li><br/>
                                      <li><FaCalendar/> {Moment(object.Date).format('DD/MMM/YY')}</li><br/>
                                      <li><FaMapMarkerAlt/> {object.Location}</li><br/>
                                      
                                  </ul>
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
              </div>
          </div>
      </div>
        });
      };

    render (){
     
    return (
        <>
        <section className="trending pt-6 pb-0 bg-lgrey">
            <div className="container">
            {this.state.isLoading && <SkeletonCardEventHome Cards={this.state.list.length}/>}
              
            <div className="row">
                {this.tabRow()}
                
            
            </div>
            <div className="flight-btn text-center">
                <Link to={"/event/"} className="nir-btn">View More</Link>
                </div>
            </div>
        </section>
        </>
    );
}
}

export default EventList;