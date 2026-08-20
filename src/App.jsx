import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MposPage from "./pages/MposPage";
import EventFlowPage from "./pages/EventFlowPage";
import GaragePage from "./pages/GaragePage";
import AgenticAiPage from "./pages/AgenticAiPage";

import BlogPage from "./pages/BlogPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import DocumentationPage from "./pages/DocumentationPage";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import LiftlyPage from "./pages/LiftlyPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Platforms */}
        <Route path="/mpos" element={<MposPage />} />
        <Route path="/eventflow" element={<EventFlowPage />} />
        <Route path="/garage" element={<GaragePage />} />
        <Route path="/agentic-ai" element={<AgenticAiPage />} />

        {/* Resources */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* Company */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
<Route
  path="/liftly"
  element={<LiftlyPage />}
/>
        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center text-center px-6">
              <div>
                <p className="text-cyan-400 tracking-[4px]">
                  404
                </p>

                <h1 className="mt-4 text-5xl font-black">
                  Page Not Found
                </h1>

                <a
                  href="/"
                  className="inline-block mt-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-3.5 font-semibold"
                >
                  Back to Home
                </a>
              </div>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;