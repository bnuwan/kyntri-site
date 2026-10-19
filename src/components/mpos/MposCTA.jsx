import {
  ArrowRight,
  PhoneCall,
  Star,
} from "lucide-react";

function MposCTA() {
  return (
    <section className="relative overflow-hidden bg-[#020817] pt-10 pb-20 lg:pt-14 lg:pb-24">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[180px]" />

        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[180px]" />

      </div>

      <div className="relative mx-auto max-w-[1450px] px-8">

        <div
          className="
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#0B1120]
          via-[#101827]
          to-[#071126]
          p-16
          text-center
          shadow-[0_40px_100px_rgba(0,0,0,.45)]
          "
        >

          {/* Badge */}

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs uppercase tracking-[4px] text-cyan-400">

            Ready To Grow?

          </span>

          {/* Heading */}

          <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight text-white lg:text-6xl">

            Transform Your Business
            <br />

            With A Smarter
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">

              {" "}mPOS Platform

            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            Join thousands of businesses using our modern
            mobile POS solution to streamline operations,
            increase revenue and deliver exceptional customer
            experiences.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <button
              className="
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
              transition-all
              duration-300
              hover:scale-105
              "
            >

              Request Free Demo

              <ArrowRight size={18} />

            </button>

            <button
              className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/10
              px-8
              py-4
              transition
              hover:border-cyan-500
              hover:bg-white/5
              "
            >

              <PhoneCall size={18} />

              Contact Sales

            </button>

          </div>

          {/* Bottom Stats */}

          <div className="mt-16 flex flex-wrap justify-center gap-12">

            <div>

              <h3 className="text-4xl font-bold text-white">

                5,000+

              </h3>

              <p className="mt-2 text-gray-400">

                Businesses

              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-white">

                4.9

              </h3>

              <div className="mt-2 flex justify-center gap-1">

                {[1,2,3,4,5].map((i)=>(

                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-white">

                24/7

              </h3>

              <p className="mt-2 text-gray-400">

                Support

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MposCTA;