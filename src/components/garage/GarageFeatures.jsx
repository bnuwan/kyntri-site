import {
  Car,
  Wrench,
  Package,
  Receipt,
  Users,
  BarChart3,
} from "lucide-react";

function GarageFeatures() {
  const features = [
    {
      icon: Car,
      title: "Vehicle Management",
      description:
        "Track every vehicle from intake to delivery with complete service history and customer information.",
      tags: [
        "Vehicle Intake",
        "Service History",
        "Customer Records",
      ],
    },

    {
      icon: Wrench,
      title: "Service Management",
      description:
        "Create and manage service jobs, assign technicians and track work progress in real time.",
      tags: [
        "Job Cards",
        "Technician Tracking",
        "Status Updates",
      ],
    },

    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Keep complete control of spare parts, stock movements, suppliers and low-stock alerts.",
      tags: [
        "Parts Inventory",
        "Stock Alerts",
        "Suppliers",
      ],
    },

    {
      icon: Receipt,
      title: "Billing & Payments",
      description:
        "Generate accurate invoices and manage payments with a fast and reliable billing workflow.",
      tags: [
        "Invoices",
        "Payments",
        "Receipts",
      ],
    },

    {
      icon: Users,
      title: "Customer Management",
      description:
        "Build complete customer profiles with vehicle ownership, service history and communication records.",
      tags: [
        "Customer Profiles",
        "Vehicle History",
        "Notifications",
      ],
    },

    {
      icon: BarChart3,
      title: "Reports & Analytics",
      description:
        "Understand your garage performance with powerful dashboards and business insights.",
      tags: [
        "Revenue Reports",
        "Service Analytics",
        "BI Dashboards",
      ],
    },
  ];

  return (
    <section
      id="garage-features"
      className="garage-features-section"
    >
      <div className="garage-container">

        {/* SECTION HEADER */}

        <div className="garage-section-header">

          <div>
            <span className="garage-eyebrow">
              POWERFUL FEATURES
            </span>

            <h2>
              Everything
              <span>your garage</span>
              needs.
            </h2>
          </div>

          <p>
            From vehicle intake to billing, inventory
            and reporting, GarageFlow gives garage
            owners everything they need to run
            successful operations.
          </p>

        </div>


        {/* FEATURE CARDS */}

        <div className="garage-feature-grid">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="garage-feature-card"
              >

                <div className="garage-card-line" />

                <div className="garage-feature-top">

                  <div className="garage-feature-icon">
                    <Icon size={27} />
                  </div>

                  <span>
                    0{index + 1}
                  </span>

                </div>


                <h3>
                  {feature.title}
                </h3>


                <p>
                  {feature.description}
                </p>


                <div className="garage-feature-tags">

                  {feature.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default GarageFeatures;