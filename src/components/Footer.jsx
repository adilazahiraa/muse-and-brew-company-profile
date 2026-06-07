import { motion } from "framer-motion";

function Footer() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Review", href: "#review" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#120905]
        px-6
        py-16
        lg:px-16
        lg:py-20
      "
    >
      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#D5B893]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-[#D5B893]/8 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(213,184,147,0.08),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* QUOTE */}
        <motion.div
          className="mx-auto max-w-[760px] text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
              font-logo
              text-[36px]
              leading-[1]
              tracking-[-0.05em]
              text-[#FBF6EE]

              sm:text-[42px]
              md:text-[72px]
            "
          >
                      Take your time.
            <br />
            Stay a little longer.
          </p>

          <p
            className="
              mx-auto
              mt-6
              max-w-[520px]
              font-manrope
              text-[14px]
              leading-7
              text-[#FBF6EE]/55
              md:text-[15px]
            "
          >
            Great coffee deserves unhurried moments, meaningful conversations,
            and ideas worth staying for.
          </p>
        </motion.div>

        {/* BRAND */}
        <motion.div
          className="
            mt-14
            text-center
            md:mt-20
          "
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2
            className="
              font-logo
              text-[42px]
              leading-none
              tracking-[-0.06em]
              text-[#D5B893]

              sm:text-[52px]
              md:text-[86px]
            "
          >
            Muse & Brew
          </h2>

          <p className="mt-3 font-manrope text-sm italic text-[#D5B893]/85">
            Where Ideas Meet Coffee
          </p>

          {/* NAVIGATION */}
          <motion.div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-x-5
              gap-y-3

              md:mt-12
              md:gap-x-7
              md:gap-y-4
            "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  font-manrope
                  text-[13px]
                  text-[#FBF6EE]/55
                  no-underline
                  transition

                  hover:text-[#D5B893]

                  md:text-sm
                "
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-white/10 md:mt-14" />

        {/* BOTTOM */}
        <div
          className="
            mt-7
            flex
            flex-col
            items-center
            gap-3
            text-center
            md:flex-row
            md:items-center
            md:justify-between
            md:text-left
          "
        >
          <p className="font-manrope text-[13px] text-[#FBF6EE]/35 md:text-sm">
            © 2026 Muse & Brew. All rights reserved.
          </p>

          <p className="font-manrope text-[13px] text-[#FBF6EE]/35 md:text-sm">
            Crafted with coffee and creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;