function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#020817] py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT SIDE */}

          <div className="text-center lg:text-left">

            <p className="mb-4 text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[5px] text-cyan-400">
              Start a Project
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-black
                leading-tight
              "
            >
              Your Vision.
              <br />

              <span className="text-cyan-400">
                Our Engineering.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                mx-auto
                lg:mx-0
                text-base
                sm:text-lg
                leading-7
                sm:leading-8
                text-gray-400
              "
            >
              Tell us about your idea, business challenge,
              or digital transformation initiative.
              We'll help you design and build a scalable solution.
            </p>

            <div className="mt-10 space-y-4 text-left inline-block">

              {[
                "Enterprise Software Development",
                "AI & Automation Solutions",
                "Cloud Infrastructure & DevOps",
                "Data Analytics Platforms",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />

                  <span className="text-sm sm:text-base">
                    {item}
                  </span>
                </div>

              ))}

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-5
              sm:p-8
            "
          >

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111827]
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-cyan-400
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111827]
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-cyan-400
                "
              />

              <input
                type="text"
                placeholder="Company"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111827]
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-cyan-400
                "
              />

              <select
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111827]
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-cyan-400
                "
              >
                <option>Project Type</option>
                <option>AI Solution</option>
                <option>Software Development</option>
                <option>Cloud Infrastructure</option>
                <option>Data Analytics</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-[#111827]
                  px-5
                  py-4
                  outline-none
                  transition
                  focus:border-cyan-400
                "
              />

              <button
                type="button"
                className="
                  w-full
                  rounded-xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-600
                  py-4
                  font-semibold
                  transition-all
                  hover:scale-[1.02]
                "
              >
                Submit Inquiry
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactSection;