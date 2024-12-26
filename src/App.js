import "./App.css";
import HeroSection from "./components/HeroSection";
import ImageSwiper from "./components/SwiperSlide";
import RightDrawer from "./components/ModalDetails/ModalDetails";
import Products  from "./components/Product/product";




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

