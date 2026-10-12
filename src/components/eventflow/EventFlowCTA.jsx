import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

function EventFlowCTA() {
  return (
    <section
  className="eventflow-cta"
  id="contact"
>

      <div className="eventflow-container">

        <div className="eventflow-cta-box">

          {/* Background effects */}
          <div className="eventflow-cta-glow eventflow-cta-glow-one" />
          <div className="eventflow-cta-glow eventflow-cta-glow-two" />

          <div className="eventflow-cta-content">

            <div className="eventflow-cta-icon">
              <Sparkles size={24} />
            </div>

            <span className="eventflow-section-eyebrow">
              READY TO GET STARTED?
            </span>

            <h2>
              Make your next event
              <span> unforgettable.</span>
            </h2>

            <p>
              Create, manage and grow your events with a smarter
              ticketing experience built for modern organizers.
            </p>


            <div className="eventflow-cta-actions">

              <button className="eventflow-cta-primary">
                Create Your Event
                <ArrowRight size={19} />
              </button>

              <button className="eventflow-cta-secondary">
                Talk to Our Team
              </button>

            </div>


            <div className="eventflow-cta-benefits">

              <div>
                <CheckCircle2 size={15} />
                Easy to get started
              </div>

              <div>
                <CheckCircle2 size={15} />
                Secure ticketing
              </div>

              <div>
                <CheckCircle2 size={15} />
                Real-time analytics
              </div>

            </div>

          </div>


          {/* Decorative ticket */}
          <div className="eventflow-cta-ticket eventflow-cta-ticket-left">
            <div />
            <span>EVENT</span>
          </div>

          <div className="eventflow-cta-ticket eventflow-cta-ticket-right">
            <div />
            <span>2026</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default EventFlowCTA;