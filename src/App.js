import "./App.css";

import Products from "./components/Product/product";
import HeroSection from "./components/HeroSection";
import ImageSwiper from "./components/SwiperSlide";
import RightDrawer from "./components/ModalDetails/ModalDetails";



function App() {
  return (
    <>
      <HeroSection />
      <ImageSwiper />
      <Products />
      <RightDrawer />
    </>
  );
}

export default App;

