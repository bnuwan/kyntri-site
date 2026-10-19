import {
  TrendingUp,
  Car,
  Wrench,
  Receipt,
  Package,
  Activity,
} from "lucide-react";

function GarageAnalytics() {
  const serviceData = [
    {
      name: "Engine Service",
      value: 82,
      count: 42,
    },
    {
      name: "Oil Change",
      value: 68,
      count: 35,
    },
    {
      name: "Brake Service",
      value: 54,
      count: 28,
    },
    {
      name: "AC Service",
      value: 43,
      count: 22,
    },
  ];

  return (
    <section
      id="garage-analytics"
      className="garage-analytics-section"
    >
      <div className="garage-container">

        {/* SECTION HEADER */}

        <div className="garage-analytics-heading">

          <div>
            <span className="garage-eyebrow">
              REAL-TIME ANALYTICS
            </span>

            <h2>
              Know your
              <span>garage.</span>
            </h2>
          </div>

          <p>
            Get a complete view of your garage performance
            with real-time data, service analytics,
            revenue tracking and operational insights.
          </p>

        </div>


        {/* DASHBOARD */}

        <div className="garage-analytics-dashboard">

          {/* DASHBOARD HEADER */}

          <div className="garage-analytics-top">

            <div>
              <span>GARAGE PERFORMANCE</span>
              <strong>Business Overview</strong>
            </div>

            <div className="garage-period">
              <Activity size={15} />
              This Month
            </div>

          </div>


          {/* STAT CARDS */}

          <div className="garage-analytics-stats">

            {/* Revenue */}

            <div className="garage-analytics-stat">

              <div className="garage-analytics-icon cyan">
                <Receipt size={20} />
              </div>

              <div>
                <span>Total Revenue</span>

                <strong>
                  LKR 2.48M
                </strong>

                <small>
                  <TrendingUp size={11} />
                  +18.4%
                </small>
              </div>

            </div>


            {/* Vehicles */}

            <div className="garage-analytics-stat">

              <div className="garage-analytics-icon blue">
                <Car size={20} />
              </div>

              <div>
                <span>Vehicles Serviced</span>

                <strong>
                  1,284
                </strong>

                <small>
                  <TrendingUp size={11} />
                  +12.8%
                </small>
              </div>

            </div>


            {/* Jobs */}

            <div className="garage-analytics-stat">

              <div className="garage-analytics-icon purple">
                <Wrench size={20} />
              </div>

              <div>
                <span>Completed Jobs</span>

                <strong>
                  1,156
                </strong>

                <small>
                  <TrendingUp size={11} />
                  +9.6%
                </small>
              </div>

            </div>


            {/* Inventory */}

            <div className="garage-analytics-stat">

              <div className="garage-analytics-icon orange">
                <Package size={20} />
              </div>

              <div>
                <span>Parts Used</span>

                <strong>
                  3,842
                </strong>

                <small>
                  +6.3%
                </small>
              </div>

            </div>

          </div>


          {/* ANALYTICS GRID */}

          <div className="garage-analytics-grid">

            {/* REVENUE CHART */}

            <div className="garage-chart-card">

              <div className="garage-chart-header">

                <div>
                  <span>REVENUE OVERVIEW</span>

                  <strong>
                    LKR 2.48M
                  </strong>
                </div>

                <div className="garage-growth">
                  <TrendingUp size={14} />
                  18.4%
                </div>

              </div>


              <div className="garage-chart">

                <div className="garage-chart-y">

                  <span>3M</span>
                  <span>2M</span>
                  <span>1M</span>
                  <span>0</span>

                </div>


                <div className="garage-chart-area">

                  <div className="garage-chart-line line-1" />
                  <div className="garage-chart-line line-2" />
                  <div className="garage-chart-line line-3" />
                  <div className="garage-chart-line line-4" />


                  <svg
                    viewBox="0 0 600 260"
                    preserveAspectRatio="none"
                    className="garage-revenue-chart"
                  >

                    <defs>

                      <linearGradient
                        id="garageChartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopOpacity="0.25"
                        />

                        <stop
                          offset="100%"
                          stopOpacity="0"
                        />

                      </linearGradient>

                    </defs>


                    <path
                      d="
                        M0 210
                        C50 195 65 185 100 190
                        C140 196 155 170 200 160
                        C240 150 260 170 300 130
                        C340 90 365 120 400 105
                        C440 90 455 70 500 75
                        C540 78 565 40 600 30
                      "
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    />


                    <path
                      d="
                        M0 210
                        C50 195 65 185 100 190
                        C140 196 155 170 200 160
                        C240 150 260 170 300 130
                        C340 90 365 120 400 105
                        C440 90 455 70 500 75
                        C540 78 565 40 600 30
                        L600 260
                        L0 260
                        Z
                      "
                      fill="url(#garageChartGradient)"
                      stroke="none"
                    />

                  </svg>


                  <div className="garage-chart-tooltip">

                    <span>
                      Revenue
                    </span>

                    <strong>
                      LKR 245K
                    </strong>

                    <small>
                      +21.4%
                    </small>

                  </div>


                  <div className="garage-chart-months">

                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>

                  </div>

                </div>

              </div>

            </div>


            {/* SERVICE PERFORMANCE */}

            <div className="garage-service-card">

              <div className="garage-service-header">

                <div>
                  <span>SERVICE PERFORMANCE</span>

                  <strong>
                    Top Services
                  </strong>
                </div>

                <Wrench size={17} />

              </div>


              <div className="garage-service-list">

                {serviceData.map((service, index) => (
                  <div
                    key={service.name}
                    className="garage-service-row"
                  >

                    <div className="garage-service-number">
                      0{index + 1}
                    </div>


                    <div className="garage-service-info">

                      <div className="garage-service-name">

                        <strong>
                          {service.name}
                        </strong>

                        <span>
                          {service.count} jobs
                        </span>

                      </div>


                      <div className="garage-progress">
                        <span
                          style={{
                            width: `${service.value}%`,
                          }}
                        />
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* BOTTOM INFO */}

          <div className="garage-analytics-footer">

            <div className="garage-live-indicator">
              <span />
              Live data
            </div>

            <p>
              Analytics automatically update as your
              garage operations change.
            </p>

            <span>
              Updated just now
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GarageAnalytics;