import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import ResponsiveAppBar from './components/header';
import HeroSection from './components/HeroSection';
import SwiperSlide from './components/SwiperSlide';
import Product from './components/Product/product';


function App() {
  return (
   
   <div>
    <ResponsiveAppBar/>
   <HeroSection/>
   <SwiperSlide/>
   <Product/>
   </div>
  );
}

export default App;


