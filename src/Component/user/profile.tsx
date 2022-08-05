
import { translate } from '../../i18n';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './profile.css';
import { FaSignOutAlt,FaCogs } from 'react-icons/fa';
import AuthService from "../../service/auth.service";
import React, { useState, useEffect } from "react";
import axios from "axios";
type Profilprops = {
  // username? : string
  // first_name? : string
  // last_name? : string
  // email? : string
  // extend?: any
  // address? : any
}

 const Profile  = (props : any) => {
    const { language } = useSelector((state: RootState) => state.lang);
    const [first_name, setfirst_name] = useState()
    const [last_name, setlast_name]= useState()
    const [email, setemail] = useState()
    const [extend, setextend] = useState([])
    const [address, setaddress] = useState([])
    const [username, setusername] = useState([])


    function getAuth(){
        
        const currentUser = AuthService.getCurrentUser();
        return  <div className="text-center">
                <h3>
                {currentUser.username }<span className="font-weight-light">, {currentUser.user_id }</span>
                </h3>
                <div className="h5 font-weight-300">
                <i className="ni location_pin mr-2" />Bucharest, Romania
                </div>
                <div className="h5 mt-4">
                <i className="ni business_briefcase-24 mr-2" />Solution Manager - Creative Tim Officer
                </div>
                <div>
                <i className="ni education_hat mr-2" />University of Computer Science
                </div>
                <hr className="my-4" />
                <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>
                <a href="#">Show more</a>
            </div>


    }

    useEffect(() => {
      const api = async () => {
        const currentUser = AuthService.getCurrentUser();
        const id = currentUser.user_id
        const token: string  =  "token "+AuthService.gettoketUser();
        let res = axios.get('http://obet.pythonanywhere.com/v1/auth/profile/' + id,{ headers: { Authorization: token  }})
            .then(response => {
              let rex = response.data;
                  return rex;
            })
            .catch(function (error) {
                return error;
            });

            const rex = await res;
            setfirst_name(rex.first_name)
            setlast_name(rex.last_name)
            setemail(rex.email)
            setextend(rex.extend)
            setaddress(rex.user)
            setusername(rex.username)
      };
  
      api();
      }, []);

    function Logout() {
      AuthService.logout()
      window.location.href='/'
    }
      
    return (
        <>
        <div className="ProfUser">
          <div className="header pb-8  pt-lg-8 d-flex align-items-center" style={{minHeight: '600px', backgroundImage: 'url(https://raw.githubusercontent.com/creativetimofficial/argon-dashboard/gh-pages/assets-old/img/theme/profile-cover.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top'}}>
  
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile shadow">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                        <a href="#">
                          <img src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" className="rounded-circle" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <a href="#" className="btn btn-sm btn-info mr-4" style={{backgroundColor:"#029e9d"}}><FaCogs/> Settings</a>
                      <a onClick={() => Logout()} className="btn btn-sm btn-info float-right"style={{backgroundColor:"#029e9d"}}><FaSignOutAlt/> Logout</a>
                    </div>
                  </div>
                  <div className="card-body pt-0 pt-md-4">
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Friends</span>
                          </div>
                          <div>
                            <span className="heading">10</span>
                            <span className="description">Photos</span>
                          </div>
                          <div>
                            <span className="heading">89</span>
                            <span className="description">Comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {getAuth()}
                  </div>
                </div>
              </div>
              <div className="col-xl-8 order-xl-1">
                <div className="card bg-secondary shadow">
                  <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                     
                      
                    </div>
                  </div>
                  <div className="card-body">
                    <form>
                      <h6 className="heading-small text-muted mb-4">User information</h6>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-username">Username</label>
                              <input type="text" id="input-username" value={username} className="form-control form-control-alternative" placeholder="Username" defaultValue="lucky.jesse" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="form-control-label" htmlFor="input-email">Email address</label>
                              <input type="email" id="input-email" value={email} className="form-control form-control-alternative" placeholder="jesse@example.com" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-first-name">First name</label>
                              <input type="text" id="input-first-name" value={first_name} className="form-control form-control-alternative" placeholder="First name" defaultValue="Lucky" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-last-name">Last name</label>
                              <input type="text" id="input-last-name" value={last_name} className="form-control form-control-alternative" placeholder="Last name" defaultValue="Jesse" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">Contact information</h6>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-address">Address</label>
                              <input id="input-address" value={address} className="form-control form-control-alternative" placeholder="Home Address" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-city">City</label>
                              <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" defaultValue="New York" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label className="form-control-label" htmlFor="input-country">Country</label>
                              <input type="text" id="input-country" className="form-control form-control-alternative" placeholder="Country" defaultValue="United States" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="form-control-label" htmlFor="input-country">Postal code</label>
                              <input type="number" id="input-postal-code" className="form-control form-control-alternative" placeholder="Postal code" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-4" />
                      {/* Description */}
                      <h6 className="heading-small text-muted mb-4">About me</h6>
                      <div className="pl-lg-4">
                        <div className="form-group focused">
                          <label>About Me</label>
                          <textarea rows={4} className="form-control form-control-alternative" placeholder="A few words about you ..." defaultValue={"A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
           
        </>
    )
}

export default Profile;