import { ArrowUpRight, CalendarDays } from "lucide-react";

const posts = [
  {
    category: "AI & AUTOMATION",
    date: "Coming Soon",
    title: "How AI Is Transforming Modern Business Operations",
    description:
      "Explore how intelligent automation can reduce repetitive work, improve decision making, and help teams scale faster.",
  },
  {
    category: "CLOUD & DEVOPS",
    date: "Coming Soon",
    title: "Building Scalable Cloud Infrastructure",
    description:
      "A practical look at designing secure, reliable, and scalable cloud infrastructure for growing businesses.",
  },
  {
    category: "SOFTWARE ENGINEERING",
    date: "Coming Soon",
    title: "Engineering Software That Scales With Your Business",
    description:
      "Learn how thoughtful architecture and modern engineering practices create software that remains maintainable as businesses grow.",
  },
];

function BlogPage() {
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
            Kyntri Insights
          </p>

          <h1
            className="
              max-w-4xl
              text-5xl
              font-black
              leading-[0.95]
              sm:text-6xl
              lg:text-8xl
            "
          >
            Ideas that move
            <br />

            <span className="text-cyan-400">
              technology forward.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Insights, engineering perspectives, and practical ideas
            from the world of AI, cloud, automation, and software
            engineering.
          </p>

        </div>

      </section>


      {/* BLOG POSTS */}

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

            {posts.map((post) => (

              <article
                key={post.title}
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

                <div className="mb-8 flex items-center justify-between">

                  <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-[9px] font-semibold tracking-[2px] text-cyan-400">
                    {post.category}
                  </span>

                  <span className="flex items-center gap-2 text-xs text-gray-500">
                    <CalendarDays size={13} />
                    {post.date}
                  </span>

                </div>

                <h2 className="text-2xl font-bold leading-tight transition group-hover:text-cyan-400">
                  {post.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {post.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-gray-300">
                  Read Article
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
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
            Build With Kyntri
          </p>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Have an idea worth building?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Let's turn your business challenge into a scalable
            technology solution.
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

export default BlogPage;