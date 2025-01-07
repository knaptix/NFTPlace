import Navbar from "./Component/Navbar"
import HeroSection from "./Component/HeroSection"
import ProductsSection from "./Component/ProductsSection"
import './styles/swiper-custom.css';
import Testimonials from "./Component/Testimonials";
import Footer from "./Component/Footer";
import BulkProductSearch from "./Component/BulkProductSearch";


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <ProductsSection />
      <BulkProductSearch/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
