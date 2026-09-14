import HeroVisual from "./HeroVisual";

function Hero() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#020817] min-h-screen">
      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[160px]" />

        <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      {/* Noise */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:radial-gradient(#fff_1px,transparent_1px)]
          [background-size:28px_28px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pt-24
          pb-20
        "
      >
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/10
                px-5
                py-3
              "
            >
              <span className="h-2 w-2 rounded-full bg-cyan-400" />

              <span className="text-xs uppercase tracking-[3px] text-cyan-300">
                AI & CLOUD SOLUTIONS
              </span>
            </div>


            {/* Heading */}

            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[0.92]
                tracking-tight
                text-white
                sm:text-6xl
                xl:text-7xl
              "
            >
              Engineering
              <br />
              Intelligence For
              <br />
              The Cloud Era
            </h1>


            {/* Description */}

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-slate-400
              "
            >
              We build AI/ML systems, automation pipelines, and cloud
              infrastructure that help ambitious teams ship faster and scale
              without limits.
            </p>


            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              {/* GET STARTED */}

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="
                  rounded-full
                  border
                  border-cyan-500
                  bg-gradient-to-r
                  from-fuchsia-500/20
                  to-cyan-500/20
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:scale-105
                  hover:border-cyan-300
                  cursor-pointer
                "
              >
                Get Started â†’
              </button>


              {/* EXPLORE SERVICES */}

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="
                  rounded-full
                  border
                  border-white/10
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:border-cyan-400
                  hover:text-cyan-300
                  cursor-pointer
                "
              >
                Explore Services
              </button>

            </div>

          </div>


          {/* RIGHT */}

          <HeroVisual />

        </div>
      </div>
    </section>
  );
}

export default Hero;

