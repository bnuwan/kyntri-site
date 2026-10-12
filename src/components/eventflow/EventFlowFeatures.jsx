import {
  Ticket,
  QrCode,
  Radio,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Ticket,
    number: "01",
    title: "DIGITAL TICKETS",
    description:
      "Create and deliver secure digital tickets instantly. Give every attendee a seamless ticketing experience from purchase to entry.",
    tags: ["Mobile Tickets", "Easy Sharing", "Instant Delivery"],
  },
  {
    icon: QrCode,
    number: "02",
    title: "QR VALIDATION",
    description:
      "Validate attendees in seconds using secure QR technology. Fast entry means shorter queues and a better event experience.",
    tags: ["Fast Scanning", "Secure QR", "Instant Verification"],
  },
  {
    icon: Radio,
    number: "03",
    title: "REAL-TIME UPDATES",
    description:
      "Stay connected with live ticket sales, attendance and event activity from a single powerful dashboard.",
    tags: ["Live Analytics", "Sales Tracking", "Live Attendance"],
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "SECURE ACCESS",
    description:
      "Protect your events with secure ticket validation and controlled attendee access designed for modern event environments.",
    tags: ["Access Control", "Fraud Protection", "Secure Entry"],
  },
];

function EventFlowFeatures() {
  return (
    <section className="eventflow-features" id="features">

      <div className="eventflow-container">

        {/* Header */}
        <div className="eventflow-section-header">

          <div>
            <span className="eventflow-section-eyebrow">
              POWERFUL FEATURES
            </span>

            <h2>
              Everything your
              <span> event needs.</span>
            </h2>
          </div>

          <p>
            From digital ticket sales to real-time attendee validation,
            EventFlow gives organizers everything they need to run
            successful events.
          </p>

        </div>


        {/* Cards */}
        <div className="eventflow-feature-grid">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                className="eventflow-feature-card"
                key={feature.number}
              >

                {/* Top gradient line */}
                <div className="eventflow-card-line" />

                <div className="eventflow-feature-top">

                  <div className="eventflow-feature-icon">
                    <Icon size={25} />
                  </div>

                  <span className="eventflow-feature-number">
                    {feature.number}
                  </span>

                </div>


                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>


                <div className="eventflow-feature-tags">

                  {feature.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>


                <button className="eventflow-feature-link">
                  Explore Feature
                  <ArrowUpRight size={17} />
                </button>

              </article>
            );
          })}

        </div>


        {/* Bottom stats */}
        <div className="eventflow-feature-stats">

          <div>
            <strong>50K+</strong>
            <span>Digital Tickets Issued</span>
          </div>

          <div>
            <strong>99.9%</strong>
            <span>QR Validation Accuracy</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Real-time Monitoring</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Digital Experience</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default EventFlowFeatures;