import {
  ArrowRight,
  Wrench,
  Car,
  Package,
  Receipt,
} from "lucide-react";

function GarageHero() {
  return (
    <section
      id="garage-home"
      className="garage-hero"
    >
      {/* Background Glow */}
      <div className="garage-hero-glow garage-glow-one" />
      <div className="garage-hero-glow garage-glow-two" />

      <div className="garage-container garage-hero-grid">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="garage-hero-content">

          <div className="garage-badge">
            <span />
            SMART GARAGE MANAGEMENT
          </div>

          <h1>
            Run Your Garage.
            <br />

            <span>Smarter.</span>
            <br />

            Faster.
          </h1>

          <p>
            Manage vehicle intake, service operations,
            billing, inventory and customer records
            from one intelligent garage management
            platform.
          </p>

          <div className="garage-hero-actions">

            <a
              href="#garage-contact"
              className="garage-primary-button"
            >
              Get Started
              <ArrowRight size={18} />
            </a>

            <a
              href="#garage-features"
              className="garage-secondary-button"
            >
              Explore Features
            </a>

          </div>

          {/* Trust Stats */}

          <div className="garage-trust">

            <div>
              <strong>24/7</strong>
              <span>Operations</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Digital Records</span>
            </div>

            <div>
              <strong>1</strong>
              <span>Smart Platform</span>
            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT DASHBOARD
        ================================================= */}

        <div className="garage-hero-visual">

          <div className="garage-dashboard">

            {/* Dashboard Header */}

            <div className="garage-dashboard-top">

              <div>
                <span>GARAGE DASHBOARD</span>
                <strong>Today's Overview</strong>
              </div>

              <div className="garage-live">
                <span />
                LIVE
              </div>

            </div>


            {/* Dashboard Stats */}

            <div className="garage-dashboard-stats">

              {/* Vehicles */}

              <div className="garage-stat">

                <div className="garage-stat-icon cyan">
                  <Car size={20} />
                </div>

                <div>
                  <span>Vehicles Today</span>
                  <strong>48</strong>
                  <small>+12% today</small>
                </div>

              </div>


              {/* Active Jobs */}

              <div className="garage-stat">

                <div className="garage-stat-icon purple">
                  <Wrench size={20} />
                </div>

                <div>
                  <span>Active Jobs</span>
                  <strong>17</strong>
                  <small>8 in progress</small>
                </div>

              </div>


              {/* Revenue */}

              <div className="garage-stat">

                <div className="garage-stat-icon green">
                  <Receipt size={20} />
                </div>

                <div>
                  <span>Revenue</span>
                  <strong>LKR 185K</strong>
                  <small>+18.4%</small>
                </div>

              </div>


              {/* Inventory */}

              <div className="garage-stat">

                <div className="garage-stat-icon orange">
                  <Package size={20} />
                </div>

                <div>
                  <span>Stock Items</span>
                  <strong>326</strong>
                  <small>12 low stock</small>
                </div>

              </div>

            </div>


            {/* Active Jobs */}

            <div className="garage-work-card">

              <div className="garage-work-header">

                <div>
                  <span>ACTIVE SERVICE JOBS</span>
                  <strong>Today's Jobs</strong>
                </div>

                <span className="garage-view">
                  View All
                </span>

              </div>


              {/* Job 1 */}

              <div className="garage-job">

                <div className="garage-car-avatar">
                  <Car size={18} />
                </div>

                <div className="garage-job-info">
                  <strong>WP CAB-4521</strong>
                  <span>Engine Service</span>
                </div>

                <div className="garage-job-status progress">
                  In Progress
                </div>

              </div>


              {/* Job 2 */}

              <div className="garage-job">

                <div className="garage-car-avatar purple">
                  <Car size={18} />
                </div>

                <div className="garage-job-info">
                  <strong>CAA-7812</strong>
                  <span>Brake Replacement</span>
                </div>

                <div className="garage-job-status ready">
                  Ready
                </div>

              </div>


              {/* Job 3 */}

              <div className="garage-job">

                <div className="garage-car-avatar green">
                  <Car size={18} />
                </div>

                <div className="garage-job-info">
                  <strong>KBX-2345</strong>
                  <span>Oil Change</span>
                </div>

                <div className="garage-job-status waiting">
                  Waiting
                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              FLOATING REVENUE CARD
          ================================================= */}

          <div className="garage-floating-card garage-revenue-card">

            <Receipt size={19} />

            <div>
              <span>Today's Revenue</span>
              <strong>LKR 185K</strong>
            </div>

          </div>


          {/* =================================================
              FLOATING INVENTORY CARD
          ================================================= */}

          <div className="garage-floating-card garage-stock-card">

            <Package size={19} />

            <div>
              <span>Inventory</span>
              <strong>326 Items</strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GarageHero;