import {
  Activity,
  ShoppingBag,
  Users,
  Truck,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    icon: ShoppingBag,
    title: "New Order",
    subtitle: "Invoice #10452",
    status: "Completed",
    color: "text-green-400",
  },
  {
    icon: Truck,
    title: "Delivery",
    subtitle: "Order #10441",
    status: "On The Way",
    color: "text-cyan-400",
  },
  {
    icon: Users,
    title: "New Customer",
    subtitle: "Registered Today",
    status: "Active",
    color: "text-blue-400",
  },
  {
    icon: Clock,
    title: "Pending Payment",
    subtitle: "Invoice #10438",
    status: "Pending",
    color: "text-yellow-400",
  },
];

function MposOperations() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32">

      {/* Glow */}
      <div className="absolute left-0 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-8">

        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr] items-center">

          {/* LEFT */}

          <div>

            <span className="text-cyan-400 uppercase tracking-[5px] text-sm">

              Operations

            </span>

            <h2 className="mt-5 text-5xl font-black text-white leading-tight">

              Manage Every
              <br />
              Business Operation
              <br />
              In One Place

            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-400">

              Keep your entire business connected with
              live activity tracking, order management,
              inventory synchronization and customer
              operations.

            </p>

            <div className="mt-12 flex flex-wrap gap-6">

              <div>

                <h3 className="text-4xl font-bold text-white">

                  99.9%

                </h3>

                <p className="text-gray-400">

                  System Uptime

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-white">

                  24/7

                </h3>

                <p className="text-gray-400">

                  Live Monitoring

                </p>

              </div>

            </div>

            <button
              className="
              mt-12
              flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-8
              py-4
              font-semibold
              transition
              hover:scale-105
              "
            >
              Explore Dashboard

              <ArrowRight size={18} />

            </button>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-white/10 bg-[#0B1120] p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Activity className="text-cyan-400" />

                <h3 className="text-xl font-bold text-white">

                  Live Activity

                </h3>

              </div>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400 border border-green-500/20">

                LIVE

              </span>

            </div>

            <div className="mt-8 space-y-5">

              {activities.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:border-cyan-500/20"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

                        <Icon className={`h-6 w-6 ${item.color}`} />

                      </div>

                      <div>

                        <h4 className="font-semibold text-white">

                          {item.title}

                        </h4>

                        <p className="text-sm text-gray-400">

                          {item.subtitle}

                        </p>

                      </div>

                    </div>

                    <div className="flex items-center gap-2">

                      <CheckCircle2 className={`h-5 w-5 ${item.color}`} />

                      <span className={`${item.color} text-sm`}>

                        {item.status}

                      </span>

                    </div>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MposOperations;