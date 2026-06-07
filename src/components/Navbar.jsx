import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [openMenu, setOpenMenu] = useState(false);

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
        px-5
        transition-all
        duration-500
        md:px-8
        ${scrolled ? "py-3" : "py-5 md:py-6"}
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
        className="relative mx-auto flex max-w-7xl items-center justify-between md:justify-start"
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
          onClick={() => setOpenMenu(false)}
        >
          <h1
            className={`
              font-logo
              leading-none
              tracking-[-0.05em]
              transition-all
              duration-500
              ${scrolled ? "text-[28px] md:text-[32px]" : "text-[32px] md:text-[40px]"}
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
              text-[9px]
              italic
              tracking-wide
              transition-all
              duration-500
              md:text-[10px]
              ${scrolled ? "h-0 opacity-0" : "h-4 opacity-100"}
              ${isDark ? "text-[#D5B893]/90" : "text-[#6B4A33]"}
            `}
          >
            Where Ideas Meet Coffee
          </p>
        </motion.a>

        {/* DESKTOP NAV MENU */}
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

        {/* MOBILE MENU BUTTON */}
        <motion.button
          type="button"
          onClick={() => setOpenMenu((prev) => !prev)}
          whileTap={{ scale: 0.94 }}
          className={`
            ml-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            backdrop-blur-xl
            transition-all
            duration-300
            md:hidden
            ${
              isDark
                ? "border-[#FBF6EE]/12 bg-[#120905]/38 text-[#FBF6EE] shadow-[0_12px_30px_rgba(0,0,0,0.22)]"
                : "border-[#1B0F0A]/10 bg-[#F7EFE3]/65 text-[#1B0F0A] shadow-[0_12px_30px_rgba(27,15,10,0.10)]"
            }
          `}
          aria-label="Toggle menu"
        >
        <div className="relative h-5 w-5">
          <span
            className={`
              absolute
              left-0
              top-1/2
              h-[2px]
              w-5
              -translate-y-1/2
              rounded-full
              bg-current
              transition-all
              duration-300
              ${
                openMenu
                  ? "rotate-45"
                  : "-translate-y-[7px]"
              }
            `}
          />

          <span
            className={`
              absolute
              left-0
              top-1/2
              h-[2px]
              w-5
              -translate-y-1/2
              rounded-full
              bg-current
              transition-all
              duration-300
              ${
                openMenu
                  ? "opacity-0"
                  : "opacity-100"
              }
            `}
          />

          <span
            className={`
              absolute
              left-0
              top-1/2
              h-[2px]
              w-5
              -translate-y-1/2
              rounded-full
              bg-current
              transition-all
              duration-300
              ${
                openMenu
                  ? "-rotate-45"
                  : "translate-y-[7px]"
              }
            `}
          />
        </div>
        </motion.button>

        {/* MOBILE DROPDOWN */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="
                absolute
                left-0
                right-0
                top-[66px]
                mx-auto
                w-full
                md:hidden
              "
            >
              <div
                className={`
                  overflow-hidden
                  rounded-[1.6rem]
                  border
                  p-2
                  backdrop-blur-2xl
                  ${
                    isDark
                      ? "border-[#FBF6EE]/12 bg-[#120905]/86 shadow-[0_24px_70px_rgba(0,0,0,0.42)]"
                      : "border-[#1B0F0A]/10 bg-[#F7EFE3]/92 shadow-[0_24px_70px_rgba(27,15,10,0.16)]"
                  }
                `}
              >
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setOpenMenu(false)}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.035 }}
                      className={`
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        px-4
                        py-3.5
                        font-syne
                        text-[15px]
                        no-underline
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "bg-[#D5B893] text-[#120905]"
                            : isDark
                            ? "text-[#FBF6EE]/86 hover:bg-[#FBF6EE]/8 hover:text-[#FBF6EE]"
                            : "text-[#1B0F0A]/76 hover:bg-[#1B0F0A]/5 hover:text-[#1B0F0A]"
                        }
                      `}
                    >
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

export default Navbar;