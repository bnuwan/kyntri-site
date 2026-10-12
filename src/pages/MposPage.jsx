import Navbar from "../components/mpos/Navbar";

import MposHero from "../components/mpos/MposHero";
import MposFeatures from "../components/mpos/MposFeatures";

import BusinessInsights from "../components/mpos/BusinessInsights";
import MposInventory from "../components/mpos/MposInventory";
import MposOperations from "../components/mpos/MposOperations";
import MposCTA from "../components/mpos/MposCTA";
import Footer from "../components/Footer";

function MposPage() {
  return (
    <>
      <Navbar />

      <MposHero />
      <MposFeatures />
      
      <BusinessInsights />
      <MposInventory />
      <MposOperations />
      <MposCTA />

      <Footer />
    </>
  );
}

export default MposPage;