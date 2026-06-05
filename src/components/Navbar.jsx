import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    { name: "Home", id: "home", theme: "dark" },
    { name: "About", id: "about", theme: "light" },
    { name: "Menu", id: "menu", theme: "dark" },
    { name: "Gallery", id: "gallery", theme: "light" },
    { name: "Review", id: "review", theme: "light" },
    { name: "Contact", id: "contact", theme: "dark" },
  ];

  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      let current = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.35) {
            current = item.id;
          }
        }
      });

      const currentItem = navItems.find((item) => item.id === current);

      setActiveSection(current);
      setTheme(currentItem?.theme || "dark");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-[100]
        w-full
        px-8
        transition-all
        duration-500
        ${scrolled ? "py-3" : "py-6"}
      `}
    >

      {/* SOFT TOP VEIL */}
      <div
        className={`
          pointer-events-none
          absolute
          left-0
          top-0
          -z-10
          w-full
          transition-all
          duration-700
          ${scrolled ? "h-28" : "h-34"}
          ${
            isDark
              ? "bg-[linear-gradient(to_bottom,rgba(18,9,5,0.78)_0%,rgba(18,9,5,0.42)_45%,rgba(18,9,5,0.14)_75%,rgba(18,9,5,0)_100%)]"
              : "bg-[linear-gradient(to_bottom,rgba(247,239,227,0.82)_0%,rgba(247,239,227,0.46)_45%,rgba(247,239,227,0.14)_75%,rgba(247,239,227,0)_100%)]"
          }
        `}
      />

      <motion.nav
        className="relative mx-auto flex max-w-7xl items-center"
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* LOGO */}
        <motion.a
          href="#home"
          className="group no-underline"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <h1
            className={`
              font-logo
              leading-none
              tracking-[-0.05em]
              transition-all
              duration-500
              ${scrolled ? "text-[32px]" : "text-[40px]"}
              ${
                isDark
                  ? "text-[#FBF6EE] group-hover:text-[#D5B893]"
                  : "text-[#2E1A12] group-hover:text-[#8B6A45]"
              }
            `}
          >
            Muse & Brew
          </h1>

          <p
            className={`
              mt-1
              overflow-hidden
              text-[10px]
              italic
              tracking-wide
              transition-all
              duration-500
              ${scrolled ? "h-0 opacity-0" : "h-4 opacity-100"}
              ${isDark ? "text-[#D5B893]/90" : "text-[#6B4A33]"}
            `}
          >
            Where Ideas Meet Coffee
          </p>
        </motion.a>

        {/* NAV MENU */}
        <motion.div
          className={`
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-2
            rounded-full
            border
            backdrop-blur-[28px]
            transition-all
            duration-500
            md:flex
            ${scrolled ? "px-1.5 py-1.5" : "px-2 py-2"}
            ${
              isDark
                ? "border-[#FBF6EE]/12 bg-[#120905]/32 shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
                : "border-[#1B0F0A]/8 bg-[#F7EFE3]/40 shadow-[0_18px_45px_rgba(27,15,10,0.10)]"
            }
          `}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  font-syne
                  no-underline
                  transition-all
                  duration-300
                  ${
                    scrolled
                      ? "px-4 py-2 text-[13px]"
                      : "px-5 py-2.5 text-[14px]"
                  }
                  ${
                    isActive
                      ? "bg-[#D5B893] text-[#120905]"
                      : isDark
                      ? "text-[#FBF6EE]/80 hover:bg-[#FBF6EE]/8 hover:text-[#FBF6EE]"
                      : "text-[#1B0F0A]/70 hover:bg-[#1B0F0A]/5 hover:text-[#1B0F0A]"
                  }
                `}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.nav>
    </header>
  );
}

export default Navbar;