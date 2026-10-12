import { useState } from "react";

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const contacts = [
    {
      name: "Thejitha",
      number: "+94 71 062 4499",
      tel: "tel:+94710624499",
      whatsapp: "https://wa.me/94710624499",
    },
    {
      name: "Shehan",
      number: "+94 71 247 0327",
      tel: "tel:+94712470327",
      whatsapp: "https://wa.me/94712470327",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#020817] py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* LEFT SIDE */}

          <div className="text-center lg:text-left">
            <p className="mb-4 text-xs uppercase tracking-[3px] text-cyan-400 sm:text-sm sm:tracking-[5px]">
              Start a Project
            </p>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Your Vision.
              <br />
              <span className="text-cyan-400">
                Our Engineering.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8 lg:mx-0">
              Tell us about your idea, business challenge,
              or digital transformation initiative.
              We'll help you design and build a scalable solution.
            </p>

            {/* SERVICES */}

            <div className="mx-auto mt-10 inline-block space-y-4 text-left lg:mx-0">
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

            {/* CONTACT DETAILS */}

            <div className="mx-auto mt-10 max-w-md text-left lg:mx-0">
              <h3 className="mb-5 text-xl font-bold text-white">
                Contact Us
              </h3>

              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div
                    key={contact.number}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-4
                      sm:p-5
                    "
                  >
                    <p className="mb-2 text-sm font-semibold text-white">
                      {contact.name}
                    </p>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                      {/* PHONE */}

                      <a
                        href={contact.tel}
                        className="
                          text-sm
                          text-gray-300
                          transition
                          hover:text-cyan-400
                          sm:text-base
                        "
                      >
                        📞 {contact.number}
                      </a>

                      {/* WHATSAPP */}

                      <a
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          rounded-lg
                          border
                          border-cyan-400/20
                          bg-cyan-400/10
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-cyan-400
                          transition
                          hover:bg-cyan-400/20
                        "
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - INQUIRY FORM */}

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
            <form
              action="https://formsubmit.co/info@kyntri.net"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-5"
            >

              {/* FormSubmit settings */}

              <input
                type="hidden"
                name="_subject"
                value="New Customer Inquiry - Kyntri"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <input
                type="hidden"
                name="_template"
                value="table"
              />

              {/* NAME */}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
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

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
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

              {/* COMPANY */}

              <input
                type="text"
                name="company"
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

              {/* PROJECT TYPE */}

              <select
                name="project_type"
                defaultValue="Project Type"
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
                <option value="Project Type">
                  Project Type
                </option>

                <option value="AI Solution">
                  AI Solution
                </option>

                <option value="Software Development">
                  Software Development
                </option>

                <option value="Cloud Infrastructure">
                  Cloud Infrastructure
                </option>

                <option value="Data Analytics">
                  Data Analytics
                </option>
              </select>

              {/* MESSAGE */}

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                required
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

              {/* SUBMIT */}

              <button
                type="submit"
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

              {submitted && (
                <p className="text-center text-sm text-cyan-400">
                  Sending your inquiry to Kyntri...
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;