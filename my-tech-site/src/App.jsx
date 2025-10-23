import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import Products from "./components/sections/Products";
import Testimonials from "./components/sections/Testimonials";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="font-sans bg-neutralLight text-neutralDark">
      <Hero />
      <Stats />
      <Products />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
