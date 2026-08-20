import GymCanvas from "./GymCanvas";

function LiftlySection() {
  return (
    <section
      id="platforms"
      className="relative overflow-hidden bg-[#020817] py-16 sm:py-20 lg:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* LEFT */}

          <div className="text-center lg:text-left">

            <p className="mb-5 text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] text-cyan-400">
              Featured Platform
            </p>

            <h2
              className="
                font-black
                leading-tight
                text-4xl
                sm:text-5xl
                lg:text-7xl
              "
            >
              THE ALL-IN-ONE

              <br />

              <span className="text-cyan-400">
                PLATFORM
              </span>

              <br />

              FOR YOUR GYM
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-base
                sm:text-lg
                leading-7
                sm:leading-8
                text-gray-400
                lg:mx-0
              "
            >
              Streamline operations, engage members,
              manage subscriptions, and grow your fitness
              business from one intelligent platform.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">

              {[
                "Members",
                "Bookings",
                "Revenue",
                "Attendance",
              ].map((item) => (

                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10
                    px-4
                    py-2
                    text-xs
                    sm:text-sm
                  "
                >
                  {item}
                </span>

              ))}

            </div>

          </div>


          {/* RIGHT */}

          <div
            className="
              relative
              flex
              h-[340px]
              sm:h-[450px]
              lg:h-[720px]
              items-center
              justify-center
            "
          >

            <div
              className="
                absolute
                h-[220px]
                w-[220px]
                sm:h-[350px]
                sm:w-[350px]
                lg:h-[500px]
                lg:w-[500px]
                rounded-full
                bg-cyan-500/20
                blur-[120px]
              "
            />

            <div className="relative h-full w-full">
              <GymCanvas />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LiftlySection;