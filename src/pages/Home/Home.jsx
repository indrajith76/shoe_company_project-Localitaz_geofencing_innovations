import Banner from "../../components/Banner";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutProduct from "./AboutProduct";
import ContactUs from "./ContactUs";
import Products from "./Products";
import Testimonials from "./Testimonials";
import "aos/dist/aos.css";
import AOS from "aos";

const Home = () => {
  AOS.init();
  return (
    <section>
      <Navbar />
      <Banner />
      <Products />
      <AboutProduct />
      <Testimonials />
      <ContactUs />
      <Footer />
    </section>
  );
};

export default Home;
