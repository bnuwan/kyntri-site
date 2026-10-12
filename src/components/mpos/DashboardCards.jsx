import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import dashboard1 from "../../assets/dashboard1.png";
import dashboard2 from "../../assets/dashboard2.png";
import dashboard3 from "../../assets/dashboard3.png";
import dashboard4 from "../../assets/dashboard4.png";

const cards = [
  {
    id: 1,
    image: dashboard1,
    title: "Sales Dashboard",
    subtitle: "Live Revenue Analytics",
  },
  {
    id: 2,
    image: dashboard2,
    title: "Inventory Management",
    subtitle: "Real-time Stock Monitoring",
  },
  {
    id: 3,
    image: dashboard3,
    title: "Business Reports",
    subtitle: "Executive Insights",
  },
  {
    id: 4,
    image: dashboard4,
    title: "AI Recommendations",
    subtitle: "Business Intelligence",
  },
];

function DashboardCards() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative flex h-[650px] w-[520px] items-center justify-center">

      {/* Glow */}

      <div className="absolute h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />

      {cards.map((card, index) => {
        const offset = index - active;

        return (
          <motion.div
            key={card.id}
            onClick={() => setActive(index)}
            animate={{
              x: offset * -45,
              rotate: offset * -10,
              scale: offset === 0 ? 1 : 0.9,
              opacity: offset === 0 ? 1 : 0.75,
              zIndex: 50 - Math.abs(offset),
            }}
            transition={{
              duration: 0.55,
              ease: "easeInOut",
            }}
            className="
              absolute
              cursor-pointer
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              bg-[#0B1120]
              shadow-[0_35px_80px_rgba(0,0,0,.45)]
            "
          >
            <div className="relative h-[560px] w-[360px]">

              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover"
              />
                            {/* Glass Overlay */}

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/45
                  to-transparent
                  p-7
                "
              >

                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">

                  Dashboard Preview

                </span>

                <h3 className="mt-4 text-2xl font-bold text-white">

                  {card.title}

                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300">

                  {card.subtitle}

                </p>

                {active === index && (

                  <button
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-cyan-500
                      px-5
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-cyan-600
                    "
                  >

                    Explore Dashboard

                    <ArrowRight size={18} />

                  </button>

                )}

              </div>

              {/* Active Border */}

              {active === index && (

                <div
                  className="
                    absolute
                    inset-0
                    rounded-[30px]
                    ring-2
                    ring-cyan-400/60
                    pointer-events-none
                  "
                />

              )}

            </div>

          </motion.div>

        );

      })}

    </div>

  );

}

export default DashboardCards;