import React, { FC } from 'react';
import { BrowserRouter, Routes , Route,useParams } from 'react-router-dom';
import About from './Component/about/about';
import HomeIndex from './Component/home/home';
import {EventList} from './Component/event/list';
import BlogList from './Component/blog/list';
import { Faq } from './Component/helps/Faq';
import { Contact_us } from './Component/helps/Contact_us';
import ScrollToTop from './Component/helpers/ScrollToTop';
import { Error404 } from './Component/helps/Error_404';
import { Offline, Online } from "react-detect-offline";
import WebsiteModel from './models/webiste';
import BaseService from './service/service';
import Navbarx from './Component/Layout/Navbar';
import Footer from './Component/Layout/Footer';
import ArtikelDetail from './Component/artikel/artikel_detail';
import Favicon from 'react-favicon'
import { Profile } from './Component/user/profile';
import {Order} from './Component/blog/blog_detail';
import EventDetail from './Component/event/detail';
interface IProps {}
interface IState {
  website: WebsiteModel;
  params : any;
}


export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {

    super(props);

    this.state = {
        params: '',
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
                this.setState({website: new WebsiteModel(website._id, website.webiste, website.email, website.telp, website.alamat,website.logo,website.favicon,website.facebook,website.twitter,website.instagram,website.youtube)});
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
      <Online>
      <Favicon url={"" +this.state.website.Favicon}/>
        <BrowserRouter>
          
          <Navbarx logo={this.state.website.Logo}/>
          <ScrollToTop />
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
      </Online>
      <Offline>You're offline right now. Check your connection.</Offline>
    </div>
  );
}
}

// export default App;
