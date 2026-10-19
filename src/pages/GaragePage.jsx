import GarageNavbar from "../components/garage/GarageNavbar";
import GarageHero from "../components/garage/GarageHero";
import GarageFeatures from "../components/garage/GarageFeatures";
import GarageAnalytics from "../components/garage/GarageAnalytics";
import GarageOperations from "../components/garage/GarageOperations";
import GarageCTA from "../components/garage/GarageCTA";
import GarageFooter from "../components/garage/GarageFooter";
import "../components/garage/Garage.css";

function GaragePage() {
  return (
    <div className="garage-page">
      <GarageNavbar />

      <main>
        <GarageHero />
        <GarageFeatures />
        <GarageAnalytics />
        <GarageOperations />
        <GarageCTA />
        <GarageFooter />
      </main>
    </div>
  );
}

export default GaragePage;