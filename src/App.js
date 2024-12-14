import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import ResponsiveAppBar from './components/header';
import HeroSection from './components/HeroSection';

function App() {
  return (
   
   <div>
    <ResponsiveAppBar/>
   <HeroSection/>
   </div>
  );
}

export default App;
