import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import AutomationSection from "../components/AutomationSection";
import ProductsSection from "../components/ProductsSection";
import LiftlySection from "../components/LiftlySection";
import DeliveryJourney from "../components/DeliveryJourney";
import ContactSection from "../components/ContactSection";
import Marquee from "../components/Marquee";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <AutomationSection />
      <ProductsSection />
      <LiftlySection />
      <DeliveryJourney />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;