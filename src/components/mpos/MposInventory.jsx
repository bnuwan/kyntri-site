import {
  Package,
  AlertTriangle,
  Truck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const inventory = [
  {
    title: "Products",
    value: "12,548",
    icon: Package,
    color: "text-cyan-400",
  },
  {
    title: "Low Stock",
    value: "23",
    icon: AlertTriangle,
    color: "text-yellow-400",
  },
  {
    title: "Suppliers",
    value: "56",
    icon: Truck,
    color: "text-green-400",
  },
  {
    title: "Categories",
    value: "18",
    icon: BarChart3,
    color: "text-blue-400",
  },
];

function MposInventory() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-16 lg:py-20">

      {/* Glow */}
      <div className="absolute -left-20 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-[1450px] px-6 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-16">

          {/* LEFT */}

          <div>

            <span className="text-cyan-400 uppercase tracking-[5px] text-sm">

              Inventory

            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-white lg:text-5xl">

              Inventory Management
              <br />
              Made Simple

            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">

              Track stock levels, suppliers, purchase orders,
              product performance and warehouse activities
              from one powerful dashboard.

            </p>

            <button
              className="
              mt-8
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
              hover:scale-105
              transition
              "
            >
              Explore Inventory

              <ArrowRight size={18} />
            </button>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-5">

            {inventory.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0B1120]
                  p-7
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-500/30
                  hover:shadow-[0_20px_60px_rgba(34,211,238,.15)]
                  "
                >

                  <div
                    className="
                    h-14
                    w-14
                    rounded-2xl
                    bg-white/5
                    flex
                    items-center
                    justify-center
                    "
                  >
                    <Icon
                      className={`h-7 w-7 ${item.color}`}
                    />
                  </div>

                  <h3 className="mt-6 text-3xl font-bold text-white lg:text-4xl">

                    {item.value}

                  </h3>

                  <p className="mt-2 text-gray-400">

                    {item.title}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default MposInventory;