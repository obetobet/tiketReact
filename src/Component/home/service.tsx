import React from 'react';
export default class ServiceHome extends React.Component {
    render() {
      return (
        <>  
            <section className="about-us pb-6 pt-10" style={{backgroundImage: "url(images/shape4.png)",backgroundPosition: "center"}}>
                <div className="container">
                    <div className="section-title mb-6 w-50 mx-auto text-center">
                    <h4 className="mb-1 theme1">Core Features</h4>
                    <h2 className="mb-1">
                        Find <span className="theme">Travel Perfection</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore.
                    </p>
                    </div>
                    <div className="why-us">
                    <div className="why-us-box">
                        <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                            <div className="why-us-content">
                                <div className="why-us-icon mb-1">
                                <i className="icon-flag theme" />
                                </div>
                                <h4>
                                <a href="about.html">Tell Us What You want To Do</a>
                                </h4>
                                <p className="mb-2">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia.
                                </p>
                                <p className="mb-0 theme">100+ Reviews</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                            <div className="why-us-content">
                                <div className="why-us-icon mb-1">
                                <i className="icon-location-pin theme" />
                                </div>
                                <h4>
                                <a href="about.html">Share Your Travel Locations</a>
                                </h4>
                                <p className="mb-2">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia.
                                </p>
                                <p className="mb-0 theme">100+ Reviews</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                            <div className="why-us-content">
                                <div className="why-us-icon mb-1">
                                <i className="icon-directions theme" />
                                </div>
                                <h4>
                                <a href="about.html">Share Your Travel Preference</a>
                                </h4>
                                <p className="mb-2">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia.
                                </p>
                                <p className="mb-0 theme">100+ Reviews</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
                            <div className="why-us-content">
                                <div className="why-us-icon mb-1">
                                <i className="icon-compass theme" />
                                </div>
                                <h4>
                                <a href="about.html">Here 100% Trusted Tour Agency</a>
                                </h4>
                                <p className="mb-2">
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia.
                                </p>
                                <p className="mb-0 theme">100+ Reviews</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="white-overlay" />
            </section>
        </>
        )
    }
  }

