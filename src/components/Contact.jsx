import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#120905]
        px-6
        py-28
        lg:px-16
      "
    >
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#D5B893]/10 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#F3E6D4]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[48%_52%]">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-[#D5B893]" />
              <p className="font-manrope text-[12px] uppercase tracking-[0.3em] text-[#D5B893]">
                Location & Contact
              </p>
            </div>

            <h2 className="font-logo text-[58px] leading-[0.9] tracking-[-0.04em] text-[#FBF6EE] md:text-[88px]">
              Let’s meet
              <br />
              over coffee.
            </h2>

            <p className="mt-7 max-w-[500px] font-manrope text-[15px] leading-8 text-[#FBF6EE]/65">
              Visit Muse & Brew for slow mornings, creative work sessions, and
              warm conversations in a space made to feel inspiring.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5">
                <p className="font-manrope text-[10px] uppercase tracking-[0.28em] text-[#D5B893]">
                  Address
                </p>
                <p className="mt-3 font-manrope text-[14px] leading-7 text-[#FBF6EE]/72">
                  Jl. Kaliurang No. 88
                  <br />
                  Sleman, Yogyakarta
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-5">
                <p className="font-manrope text-[10px] uppercase tracking-[0.28em] text-[#D5B893]">
                  Open Daily
                </p>
                <p className="mt-3 font-manrope text-[14px] leading-7 text-[#FBF6EE]/72">
                  Monday — Sunday
                  <br />
                  08:00 AM — 10:00 PM
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <motion.a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#D5B893] px-7 py-3 font-manrope text-sm font-semibold text-[#120905] no-underline transition hover:bg-[#FBF6EE]"
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
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[40px] border border-[#D5B893]/25" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] p-3 shadow-[0_35px_90px_rgba(0,0,0,0.35)]">
              <iframe
                title="Muse & Brew Location"
                src="https://maps.google.com/maps?q=yogyakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[540px] w-full rounded-[30px]"
              />

              <div className="absolute bottom-7 left-7 rounded-[28px] border border-white/15 bg-[#120905]/75 px-6 py-5 backdrop-blur-xl">
                <p className="font-logo text-[30px] leading-none text-[#FBF6EE]">
                  Muse & Brew
                </p>
                <p className="mt-2 font-manrope text-[13px] text-[#FBF6EE]/65">
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