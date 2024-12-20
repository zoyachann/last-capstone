import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Products from "./components/Product/product";
import HeroSection from "./components/HeroSection";
import ImageSwiper from "./components/SwiperSlide";
import AnchorTemporaryDrawer from "./components/ModalDetails/ModalDetails";
import ResponsiveDrawer from "./components/Drawer";
import ProfileDashboard from "./components/profile/profile";

function App() {
  return (
    <>
      <HeroSection />
      <ImageSwiper />
      <Products />
      < AnchorTemporaryDrawer />
      {/* <ProfileDashboard /> */}
    </>
  );
}

export default App;

