import Navbar from "./Component/Navbar"
import HeroSection from "./Component/HeroSection"
import ProductsSection from "./Component/ProductsSection"
import './styles/swiper-custom.css';
import Testimonials from "./Component/Testimonials";


const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <ProductsSection />
      <Testimonials/>
    </div>
  )
}

export default App
