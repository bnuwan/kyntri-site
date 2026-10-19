import {
  ClipboardList,
  UserRound,
  Car,
  Wrench,
  Package,
  CheckCircle2,
  Clock3,
  ArrowRight,
} from "lucide-react";

function GarageOperations() {
  const jobs = [
    {
      vehicle: "WP CAB-4521",
      customer: "Kasun Perera",
      service: "Full Engine Service",
      technician: "Nimal",
      status: "In Progress",
      statusClass: "progress",
      time: "10:30 AM",
      iconClass: "cyan",
    },
    {
      vehicle: "CAA-7812",
      customer: "Amal Fernando",
      service: "Brake Replacement",
      technician: "Saman",
      status: "Ready",
      statusClass: "ready",
      time: "11:15 AM",
      iconClass: "purple",
    },
    {
      vehicle: "KBX-2345",
      customer: "Dilan Silva",
      service: "Oil Change",
      technician: "Ruwan",
      status: "Waiting",
      statusClass: "waiting",
      time: "12:00 PM",
      iconClass: "green",
    },
    {
      vehicle: "CAA-9123",
      customer: "Tharindu Jay",
      service: "AC Repair",
      technician: "Chamath",
      status: "In Progress",
      statusClass: "progress",
      time: "01:30 PM",
      iconClass: "orange",
    },
  ];

  return (
    <section
      id="garage-operations"
      className="garage-operations-section"
    >
      <div className="garage-container">

        {/* SECTION HEADER */}

        <div className="garage-operations-heading">

          <div>
            <span className="garage-eyebrow">
              SMART OPERATIONS
            </span>

            <h2>
              Keep every
              <span>job moving.</span>
            </h2>
          </div>

          <p>
            From the moment a vehicle enters your garage
            to the final payment, manage every step with
            a clear and connected workflow.
          </p>

        </div>


        {/* OPERATIONS WORKSPACE */}

        <div className="garage-operations-workspace">

          {/* SIDEBAR */}

          <aside className="garage-operations-sidebar">

            <div className="garage-sidebar-brand">

              <div>
                G
              </div>

              <strong>
                GarageFlow
              </strong>

            </div>


            <nav>

              <a className="active">
                <ClipboardList size={16} />
                Jobs
              </a>

              <a>
                <Car size={16} />
                Vehicles
              </a>

              <a>
                <Wrench size={16} />
                Services
              </a>

              <a>
                <Package size={16} />
                Inventory
              </a>

              <a>
                <UserRound size={16} />
                Customers
              </a>

            </nav>


            <div className="garage-sidebar-status">

              <span />

              System Online

            </div>

          </aside>


          {/* MAIN CONTENT */}

          <div className="garage-operations-content">

            {/* TOPBAR */}

            <div className="garage-operations-topbar">

              <div>
                <span>
                  SERVICE WORKSPACE
                </span>

                <h3>
                  Today's Service Jobs
                </h3>
              </div>


              <button className="garage-new-job">

                <span>
                  +
                </span>

                New Job

              </button>

            </div>


            {/* FILTERS */}

            <div className="garage-operation-filters">

              <div className="garage-operation-search">
                Search vehicle, customer or job...
              </div>

              <button className="active">
                All Jobs
              </button>

              <button>
                In Progress
              </button>

              <button>
                Ready
              </button>

            </div>


            {/* SUMMARY */}

            <div className="garage-operation-summary">

              <div>
                <span>
                  TODAY'S JOBS
                </span>

                <strong>
                  24
                </strong>
              </div>

              <div>
                <span>
                  IN PROGRESS
                </span>

                <strong>
                  8
                </strong>
              </div>

              <div>
                <span>
                  READY
                </span>

                <strong>
                  6
                </strong>
              </div>

              <div>
                <span>
                  COMPLETED
                </span>

                <strong>
                  10
                </strong>
              </div>

            </div>


            {/* JOB LIST */}

            <div className="garage-job-list">

              <div className="garage-job-list-header">

                <span>
                  VEHICLE
                </span>

                <span>
                  SERVICE
                </span>

                <span>
                  TECHNICIAN
                </span>

                <span>
                  STATUS
                </span>

              </div>


              {jobs.map((job) => (
                <div
                  key={job.vehicle}
                  className="garage-operation-job"
                >

                  {/* VEHICLE */}

                  <div className="garage-operation-vehicle">

                    <div
                      className={`garage-operation-car ${job.iconClass}`}
                    >
                      <Car size={17} />
                    </div>

                    <div>
                      <strong>
                        {job.vehicle}
                      </strong>

                      <span>
                        {job.customer}
                      </span>
                    </div>

                  </div>


                  {/* SERVICE */}

                  <div className="garage-operation-service">

                    <strong>
                      {job.service}
                    </strong>

                    <span>
                      {job.time}
                    </span>

                  </div>


                  {/* TECHNICIAN */}

                  <div className="garage-operation-technician">

                    <div>
                      {job.technician
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <span>
                      {job.technician}
                    </span>

                  </div>


                  {/* STATUS */}

                  <div
                    className={`garage-operation-status ${job.statusClass}`}
                  >

                    {job.statusClass === "progress" && (
                      <Clock3 size={12} />
                    )}

                    {job.statusClass === "ready" && (
                      <CheckCircle2 size={12} />
                    )}

                    {job.statusClass === "waiting" && (
                      <Clock3 size={12} />
                    )}

                    {job.status}

                  </div>


                  <ArrowRight
                    size={15}
                    className="garage-operation-arrow"
                  />

                </div>
              ))}

            </div>


            {/* BOTTOM STATS */}

            <div className="garage-operation-bottom">

              <div className="garage-operation-progress">

                <div>

                  <span>
                    DAILY COMPLETION
                  </span>

                  <strong>
                    81.7%
                  </strong>

                </div>

                <div className="garage-operation-progress-bar">
                  <span />
                </div>

                <small>
                  10 of 12 scheduled jobs completed
                </small>

              </div>


              <div className="garage-operation-technicians">

                <span>
                  ACTIVE TECHNICIANS
                </span>

                <div className="garage-tech-stack">

                  <div>NK</div>
                  <div>SM</div>
                  <div>RW</div>
                  <div>CJ</div>
                  <span>
                    +4
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* WORKFLOW STEPS */}

        <div className="garage-workflow">

          <div className="garage-workflow-step">

            <div className="garage-workflow-number">
              01
            </div>

            <div>
              <strong>
                Vehicle Intake
              </strong>

              <span>
                Register vehicle and customer details.
              </span>
            </div>

          </div>


          <div className="garage-workflow-line" />


          <div className="garage-workflow-step">

            <div className="garage-workflow-number">
              02
            </div>

            <div>
              <strong>
                Assign Job
              </strong>

              <span>
                Assign service and technician.
              </span>
            </div>

          </div>


          <div className="garage-workflow-line" />


          <div className="garage-workflow-step">

            <div className="garage-workflow-number">
              03
            </div>

            <div>
              <strong>
                Complete Service
              </strong>

              <span>
                Track progress and parts used.
              </span>
            </div>

          </div>


          <div className="garage-workflow-line" />


          <div className="garage-workflow-step">

            <div className="garage-workflow-number">
              04
            </div>

            <div>
              <strong>
                Bill & Deliver
              </strong>

              <span>
                Generate invoice and close the job.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GarageOperations;