import React, { FC } from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import About from './Component/about/about';
import HomeIndex from './Component/home/home';
import {EventList} from './Component/event/list';
import BlogList from './Component/blog/list';
import { Faq } from './Component/helps/Faq';
import { Contact_us } from './Component/helps/Contact_us';
import ScrollToTop from './Component/helpers/ScrollToTop';
import { Error404 } from './Component/helps/Error_404';
import { Offline, Online } from "react-detect-offline";
const App: FC = () => {
  return (
    
    
      <div>
      <Online>
        <BrowserRouter>
          <ScrollToTop />
            <Routes >
                <Route path="/" element={<HomeIndex/>}></Route>
                <Route path="/about-us" element={<About/>}></Route>
                <Route path="/event" element={<EventList title='Event List' judul='Event List'/>}></Route>
                <Route path="/blog" element={<BlogList/>}></Route>
                <Route path="/faq" element={<Faq/>}></Route>
                <Route path="/contact-us" element={<Contact_us/>}></Route>
                <Route path="*" element={<Error404/>}></Route>
            </Routes >
        
        </BrowserRouter>
      </Online>
      <Offline>You're offline right now. Check your connection.</Offline>
    </div>
  );
}

export default App;
