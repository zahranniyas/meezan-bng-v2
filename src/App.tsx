import About from "./components/About";
import Booking from "./components/Booking";
import Bungalows from "./components/Bungalows";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <section className="font-el-messiri">
      <Hero />
      <About />
      <Bungalows />
      <Services />
      <Booking />
      <Footer />
    </section>
  );
}

export default App;
