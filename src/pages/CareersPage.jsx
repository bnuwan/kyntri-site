import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Cloud,
  Users,
} from "lucide-react";

const opportunities = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Build modern web applications, APIs, platforms, and scalable software systems.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Work on intelligent systems, AI-powered workflows, automation, and emerging technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Design cloud infrastructure, deployment pipelines, and reliable engineering environments.",
  },
  {
    icon: Users,
    title: "Product & Design",
    description:
      "Help transform complex business requirements into simple and effective digital experiences.",
  },
];

const qualities = [
  "Curious and continuous learners",
  "Strong problem solvers",
  "Passionate about technology",
  "Comfortable working collaboratively",
  "Focused on building quality software",
  "Willing to take ownership",
];

function CareersPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">

      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-[#020817]/80 backdrop-blur-2xl">

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


      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative overflow-hidden px-5 pb-20 pt-40 sm:px-8 lg:pb-28">

        <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
            Careers at Kyntri
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
            Build technology
            <br />

            <span className="text-cyan-400">
              that matters.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            We are looking for people who enjoy solving difficult
            problems, learning new technologies, and building
            meaningful software.
          </p>

        </div>

      </section>


      {/* =================================================
          WHY KYNTRI
      ================================================= */}

      <section className="border-y border-white/10 bg-[#030b18] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
              Why Kyntri
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Learn.
              <br />

              Build.
              <br />

              <span className="text-cyan-400">
                Grow.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              At Kyntri, we believe great technology is created
              by people who are curious, responsible, and willing
              to continuously improve.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-400 sm:text-lg">
              You will have opportunities to work with modern
              software engineering, AI, automation, cloud
              infrastructure, and digital platforms.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          OPPORTUNITIES
      ================================================= */}

      <section className="px-5 py-20 sm:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 lg:mb-20">

            <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
              Areas We Work In
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Find your place in
              <span className="text-cyan-400">
                {" "}the team.
              </span>
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {opportunities.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-cyan-400/30
                    hover:bg-white/[0.05]
                  "
                >

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-cyan-400/20
                      bg-cyan-400/10
                    "
                  >
                    <Icon
                      size={22}
                      className="text-cyan-400"
                    />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =================================================
          WHAT WE LOOK FOR
      ================================================= */}

      <section className="border-y border-white/10 bg-[#030b18] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
                Our People
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                What we look for.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
                Skills matter, but mindset matters too. We value
                people who are willing to learn, take ownership,
                and work together to solve meaningful problems.
              </p>

            </div>


            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {qualities.map((quality) => (

                <div
                  key={quality}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-4
                    text-sm
                    text-gray-300
                  "
                >

                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

                  {quality}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          OPEN POSITIONS
      ================================================= */}

      <section className="px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-12">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
              <BriefcaseBusiness
                size={25}
                className="text-cyan-400"
              />
            </div>

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
              Interested in joining Kyntri?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              If you are interested in working with us, send us
              your details and tell us how you can contribute.
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
              Get in Touch
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

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

export default CareersPage;