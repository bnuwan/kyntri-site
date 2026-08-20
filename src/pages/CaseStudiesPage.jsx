import { ArrowUpRight, Building2 } from "lucide-react";

const caseStudies = [
  {
    category: "AUTOMOTIVE",
    title: "AutoGarage",
    description:
      "A modern garage management platform designed to streamline vehicle servicing, customer management, inventory, and daily operations.",
    technologies: ["React", "Node.js", "MongoDB", "Cloud"],
  },
  {
    category: "EVENT MANAGEMENT",
    title: "EventFlow",
    description:
      "A digital event management platform that helps teams organize events, manage workflows, coordinate operations, and deliver better experiences.",
    technologies: ["React", "Node.js", "Cloud", "Automation"],
  },
  {
    category: "FITNESS",
    title: "Liftly",
    description:
      "An intelligent fitness platform that helps gyms manage members, bookings, attendance, subscriptions, and business operations.",
    technologies: ["React", "AI", "Cloud", "Analytics"],
  },
];

function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">

      {/* NAVBAR */}

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#020817]/75 backdrop-blur-2xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

          <a
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/src/assets/kyntri_logo.png"
              alt="Kyntri"
              className="h-10 w-10 object-contain"
            />

            <div>
              <h1 className="text-lg font-bold tracking-[3px]">
                KYNTRI
              </h1>

              <p className="text-[7px] uppercase tracking-[3px] text-gray-500">
                Technology Solutions
              </p>
            </div>
          </a>

          <a
            href="/"
            className="
              rounded-full
              border
              border-white/10
              px-5
              py-2.5
              text-sm
              text-gray-300
              transition
              hover:border-cyan-400
              hover:text-cyan-400
            "
          >
            Back to Home
          </a>

        </div>

      </nav>


      {/* HERO */}

      <section className="relative overflow-hidden px-5 pb-20 pt-40 sm:px-8 lg:pb-28">

        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
            Case Studies
          </p>

          <h1
            className="
              max-w-5xl
              text-5xl
              font-black
              leading-[0.95]
              sm:text-6xl
              lg:text-8xl
            "
          >
            Technology built
            <br />

            <span className="text-cyan-400">
              for real-world impact.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Explore how Kyntri platforms and engineering solutions
            help businesses modernize operations, automate workflows,
            and build better digital experiences.
          </p>

        </div>

      </section>


      {/* CASE STUDIES */}

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {caseStudies.map((study) => (

              <article
                key={study.title}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400/30
                  hover:bg-white/[0.05]
                "
              >

                {/* VISUAL */}

                <div
                  className="
                    relative
                    flex
                    h-56
                    items-center
                    justify-center
                    overflow-hidden
                    bg-gradient-to-br
                    from-cyan-500/10
                    via-blue-500/5
                    to-violet-500/10
                  "
                >

                  <div className="absolute h-40 w-40 rounded-full bg-cyan-400/10 blur-[80px]" />

                  <Building2
                    size={60}
                    strokeWidth={1}
                    className="
                      relative
                      text-cyan-400/40
                      transition
                      duration-300
                      group-hover:scale-110
                      group-hover:text-cyan-400/70
                    "
                  />

                </div>


                {/* CONTENT */}

                <div className="p-7">

                  <span className="text-[9px] font-semibold tracking-[3px] text-cyan-400">
                    {study.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold">
                    {study.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {study.description}
                  </p>


                  {/* TECHNOLOGIES */}

                  <div className="mt-6 flex flex-wrap gap-2">

                    {study.technologies.map((technology) => (

                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-3
                          py-1.5
                          text-[10px]
                          text-gray-400
                        "
                      >
                        {technology}
                      </span>

                    ))}

                  </div>


                  {/* LINK */}

                  <a
                    href={
                      study.title === "AutoGarage"
                        ? "/garage"
                        : study.title === "EventFlow"
                        ? "/eventflow"
                        : "/liftly"
                    }
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-white
                      transition
                      hover:text-cyan-400
                    "
                  >
                    Explore Platform

                    <ArrowUpRight
                      size={16}
                      className="
                        transition
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />

                  </a>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="border-t border-white/10 bg-[#030b18] px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[4px] text-cyan-400">
            Your Project
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Ready to build something meaningful?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Tell us about your challenge and let's design
            the right technology solution for your business.
          </p>

          <a
            href="/#contact"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-600
              px-7
              py-3.5
              font-semibold
              transition
              hover:scale-105
            "
          >
            Start a Project
            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <span>
            © 2026 Kyntri Technology Solutions. All rights reserved.
          </span>

          <a
            href="/"
            className="transition hover:text-cyan-400"
          >
            Back to Kyntri
          </a>

        </div>

      </footer>

    </div>
  );
}

export default CaseStudiesPage;