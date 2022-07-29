import BaseService from "../../service/service";
import * as toastr from "toastr";
import {ArtikelModel} from "../../models/artikel"
import React from 'react';
import {Swiper,  SwiperSlide,useSwiper } from 'swiper/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Navigation,A11y,Autoplay  } from 'swiper';
import 'swiper/css';
import { History } from 'history';
import Moment from 'moment';
import { useParams,useSearchParams,useLocation,useNavigate } from 'react-router-dom';
import * as qs from "query-string";

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
  Author: string,
  Visit: string,
  Title: string,
  Description: string,
  Translations_id:any,
  Translations_en:any
}
interface RouteParams {
  id: string
}


class ArtikelDetail extends React.Component<IProps,IState> {
  
      constructor(props: IProps) {
        super(props);
        this.state = {
          Id: '',
          Category: '',
          Gambar: '',    
          Date: '',
          Author: '',
          Visit: '',
          Title: '',
          Description: '',
          Translations_id:[],
          Translations_en:[],
            
        }

    }

   
  
    public componentDidMount() { 
      
      BaseService.getdetail<ArtikelModel>('/artikel/',this.props.params?.Id).then(
          (rp) => {
            
              if (rp.Status) {
                  const p = rp.Data; 
                  console.log(p)
                  this.setState(
                    { Id : p.id,Category : p.title_Category,Gambar: p.gambar,Title: p.title,Description: p.description, Date: p.date,Author: p.author, Visit: p.visit,Translations_en : p.translations.en, Translations_id : p.translations.id},                        );              
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
         <section className="blog">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-2 mb-4"></div>
            <div className="col-lg-8 mb-4">
              <div className="blog-single">
                <div className="blog-wrapper">
                  <h2 className="lh-sm">{localStorage.getItem('language') == 'Indonesia' ? this.state.Translations_id.title : this.state.Translations_en.title}</h2>
                  <div className="blog-content first-child-cap">
                    <p className="mb-3">{localStorage.getItem('language') == 'Indonesia' ? this.state.Translations_id.description : this.state.Translations_en.description}</p>
                  </div>
                  <div className="blog-quote mb-4 rounded">
                    <p className="white">“To take a trivial example, which ever undertakes laborious physical work exercise, except obtain some advantage blinded” </p>
                    <span className="white">By Michael Delwell</span>
                    <i className="fas fa-quote-left" />
                  </div>
                  <div className="blog-imagelist mb-4">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <img src="images/trending/trending4.jpg" alt="image" className="rounded" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <img src="images/trending/trending2.jpg" alt="image" className="rounded" />
                      </div>
                    </div>
                  </div>
                  <div className="bigyapan mb-4">
                    <a href="#"><img src="images/bigyapan1.jpg" alt="" className="rounded" /></a>
                  </div>
                  <p className="mb-4">as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                  <a href="#"><img src="images/bigyapan1.jpg" alt="" className="rounded" /></a>
                  <div className="blog-share d-flex justify-content-between align-items-center mb-4 bg-lgrey border rounded">
                    <div className="blog-share-tag">
                      <ul className="inline">
                        <li><strong>Posted In:</strong></li>
                        <li><a href="#">Fashion,</a></li>
                        <li><a href="#">Beauty,</a></li>
                        <li><a href="#">Vacation,</a></li>
                        <li><a href="#">Travel,</a></li>
                        <li><a href="#">News</a></li>
                      </ul>
                    </div>
                    <div className="header-social">
                      <ul>
                        <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                        <li><a href="#"><i className="fab fa-twitter" /></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="single-comments single-box mb-4">
                  <h4 className="mb-4">Showing 16 verified guest comments</h4>
                  <div className="comment-box">
                    <div className="comment-image mt-2">
                      <img src="images/reviewer/1.jpg" alt="image" />
                    </div>
                    <div className="comment-content rounded">
                      <h4 className="mb-1 Soldman Kell">Soldman Kell</h4>
                      <p className="comment-date">April 25, 2019 at 10:46 am</p>
                      <div className="comment-rate">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="comment-title">"The worst hotel ever"</span>
                      </div>
                      <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                      <div className="comment-like">
                        <div className="like-title float-left">
                          <a href="#" className="nir-btn mr-2">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box">
                    <div className="comment-image mt-2">
                      <img src="images/reviewer/2.jpg" alt="image" />
                    </div>
                    <div className="comment-content rounded">
                      <h4 className="mb-1">Burson Lesson</h4>
                      <p className="comment-date">April 25, 2019 at 10:46 am</p>
                      <div className="comment-rate">
                        <div className="rating">
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                          <span className="fa fa-star checked" />
                        </div>
                        <span className="comment-title">"Was too noisy and not suitable for business meetings"</span>
                      </div>
                      <p className="comment">Take in the iconic skyline and visit the neighbourhood hangouts that you've only ever seen on TV. Take in the iconic skyline and visit the neighbourhood.</p>
                      <div className="comment-like">
                        <div className="like-title float-left">
                          <a href="#" className="nir-btn">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-add-review">
                  <h4 >Write a Review</h4>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <input type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <input type="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-lg-12 mb-1">
                        <div className="form-group">
                          <textarea defaultValue={"Comment"} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-btn">
                          <a href="#" className="nir-btn">Submit Review</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mb-4"></div>
            
          </div>
        </div>
      </section>
        </>
    );
}
}

export default  withRouter(ArtikelDetail);