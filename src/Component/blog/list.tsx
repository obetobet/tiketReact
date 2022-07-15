import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function BlogList() {
  return (  
    <>
        <HelmetProvider>
            <Helmet>
            <title>Halaman Blog List</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
            <meta
                name="description"
                content="Blog List"
                />

            </Helmet>
        </HelmetProvider>

        <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 pe-lg-4">
              <div className="listing-inner">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="list-results d-flex align-items-center justify-content-between">
                      <div className="list-results-sort">
                        <p className="m-0">Showing 1-5 of 80 results</p>
                      </div>
                      <div className="click-menu d-flex align-items-center justify-content-between">
                        {/* <div className="change-list me-2 rounded overflow-hidden"><a href="post-list-1.html"><i className="fa fa-bars bg-grey" /></a></div>
                        <div className="change-grid f-active me-2 rounded overflow-hidden"><a href="post-grid-1.html"><i className="fa fa-th" /></a></div> */}
                        <div className="sortby d-flex align-items-center justify-content-between ml-2">
                          <select className="niceSelect">
                            <option value={1}>Sort By</option>
                            <option value={2}>Average rating</option>
                            <option value={3}>Price: low to high</option>
                            <option value={4}>Price: high to low</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                      <div className="trend-image">
                        <img src="images/trending/trending10.jpg" alt="image" />
                      </div>
                      <div className="trend-content-main p-4 pb-2">
                        <div className="trend-content">
                          <h5 className="theme mb-1">Technology</h5>
                          <h4><a href="detail-1.html">How a developer duo at Deutsche Bank keep remote alive.</a></h4>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          </p>
                          <div className="entry-meta d-flex align-items-center justify-content-between">
                            <div className="entry-author mb-2">
                              <img src="images/reviewer/2.jpg" alt="" className="rounded-circle me-1" />
                              <span>Sollmond Nell</span>
                            </div>
                            <div className="eentry-button d-flex align-items-center mb-2">
                              <a href="#" className="nir-btn">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                      <div className="trend-image">
                        <img src="images/trending/trending12.jpg" alt="image" />
                      </div>
                      <div className="trend-content-main p-4 pb-2">
                        <div className="trend-content">
                          <h5 className="theme mb-1">Inspiration</h5>
                          <h4><a href="detail-1.html">Inspire Runner with Autism Graces of Women's Running</a></h4>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          </p>
                          <div className="entry-meta d-flex align-items-center justify-content-between">
                            <div className="entry-author mb-2">
                              <img src="images/reviewer/1.jpg" alt="" className="rounded-circle me-1" />
                              <span>David Scott</span>
                            </div>
                            <div className="eentry-button d-flex align-items-center mb-2">
                              <a href="#" className="nir-btn">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                      <div className="trend-image">
                        <img src="images/trending/trending13.jpg" alt="image" />
                      </div>
                      <div className="trend-content-main p-4 pb-2">
                        <div className="trend-content">
                          <h5 className="theme mb-1">Public</h5>
                          <h4><a href="detail-1.html">Services To Grow Your Business Sell Affiliate Products</a></h4>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          </p>
                          <div className="entry-meta d-flex align-items-center justify-content-between">
                            <div className="entry-author mb-2">
                              <img src="images/reviewer/3.jpg" alt="" className="rounded-circle me-1" />
                              <span>John Bolden</span>
                            </div>
                            <div className="eentry-button d-flex align-items-center mb-2">
                              <a href="#" className="nir-btn">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                      <div className="trend-image">
                        <img src="images/trending/trending10.jpg" alt="image" />
                      </div>
                      <div className="trend-content-main p-4 pb-2">
                        <div className="trend-content">
                          <h5 className="theme mb-1">Technology</h5>
                          <h4><a href="detail-1.html">How a developer duo at Deutsche Bank keep remote alive.</a></h4>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          </p>
                          <div className="entry-meta d-flex align-items-center justify-content-between">
                            <div className="entry-author mb-2">
                              <img src="images/reviewer/2.jpg" alt="" className="rounded-circle me-1" />
                              <span>Sollmond Nell</span>
                            </div>
                            <div className="eentry-button d-flex align-items-center mb-2">
                              <a href="#" className="nir-btn">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                      <div className="trend-image">
                        <img src="images/trending/trending12.jpg" alt="image" />
                      </div>
                      <div className="trend-content-main p-4 pb-2">
                        <div className="trend-content">
                          <h5 className="theme mb-1">Inspiration</h5>
                          <h4><a href="detail-1.html">Inspire Runner with Autism Graces of Women's Running</a></h4>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          </p>
                          <div className="entry-meta d-flex align-items-center justify-content-between">
                            <div className="entry-author mb-2">
                              <img src="images/reviewer/1.jpg" alt="" className="rounded-circle me-1" />
                              <span>David Scott</span>
                            </div>
                            <div className="eentry-button d-flex align-items-center mb-2">
                              <a href="#" className="nir-btn">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                      <div className="trend-image">
                        <img src="images/trending/trending13.jpg" alt="image" />
                      </div>
                      <div className="trend-content-main p-4 pb-2">
                        <div className="trend-content">
                          <h5 className="theme mb-1">Public</h5>
                          <h4><a href="detail-1.html">Services To Grow Your Business Sell Affiliate Products</a></h4>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          </p>
                          <div className="entry-meta d-flex align-items-center justify-content-between">
                            <div className="entry-author mb-2">
                              <img src="images/reviewer/3.jpg" alt="" className="rounded-circle me-1" />
                              <span>John Bolden</span>
                            </div>
                            <div className="eentry-button d-flex align-items-center mb-2">
                              <a href="#" className="nir-btn">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                      <div className="trend-image">
                        <img src="images/trending/trending10.jpg" alt="image" />
                      </div>
                      <div className="trend-content-main p-4 pb-2">
                        <div className="trend-content">
                          <h5 className="theme mb-1">Technology</h5>
                          <h4><a href="detail-1.html">How a developer duo at Deutsche Bank keep remote alive.</a></h4>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          </p>
                          <div className="entry-meta d-flex align-items-center justify-content-between">
                            <div className="entry-author mb-2">
                              <img src="images/reviewer/2.jpg" alt="" className="rounded-circle me-1" />
                              <span>Sollmond Nell</span>
                            </div>
                            <div className="eentry-button d-flex align-items-center mb-2">
                              <a href="#" className="nir-btn">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded overflow-hidden">
                      <div className="trend-image">
                        <img src="images/trending/trending12.jpg" alt="image" />
                      </div>
                      <div className="trend-content-main p-4 pb-2">
                        <div className="trend-content">
                          <h5 className="theme mb-1">Inspiration</h5>
                          <h4><a href="detail-1.html">Inspire Runner with Autism Graces of Women's Running</a></h4>
                          <p className="mb-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          </p>
                          <div className="entry-meta d-flex align-items-center justify-content-between">
                            <div className="entry-author mb-2">
                              <img src="images/reviewer/1.jpg" alt="" className="rounded-circle me-1" />
                              <span>David Scott</span>
                            </div>
                            <div className="eentry-button d-flex align-items-center mb-2">
                              <a href="#" className="nir-btn">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination-main text-center">
                  <ul className="pagination">
                    <li><a href="#"><i className="fa fa-angle-double-left" aria-hidden="true" /></a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#"><i className="fa fa-angle-double-right" aria-hidden="true" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 ps-lg-4">
              <div className="sidebar-sticky">
                <div className="list-sidebar">
                  <div className="sidebar-item">
                    <h4 className=''>Search Here</h4>
                    <div className="newsletter-form rounded overflow-hidden position-relative">
                      <form>
                        <input type="text" placeholder="Search your keyword here.." />
                        <input type="submit" className="nir-btn bordernone rounded-0 position-absolute end-0" defaultValue="Search" />
                      </form>
                    </div>
                  </div>
                  <div className="author-news mb-4 box-shadow p-5 text-center rounded overflow-hidden border-all">
                    <div className="author-news-content">
                      <div className="author-thumb mb-1">
                        <img src="images/team/img2.jpg" alt="author" />
                      </div>
                      <div className="author-content">
                        <h3 className="title mb-1"><a href="#">Relson Dulux</a></h3>
                        <p className="mb-2">Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
                        <div className="header-social">
                          <ul>
                            <li><a href="#"><i className="fab fa-facebook-f rounded" /></a></li>
                            <li><a href="#"><i className="fab fa-google-plus-g rounded" /></a></li>
                            <li><a href="#"><i className="fab fa-twitter rounded" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-item mb-4">
                    <h4 className=''>All Categories</h4>
                    <ul className="sidebar-category">
                      <li><a href="#">All</a></li>
                      <li><a href="#">Featured</a></li>
                      <li><a href="#">Sliders</a></li>
                      <li className="active"><a href="#">Manage Listings</a></li>
                      <li><a href="#">Address and Map</a></li>
                      <li><a href="#">Reservation Requests</a></li>
                      <li><a href="#">Your Reservation</a></li>
                      <li><a href="#">Search Results</a></li>
                    </ul>
                  </div>
                  <div className="popular-post sidebar-item mb-4">
                    <div className="sidebar-tabs">
                      <div className="post-tabs">
                        <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab1" role="tablist">
                          <li className="nav-item d-inline-block" role="presentation">
                            <button aria-selected="false" className="nav-link active" data-bs-target="#popular" data-bs-toggle="tab" id="popular-tab" role="tab" type="button">Popular</button>
                          </li>
                          <li className="nav-item d-inline-block" role="presentation">
                            <button aria-selected="true" className="nav-link" data-bs-target="#recent" data-bs-toggle="tab" id="recent-tab" role="tab" type="button">Recent</button>
                          </li>
                        </ul>
                        <div className="tab-content" id="postsTabContent1">
                          <div aria-labelledby="popular-tab" className="tab-pane fade active show" id="popular" role="tabpanel">
                            <article className="post mb-2 border-b pb-2">
                              <div className="s-content d-flex align-items-center justify-space-between">
                                <div className="sidebar-image w-25 me-3 rounded">
                                  <a href="detail-1.html"><img src="images/trending/trending1.jpg" alt="" /></a>
                                </div>
                                <div className="content-list w-75">
                                  <h5 className="mb-1"><a href="detail-1.html">An Incredibly Easy Method That Works For All</a></h5>
                                  <div className="date">10 Apr 2021</div>
                                </div>
                              </div>
                            </article>
                            <article className="post border-b pb-2 mb-2">
                              <div className="s-content d-flex align-items-center justify-space-between">
                                <div className="sidebar-image w-25 me-3 rounded">
                                  <a href="detail-1.html"><img src="images/trending/trending2.jpg" alt="" /></a>
                                </div>
                                <div className="content-list w-75">
                                  <h5 className="mb-1"><a href="detail-1.html">15 Unheard Ways To Achieve Greater Walker</a></h5>
                                  <div className="date">29 Mar 2021</div>
                                </div>
                              </div>
                            </article>
                            <article className="post mb-2 border-b pb-2">
                              <div className="s-content d-flex align-items-center justify-space-between">
                                <div className="sidebar-image w-25 me-3 rounded">
                                  <a href="detail-1.html"><img src="images/trending/trending1.jpg" alt="" /></a>
                                </div>
                                <div className="content-list w-75">
                                  <h5 className="mb-1"><a href="detail-1.html">An Incredibly Easy Method That Works For All</a></h5>
                                  <div className="date">10 Apr 2021</div>
                                </div>
                              </div>
                            </article>
                            <article className="post">
                              <div className="s-content d-flex align-items-center justify-space-between">
                                <div className="sidebar-image w-25 me-3 rounded">
                                  <a href="detail-1.html"><img src="images/trending/trending4.jpg" alt="" /></a>
                                </div>
                                <div className="content-list w-75">
                                  <h5 className="mb-1"><a href="detail-1.html">15 Unheard Ways To Achieve Greater Walker</a></h5>
                                  <div className="date">21 Feb 2021</div>
                                </div>
                              </div>
                            </article>
                          </div>
                          <div aria-labelledby="recent-tab" className="tab-pane fade" id="recent" role="tabpanel">
                            <article className="post mb-2 border-b pb-2">
                              <div className="s-content d-flex align-items-center justify-space-between">
                                <div className="sidebar-image w-25 me-3 rounded">
                                  <a href="detail-1.html"><img src="images/trending/trending5.jpg" alt="" /></a>
                                </div>
                                <div className="content-list w-75">
                                  <h5 className="mb-1"><a href="detail-1.html">10 Ways To Immediately Start Selling Furniture</a></h5>
                                  <div className="date">08 Mar 2021</div>
                                </div>
                              </div>
                            </article>
                            <article className="post border-b pb-2 mb-2">
                              <div className="s-content d-flex align-items-center justify-space-between">
                                <div className="sidebar-image w-25 me-3 rounded">
                                  <a href="detail-1.html"><img src="images/trending/trending6.jpg" alt="" /></a>
                                </div>
                                <div className="content-list w-75">
                                  <h5 className="mb-1"><a href="detail-1.html">Photography Photo modify and Beautiful Walker</a></h5>
                                  <div className="date">18 Jan 2021</div>
                                </div>
                              </div>
                            </article>
                            <article className="post mb-2 border-b pb-2">
                              <div className="s-content d-flex align-items-center justify-space-between">
                                <div className="sidebar-image w-25 me-3 rounded">
                                  <a href="detail-1.html"><img src="images/trending/trending1.jpg" alt="" /></a>
                                </div>
                                <div className="content-list w-75">
                                  <h5 className="mb-1"><a href="detail-1.html">An Incredibly Easy Method That Works For All</a></h5>
                                  <div className="date">10 Apr 2021</div>
                                </div>
                              </div>
                            </article>
                            <article className="post">
                              <div className="s-content d-flex align-items-center justify-space-between">
                                <div className="sidebar-image w-25 me-3 rounded">
                                  <a href="detail-1.html"><img src="images/trending/trending3.jpg" alt="" /></a>
                                </div>
                                <div className="content-list w-75">
                                  <h5 className="mb-1"><a href="detail-1.html">1Certified Graphic Design with Free Project Course</a></h5>
                                  <div className="date">12 Feb 2021</div>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-item mb-4">
                    <h4 className=''>Tags</h4>
                    <ul className="sidebar-tags">
                      <li><a href="#">Tour</a></li>
                      <li><a href="#">Rental</a></li>
                      <li><a href="#">City</a></li>
                      <li><a href="#">Yatch</a></li>
                      <li><a href="#">Activity</a></li>
                      <li><a href="#">Museum</a></li>
                      <li><a href="#">Beauty</a></li>
                      <li><a href="#">Classic</a></li>
                      <li><a href="#">Creative</a></li>
                      <li><a href="#">Designs</a></li>
                      <li><a href="#">Featured</a></li>
                      <li><a href="#">Free Style</a></li>
                      <li><a href="#">Programs</a></li>
                      <li><a href="#">Travel</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


          </>
  )
}