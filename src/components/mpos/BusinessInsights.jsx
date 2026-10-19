import DashboardCards from "./DashboardCards";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Boxes,
  BarChart3,
} from "lucide-react";
const features = [
  {
    icon: TrendingUp,
    title: "Live Sales Analytics",
    description: "Monitor sales performance in real time across all outlets.",
  },
  {
    icon: Boxes,
    title: "Inventory Monitoring",
    description: "Track stock levels and receive instant low-stock alerts.",
  },
  {
    icon: BarChart3,
    title: "Business Reports",
    description: "Generate detailed revenue and profitability reports instantly.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Receive intelligent suggestions to improve business growth.",
  },
];

function BusinessInsights() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-20 lg:py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[170px]" />

      <div className="relative mx-auto grid max-w-[1450px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[4px] text-cyan-400">

            <Sparkles size={14} />

            Business Insights

          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white lg:text-5xl">

            Real-Time Business
            <br />

            Intelligence

          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">

            Make better business decisions using intelligent analytics,
            real-time sales tracking, inventory monitoring and powerful
            reporting — all from one modern dashboard.

          </p>

          {/* Feature List */}

          <div className="mt-10 grid gap-5">

            {features.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#0B1120]
                    p-5
                    transition-all
                    duration-300
                    hover:border-cyan-500/30
                    hover:bg-[#101826]
                  "
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">

                    <Icon
                      className="text-cyan-400"
                      size={22}
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold text-white">

                      {item.title}

                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-400">

                      {item.description}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

          {/* CTA */}

          <button
            className="
              group
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >

            Explore Analytics

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />

          </button>

        </div>
                {/* RIGHT */}

      {/* RIGHT */}

<div className="flex justify-center lg:justify-end">

    <DashboardCards />

</div> 

      </div>

    </section>
  );
}

export default BusinessInsights;