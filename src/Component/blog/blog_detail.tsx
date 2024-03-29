import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import BaseService from "../../service/service";
import {ArtikelModel} from "../../models/artikel"


export  const Order: React.FC = (props) => {
  const { language } = useSelector((state: RootState) => state.lang);
  let params = useParams()
  
  const [author, setauthor] = useState()
  const [date, setdate] = useState()
  const [gambar, setgambar] = useState()
  const [id, setid] = useState()
  const [slug, setslug] = useState()
  const [translations_en, settranslations_en] = useState([])
  const [translations_id, settranslations_id] = useState()
  const [result, setResult] = useState([]);
  

    useEffect(() => {
      const api = async () => {
        BaseService.getdetail<ArtikelModel>('/artikel/',params.Id).then(
            (rp) => {
                
                if (rp.Status) {
                    const p = rp.Data; 
                    const queryParams = new URLSearchParams(window.location.search);
                    
                    setauthor(p.author)
                    setdate(p.date)
                    setgambar(p.gambar)
                    setid(p.id)
                    setslug(p.slug)
                    settranslations_en(p.translations.en)
                    settranslations_id(p.translations.id)
                    
                    } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }

    );console.log(translations_en)
  };

  api();
  }, []);



  return (
      <>
    
    {/* {result.map((value :any ,i) => {
      return (  */}
      <section className="blog">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-12 mb-4">
            <div className="blog-single">
              <div className="blog-wrapper">
                <h2 className="lh-sm">{author}</h2>
                <div className="blog-content first-child-cap">
                  <p className="mb-3"></p>
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
              <div className="blog-author mb-4 bg-grey border rounded">
                <div className="blog-author-item">
                  <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-3 col-sm-3 col-xs-12">
                      <div className="blog-thumb text-center position-relative">
                        <img src="images/reviewer/1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-md-9 col-sm-9 col-xs-12">
                      <h3 className="title pink"><a href="#">About Author <span>Graphic Designer</span></a></h3>
                      <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sceler neque in euismod. Nam vitae urnasodales neque in faucibus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-next mb-4 d-sm-flex align-items-center rounded">
                <a href="#" className="d-block bg-theme">
                  <div className="prev ps-4">
                    <i className="fa fa-arrow-left white" />
                    <p className="m-0 white">Previous Post</p>
                    <p className="m-0 white">The bedding was hardly able</p>
                  </div>
                </a>
                <a href="#" className="d-block bg-grey">
                  <div className="next pr-4 text-right">
                    <i className="fa fa-arrow-right" />
                    <p className="m-0">Previous Post</p>
                    <p className="m-0">The bedding was hardly able</p>
                  </div>
                </a>
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
          
        </div>
      </div>
      </section>
         {/* ); 
       })} */}
  </>
  ) 
}