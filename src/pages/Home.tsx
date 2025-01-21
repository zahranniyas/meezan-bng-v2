import About from "../components/About";
import Booking from "../components/Booking";
import Bungalows from "../components/Bungalows";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <section className="font-el-messiri">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="bungalows">
        <Bungalows />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="booking">
        <Booking />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </section>
  );
};

export default Home;
