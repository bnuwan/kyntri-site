import { ArrowUpRight, Plus } from "lucide-react";

const faqCategories = [
  {
    category: "GENERAL",
    questions: [
      {
        question: "What does Kyntri do?",
        answer:
          "Kyntri builds software, AI, automation, cloud infrastructure, and data solutions for modern businesses.",
      },
      {
        question: "What type of businesses do you work with?",
        answer:
          "We work with businesses that need custom software, intelligent automation, cloud solutions, data platforms, or digital transformation support.",
      },
      {
        question: "Can Kyntri build a completely custom solution?",
        answer:
          "Yes. Solutions can be designed around your business requirements, workflows, users, integrations, and technical environment.",
      },
    ],
  },
  {
    category: "PLATFORMS",
    questions: [
      {
        question: "What platforms does Kyntri offer?",
        answer:
          "Kyntri's platform portfolio includes solutions such as mPOS, Liftly, EventFlow, AutoGarage, and AI-focused solutions.",
      },
      {
        question: "Can platforms be customized?",
        answer:
          "Platform capabilities can be adapted and integrated based on business requirements and implementation needs.",
      },
      {
        question: "Can Kyntri integrate with existing systems?",
        answer:
          "Yes. Integration can be designed for existing applications, APIs, databases, cloud services, and business workflows.",
      },
    ],
  },
  {
    category: "ENGINEERING",
    questions: [
      {
        question: "Can you help with cloud infrastructure?",
        answer:
          "Yes. Kyntri works with cloud architecture, infrastructure, deployment, DevOps, scalability, and operational requirements.",
      },
      {
        question: "Do you provide AI and automation solutions?",
        answer:
          "Yes. AI, automation, intelligent workflows, and AI-assisted business processes are part of Kyntri's technology capabilities.",
      },
      {
        question: "How do I start a project?",
        answer:
          "Use the Start a Project or Contact option and tell us about your business challenge, goals, and requirements.",
      },
    ],
  },
];

function FAQPage() {
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
            FAQ
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
            Questions?
            <br />

            <span className="text-cyan-400">
              We've got answers.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Find answers about Kyntri, our platforms,
            technology services, and how we work with businesses.
          </p>

        </div>

      </section>


      {/* =================================================
          FAQ CONTENT
      ================================================= */}

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">

        <div className="mx-auto max-w-5xl">

          <div className="space-y-16">

            {faqCategories.map((category) => (

              <div key={category.category}>

                {/* CATEGORY */}

                <div className="mb-7">

                  <p className="text-xs font-semibold uppercase tracking-[4px] text-cyan-400">
                    {category.category}
                  </p>

                </div>


                {/* QUESTIONS */}

                <div className="space-y-3">

                  {category.questions.map((item) => (

                    <details
                      key={item.question}
                      className="
                        group
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        transition-all
                        duration-300
                        hover:border-cyan-400/20
                      "
                    >

                      <summary
                        className="
                          flex
                          cursor-pointer
                          list-none
                          items-center
                          justify-between
                          gap-5
                          px-5
                          py-5
                          text-sm
                          font-semibold
                          text-white
                          sm:px-7
                          sm:py-6
                          sm:text-base
                        "
                      >

                        <span>
                          {item.question}
                        </span>

                        <span
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            transition
                            duration-300
                            group-open:rotate-45
                          "
                        >
                          <Plus size={16} />
                        </span>

                      </summary>

                      <div className="border-t border-white/10 px-5 pb-6 pt-5 sm:px-7">

                        <p className="max-w-3xl text-sm leading-7 text-gray-400">
                          {item.answer}
                        </p>

                      </div>

                    </details>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="border-t border-white/10 bg-[#030b18] px-5 py-20 sm:px-8 lg:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs uppercase tracking-[4px] text-cyan-400">
            Still Have Questions?
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Let's talk about your project.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            If you can't find the answer you're looking for,
            our team is ready to help.
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

export default FAQPage;