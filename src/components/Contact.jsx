import { motion } from "framer-motion";

function Contact() {
  const infoCards = [
    {
      label: "Address",
      text: (
        <>
          Jl. Kaliurang No. 88
          <br />
          Sleman, Yogyakarta
        </>
      ),
    },
    {
      label: "Open Daily",
      text: (
        <>
          Monday — Sunday
          <br />
          08:00 AM — 10:00 PM
        </>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#120905]
        px-6
        py-24
        lg:px-16
        lg:py-28
      "
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#D5B893]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#F3E6D4]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[48%_52%] lg:gap-14">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#D5B893] md:w-12" />

              <p className="font-manrope text-[10px] uppercase tracking-[0.28em] text-[#D5B893] md:text-[12px] md:tracking-[0.3em]">
                Location & Contact
              </p>
            </div>

            <h2
              className="
                font-logo
                text-[46px]
                leading-[0.95]
                tracking-[-0.04em]
                text-[#FBF6EE]
                sm:text-[58px]
                md:text-[88px]
                md:leading-[0.9]
              "
            >
              Let’s meet
              <br />
              over coffee.
            </h2>

            <p
              className="
                mt-6
                max-w-[500px]
                font-manrope
                text-[14px]
                leading-8
                text-[#FBF6EE]/65
                md:mt-7
                md:text-[15px]
              "
            >
              Visit Muse & Brew for slow mornings, creative work sessions, and
              warm conversations in a space made to feel inspiring.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-10">
              {infoCards.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 16,
                  }}
                  className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-5
                    shadow-[0_18px_45px_rgba(0,0,0,0.12)]
                    backdrop-blur-xl
                  "
                >
                  <p className="font-manrope text-[10px] uppercase tracking-[0.28em] text-[#D5B893]">
                    {item.label}
                  </p>

                  <p className="mt-3 font-manrope text-[14px] leading-7 text-[#FBF6EE]/72">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  bg-[#D5B893]
                  px-7
                  py-3
                  font-manrope
                  text-sm
                  font-semibold
                  text-[#120905]
                  no-underline
                  shadow-[0_18px_40px_rgba(213,184,147,0.18)]
                  transition
                  hover:bg-[#FBF6EE]
                "
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Directions
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT MAP */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -left-3 -top-3 h-full w-full rounded-[32px] border border-[#D5B893]/25 md:-left-5 md:-top-5 md:rounded-[40px]" />

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.05]
                p-2.5
                shadow-[0_28px_75px_rgba(0,0,0,0.35)]
                md:rounded-[40px]
                md:p-3
                md:shadow-[0_35px_90px_rgba(0,0,0,0.35)]
              "
            >
              <iframe
                title="Muse & Brew Location"
                src="https://maps.google.com/maps?q=yogyakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="
                  h-[330px]
                  w-full
                  rounded-[24px]
                  border-0
                  md:h-[540px]
                  md:rounded-[30px]
                "
              />

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5
                  rounded-[24px]
                  border
                  border-white/15
                  bg-[#120905]/75
                  px-5
                  py-4
                  backdrop-blur-xl
                  md:bottom-7
                  md:left-7
                  md:right-auto
                  md:rounded-[28px]
                  md:px-6
                  md:py-5
                "
              >
                <p className="font-logo text-[26px] leading-none text-[#FBF6EE] md:text-[30px]">
                  Muse & Brew
                </p>

                <p className="mt-2 font-manrope text-[12px] text-[#FBF6EE]/65 md:text-[13px]">
                  Where Ideas Meet Coffee
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;