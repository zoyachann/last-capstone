import "./App.css";
import HeroSection from "./components/HeroSection";
import ImageSwiper from "./components/SwiperSlide";
import ModalDetails from "./components/ModalDetails/ModalDetails";
import Products  from "./components/Product/product";




function App() {
  return (
    <>
      <HeroSection />
      <ImageSwiper />
      <Products />
      <ModalDetails />

    </>
  );
}

export default App;

