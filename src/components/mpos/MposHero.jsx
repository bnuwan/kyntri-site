import mposPhone from "../../assets/mpos-phone.png";
import { ArrowRight, Play } from "lucide-react";

function MposHero() {
  return (
    <section className="relative overflow-hidden bg-[#020817] pt-32 pb-14">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-8">

        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[4px] text-cyan-400">

              THE FUTURE OF POINT OF SALE

            </span>

            <h1 className="mt-8 text-[58px] font-black leading-[0.95] tracking-[-2px] text-white lg:text-[74px]">

              Simplify Billing.

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Accelerate

              </span>

              <br />

              Your Business

            </h1>

            <p className="mt-10 max-w-[640px] text-lg leading-9 text-gray-400">

              Transform your business with a modern mobile POS platform that
              combines billing, inventory, customer management and analytics in
              one intelligent application. Fast, reliable and built for modern
              retail.

            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold transition hover:scale-105">

                Request Free Demo

                <ArrowRight size={18} />

              </button>

              <button className="flex items-center gap-2 rounded-xl border border-white/10 px-8 py-4 transition hover:border-cyan-500">

                <Play size={16} />

                Explore Features

              </button>

            </div>

            {/* Stats */}

            <div className="mt-16 flex flex-wrap gap-10">

              <div>

                <h3 className="text-3xl font-bold text-white">

                  5K+

                </h3>

                <p className="text-gray-400">

                  Businesses

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">

                  99.9%

                </h3>

                <p className="text-gray-400">

                  Uptime

                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">

                  24/7

                </h3>

                <p className="text-gray-400">

                  Support

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-end">

            <div className="absolute h-[550px] w-[550px] rounded-full bg-cyan-500/20 blur-[160px]" />

<img
  src={mposPhone}
  alt="mPOS"
  className="
    relative
    z-20
w-[260px]
md:w-[270px]
lg:w-[300px]
xl:w-[330px]
    mx-auto
    drop-shadow-[0_40px_100px_rgba(34,211,238,.35)]
  "
/>

            {/* Floating Card */}

            <div className="absolute left-0 top-16 rounded-2xl border border-white/10 bg-[#0B1120]/90 p-5 backdrop-blur-xl">

              <p className="text-sm text-gray-400">

                Today's Sales

              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">

                LKR 125K

              </h3>

              <span className="text-green-400 text-sm">

                +18% Today

              </span>

            </div>

            <div className="absolute bottom-10 right-0 rounded-2xl border border-white/10 bg-[#0B1120]/90 p-5 backdrop-blur-xl">

              <p className="text-sm text-gray-400">

                Inventory

              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">

                12,450

              </h3>

              <span className="text-cyan-400 text-sm">

                Live Updated

              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default MposHero;