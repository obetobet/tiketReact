

type LoginProps = {
    isLogined?: boolean
}

export const HomeList = (props : LoginProps) => {
    return (
        <>
        <section className="trending pt-6 pb-0 bg-lgrey">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="list-results d-flex align-items-center justify-content-between">
                <div className="list-results-sort">
                  <p className="m-0">Showing 1-5 of 80 results</p>
                </div>
                <div className="click-menu d-flex align-items-center justify-content-between">
                  <div className="change-list f-active me-2"><a href="flight-list.html"><i className="fa fa-bars rounded" /></a></div>
                  <div className="change-grid me-2"><a href="flight-grid.html"><i className="fa fa-th rounded" /></a></div>
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
              <div className="flight-list">
                <div className="flight-full">
                  <div className="item mb-2 border-all p-3 px-4 rounded">
                    <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner-image text-start">
                          <img src="images/flights/flight_grid_5.png" alt="image" />
                          <h5 className="mb-0">Dragon Airlines</h5>
                          <small>Operated by China</small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h5 className="mb-0">Sunday May 15, 2022</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h3 className="mb-0">12:30</h3>
                            <p className="mb-0 text-uppercase">DAC</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner flight-time">
                          <p className="mb-0">16H 45M <br />2 Stops</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner text-end">
                          <p className="theme2 fs-4 fw-bold">$2,045</p>
                          <a href="flight-detail.html" className="nir-btn-black">View Deals</a>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush border-t mt-1 pt-1" id="accordionflush">
                          <div className="accordion-item overflow-hidden">
                            <p className="accordion-header" id="flush-headingOne">
                              <button className="accordion-button collapsed p-0 border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Flight Details
                              </button>
                            </p>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body p-0">
                                <div className="row flight-detail-wrap align-items-center border-t pt-1 mt-1" style={{}}>
                                  <div className="col-lg-4">
                                    <div className="flight-date">
                                      <ul>
                                        <li>Economy</li>
                                        <li>Thursday, Jun 16 - 23:20</li>
                                        <li className="theme">22h 50m</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="flight-detail-right">
                                      <h5><i className="fa fa-plane" /> IST - Istanbul Airport, Turkish</h5>
                                      <div className="flight-detail-info d-flex align-items-center p-2 py-3 bg-grey rounded mb-2">
                                        <img src="images/flights/flight_grid_3.png" alt="" />
                                        <ul>
                                          <li>Tpm Line</li>
                                          <li>Operated by Airlines</li>
                                          <li>Economy | Flight EK585 | Aircraft BOEING 777-300ER</li>
                                          <li>Adult(s): 25KG luggage free</li>
                                        </ul>
                                      </div>
                                      <h5 className="mb-0">DXB - Dubai, United Arab Emirates</h5>
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
                  <div className="item mb-2 border-all p-3 px-4 rounded">
                    <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner-image text-start">
                          <img src="images/flights/flight_grid_3.png" alt="image" />
                          <h5 className="mb-0">Air Asia Airlines</h5>
                          <small>Operated by Asia</small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h5 className="mb-0">Friday Apr 18, 2022</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h3 className="mb-0">9:30</h3>
                            <p className="mb-0 text-uppercase">DAC</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner flight-time">
                          <p className="mb-0">22H 45M <br />1 Stops</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner text-end">
                          <p className="theme fs-4 fw-bold">$1,445</p>
                          <a href="flight-detail.html" className="nir-btn">View Deals</a>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush border-t mt-1 pt-1" id="accordionflush1">
                          <div className="accordion-item overflow-hidden">
                            <p className="accordion-header" id="flush-headingOne1">
                              <button className="accordion-button collapsed p-0 border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne7" aria-expanded="false" aria-controls="flush-collapseOne">
                                Flight Details
                              </button>
                            </p>
                            <div id="flush-collapseOne7" className="accordion-collapse collapse" aria-labelledby="flush-headingOne1" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body p-0">
                                <div className="row flight-detail-wrap align-items-center border-t pt-1 mt-1" style={{}}>
                                  <div className="col-lg-4">
                                    <div className="flight-date">
                                      <ul>
                                        <li>Economy</li>
                                        <li>Thursday, Jun 16 - 23:20</li>
                                        <li className="theme">22h 50m</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="flight-detail-right">
                                      <h5><i className="fa fa-plane" /> IST - Istanbul Airport, Turkish</h5>
                                      <div className="flight-detail-info d-flex align-items-center p-2 py-3 bg-grey rounded mb-2">
                                        <img src="images/flights/flight_grid_3.png" alt="" />
                                        <ul>
                                          <li>Tpm Line</li>
                                          <li>Operated by Airlines</li>
                                          <li>Economy | Flight EK585 | Aircraft BOEING 777-300ER</li>
                                          <li>Adult(s): 25KG luggage free</li>
                                        </ul>
                                      </div>
                                      <h5 className="mb-0">DXB - Dubai, United Arab Emirates</h5>
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
                  <div className="item mb-2 border-all p-3 px-4 rounded">
                    <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner-image text-start">
                          <img src="images/flights/flight_grid_4.png" alt="image" />
                          <h5 className="mb-0">Turkish Airlines</h5>
                          <small>Operated by Turkey</small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h5 className="mb-0">Saturday Jun 11, 2022</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h3 className="mb-0">18:30</h3>
                            <p className="mb-0 text-uppercase">DAC</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner flight-time">
                          <p className="mb-0">12H 45M <br />2 Stops</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner text-end">
                          <p className="theme2 fs-4 fw-bold">$2,445</p>
                          <a href="flight-detail.html" className="nir-btn-black">View Deals</a>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush border-t mt-1 pt-1" id="accordionflush2">
                          <div className="accordion-item overflow-hidden">
                            <p className="accordion-header" id="flush-headingOne2">
                              <button className="accordion-button collapsed p-0 border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne6" aria-expanded="false" aria-controls="flush-collapseOne">
                                Flight Details
                              </button>
                            </p>
                            <div id="flush-collapseOne6" className="accordion-collapse collapse" aria-labelledby="flush-headingOne2" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body p-0">
                                <div className="row flight-detail-wrap align-items-center border-t pt-1 mt-1" style={{}}>
                                  <div className="col-lg-4">
                                    <div className="flight-date">
                                      <ul>
                                        <li>Economy</li>
                                        <li>Thursday, Jun 16 - 23:20</li>
                                        <li className="theme">22h 50m</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="flight-detail-right">
                                      <h5><i className="fa fa-plane" /> IST - Istanbul Airport, Turkish</h5>
                                      <div className="flight-detail-info d-flex align-items-center p-2 py-3 bg-grey rounded mb-2">
                                        <img src="images/flights/flight_grid_3.png" alt="" />
                                        <ul>
                                          <li>Tpm Line</li>
                                          <li>Operated by Airlines</li>
                                          <li>Economy | Flight EK585 | Aircraft BOEING 777-300ER</li>
                                          <li>Adult(s): 25KG luggage free</li>
                                        </ul>
                                      </div>
                                      <h5 className="mb-0">DXB - Dubai, United Arab Emirates</h5>
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
                  <div className="item mb-2 border-all p-3 px-4 rounded">
                    <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner-image text-start">
                          <img src="images/flights/flight_grid_5.png" alt="image" />
                          <h5 className="mb-0">Dragon Airlines</h5>
                          <small>Operated by China</small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h5 className="mb-0">Sunday May 15, 2022</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h3 className="mb-0">12:30</h3>
                            <p className="mb-0 text-uppercase">DAC</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner flight-time">
                          <p className="mb-0">16H 45M <br />2 Stops</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner text-end">
                          <p className="theme2 fs-4 fw-bold">$2,045</p>
                          <a href="flight-detail.html" className="nir-btn-black">View Deals</a>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush border-t mt-1 pt-1" id="accordionflush3">
                          <div className="accordion-item overflow-hidden">
                            <p className="accordion-header" id="flush-headingOne3">
                              <button className="accordion-button collapsed p-0 border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne5" aria-expanded="false" aria-controls="flush-collapseOne">
                                Flight Details
                              </button>
                            </p>
                            <div id="flush-collapseOne5" className="accordion-collapse collapse" aria-labelledby="flush-headingOne3" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body p-0">
                                <div className="row flight-detail-wrap align-items-center border-t pt-1 mt-1" style={{}}>
                                  <div className="col-lg-4">
                                    <div className="flight-date">
                                      <ul>
                                        <li>Economy</li>
                                        <li>Thursday, Jun 16 - 23:20</li>
                                        <li className="theme">22h 50m</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="flight-detail-right">
                                      <h5><i className="fa fa-plane" /> IST - Istanbul Airport, Turkish</h5>
                                      <div className="flight-detail-info d-flex align-items-center p-2 py-3 bg-grey rounded mb-2">
                                        <img src="images/flights/flight_grid_3.png" alt="" />
                                        <ul>
                                          <li>Tpm Line</li>
                                          <li>Operated by Airlines</li>
                                          <li>Economy | Flight EK585 | Aircraft BOEING 777-300ER</li>
                                          <li>Adult(s): 25KG luggage free</li>
                                        </ul>
                                      </div>
                                      <h5 className="mb-0">DXB - Dubai, United Arab Emirates</h5>
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
                  <div className="item mb-2 border-all p-3 px-4 rounded">
                    <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner-image text-start">
                          <img src="images/flights/flight_grid_3.png" alt="image" />
                          <h5 className="mb-0">Air Asia Airlines</h5>
                          <small>Operated by Asia</small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h5 className="mb-0">Friday Apr 18, 2022</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h3 className="mb-0">9:30</h3>
                            <p className="mb-0 text-uppercase">DAC</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner flight-time">
                          <p className="mb-0">22H 45M <br />1 Stops</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner text-end">
                          <p className="theme fs-4 fw-bold">$1,445</p>
                          <a href="flight-detail.html" className="nir-btn">View Deals</a>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush border-t mt-1 pt-1" id="accordionflush4">
                          <div className="accordion-item overflow-hidden">
                            <p className="accordion-header" id="flush-headingOne4">
                              <button className="accordion-button collapsed p-0 border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne">
                                Flight Details
                              </button>
                            </p>
                            <div id="flush-collapseOne2" className="accordion-collapse collapse" aria-labelledby="flush-headingOne4" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body p-0">
                                <div className="row flight-detail-wrap align-items-center border-t pt-1 mt-1" style={{}}>
                                  <div className="col-lg-4">
                                    <div className="flight-date">
                                      <ul>
                                        <li>Economy</li>
                                        <li>Thursday, Jun 16 - 23:20</li>
                                        <li className="theme">22h 50m</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="flight-detail-right">
                                      <h5><i className="fa fa-plane" /> IST - Istanbul Airport, Turkish</h5>
                                      <div className="flight-detail-info d-flex align-items-center p-2 py-3 bg-grey rounded mb-2">
                                        <img src="images/flights/flight_grid_3.png" alt="" />
                                        <ul>
                                          <li>Tpm Line</li>
                                          <li>Operated by Airlines</li>
                                          <li>Economy | Flight EK585 | Aircraft BOEING 777-300ER</li>
                                          <li>Adult(s): 25KG luggage free</li>
                                        </ul>
                                      </div>
                                      <h5 className="mb-0">DXB - Dubai, United Arab Emirates</h5>
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
                  <div className="item mb-2 border-all p-3 px-4 rounded">
                    <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner-image text-start">
                          <img src="images/flights/flight_grid_4.png" alt="image" />
                          <h5 className="mb-0">Turkish Airlines</h5>
                          <small>Operated by Turkey</small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h5 className="mb-0">Saturday Jun 11, 2022</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h3 className="mb-0">18:30</h3>
                            <p className="mb-0 text-uppercase">DAC</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner flight-time">
                          <p className="mb-0">12H 45M <br />2 Stops</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner text-end">
                          <p className="theme2 fs-4 fw-bold">$2,445</p>
                          <a href="flight-detail.html" className="nir-btn-black">View Deals</a>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush border-t mt-1 pt-1" id="accordionflush5">
                          <div className="accordion-item overflow-hidden">
                            <p className="accordion-header" id="flush-headingOne5">
                              <button className="accordion-button collapsed p-0 border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne">
                                Flight Details
                              </button>
                            </p>
                            <div id="flush-collapseOne3" className="accordion-collapse collapse" aria-labelledby="flush-headingOne5" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body p-0">
                                <div className="row flight-detail-wrap align-items-center border-t pt-1 mt-1" style={{}}>
                                  <div className="col-lg-4">
                                    <div className="flight-date">
                                      <ul>
                                        <li>Economy</li>
                                        <li>Thursday, Jun 16 - 23:20</li>
                                        <li className="theme">22h 50m</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="flight-detail-right">
                                      <h5><i className="fa fa-plane" /> IST - Istanbul Airport, Turkish</h5>
                                      <div className="flight-detail-info d-flex align-items-center p-2 py-3 bg-grey rounded mb-2">
                                        <img src="images/flights/flight_grid_3.png" alt="" />
                                        <ul>
                                          <li>Tpm Line</li>
                                          <li>Operated by Airlines</li>
                                          <li>Economy | Flight EK585 | Aircraft BOEING 777-300ER</li>
                                          <li>Adult(s): 25KG luggage free</li>
                                        </ul>
                                      </div>
                                      <h5 className="mb-0">DXB - Dubai, United Arab Emirates</h5>
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
                  <div className="item mb-2 border-all p-3 px-4 rounded">
                    <div className="row d-flex align-items-center justify-content-between">
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner-image text-start">
                          <img src="images/flights/flight_grid_5.png" alt="image" />
                          <h5 className="mb-0">Dragon Airlines</h5>
                          <small>Operated by China</small>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h5 className="mb-0">Sunday May 15, 2022</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner">
                          <div className="content">
                            <h3 className="mb-0">12:30</h3>
                            <p className="mb-0 text-uppercase">DAC</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-2 col-sm-12">
                        <div className="item-inner flight-time">
                          <p className="mb-0">16H 45M <br />2 Stops</p>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="item-inner text-end">
                          <p className="theme2 fs-4 fw-bold">$2,045</p>
                          <a href="flight-detail.html" className="nir-btn-black">View Deals</a>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="accordion accordion-flush border-t mt-1 pt-1" id="accordionflush6">
                          <div className="accordion-item overflow-hidden">
                            <p className="accordion-header" id="flush-headingOne6">
                              <button className="accordion-button collapsed p-0 border-0 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne4" aria-expanded="false" aria-controls="flush-collapseOne">
                                Flight Details
                              </button>
                            </p>
                            <div id="flush-collapseOne4" className="accordion-collapse collapse" aria-labelledby="flush-headingOne6" data-bs-parent="#accordionFlushExample">
                              <div className="accordion-body p-0">
                                <div className="row flight-detail-wrap align-items-center border-t pt-1 mt-1" style={{}}>
                                  <div className="col-lg-4">
                                    <div className="flight-date">
                                      <ul>
                                        <li>Economy</li>
                                        <li>Thursday, Jun 16 - 23:20</li>
                                        <li className="theme">22h 50m</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-lg-8">
                                    <div className="flight-detail-right">
                                      <h5><i className="fa fa-plane" /> IST - Istanbul Airport, Turkish</h5>
                                      <div className="flight-detail-info d-flex align-items-center p-2 py-3 bg-grey rounded mb-2">
                                        <img src="images/flights/flight_grid_3.png" alt="" />
                                        <ul>
                                          <li>Tpm Line</li>
                                          <li>Operated by Airlines</li>
                                          <li>Economy | Flight EK585 | Aircraft BOEING 777-300ER</li>
                                          <li>Adult(s): 25KG luggage free</li>
                                        </ul>
                                      </div>
                                      <h5 className="mb-0">DXB - Dubai, United Arab Emirates</h5>
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
                <div className="flight-btn text-center"><a href="flight-grid.html" className="nir-btn">Load More</a></div>
              </div>
            </div>
            <div className="col-lg-4 ps-lg-4">
              <div className="sidebar-sticky">
                <div className="list-sidebar">
                  <div className="sidebar-item mb-4">
                    <div className="book-form w-100 bg-white box-shadow p-4 pb-1 z-index1 rounded">
                      <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-lg-12 mb-2 text-center">
                          <ul className="pb-2 mb-2 border-b">
                            <li className="me-1 p-2 bg-grey d-inline-block rounded"><input type="radio" /> Roundtrip</li>
                            <li className="me-1 p-2 bg-grey d-inline-block rounded"><input type="radio" /> One-way</li>
                            <li className="p-2 bg-grey d-inline-block rounded"><input type="radio" /> Multi-city</li>
                          </ul>
                        </div>
                        <div className="col-lg-6 mb-2">
                          <div className="form-group">
                            <div className="input-box">
                              <label>Flying From</label>
                              <select className="niceSelect">
                                <option value={1}>city or airport</option>
                                <option value={2}>Argentina</option>
                                <option value={3}>Belgium</option>
                                <option value={4}>Canada</option>
                                <option value={5}>Denmark</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-2">
                          <div className="form-group">
                            <div className="input-box">
                              <label>Flying To</label>
                              <select className="niceSelect">
                                <option value={1}>city or airport</option>
                                <option value={2}>Argentina</option>
                                <option value={3}>Belgium</option>
                                <option value={4}>Canada</option>
                                <option value={5}>Denmark</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-2">
                          <div className="form-group">
                            <div className="input-box">
                              <label>Depart</label>
                              <input type="date" name="Depart" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-2">
                          <div className="form-group">
                            <div className="input-box">
                              <label>Return</label>
                              <input type="date" name="Return" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-2">
                          <div className="form-group">
                            <div className="input-box">
                              <label>Travellers</label>
                              <select className="niceSelect">
                                <option value={1}>2 travellers</option>
                                <option value={2}>5 travellers</option>
                                <option value={3}>7 travellers</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-0 text-center">
                            <a href="#" className="nir-btn w-100"><i className="fa fa-search mr-2" /> Search
                              Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-item mb-4">
                    <h3 className='mb-0'>Price Range</h3>
                    <div className="range-slider mt-0">
                      <div data-min={0} data-max={2000} data-unit="$" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
                        <span className="min-value">0 $</span>
                        <span className="max-value">20000 $</span>
                        <div className="ui-slider-range ui-widget-header ui-corner-all full" style={{left: '0%', width: '100%'}} />
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="sidebar-item mb-4">
                    <h3 className='mb-0'>Stops Type</h3>
                    <ul className="sidebar-category1">
                      <li><input type="checkbox" defaultChecked /> Nonstop <span className="float-end">$92</span></li>
                      <li><input type="checkbox" /> 1 Stop <span className="float-end">$40</span></li>
                      <li><input type="checkbox" /> 2+ Stops <span className="float-end">$22</span></li>
                    </ul>
                  </div>
                  <div className="sidebar-item mb-4">
                    <h3 className='mb-0'>Cabin Type</h3>
                    <ul className="sidebar-category1">
                      <li><input type="checkbox" defaultChecked /> Basic Economy <span className="float-end">$92</span></li>
                      <li><input type="checkbox" /> Economy <span className="float-end">$40</span></li>
                      <li><input type="checkbox" /> Mixed <span className="float-end">$22</span></li>
                      <li><input type="checkbox" /> Business <span className="float-end">$22</span></li>
                    </ul>
                  </div>
                  <div className="sidebar-item mb-4">
                    <h3 className='mb-0'>Airlines</h3>
                    <ul className="sidebar-category1">
                      <li><input type="checkbox" defaultChecked /> Etihad Airway <span className="float-end">92</span></li>
                      <li><input type="checkbox" /> Dragon Airway <span className="float-end">22</span></li>
                      <li><input type="checkbox" /> Air Asia Airway <span className="float-end">35</span></li>
                      <li><input type="checkbox" /> Thai Airway <span className="float-end">41</span></li>
                      <li><input type="checkbox" /> Turkish Airway <span className="float-end">11</span></li>
                      <li><input type="checkbox" /> Indigo Airway <span className="float-end">61</span></li>
                    </ul>
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