function DeliveryJourney() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Needs",
      desc: "We analyze your business challenges, goals, and technical requirements.",
    },
    {
      number: "02",
      title: "Plan Together",
      desc: "Define the roadmap, architecture and delivery strategy.",
    },
    {
      number: "03",
      title: "Build & Craft",
      desc: "Develop scalable, secure and high-performance solutions.",
    },
    {
      number: "04",
      title: "Test & Improve",
      desc: "Validate quality, performance and user experience.",
    },
    {
      number: "05",
      title: "Go Live",
      desc: "Deploy and monitor your solution with confidence.",
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#020817] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="mb-14 text-center lg:mb-20">

          <p className="mb-4 text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[5px] text-cyan-400">
            Process
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Our Delivery Journey
          </h2>

        </div>


        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-5
            gap-6
          "
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                group
                relative
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:bg-white/[0.06]
              "
            >

              <div
                className="
                  mb-4
                  text-4xl
                  sm:text-5xl
                  font-black
                  text-cyan-400/30
                  transition-all
                  group-hover:text-cyan-400/50
                "
              >
                {step.number}
              </div>

              <h3
                className="
                  mb-4
                  text-lg
                  sm:text-xl
                  font-bold
                  leading-snug
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  text-sm
                  sm:text-base
                  leading-7
                  text-gray-400
                "
              >
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DeliveryJourney;
