import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  MoreHorizontal,
  Plus,
  QrCode,
  Ticket,
  Users,
} from "lucide-react";

function EventFlowManagement() {
  return (
    <section
  className="eventflow-management"
  id="management"
>

      <div className="eventflow-container">

        {/* Header */}
        <div className="eventflow-management-header">

          <div>
            <span className="eventflow-section-eyebrow">
              EVENT MANAGEMENT
            </span>

            <h2>
              One platform.
              <span> Complete control.</span>
            </h2>
          </div>

          <p>
            Create events, manage ticket types, monitor attendees and
            control access — all from one simple workspace.
          </p>

        </div>


        {/* Main workspace */}
        <div className="eventflow-management-workspace">

          {/* Sidebar */}
          <aside className="eventflow-management-sidebar">

            <div className="eventflow-sidebar-logo">
              <div>
                E
              </div>

              <span>EventFlow</span>
            </div>


            <div className="eventflow-sidebar-menu">

              <SidebarItem
                icon={<CalendarDays size={17} />}
                label="Events"
                active
              />

              <SidebarItem
                icon={<Ticket size={17} />}
                label="Tickets"
              />

              <SidebarItem
                icon={<Users size={17} />}
                label="Attendees"
              />

              <SidebarItem
                icon={<QrCode size={17} />}
                label="Check-in"
              />

            </div>


            <div className="eventflow-sidebar-bottom">

              <div className="eventflow-sidebar-user">
                <div>JD</div>

                <span>
                  John Doe
                  <small>Organizer</small>
                </span>
              </div>

            </div>

          </aside>


          {/* Content */}
          <main className="eventflow-management-content">

            {/* Topbar */}
            <div className="eventflow-management-topbar">

              <div>
                <span>EVENT MANAGEMENT</span>
                <h3>My Events</h3>
              </div>

              <button className="eventflow-create-btn">
                <Plus size={17} />
                Create Event
              </button>

            </div>


            {/* Search / filter */}
            <div className="eventflow-management-filter">

              <div className="eventflow-search-box">
                Search events...
              </div>

              <button>
                All Events
              </button>

              <button>
                Upcoming
              </button>

              <button>
                Completed
              </button>

            </div>


            {/* Event cards */}
            <div className="eventflow-management-events">

              <EventManagementCard
                title="Tech Summit 2026"
                date="Aug 28, 2026"
                location="Colombo Convention Centre"
                tickets="4,820"
                attendees="3,940"
                status="LIVE"
                gradient="blue"
              />

              <EventManagementCard
                title="Music Festival"
                date="Sep 12, 2026"
                location="Galle Face Green"
                tickets="3,640"
                attendees="2,860"
                status="UPCOMING"
                gradient="purple"
              />

              <EventManagementCard
                title="Business Expo 2026"
                date="Sep 26, 2026"
                location="BMICH, Colombo"
                tickets="2,910"
                attendees="2,110"
                status="UPCOMING"
                gradient="pink"
              />

            </div>


            {/* Bottom section */}
            <div className="eventflow-management-bottom">

              <div className="eventflow-ticket-overview">

                <div className="eventflow-management-card-heading">

                  <div>
                    <span>TICKET TYPES</span>
                    <strong>Tech Summit 2026</strong>
                  </div>

                  <ArrowRight size={17} />

                </div>


                <TicketRow
                  name="VIP Pass"
                  price="LKR 25,000"
                  sold="420"
                  total="500"
                  color="blue"
                />

                <TicketRow
                  name="Premium"
                  price="LKR 15,000"
                  sold="1,240"
                  total="1,500"
                  color="purple"
                />

                <TicketRow
                  name="General Admission"
                  price="LKR 7,500"
                  sold="3,160"
                  total="4,000"
                  color="cyan"
                />

              </div>


              {/* Check-in */}
              <div className="eventflow-checkin-card">

                <div className="eventflow-management-card-heading">

                  <div>
                    <span>LIVE CHECK-IN</span>
                    <strong>Today's Attendance</strong>
                  </div>

                  <div className="eventflow-live-dot" />

                </div>


                <div className="eventflow-checkin-number">
                  <strong>3,940</strong>
                  <span>/ 4,820</span>
                </div>


                <div className="eventflow-checkin-progress">
                  <span />
                </div>


                <div className="eventflow-checkin-footer">

                  <div>
                    <CheckCircle2 size={14} />
                    81.7% Checked In
                  </div>

                  <span>
                    <Clock3 size={13} />
                    Live
                  </span>

                </div>

              </div>

            </div>

          </main>

        </div>

      </div>

    </section>
  );
}


/* Sidebar item */

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`eventflow-sidebar-item ${
        active ? "active" : ""
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}


/* Event card */

function EventManagementCard({
  title,
  date,
  location,
  tickets,
  attendees,
  status,
  gradient,
}) {
  return (
    <div className="eventflow-management-event">

      <div className={`eventflow-event-banner ${gradient}`}>

        <div className="eventflow-event-banner-pattern" />

        <div className="eventflow-event-status">
          {status === "LIVE" && (
            <span className="live-dot" />
          )}

          {status}
        </div>

        <MoreHorizontal size={18} />

      </div>


      <div className="eventflow-management-event-body">

        <h4>{title}</h4>

        <div className="eventflow-management-event-meta">

          <span>
            <CalendarDays size={13} />
            {date}
          </span>

          <span>
            <MapPin size={13} />
            {location}
          </span>

        </div>


        <div className="eventflow-event-numbers">

          <div>
            <strong>{tickets}</strong>
            <span>Tickets Sold</span>
          </div>

          <div>
            <strong>{attendees}</strong>
            <span>Attendees</span>
          </div>

        </div>

      </div>

    </div>
  );
}


/* Ticket row */

function TicketRow({
  name,
  price,
  sold,
  total,
  color,
}) {
  const percentage =
    (Number(sold.replace(",", "")) /
      Number(total.replace(",", ""))) *
    100;

  return (
    <div className="eventflow-ticket-row">

      <div className={`eventflow-ticket-icon ${color}`}>
        <Ticket size={16} />
      </div>

      <div className="eventflow-ticket-info">

        <div className="eventflow-ticket-name">
          <strong>{name}</strong>
          <span>{price}</span>
        </div>

        <div className="eventflow-ticket-progress">
          <span style={{ width: `${percentage}%` }} />
        </div>

        <small>
          {sold} sold of {total}
        </small>

      </div>

    </div>
  );
}


export default EventFlowManagement;