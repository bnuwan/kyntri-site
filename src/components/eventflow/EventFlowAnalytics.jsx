import {
  ArrowUpRight,
  CalendarDays,
  CircleDollarSign,
  Ticket,
  TrendingUp,
  Users,
} from "lucide-react";

function EventFlowAnalytics() {
  return (
    <section
  className="eventflow-analytics"
  id="analytics"
>

      <div className="eventflow-container">

        {/* Heading */}
        <div className="eventflow-analytics-heading">

          <div>
            <span className="eventflow-section-eyebrow">
              REAL-TIME ANALYTICS
            </span>

            <h2>
              Know what's happening
              <span> at every event.</span>
            </h2>
          </div>

          <p>
            Monitor ticket sales, revenue, attendance and event activity
            from one intelligent dashboard.
          </p>

        </div>


        {/* Dashboard */}
        <div className="eventflow-dashboard">

          {/* Dashboard Header */}
          <div className="eventflow-dashboard-header">

            <div>
              <span>EVENT OVERVIEW</span>
              <h3>Tech Summit 2026</h3>
            </div>

            <button>
              Last 30 Days
              <CalendarDays size={15} />
            </button>

          </div>


          {/* Stats */}
          <div className="eventflow-dashboard-stats">

            <DashboardStat
              icon={<CircleDollarSign />}
              label="Total Revenue"
              value="LKR 4.82M"
              change="+24.8%"
            />

            <DashboardStat
              icon={<Ticket />}
              label="Tickets Sold"
              value="12,540"
              change="+18.4%"
            />

            <DashboardStat
              icon={<Users />}
              label="Attendees"
              value="10,284"
              change="+21.2%"
            />

            <DashboardStat
              icon={<TrendingUp />}
              label="Conversion"
              value="82.4%"
              change="+6.7%"
            />

          </div>


          {/* Main dashboard body */}
          <div className="eventflow-dashboard-grid">

            {/* Chart */}
            <div className="eventflow-chart-card">

              <div className="eventflow-chart-heading">

                <div>
                  <span>Ticket Sales</span>
                  <strong>12,540</strong>
                </div>

                <div className="eventflow-chart-growth">
                  <TrendingUp size={15} />
                  18.4%
                </div>

              </div>


              <div className="eventflow-chart">

                <div className="eventflow-chart-y-axis">
                  <span>3K</span>
                  <span>2K</span>
                  <span>1K</span>
                  <span>0</span>
                </div>

                <div className="eventflow-chart-area">

                  <div className="eventflow-grid-line line-one" />
                  <div className="eventflow-grid-line line-two" />
                  <div className="eventflow-grid-line line-three" />
                  <div className="eventflow-grid-line line-four" />

                  <svg
                    className="eventflow-sales-line"
                    viewBox="0 0 700 260"
                    preserveAspectRatio="none"
                  >
                    <defs>

                      <linearGradient
                        id="salesGradient"
                        x1="0"
                        x2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#08cfff"
                        />

                        <stop
                          offset="100%"
                          stopColor="#8d4dff"
                        />
                      </linearGradient>

                      <linearGradient
                        id="salesFill"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#08cfff"
                          stopOpacity="0.18"
                        />

                        <stop
                          offset="100%"
                          stopColor="#08cfff"
                          stopOpacity="0"
                        />
                      </linearGradient>

                    </defs>


                    <path
                      d="
                        M0 220
                        C45 215 60 185 100 195
                        C145 207 160 150 205 158
                        C245 165 265 120 310 135
                        C350 150 370 92 415 110
                        C460 130 480 72 525 86
                        C565 98 590 48 625 63
                        C655 75 680 35 700 25
                      "
                      fill="none"
                      stroke="url(#salesGradient)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />


                    <path
                      d="
                        M0 220
                        C45 215 60 185 100 195
                        C145 207 160 150 205 158
                        C245 165 265 120 310 135
                        C350 150 370 92 415 110
                        C460 130 480 72 525 86
                        C565 98 590 48 625 63
                        C655 75 680 35 700 25
                        L700 260
                        L0 260
                        Z
                      "
                      fill="url(#salesFill)"
                    />

                  </svg>


                  <div className="eventflow-chart-tooltip">

                    <span>Aug 24</span>

                    <strong>
                      2,840 Tickets
                    </strong>

                    <small>
                      LKR 1.02M
                    </small>

                  </div>

                  <div className="eventflow-chart-labels">
                    <span>Aug 01</span>
                    <span>Aug 07</span>
                    <span>Aug 14</span>
                    <span>Aug 21</span>
                    <span>Aug 28</span>
                  </div>

                </div>

              </div>

            </div>


            {/* Event performance */}
            <div className="eventflow-performance-card">

              <div className="eventflow-performance-heading">

                <div>
                  <span>EVENT PERFORMANCE</span>
                  <strong>Top Events</strong>
                </div>

                <ArrowUpRight size={18} />

              </div>


              <PerformanceRow
                number="01"
                title="Tech Summit 2026"
                tickets="4,820"
                percentage="92%"
              />

              <PerformanceRow
                number="02"
                title="Music Festival"
                tickets="3,640"
                percentage="78%"
              />

              <PerformanceRow
                number="03"
                title="Business Expo"
                tickets="2,910"
                percentage="64%"
              />

              <PerformanceRow
                number="04"
                title="Startup Conference"
                tickets="1,170"
                percentage="43%"
              />

            </div>

          </div>


          {/* Bottom activity */}
          <div className="eventflow-dashboard-bottom">

            <div className="eventflow-live-status">
              <span />
              LIVE DATA
            </div>

            <p>
              Dashboard automatically updates with the latest ticket
              sales and attendee activity.
            </p>

            <div className="eventflow-last-update">
              Updated just now
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


function DashboardStat({
  icon,
  label,
  value,
  change,
}) {
  return (
    <div className="eventflow-dashboard-stat">

      <div className="eventflow-dashboard-stat-icon">
        {icon}
      </div>

      <div className="eventflow-dashboard-stat-content">

        <span>{label}</span>

        <strong>{value}</strong>

        <small>
          <TrendingUp size={12} />
          {change}
        </small>

      </div>

    </div>
  );
}


function PerformanceRow({
  number,
  title,
  tickets,
  percentage,
}) {
  return (
    <div className="eventflow-performance-row">

      <span className="eventflow-performance-number">
        {number}
      </span>

      <div className="eventflow-performance-info">

        <strong>{title}</strong>

        <div className="eventflow-progress">
          <span style={{ width: percentage }} />
        </div>

      </div>

      <div className="eventflow-performance-value">
        <strong>{tickets}</strong>
        <span>tickets</span>
      </div>

    </div>
  );
}


export default EventFlowAnalytics;