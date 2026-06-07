import { motion, useScroll, useTransform } from "framer-motion";
import aboutImage from "../assets/images/about-coffe.png";
import { useRef } from "react";

function About() {
  const aboutRef = useRef(null);

  const features = [
    { title: "Coffee", desc: "Handcrafted drinks made with care." },
    { title: "Creative", desc: "A space built for inspiration and ideas." },
    { title: "Warm", desc: "Cozy atmosphere for meaningful moments." },
  ];

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start center", "end start"],
  });

  const aboutOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.55, 0.8],
    [0, 1, 1, 0]
  );

  const aboutY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.55, 0.8],
    [80, 0, 0, -120]
  );

  const aboutScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.55, 0.8],
    [0.96, 1, 1, 0.94]
  );

  return (
    <motion.section
      ref={aboutRef}
      id="about"
      style={{
        opacity: aboutOpacity,
        y: aboutY,
        scale: aboutScale,
      }}
      className="
        relative
        overflow-hidden
        bg-[#F7EFE3]
        py-24
        md:py-32
      "
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(184,149,106,0.18),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(74,44,42,0.08),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* MOBILE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                mb-10
                overflow-hidden
                rounded-[30px]
                border
                border-white/70
                bg-white/35
                p-2
                shadow-[0_26px_70px_rgba(74,44,42,0.16)]
                backdrop-blur-xl
                lg:hidden
              "
            >
              <div className="relative overflow-hidden rounded-[24px]">
                <img
                  src={aboutImage}
                  alt="Muse & Brew Interior"
                  className="
                    h-[255px]
                    w-full
                    object-cover
                    sm:h-[330px]
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#120905]/55 via-transparent to-transparent" />

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-end
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p className="font-manrope text-[10px] uppercase tracking-[0.3em] text-[#D5B893]">
                      Creative Space
                    </p>

                    <h3 className="mt-1 font-logo text-[28px] leading-none text-[#FBF6EE]">
                      Muse & Brew
                    </h3>
                  </div>

                  <div
                    className="
                      rounded-full
                      bg-[#F7EFE3]/90
                      px-4
                      py-2
                      font-manrope
                      text-[11px]
                      font-semibold
                      text-[#2B1A18]
                    "
                  >
                    Since 2022
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-[#B8956A]" />

              <span
                className="
                  font-manrope
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-[#B8956A]
                  md:text-[12px]
                  md:tracking-[0.3em]
                "
              >
                About Muse & Brew
              </span>
            </div>

            <h2
              className="
                font-logo
                text-[42px]
                leading-[1.02]
                tracking-[-0.045em]
                text-[#1B0F0A]
                sm:text-[48px]
                lg:text-[58px]
                lg:leading-[1]
              "
            >
              A Space To Slow Down,
              <br />
              Create, and Connect.
            </h2>

            <p
              className="
                mt-7
                max-w-[580px]
                font-manrope
                text-[15px]
                leading-8
                text-[#5B4B3E]
                lg:mt-8
                lg:text-[16px]
              "
            >
              Muse & Brew is a creative coffee space designed for thinkers,
              creators, and coffee lovers. More than just a place to enjoy
              coffee, it is a warm environment where ideas flow naturally,
              conversations become meaningful, and every visit feels inspiring.
            </p>

            {/* FEATURES */}
            <div
              className="
                mt-10
                grid
                gap-3
                sm:grid-cols-3
                lg:mt-12
                lg:gap-5
              "
            >
              {features.map((item, index) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -4 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 16,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#B8956A]/18
                    bg-white/45
                    p-5
                    shadow-[0_16px_42px_rgba(74,44,42,0.08)]
                    backdrop-blur-xl
                    transition
                    hover:bg-white/70
                    lg:rounded-none
                    lg:border-0
                    lg:bg-transparent
                    lg:p-0
                    lg:shadow-none
                    lg:backdrop-blur-0
                    lg:hover:bg-transparent
                  "
                >
                  <div className="relative z-10">
                    <p className="hidden">
                      0{index + 1}
                    </p>

                    <h3 className="font-logo text-[24px] text-[#1B0F0A] lg:text-[22px]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#6D5D51]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT - DESKTOP IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative hidden lg:block"
          >
            <div
              className="
                overflow-hidden
                rounded-[32px]
                shadow-[0_30px_60px_rgba(0,0,0,0.12)]
              "
            >
              <img
                src={aboutImage}
                alt="Muse & Brew Interior"
                className="
                  h-[650px]
                  w-full
                  object-cover
                "
              />
            </div>

            <div
              className="
                absolute
                -bottom-8
                -left-8
                rounded-3xl
                bg-white/80
                px-8
                py-6
                backdrop-blur-xl
                shadow-[0_20px_40px_rgba(0,0,0,0.08)]
              "
            >
              <h4 className="font-logo text-[28px] text-[#1B0F0A]">
                Since 2022
              </h4>

              <p className="mt-1 text-sm text-[#6D5D51]">
                Crafted for creativity, coffee, and connection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-24
          w-full
          bg-gradient-to-b
          from-transparent
          to-[#F7EFE3]
        "
      />
    </motion.section>
  );
}

export default About;