import {
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

function GarageCTA() {
  return (
    <section
      id="garage-contact"
      className="garage-cta-section"
    >
      <div className="garage-container">

        <div className="garage-cta-box">

          {/* Background Glows */}

          <div className="garage-cta-glow garage-cta-glow-one" />

          <div className="garage-cta-glow garage-cta-glow-two" />


          {/* Decorative Cards */}

          <div className="garage-cta-ticket garage-ticket-left">
            GARAGEFLOW
          </div>

          <div className="garage-cta-ticket garage-ticket-right">
            GARAGEFLOW
          </div>


          {/* CONTENT */}

          <div className="garage-cta-content">

            <div className="garage-cta-icon">
              <Sparkles size={25} />
            </div>


            <span className="garage-eyebrow">
              READY TO MODERNIZE?
            </span>


            <h2>
              Run your garage
              <span>the smarter way.</span>
            </h2>


            <p>
              Bring your garage operations, vehicles,
              technicians, inventory and billing into
              one powerful platform.
            </p>


            <div className="garage-cta-actions">

              <a
                href="mailto:hello@kyntri.com"
                className="garage-cta-primary"
              >
                Get Started
                <ArrowUpRight size={18} />
              </a>


              <a
                href="/"
                className="garage-cta-secondary"
              >
                Back to Kyntri
              </a>

            </div>


            {/* BENEFITS */}

            <div className="garage-cta-benefits">

              <div>
                <Check size={14} />
                Digital Garage Management
              </div>

              <div>
                <Check size={14} />
                Real-Time Analytics
              </div>

              <div>
                <Check size={14} />
                Smarter Operations
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GarageCTA;