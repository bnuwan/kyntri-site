import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "We design and build scalable software systems that solve real business problems and remain maintainable as your organization grows.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "We combine AI with intelligent automation to reduce repetitive work, improve workflows, and create smarter business operations.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "We build secure and reliable cloud infrastructure with modern deployment and DevOps practices.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Engineering",
    description:
      "Security, reliability, performance, and maintainability are considered throughout the engineering lifecycle.",
  },
];

const values = [
  {
    number: "01",
    title: "Engineering First",
    description:
      "We focus on practical engineering decisions that create reliable and maintainable technology.",
  },
  {
    number: "02",
    title: "Business Driven",
    description:
      "Technology should solve a real business problem and create measurable value.",
  },
  {
    number: "03",
    title: "Built to Scale",
    description:
      "Our solutions are designed with future growth, performance, and flexibility in mind.",
  },
  {
    number: "04",
    title: "Long-Term Thinking",
    description:
      "We build solutions that can evolve with changing business and technology requirements.",
  },
];

function AboutPage() {
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
            About Kyntri
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
            Engineering technology
            <br />

            <span className="text-cyan-400">
              with purpose.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Kyntri is a technology solutions company focused on
            software engineering, AI, automation, cloud infrastructure,
            and modern digital platforms.
          </p>

        </div>

      </section>


      {/* =================================================
          STORY
      ================================================= */}

      <section className="border-y border-white/10 bg-[#030b18] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
              Our Approach
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Turning complex challenges into
              <span className="text-cyan-400">
                {" "}simple technology.
              </span>
            </h2>

          </div>

          <div className="space-y-6 text-base leading-8 text-gray-400 sm:text-lg">

            <p>
              Modern businesses need technology that is reliable,
              adaptable, and capable of supporting continuous growth.
            </p>

            <p>
              At Kyntri, we combine engineering expertise with
              practical business thinking to create solutions that
              are designed around real-world requirements.
            </p>

            <p>
              From custom software and AI-powered automation to
              cloud infrastructure and digital platforms, our goal
              is to make technology useful, scalable, and easier
              to operate.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          CAPABILITIES
      ================================================= */}

      <section className="px-5 py-20 sm:px-8 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 lg:mb-20">

            <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
              What We Bring
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Technology expertise across
              <span className="text-cyan-400">
                {" "}the full stack.
              </span>
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {capabilities.map((item) => {

              const Icon = item.icon;

              return (
                <article
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

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =================================================
          VALUES
      ================================================= */}

      <section className="border-y border-white/10 bg-[#030b18] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
              Our Principles
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              How we build.
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {values.map((value) => (

              <div
                key={value.number}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                "
              >

                <div className="text-4xl font-black text-cyan-400/30">
                  {value.number}
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {value.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <Rocket
              size={28}
              className="text-cyan-400"
            />
          </div>

          <h2 className="mt-7 text-4xl font-bold sm:text-5xl">
            Let's build what's next.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Have a business challenge, product idea, or
            digital transformation initiative? Let's talk.
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

export default AboutPage;