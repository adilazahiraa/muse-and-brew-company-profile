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
        py-20
        lg:px-16
      "
    >
      {/* SOFT GLOW */}
      <div className="pointer-events-none absolute left-[-120px] top-0 h-[320px] w-[320px] rounded-full bg-[#D5B893]/8 blur-3xl" />
      <div className="pointer-events-none absolute right-[-120px] bottom-0 h-[320px] w-[320px] rounded-full bg-[#D5B893]/8 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* QUOTE */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
              font-logo
              text-[48px]
              leading-[0.95]
              tracking-[-0.05em]
              text-[#FBF6EE]

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
              text-[15px]
              leading-7
              text-[#FBF6EE]/55
            "
          >
            Great coffee deserves unhurried moments, meaningful
            conversations, and ideas worth staying for.
          </p>
        </motion.div>

        {/* BRAND */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2
            className="
              font-logo
              text-[56px]
              leading-none
              tracking-[-0.06em]
              text-[#D5B893]

              md:text-[86px]
            "
          >
            Muse & Brew
          </h2>

          <p
            className="
              mt-3
              italic
              text-[#D5B893]/85
            "
          >
            Where Ideas Meet Coffee
          </p>
        </motion.div>

        {/* NAVIGATION */}
        <motion.div
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-x-7
            gap-y-4
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
                text-sm
                text-[#FBF6EE]/55
                no-underline
                transition
                hover:text-[#D5B893]
              "
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* DIVIDER */}
        <div className="mt-14 border-t border-white/10" />

        {/* BOTTOM */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-3

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="font-manrope text-sm text-[#FBF6EE]/35">
            © 2026 Muse & Brew. All rights reserved.
          </p>

          <p className="font-manrope text-sm text-[#FBF6EE]/35">
            Crafted with coffee and creativity.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;