// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './App.css';
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ResponsiveAppBar from "./components/header";
// import LoginPage from "./components/login";
// import HeroSection from "./components/HeroSection";
// import ImageSwiper from "./components/SwiperSlide";
// import Product from './components/Product/product';
// function HomePage() {
//   return (
//     <div>
//       <ResponsiveAppBar />
//       <HeroSection />
//       <ImageSwiper />
//       <Product/>
  
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Render HomePage on '/' */}
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/HeroSection" element={<HeroSection />} />
//         <Route path="/ImageSwiper" element={<ImageSwiper />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Products from "./components/Product/product";
import HeroSection from "./components/HeroSection";
import ImageSwiper from "./components/SwiperSlide";

function App() {
  return (
    <>
      <HeroSection  />
      <ImageSwiper />
      <Products />
    </>
  );
}

export default App;

