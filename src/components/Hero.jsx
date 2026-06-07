import cafeInterior from "../assets/images/cafe-interior.png";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.32],
    [1, 0.75, 0]
  );

  const heroY = useTransform(scrollYProgress, [0, 0.32], [0, -120]);
  const heroScale = useTransform(scrollYProgress, [0, 0.32], [1, 0.94]);
  const bgScale = useTransform(scrollYProgress, [0, 0.32], [1, 1.08]);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <motion.img
        src={cafeInterior}
        alt="Muse & Brew Interior"
        style={{ scale: bgScale }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#120905]/92 via-[#120905]/58 to-[#120905]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#120905]/72 via-[#120905]/18 to-transparent" />
      <div className="absolute inset-0 bg-[#120905]/10 md:bg-transparent" />

      <div className="absolute left-[10%] top-[28%] h-[260px] w-[260px] rounded-full bg-[#D5B893]/10 blur-[90px] md:h-[360px] md:w-[360px] md:blur-[100px]" />

        <motion.div
          style={{
            opacity: heroOpacity,
            y: heroY,
            scale: heroScale,
          }}
          className="
            absolute
            left-0
            top-1/2
            z-10
            w-full
            -translate-y-1/2
            px-8

            md:relative
            md:top-auto
            md:mx-auto
            md:flex
            md:h-full
            md:max-w-7xl
            md:translate-y-0
            md:items-center
            md:px-8
            lg:px-16
          "
        >
          <div className="max-w-[720px] md:pt-16">
          {/* INTERACTIVE BADGE */}
          <motion.div
            className="mb-7 flex items-center gap-3 md:mb-8 md:gap-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.span
              className="h-px w-10 bg-[#D5B893]/70 md:w-12"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            <motion.p
              className="
                font-logo
                text-[15px]
                tracking-[0.03em]
                text-[#F3DFC2]
                md:text-[18px]
              "
              whileHover={{
                x: 4,
                color: "#FBF6EE",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Creative Coffee Space
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
          >
            <motion.h1
              className="
                font-syne
                text-[40px]
                font-medium
                leading-[1.03]
                tracking-[-0.055em]
                text-[#FBF6EE]
                sm:text-[56px]
                md:text-[82px]
                md:leading-[0.95]
                lg:text-[96px]
              "
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Where ideas
              <br />
              meet coffee.
            </motion.h1>

            <motion.p
              className="
                mt-8
                max-w-[340px]
                text-[14px]
                leading-[2]
                tracking-[0.01em]
                text-[#FBF6EE]/74
                sm:max-w-[520px]
                sm:text-[15px]
                md:mt-8
                md:max-w-[560px]
                md:leading-[1.9]
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              A warm corner for deep work, creative conversations, and meaningful
              moments. Enjoy handcrafted coffee in a space designed to inspire.
            </motion.p>
          </motion.div>

          <motion.div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-5
              md:mt-10
              md:gap-7
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#menu"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#D5B893]
                px-5
                py-3
                text-[#120905]
                no-underline
                shadow-[0_12px_28px_rgba(0,0,0,0.22)]
                md:px-6
              "
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <span className="font-syne text-[14px] font-medium tracking-[0.01em] md:text-[15px]">
                Explore Menu
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[#FBF6EE]
                no-underline
              "
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <span className="font-syne text-[14px] font-medium tracking-[0.01em] md:text-[15px]">
                Visit Us
              </span>

              <motion.span
                className="text-[#D5B893]"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        style={{
          opacity: heroOpacity,
          y: heroY,
        }}
        className="absolute bottom-16 right-14 z-10 hidden lg:block"
      >
        <div className="max-w-[240px] border-l border-[#D5B893]/45 pl-6">
          <motion.p
            className="text-[10px] uppercase tracking-[0.45em] text-[#D5B893]"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          >
            Made For
          </motion.p>

          <motion.p
            className="mt-4 text-[24px] font-light leading-[1.25] tracking-[-0.04em] text-[#FBF6EE]/90"
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Thinkers.
            <br />
            Creators.
            <br />
            Coffee lovers.
          </motion.p>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        style={{
          opacity: heroOpacity,
          y: heroY,
        }}
        className="
          absolute
          bottom-12
          left-1/2
          z-10
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          no-underline
          md:bottom-8
          md:gap-4
        "
      >
        <motion.span
          className="
            font-manrope
            text-[10px]
            font-medium
            uppercase
            tracking-[0.24em]
            text-[#D5B893]
            md:text-[11px]
            md:tracking-[0.28em]
          "
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Scroll Down
        </motion.span>

        <div className="relative h-9 w-[2px] overflow-hidden rounded-full bg-[#FBF6EE]/15 md:h-12">
          <motion.div
            className="
              absolute
              left-0
              top-0
              h-5
              w-full
              rounded-full
              bg-[#D5B893]
              shadow-[0_0_15px_rgba(213,184,147,0.6)]
            "
            animate={{ y: [-20, 48] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.a>

      {/* TRANSITION TO ABOUT */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-32
          w-full
          bg-gradient-to-b
          from-transparent
          via-[#F7EFE3]/40
          to-[#F7EFE3]
          md:h-40
        "
      />
    </section>
  );
}

export default Hero;