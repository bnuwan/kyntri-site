import {
  ArrowUpRight,
  BookOpen,
  MessageCircle,
  Mail,
  Wrench,
} from "lucide-react";

const supportOptions = [
  {
    icon: BookOpen,
    title: "Documentation",
    description:
      "Find technical guides, integration information, deployment resources, and platform documentation.",
    href: "/documentation",
    action: "View Documentation",
  },
  {
    icon: MessageCircle,
    title: "Technical Support",
    description:
      "Need help with a Kyntri platform or integration? Our team can help you identify the right solution.",
    href: "/#contact",
    action: "Contact Support",
  },
  {
    icon: Mail,
    title: "General Enquiries",
    description:
      "For general questions, partnerships, business enquiries, or project discussions, get in touch with us.",
    href: "/#contact",
    action: "Contact Kyntri",
  },
  {
    icon: Wrench,
    title: "Troubleshooting",
    description:
      "Explore common implementation and integration issues and find practical ways to resolve them.",
    href: "/documentation",
    action: "View Guides",
  },
];

const faqItems = [
  {
    question: "How can I get support?",
    answer:
      "Use the Contact Kyntri option to send your enquiry. Our team can help with platform, integration, and project-related questions.",
  },
  {
    question: "Can Kyntri help with custom software?",
    answer:
      "Yes. Kyntri provides software engineering, AI, automation, cloud, and data solutions based on business requirements.",
  },
  {
    question: "Can you help with cloud infrastructure?",
    answer:
      "Yes. Cloud architecture, infrastructure, deployment, and DevOps are part of our technology services.",
  },
];

function SupportPage() {
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
            Support Center
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
            We're here to
            <br />

            <span className="text-cyan-400">
              help you move forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Find the right resources, get technical assistance,
            or contact our team about your Kyntri project.
          </p>

        </div>

      </section>


      {/* =================================================
          SUPPORT OPTIONS
      ================================================= */}

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

            {supportOptions.map((item) => {

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

                  <a
                    href={item.href}
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
                    {item.action}

                    <ArrowUpRight
                      size={16}
                      className="
                        transition
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                      "
                    />
                  </a>

                </article>
              );
            })}

          </div>

        </div>

      </section>


      {/* =================================================
          FAQ
      ================================================= */}

      <section className="border-y border-white/10 bg-[#030b18] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl">

          <div className="mb-12 text-center">

            <p className="text-xs uppercase tracking-[4px] text-cyan-400">
              Common Questions
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Frequently Asked Questions
            </h2>

          </div>


          <div className="space-y-4">

            {faqItems.map((item) => (

              <details
                key={item.question}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  transition
                  hover:border-cyan-400/20
                "
              >

                <summary
                  className="
                    cursor-pointer
                    list-none
                    text-base
                    font-semibold
                    text-white
                    sm:text-lg
                  "
                >
                  {item.question}
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
                  {item.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[4px] text-cyan-400">
            Need More Help?
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Talk to our team.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Tell us what you're trying to build or what you're
            having trouble with, and we'll help you find the
            right next step.
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

export default SupportPage;