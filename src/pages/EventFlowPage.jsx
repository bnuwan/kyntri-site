import EventFlowNavbar from "../components/eventflow/EventFlowNavbar";
import EventFlowHero from "../components/eventflow/EventFlowHero";
import EventFlowFeatures from "../components/eventflow/EventFlowFeatures";
import EventFlowAnalytics from "../components/eventflow/EventFlowAnalytics";
import EventFlowManagement from "../components/eventflow/EventFlowManagement";
import EventFlowCTA from "../components/eventflow/EventFlowCTA";
import Footer from "../components/Footer";

import "../components/eventflow/EventFlow.css";

function EventFlowPage() {
  return (
    <>
      <EventFlowNavbar />
      <EventFlowHero />
      <EventFlowFeatures />
      <EventFlowAnalytics />
      <EventFlowManagement />
      <EventFlowCTA />
      <Footer />
    </>
  );
}

export default EventFlowPage;