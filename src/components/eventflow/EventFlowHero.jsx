import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  QrCode,
  Ticket,
  Users,
} from "lucide-react";

function EventFlowHero() {
  return (
    <section className="eventflow-hero">
      <div className="eventflow-hero-glow eventflow-glow-one" />
      <div className="eventflow-hero-glow eventflow-glow-two" />

      <div className="eventflow-container eventflow-hero-grid">

        {/* LEFT */}
        <div className="eventflow-hero-content">

          <div className="eventflow-badge">
            <span className="eventflow-badge-dot" />
            THE FUTURE OF EVENT TICKETING
          </div>

          <h1>
            Power Your
            <span> Events.</span>
            <br />

            Simplify
            <span> Ticketing.</span>
          </h1>

          <p>
            Transform the way you manage events with a powerful digital
            ticketing platform built for modern event organizers.
            Create events, sell tickets, validate attendees and track
            everything in real time.
          </p>

          <div className="eventflow-hero-actions">

            <button className="eventflow-primary-btn">
              Create Your Event
              <ArrowRight size={20} />
            </button>

            <button className="eventflow-secondary-btn">
              Explore Features
            </button>

          </div>

          <div className="eventflow-trust-row">

            <div>
              <strong>50K+</strong>
              <span>Attendees</span>
            </div>

            <div>
              <strong>2.5K+</strong>
              <span>Events</span>
            </div>

            <div>
              <strong>99.9%</strong>
              <span>Validation</span>
            </div>

          </div>

        </div>


        {/* RIGHT */}
        <div className="eventflow-hero-visual">

          {/* Floating sales card */}
          <div className="eventflow-floating-card eventflow-sales-card">

            <div className="eventflow-mini-icon">
              <Ticket size={19} />
            </div>

            <div>
              <span>Tickets Sold</span>
              <strong>12,540</strong>
              <small>+18.4% Today</small>
            </div>

          </div>


          {/* Phone */}
          <div className="eventflow-phone">

            <div className="eventflow-phone-notch" />

            <div className="eventflow-phone-header">
              <span>EventFlow</span>

              <div className="eventflow-profile">
                E
              </div>
            </div>


            <div className="eventflow-phone-title">
              <span>Good morning!</span>
              <strong>Manage your events</strong>
            </div>


            {/* Event card */}
            <div className="eventflow-event-card">

              <div className="eventflow-event-top">

                <div className="eventflow-event-icon">
                  <CalendarDays size={22} />
                </div>

                <div>
                  <span>UPCOMING EVENT</span>
                  <strong>Tech Summit 2026</strong>
                </div>

              </div>

              <div className="eventflow-event-info">

                <div>
                  <CalendarDays size={15} />
                  Aug 28, 2026
                </div>

                <div>
                  <Users size={15} />
                  2,500 Guests
                </div>

              </div>

            </div>


            <p className="eventflow-section-label">
              Quick Actions
            </p>


            {/* Scan */}
            <div className="eventflow-scan-card">

              <div className="eventflow-scan-icon">
                <QrCode size={30} />
              </div>

              <div>
                <strong>Scan Ticket</strong>
                <span>Validate attendee access</span>
              </div>

              <ArrowRight size={18} />

            </div>


            {/* Bottom cards */}
            <div className="eventflow-small-grid">

              <div className="eventflow-small-card">
                <Ticket size={22} />
                <strong>Tickets</strong>
                <span>Manage tickets</span>
              </div>

              <div className="eventflow-small-card purple">
                <Users size={22} />
                <strong>Attendees</strong>
                <span>View attendees</span>
              </div>

            </div>


            <div className="eventflow-phone-footer">

              <div className="active">
                <CalendarDays size={18} />
                <span>Events</span>
              </div>

              <div>
                <Ticket size={18} />
                <span>Tickets</span>
              </div>

              <div>
                <Users size={18} />
                <span>Guests</span>
              </div>

            </div>

          </div>


          {/* Floating validation card */}
          <div className="eventflow-floating-card eventflow-validation-card">

            <div className="eventflow-validation-icon">
              <CheckCircle2 size={22} />
            </div>

            <div>
              <span>Ticket Validation</span>
              <strong>Verified</strong>
            </div>

          </div>


          {/* Floating attendees card */}
          <div className="eventflow-floating-card eventflow-attendee-card">

            <div className="eventflow-avatar-stack">
              <span>J</span>
              <span>A</span>
              <span>M</span>
            </div>

            <div>
              <strong>2,480+</strong>
              <span>Checked In</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default EventFlowHero;
