import React, { FC,Suspense } from 'react';
import { BrowserRouter, Routes , Route,useParams } from 'react-router-dom';
import ScrollToTop from './Component/helpers/ScrollToTop';
import { Offline, Online } from "react-detect-offline";
import WebsiteModel from './models/webiste';
import BaseService from './service/service';
import Navbarx from './Component/Layout/Navbar';
import Footer from './Component/Layout/Footer';
import Favicon from 'react-favicon'
import {Order} from './Component/blog/blog_detail';
interface IProps {}
interface IState {
  website: WebsiteModel;
  params : any;
  isLoading : boolean;
}

const About = React.lazy(() => import('./Component/about/about'));
const HomeIndex = React.lazy(() => import('./Component/home/home'));
const BlogList = React.lazy(() => import('./Component/blog/list'));
const ArtikelDetail = React.lazy(() => import('./Component/artikel/artikel_detail'));
const EventDetail = React.lazy(() => import('./Component/about/about'));
const Profile = React.lazy(() => import('./Component/user/profile'));
const Faq = React.lazy(() => import('./Component/helps/Faq'));
const Contact_us = React.lazy(() => import('./Component/helps/Contact_us'));
const Error404 = React.lazy(() => import('./Component/helps/Error_404'));
const EventList = React.lazy(() => import('./Component/event/list'));
export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {

    super(props);

    this.state = {
        params: '',
        isLoading:true,
        website: {
            Title: '',      
            Email: '',
            Telp: '',
            Alamat: '',
            Logo: '',
            Favicon: '',
            Facebook: '',
            Twitter: '',
            Instagram: '',
            Youtube: '',

        }
    }

}

  public componentDidMount() { 
    BaseService.getAll<WebsiteModel>('/website/2/').then(
        (rp) => {
            if (rp.Status) {
                const website = rp.Data;  
                this.setState({isLoading:false, website: new WebsiteModel(website._id, website.webiste, website.email, website.telp, website.alamat,website.logo,website.favicon,website.facebook,website.twitter,website.instagram,website.youtube)});
            } else {
                toastr.error(rp.Messages);
                console.log("Messages: " + rp.Messages);
                console.log("Exception: " + rp.Exception);
            }
        }

    );
}
    public authheader()
    {
      const userStr = localStorage.getItem("user");
      return userStr;
    }

  render () {
  return (
      <div>
      {/* <Online> */}
      <Favicon url={"" +this.state.website.Favicon}/>
        <BrowserRouter>
          
          <Navbarx logo={this.state.website.Logo} Loading={this.state.isLoading}/>
          <ScrollToTop />
          <Suspense >
            <Routes >
                <Route path="/" element={<HomeIndex/>}></Route>
                <Route path="/about-us" element={<About/>}></Route>
                <Route path="/event" element={<EventList title='Event List' judul='Event List'/>}></Route>
                <Route path="/blog" element={<BlogList/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/contact-us" element={<Contact_us/>}></Route>
                <Route path="*" element={<Error404/>}></Route>
                <Route path='/artikel/detail/:Id' element ={<ArtikelDetail/> }/>
                <Route path='/event/detail/:Id' element ={<EventDetail/> }/>
                <Route path="order/:orderId" element={<Order/>} />
                {this.authheader() ?<Route path="/user-profile" element={<Profile/>}></Route>:''
                }
               
            </Routes >
          </Suspense>
          <Footer 
          facebook={this.state.website.Facebook}
          twitter={this.state.website.Twitter}
          instagram={this.state.website.Instagram}
          youtube={this.state.website.Youtube}
          website={this.state.website.Title} 
          email={this.state.website.Email} 
          telp={this.state.website.Telp} 
          logo={this.state.website.Logo} 
          alamat={this.state.website.Alamat} />
        </BrowserRouter>
      {/* </Online> */}
      {/* <Offline>You're offline right now. Check your connection.</Offline> */}
    </div>
  );
}
}

// export default App;
