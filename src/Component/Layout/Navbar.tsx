import React from 'react';

export class Navbarx extends React.Component {
  
  render() {
  return (  
    <>
    <header className="main_header_area">
    <div className="header-content py-1 bg-theme">
        <div className="container d-flex align-items-center justify-content-between">
        <div className="links">
            <ul>
            <li>
                <a href="#" className="white">
                <i className="icon-calendar white" /> Thursday, Mar 26, 2021
                </a>
            </li>
            <li>
                <a href="#" className="white">
                <i className="icon-location-pin white" /> Hollywood, America
                </a>
            </li>
            <li>
                <a href="#" className="white">
                <i className="icon-clock white" /> Mon-Fri: 10 AM – 5 PM
                </a>
            </li>
            </ul>
        </div>
        <div className="links float-right">
            <ul>
            <li>
                <a href="#" className="white">
                <i className="fab fa-facebook" aria-hidden="true" />
                </a>
            </li>
            <li>
                <a href="#" className="white">
                <i className="fab fa-twitter" aria-hidden="true" />
                </a>
            </li>
            <li>
                <a href="#" className="white">
                <i className="fab fa-instagram" aria-hidden="true" />
                </a>
            </li>
            <li>
                <a href="#" className="white">
                <i className="fab fa-linkedin " aria-hidden="true" />
                </a>
            </li>
            </ul>
        </div>
        </div>
    </div>
    <div className="header_menu" id="header_menu">
        <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-flex d-flex align-items-center justify-content-between w-100 pb-3 pt-3">
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="image" />
                </a>
            </div>
            <div
                className="navbar-collapse1 d-flex align-items-center"
                id="bs-example-navbar-collapse-1"
            >
                <ul className="nav navbar-nav" id="responsive-menu">
                <li className="dropdown submenu active">
                    <a
                    href="index.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    Home <i className="icon-arrow-down" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu">
                    <li>
                        <a href="index.html">Homepage Default</a>
                    </li>
                    <li>
                        <a href="index-1.html">Homepage 1</a>
                    </li>
                    <li>
                        <a href="index-2.html">Homepage 2</a>
                    </li>
                    <li>
                        <a href="index-3.html">Homepage 3</a>
                    </li>
                    <li>
                        <a href="index-4.html">Homepage 4</a>
                    </li>
                    <li>
                        <a href="index-5.html">Homepage 5</a>
                    </li>
                    <li className="submenu dropdown">
                        <a
                        href="#"
                        className="dropdown-toggle d-flex align-items-center"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Flights{" "}
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="index-flight.html">Flight Homepage</a>
                        </li>
                        <li>
                            <a href="flight-grid.html">Flight Grid</a>
                        </li>
                        <li>
                            <a href="flight-list.html">Flight List</a>
                        </li>
                        <li>
                            <a href="flight-detail.html">Flight Detail</a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="about.html">About Us</a>
                </li>
                <li className="submenu dropdown">
                    <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    Destinations{" "}
                    <i className="icon-arrow-down" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu">
                    <li>
                        <a href="destination-list.html">Destination List</a>
                    </li>
                    <li>
                        <a href="destination-detail.html">Destination Detail</a>
                    </li>
                    </ul>
                </li>
                <li className="submenu dropdown">
                    <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    Tours <i className="icon-arrow-down" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu">
                    <li className="submenu dropdown">
                        <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Tour List
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="tour-list.html">Tour List Leftsidebar</a>
                        </li>
                        <li>
                            <a href="tour-list1.html">Tour List Rightsidebar</a>
                        </li>
                        <li>
                            <a href="tour-list2.html">Tour List Fullwidth</a>
                        </li>
                        </ul>
                    </li>
                    <li className="submenu dropdown">
                        <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Tour Grid
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="tour-grid.html">Tour Grid Leftsidebar</a>
                        </li>
                        <li>
                            <a href="tour-grid1.html">Tour Grid Rightsidebar</a>
                        </li>
                        <li>
                            <a href="tour-grid2.html">Tour Grid Fullwidth</a>
                        </li>
                        </ul>
                    </li>
                    <li className="submenu dropdown">
                        <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Tour Single
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="tour-single.html">Tour Single Leftsidebar</a>
                        </li>
                        <li>
                            <a href="tour-single1.html">Tour Single Rightsidebar</a>
                        </li>
                        <li>
                            <a href="tour-single2.html">Tour Single Fullwidth</a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li className="submenu dropdown">
                    <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    Pages <i className="icon-arrow-down" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu">
                    <li>
                        <a href="team.html">Our Guide</a>
                    </li>
                    <li>
                        <a href="booking.html">Booking</a>
                    </li>
                    <li>
                        <a href="confirmation.html">confirmation</a>
                    </li>
                    <li className="submenu dropdown">
                        <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Services
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="services.html">Services Lists</a>
                        </li>
                        <li>
                            <a href="services-detail.html">Service Detail</a>
                        </li>
                        </ul>
                    </li>
                    <li className="submenu dropdown">
                        <a
                        href="gallery.html"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Gallery
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                            <a href="gallery1.html">Gallery Masonry</a>
                        </li>
                        </ul>
                    </li>
                    <li className="submenu dropdown">
                        <a
                        href="404.html"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Error
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="404.html">Error Page 1</a>
                        </li>
                        <li>
                            <a href="404-1.html">Error Page 2</a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="login.html">Login|Register</a>
                    </li>
                    <li>
                        <a href="comingsoon.html">Coming Soon</a>
                    </li>
                    <li>
                        <a href="testimonials.html">Testimonials</a>
                    </li>
                    <li>
                        <a href="faq.html">Faq</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                        <a href="dashboard/dashboard.html">Dashboard</a>
                    </li>
                    </ul>
                </li>
                <li className="submenu dropdown">
                    <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
                    Blog <i className="icon-arrow-down" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu">
                    <li className="submenu dropdown">
                        <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Blog Grid
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="post-grid-1.html">Blog Grid 1</a>
                        </li>
                        <li>
                            <a href="post-grid-2.html">Blog Grid 2</a>
                        </li>
                        <li>
                            <a href="post-grid-3.html">Blog Grid 3</a>
                        </li>
                        </ul>
                    </li>
                    <li className="submenu dropdown">
                        <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Blog List
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="post-list-1.html">Blog List 1</a>
                        </li>
                        <li>
                            <a href="post-list-2.html">Blog List 2</a>
                        </li>
                        <li>
                            <a href="post-list-3.html">Blog List 3</a>
                        </li>
                        </ul>
                    </li>
                    <li className="submenu dropdown">
                        <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Blog Single
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        </a>
                        <ul className="dropdown-menu">
                        <li>
                            <a href="detail-1.html">Blog Single 1</a>
                        </li>
                        <li>
                            <a href="detail-2.html">Blog Single 2</a>
                        </li>
                        <li>
                            <a href="detail-3.html">Blog Single 3</a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li className="search-main">
                    <a href="#search1" className="mt_search">
                    <i className="fa fa-search" />
                    </a>
                </li>
                </ul>
            </div>
            <div className="register-login d-flex align-items-center">
                <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="me-3"
                >
                <i className="icon-user" /> Login/Register
                </a>
                <a href="#" className="nir-btn white">
                Book Now
                </a>
            </div>
            <div id="slicknav-mobile" />
            </div>
        </div>
        </nav>
    </div>
</header>
  </>
  );
}
}
export default Navbarx;
