import React from 'react';
export default class BlogIndex extends React.Component {
    render() {
      return (
        <>  
            <section className="trending recent-articles pb-6 pt-5">
            <div className="container">
                <div className="section-title mb-6 w-75 mx-auto text-center">
                <h4 className="mb-1 theme1">Our Blogs Offers</h4>
                <h2 className="mb-1">
                    Recent <span className="theme">Articles &amp; Posts</span>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore.
                </p>
                </div>
                <div className="recent-articles-inner">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="trend-item box-shadow bg-white mb-4 rounded">
                        <div className="trend-image">
                        <img src="images/trending/trending10.jpg" alt="image" />
                        </div>
                        <div className="trend-content-main p-4">
                        <div className="trend-content">
                            <h5 className="theme mb-1">Technology</h5>
                            <h4 className="mb-0">
                            <a href="detail-1.html">
                                How a developer duo at Deutsche Bank keep remote alive.
                            </a>
                            </h4>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded">
                        <div className="trend-image">
                        <img src="images/trending/trending12.jpg" alt="image" />
                        </div>
                        <div className="trend-content-main p-4">
                        <div className="trend-content">
                            <h5 className="theme mb-1">Inspiration</h5>
                            <h4 className="mb-0">
                            <a href="detail-1.html">
                                Inspire Runner with Autism Graces of Women's Running
                            </a>
                            </h4>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                    <div className="trend-item box-shadow bg-white mb-4 rounded">
                        <div className="trend-image">
                        <img src="images/trending/trending13.jpg" alt="image" />
                        </div>
                        <div className="trend-content-main p-4">
                        <div className="trend-content">
                            <h5 className="theme mb-1">Public</h5>
                            <h4 className="mb-0">
                            <a href="detail-1.html">
                                Services To Grow Your Business Sell Affiliate Products
                            </a>
                            </h4>
                        </div>
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
  }

