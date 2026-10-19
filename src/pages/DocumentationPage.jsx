import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const documentation = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description:
      "Learn the basics of Kyntri platforms, integrations, and recommended implementation workflows.",
  },
  {
    icon: Code2,
    title: "API & Integrations",
    description:
      "Understand how your applications and business systems can connect with Kyntri services.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Guidance for deploying scalable, secure, and reliable cloud infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Learn about authentication, access control, data protection, and secure engineering practices.",
  },
];

const quickLinks = [
  "Platform Guides",
  "API Reference",
  "Integration Guides",
  "Deployment",
  "Security",
  "Troubleshooting",
];

function DocumentationPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white">

      {/* NAVBAR */}

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


      {/* HERO */}

      <section className="relative overflow-hidden px-5 pb-20 pt-40 sm:px-8 lg:pb-28">

        <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-5 text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
            Documentation
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
            Build with
            <br />

            <span className="text-cyan-400">
              confidence.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Technical guides, integration resources, deployment
            information, and platform documentation for building
            reliable solutions with Kyntri.
          </p>

        </div>

      </section>


      {/* DOCUMENTATION CARDS */}

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {documentation.map((item) => {

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

                  <h2 className="mt-7 text-2xl font-bold">
                    {item.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>

                  <button
                    type="button"
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
                    Explore Guide

                    <ArrowUpRight
                      size={16}
                      className="
                        transition
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </button>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* QUICK LINKS */}

      <section className="border-y border-white/10 bg-[#030b18] px-5 py-20 sm:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

            <div>

              <p className="text-xs uppercase tracking-[4px] text-cyan-400">
                Resources
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Explore our guides.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
                Find the technical information you need to
                understand, integrate, deploy, and operate
                modern Kyntri solutions.
              </p>

            </div>


            <div className="lg:col-span-2">

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {quickLinks.map((item) => (

                  <button
                    key={item}
                    type="button"
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-4
                      text-left
                      text-sm
                      text-gray-300
                      transition
                      hover:border-cyan-400/30
                      hover:text-cyan-400
                    "
                  >
                    {item}

                    <ArrowUpRight size={15} />

                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[4px] text-cyan-400">
            Need Help?
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Can't find what you're looking for?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Our team can help you understand the right
            architecture, integration, and implementation approach.
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
            Contact Kyntri
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

export default DocumentationPage;