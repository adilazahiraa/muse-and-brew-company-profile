import { motion, useScroll, useTransform } from "framer-motion";
import aboutImage from "../assets/images/about-coffe.png";
import { useRef } from "react";

function About() {

  const aboutRef = useRef(null);

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
        py-32
      "
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
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
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#B8956A]" />

              <span
                className="
                  font-manrope
                  text-[12px]
                  uppercase
                  tracking-[0.3em]
                  text-[#B8956A]
                "
              >
                About Muse & Brew
              </span>
            </div>

            <h2
              className="
                font-logo
                text-[46px]
                leading-[1]
                tracking-[-0.04em]
                text-[#1B0F0A]

                md:text-[58px]
              "
            >
              A Space To Slow Down,
              <br />
              Create, and Connect.
            </h2>

            <p
              className="
                mt-8
                max-w-[580px]

                font-manrope
                text-[16px]
                leading-8

                text-[#5B4B3E]
              "
            >
              Muse & Brew is a creative coffee space designed for
              thinkers, creators, and coffee lovers. More than just
              a place to enjoy coffee, it is a warm environment where
              ideas flow naturally, conversations become meaningful,
              and every visit feels inspiring.
            </p>

            {/* FEATURES */}
            <div className="mt-12 grid grid-cols-3 gap-5">
              <div>
                <h3
                  className="
                    font-logo
                    text-[22px]
                    text-[#1B0F0A]
                  "
                >
                  Coffee
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#6D5D51]
                  "
                >
                  Handcrafted drinks made with care.
                </p>
              </div>

              <div>
                <h3
                  className="
                    font-logo
                    text-[22px]
                    text-[#1B0F0A]
                  "
                >
                  Creative
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#6D5D51]
                  "
                >
                  A space built for inspiration and ideas.
                </p>
              </div>

              <div>
                <h3
                  className="
                    font-logo
                    text-[22px]
                    text-[#1B0F0A]
                  "
                >
                  Warm
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-[#6D5D51]
                  "
                >
                  Cozy atmosphere for meaningful moments.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
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
              <h4
                className="
                  font-logo
                  text-[28px]
                  text-[#1B0F0A]
                "
              >
                Since 2022
              </h4>

              <p
                className="
                  mt-1
                  text-sm
                  text-[#6D5D51]
                "
              >
                Crafted for creativity,
                coffee, and connection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* TRANSITION TO MENU */}
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