import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ResponsiveAppBar from './components/header';
import HeroSection from './components/HeroSection';
import SwiperSlide from './components/SwiperSlide';
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ResponsiveDrawer from './components/sideBar';
import Product from './components/Product/product';
import LoginModal from './components/login';

function App() {
  return (
    <Provider store={store}>
      <ResponsiveAppBar />
      <HeroSection />
      <SwiperSlide />
      <Product/>
      <LoginModal/>
      {/* <ResponsiveDrawer/> */}
   </Provider>
  
  );
}

export default App;












// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store';
// import ResponsiveAppBar from './components/header';
// import HeroSection from './components/HeroSection';
// import ImageSwiper from './components/SwiperSlide';
// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//         <Route path="/" element={<ResponsiveAppBar/>} />
//         <Route path="/" element={<HeroSection />} />
//         <Route path="/" element={<ImageSwiper/>} />        
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }
// export default App;