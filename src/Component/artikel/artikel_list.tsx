import BaseService from "../../service/service";
import * as toastr from "toastr";
import {ArtikelModel} from "../../models/artikel"
import React,{ Component} from 'react';
import {Swiper,  SwiperSlide } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Navigation,Autoplay  } from 'swiper';
import 'swiper/css';
import Moment from 'moment';
import { Link,NavLink,useParams,useNavigate,useLocation  } from 'react-router-dom';

interface IProps {}
interface IState {
  list: Array<ArtikelModel>;
  isReady: Boolean;
  hasError: Boolean;
  navigationPrevRef?: any;
  navigationNextRef?:any;
  
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
class ArtikelList extends React.Component<IProps, IState>  {
    public state: IState = {
        list: new Array<ArtikelModel>(),
        isReady: false,
        hasError: false,
        navigationPrevRef : React.createRef(),
        navigationNextRef : React.createRef()
      };
      constructor(props: IProps) {
        super(props);
        this.state = {
          isReady: false,
          list: Array<ArtikelModel>(),
          hasError: false,
          navigationPrevRef :React.createRef(),
          navigationNextRef : React.createRef()

        };
      }
    
      public componentDidMount() {
        BaseService.getAll<ArtikelModel>("/artikel/?limit=7&offset=1/").then((rp) => {
          if (rp.Status) {
            const data = rp.Data.results;
            const list = new Array<ArtikelModel>();
            
            (data || []).forEach((p: any) => {
                list.push(new ArtikelModel(p.id,p.title_Category, p.gambar, p.title, p.description, p.date, p.author, p.slug, p.visit,p.translations));
            });
    
            this.setState(
              { list: list },
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
          return  <SwiperSlide key={i}>
          <div className="trend-item rounded box-shadow bg-white">
          <div className="trend-image position-relative">
          <LazyLoadImage
                  alt={object.Title}
                  effect="blur"
                  src={object.Gambar} />
          <div className="color-overlay" />
          </div>
          <div className="trend-content p-4 pt-5 position-relative">
          <div className="trend-meta bg-theme white px-3 py-2 rounded">
              <div className="entry-author">
              <i className="icon-calendar" />
              <span className="fw-bold"> {Moment(object.Date).format('DD-MMM-YY')}</span>
              </div>
          </div>
        
              <h5 className="theme mb-1">
              <i className="flaticon-location-pin" />{object.Category} 
          </h5>
        
          <h3 className="mb-1">
            <Link to={"/artikel/detail/" + object.Id } key={object.Id}>
              {localStorage.getItem('language') == 'Indonesia' ? object.Translations.id.title : object.Translations.en.title} 
            </Link>
          </h3>
          <div className="rating-main d-flex align-items-center pb-2">
              <div className="rating">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              </div>
              <span className="ms-2">(12)</span>
          </div>
          <p className=" border-b pb-2 mb-2">
          {localStorage.getItem('language') == 'Indonesia' ? object.Translations.id.description : object.Translations.en.description} 
            
          </p>
          <div className="entry-meta">
              <div className="entry-author d-flex align-items-center">
              {/* <p className="mb-0">
                  <span className="theme fw-bold fs-5"> $170.00</span> | Per
                  person
              </p> */}
              </div>
          </div>
          </div>
          </div>
      </SwiperSlide>
        });
      };

    render (){

     
    return (
        <>
          <Swiper
                        breakpoints={{
                            499: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                            },
                            900: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            755: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1333: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            
                        }}
                        navigation={{
                            prevEl: this.state.navigationPrevRef.current,
                            nextEl: this.state.navigationNextRef.current,
                          }}
                        modules={[Autoplay,Navigation]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            }}                        
                        >
            {this.tabRow()}
            </Swiper>
            <div id='spr' className="slick-prev slick-arrow text-center" aria-label="Previous"   ref={this.state.navigationPrevRef}>Previous</div>
                    <div id='spn' className="slick-next slick-arrow text-center" aria-label="Next"  ref={this.state.navigationNextRef} >Next</div>
        </>
    );
}
}

export default withRouter(ArtikelList);