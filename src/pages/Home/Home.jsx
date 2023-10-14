import Banner from "../../components/Banner";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar"; 
import AboutProduct from "./AboutProduct";
import ContactUs from "./ContactUs";
import Products from "./Products"; 
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <section>
      <Navbar />
      <Banner />
      <Products />
      <AboutProduct /> 
      <Testimonials/>
      <ContactUs/>
      <Footer />
    </section>
  );
};

export default Home;
