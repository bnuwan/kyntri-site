import kyntriLogo from "../../assets/kyntri_logo.png";

function GarageFooter() {
  const goHomeSection = (section) => {
    window.location.href = `/#${section}`;
  };

  return (
    <footer className="garage-footer">

      <div className="garage-footer-container">

        {/* BRAND */}

        <div className="garage-footer-brand">

          <a
            href="/"
            className="garage-footer-logo"
          >
            <img
              src={kyntriLogo}
              alt="Kyntri"
            />

            <span>KYNTRI</span>
          </a>

          <p>
            Engineering scalable software, AI solutions,
            and cloud platforms for modern enterprises.
          </p>

        </div>


        {/* =================================================
            PLATFORMS
        ================================================= */}

        <div className="garage-footer-column">

          <h3>Platforms</h3>

          <a href="/">
            mPOS
          </a>

          <a href="/liftly">
            Liftly
          </a>

          <a href="/eventflow">
            EventFlow
          </a>

          <a href="/garage">
            AutoGarage
          </a>

          <a href="/agentic-ai">
            Agentic AI
          </a>

        </div>


        {/* =================================================
            USE CASES
        ================================================= */}

        <div className="garage-footer-column">

          <h3>Use Cases</h3>

          <a
            href="/#automation"
            onClick={() => {
              window.location.href = "/#automation";
            }}
          >
            Workflow Automation
          </a>

          <a href="/#services">
            AI Assistants
          </a>

          <a href="/#services">
            Data Analytics
          </a>

          <a href="/#services">
            Cloud Migration
          </a>

          <a href="/#services">
            Digital Transformation
          </a>

        </div>


        {/* =================================================
            RESOURCES
        ================================================= */}

        <div className="garage-footer-column">

          <h3>Resources</h3>

          <a href="/">
            Blog
          </a>

          <a href="/">
            Case Studies
          </a>

          <a href="/">
            Documentation
          </a>

          <a href="/">
            Support
          </a>

          <a href="/">
            FAQ
          </a>

        </div>


        {/* =================================================
            COMPANY
        ================================================= */}

        <div className="garage-footer-column">

          <h3>Company</h3>

          <a href="/">
            About Us
          </a>

          <a href="/#services">
            Services
          </a>

          <a href="/">
            Careers
          </a>

          <a href="/#contact">
            Contact
          </a>

          <a href="/">
            Privacy Policy
          </a>

        </div>

      </div>


      {/* DIVIDER */}

      <div className="garage-footer-divider" />


      {/* BOTTOM */}

      <div className="garage-footer-bottom">

        <span>
          © 2026 Kyntri Technology Solutions.
          All rights reserved.
        </span>

        <span>
          Built for modern, intelligent enterprises.
        </span>

      </div>

    </footer>
  );
}

export default GarageFooter;