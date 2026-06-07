  import { useState, useRef } from "react";
  import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

  import americano from "../assets/images/americano.png";
  import caramelLatte from "../assets/images/caramel-latte.png";
  import matchaLatte from "../assets/images/matcha-latte.png";
  import cappuccino from "../assets/images/cappuccino.png";
  import chocolate from "../assets/images/chocolate.png";
  import lycheeTea from "../assets/images/lychee-tea.png";
  import brownies from "../assets/images/brownies.png";
  import tiramisu from "../assets/images/tiramisu.png";
  import croissant from "../assets/images/croissant.png";

  const categories = [
    {
      name: "Coffee",
      label: "Espresso Based",
      items: [
        {
          name: "Americano",
          desc: "Bold, clean, timeless.",
          price: "Rp22.000",
          image: americano,
          bg: "from-[#16100D] via-[#3A2418] to-[#8B5E3C]",
          accent: "#D5B893",
          width: 395,
          mobileWidth: 240,
          mobileY: 0,
        },
        {
          name: "Caramel Latte",
          desc: "Creamy espresso with caramel.",
          price: "Rp28.000",
          image: caramelLatte,
          bg: "from-[#2A1811] via-[#8A5633] to-[#D9A46F]",
          accent: "#F0C18A",
          width: 360,
          y: -23,
          mobileWidth: 200,
          mobileY: -10,
        },
        {
          name: "Cappuccino",
          desc: "Foamy, warm, and classic.",
          price: "Rp27.000",
          image: cappuccino,
          bg: "from-[#241713] via-[#76513A] to-[#C8A17D]",
          accent: "#E6C3A2",
          width: 400,
          y: 10,
          mobileWidth: 350,
          mobileY: 6,
          mobileScale: 1.20,
        },
      ],
    },
    {
      name: "Non Coffee",
      label: "Calm & Refreshing",
      items: [
        {
          name: "Matcha Latte",
          desc: "Earthy matcha with silky milk.",
          price: "Rp30.000",
          image: matchaLatte,
          bg: "from-[#202818] via-[#6F7F52] to-[#DDE3C2]",
          accent: "#C8D89B",
          width: 300,
          mobileWidth: 235,
          mobileY: 0,
          mobileScale: 0.89,
        },
        {
          name: "Chocolate Velvet",
          desc: "Rich cocoa, soft and comforting.",
          price: "Rp29.000",
          image: chocolate,
          bg: "from-[#1E100B] via-[#5A2E1E] to-[#A66B46]",
          accent: "#D7A06D",
          width: 380,
          mobileWidth: 235,
          mobileY: 5,
        },
        {
          name: "Lychee Tea",
          desc: "Fresh, light, and fruity.",
          price: "Rp24.000",
          image: lycheeTea,
          bg: "from-[#2B1C24] via-[#A87587] to-[#F6DDE5]",
          accent: "#6E3348",
          width: 400,
          mobileWidth: 235,
          mobileY: 0,
          mobileScale: 1.15,
        },
      ],
    },
    {
      name: "Dessert",
      label: "Sweet Companion",
      items: [
        {
          name: "Tiramisu",
          desc: "Coffee cream layered dessert.",
          price: "Rp35.000",
          image: tiramisu,
          bg: "from-[#20120D] via-[#7B4A2B] to-[#D6B084]",
          accent: "#E0B98F",
          width: 450,
          mobileWidth: 235,
          mobileY: 0,
          mobileScale: 1.25,
        },
        {
          name: "Butter Croissant",
          desc: "Flaky, buttery, and warm.",
          price: "Rp26.000",
          image: croissant,
          bg: "from-[#2D1B0F] via-[#B2763D] to-[#F0C982]",
          accent: "#FFD28A",
          width: 600,
          mobileWidth: 270,
          mobileY: 8,
          mobileScale: 1.70,
        },
        {
          name: "Fudge Brownies",
          desc: "Dense chocolate with soft bite.",
          price: "Rp25.000",
          image: brownies,
          bg: "from-[#160D0A] via-[#4A2519] to-[#8A4D32]",
          accent: "#C9845D",
          width: 420,
          mobileWidth: 235,
          mobileY: 0,
          mobileScale: 1.15,
        },
      ],
    },
  ];

  function FeaturedMenu() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);

    const activeCategory = categories[activeCategoryIndex];
    const activeItem = activeCategory.items[activeItemIndex];

    const smoothEase = [0.16, 1, 0.3, 1];

    const changeCategory = (index) => {
      setActiveCategoryIndex(index);
      setActiveItemIndex(0);
    };

    const menuRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: menuRef,
      offset: ["start end", "end start"],
    });

    const menuOpacity = useTransform(
      scrollYProgress,
      [0, 0.18, 0.72, 1],
      [0, 1, 1, 0]
    );

    const menuY = useTransform(
      scrollYProgress,
      [0, 0.18, 0.72, 1],
      [140, 0, 0, -140]
    );

    const menuScale = useTransform(
      scrollYProgress,
      [0, 0.18, 0.72, 1],
      [0.92, 1, 1, 0.92]
    );

    const menuBlur = useTransform(
      scrollYProgress,
      [0, 0.18, 0.72, 1],
      ["blur(14px)", "blur(0px)", "blur(0px)", "blur(14px)"]
    );

    return (
      <motion.section
        ref={menuRef}
        id="menu"
        style={{
          opacity: menuOpacity,
          y: menuY,
          scale: menuScale,
        }}
        className={`
          relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-br
          lg:h-screen
          ${activeItem.bg}
          transition-colors duration-1000 ease-in-out
        `}
      >
        <motion.div
          className="absolute -left-28 -top-28 z-0 h-[330px] w-[330px] rounded-full bg-white/18 blur-3xl"
          animate={{ scale: [1, 1.12, 1], x: [0, 18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -bottom-36 -right-32 z-0 h-[420px] w-[420px] rounded-full bg-black/25 blur-3xl"
          animate={{ scale: [1, 1.1, 1], y: [0, -18, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="pointer-events-none absolute bottom-2 left-6 z-0 font-logo text-[82px] leading-none text-white/5 md:text-[130px]">
          MENU
        </div>

        {/* MOBILE LAYOUT */}
        <motion.div
          style={{
            opacity: menuOpacity,
            y: menuY,
            scale: menuScale,
            filter: menuBlur,
          }}
          className="
            relative
            z-10
            flex
            min-h-[100svh]
            flex-col
            px-5
            pb-8
            pt-24
            lg:hidden
          "
        >
          <div className="mb-4 flex items-center gap-3">
            <span
              className="h-px w-9"
              style={{ backgroundColor: activeItem.accent }}
            />

            <p
              className="font-syne text-[9px] uppercase tracking-[0.32em]"
              style={{ color: activeItem.accent }}
            >
              Muse & Brew Selection
            </p>
          </div>

          <h2 className="max-w-[340px] font-logo text-[39px] leading-[0.95] tracking-[-0.045em] text-[#FFF8EF]">
            Crafted for every craving.
          </h2>

          <p className="mt-4 max-w-[330px] font-syne text-[13px] leading-6 text-white/65">
            From bold coffee to refreshing drinks and sweet bites, each menu is
            made to complete your Muse & Brew moment.
          </p>

          {/* CATEGORY PILLS */}
          <div className="scrollbar-none mt-6 flex gap-2 overflow-x-auto pb-1">
            {categories.map((cat, index) => {
              const isActive = activeCategoryIndex === index;

              return (
                <motion.button
                  key={cat.name}
                  onClick={() => changeCategory(index)}
                  className={`
                    shrink-0
                    rounded-full
                    border
                    px-4
                    py-2.5
                    font-logo
                    text-[11px]
                    transition-all
                    duration-500
                    ${
                      isActive
                        ? "text-[#120905] shadow-[0_12px_35px_rgba(0,0,0,0.22)]"
                        : "border-white/25 bg-white/10 text-white/70"
                    }
                  `}
                  style={
                    isActive
                      ? {
                          backgroundColor: activeItem.accent,
                          borderColor: activeItem.accent,
                        }
                      : {}
                  }
                  whileTap={{ scale: 0.96 }}
                >
                  {cat.name}
                </motion.button>
              );
            })}
          </div>

          {/* MOBILE PRODUCT VISUAL */}
          <div className="relative mt-7 flex h-[310px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 backdrop-blur-xl">
            <motion.div
              className="absolute h-[220px] w-[220px] rounded-full border"
              style={{ borderColor: `${activeItem.accent}35` }}
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute h-[180px] w-[180px] rounded-full blur-3xl"
              style={{ backgroundColor: `${activeItem.accent}35` }}
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.name}
                className="
                  pointer-events-none
                  absolute
                  top-8
                  text-center
                  font-logo
                  text-[54px]
                  leading-none
                  text-white/8
                "
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: smoothEase }}
              >
                {activeItem.name}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-[90]
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <motion.div
                  key={activeItem.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: -4,
                  }}
                  animate={{
                    opacity: 1,
                    scale: activeItem.mobileScale || 1,
                    rotate: 0,
                    y: [
                      activeItem.mobileY || 0,
                      (activeItem.mobileY || 0) - 8,
                      activeItem.mobileY || 0,
                    ],
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.92,
                    y: 24,
                  }}
                  transition={{
                    opacity: { duration: 0.22 },
                    scale: { duration: 0.45, ease: smoothEase },
                    rotate: { duration: 0.45, ease: smoothEase },
                    y: {
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <img
                    src={activeItem.image}
                    alt={activeItem.name}
                    style={{
                      width: `${activeItem.mobileWidth || 250}px`,
                    }}
                    className="
                      block
                      object-contain
                      drop-shadow-[0_34px_48px_rgba(0,0,0,0.45)]
                    "
                  />
                </motion.div>
              </div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeItem.name}-${activeItem.price}`}
                initial={{ opacity: 0, scale: 0.9, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 16 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="
                  absolute
                  bottom-5
                  right-5
                  z-30
                  rounded-2xl
                  border
                  border-white/25
                  bg-white/15
                  px-4
                  py-3
                  text-white
                  shadow-2xl
                  backdrop-blur-xl
                "
              >
                <p className="font-syne text-[8px] uppercase tracking-[0.24em] text-white/60">
                  {activeCategory.name}
                </p>

                <p
                  className="mt-1 font-logo text-[24px] leading-none"
                  style={{ color: activeItem.accent }}
                >
                  {activeItem.price}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* MOBILE ITEM LIST */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.name}
              className="mt-5"
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: smoothEase }}
            >
              <p className="mb-3 font-syne text-[9px] uppercase tracking-[0.32em] text-white/45">
                {activeCategory.label}
              </p>

              <div className="grid gap-2.5">
                {activeCategory.items.map((item, index) => {
                  const isActive = activeItemIndex === index;

                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => setActiveItemIndex(index)}
                      className={`
                        group
                        flex
                        items-center
                        justify-between
                        gap-3
                        rounded-2xl
                        border
                        px-4
                        py-3
                        text-left
                        backdrop-blur-xl
                        transition
                        ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "border-white/14 bg-white/9 text-white/75 hover:border-white/25 hover:bg-white/14"
                        }
                      `}
                      style={
                        isActive
                          ? {
                              borderColor: `${item.accent}99`,
                            }
                          : {}
                      }
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.06,
                        ease: smoothEase,
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="min-w-0">
                          <h3 className="truncate font-logo text-[21px] leading-none text-white">
                            {item.name}
                          </h3>
                          <p className="mt-1 truncate text-[12px] text-white/55">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <p
                        className="shrink-0 font-logo text-[18px]"
                        style={{
                          color: isActive ? item.accent : activeItem.accent,
                        }}
                      >
                        {item.price}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* DESKTOP LAYOUT */}
        <motion.div
          style={{
            opacity: menuOpacity,
            y: menuY,
            scale: menuScale,
            filter: menuBlur,
          }}
          className="
            relative
            z-10
            hidden
            h-full
            w-full
            grid-cols-[43%_57%]
            items-center
            gap-6
            px-16
            pt-20
            pb-7
            lg:grid
          "
        >
          {/* LEFT */}
          <div className="relative z-20 text-[#FFF8EF]">
            <div className="mb-4 flex items-center gap-4">
              <span
                className="h-px w-10"
                style={{ backgroundColor: activeItem.accent }}
              />
              <p
                className="font-syne text-[10px] uppercase tracking-[0.34em]"
                style={{ color: activeItem.accent }}
              >
                Muse & Brew Selection
              </p>
            </div>

            <h2 className="max-w-[560px] font-logo text-[64px] leading-[0.9] tracking-[-0.04em]">
              Crafted for every kind of craving.
            </h2>

            <p className="mt-4 max-w-[430px] font-syne text-[15px] leading-6 text-white/65">
              From bold coffee to refreshing non-coffee drinks and sweet bites,
              each menu is made to complete your Muse & Brew moment.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((cat, index) => {
                const isActive = activeCategoryIndex === index;

                return (
                  <motion.button
                    key={cat.name}
                    onClick={() => changeCategory(index)}
                    className={`
                      rounded-full border px-5 py-2.5 font-logo text-[11px]
                      transition-all duration-500
                      ${
                        isActive
                          ? "text-[#120905] shadow-[0_12px_35px_rgba(0,0,0,0.22)]"
                          : "border-white/25 bg-white/10 text-white/70 hover:bg-white/18 hover:text-white"
                      }
                    `}
                    style={
                      isActive
                        ? {
                            backgroundColor: activeItem.accent,
                            borderColor: activeItem.accent,
                          }
                        : {}
                    }
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {cat.name}
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.name}
                className="mt-7"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                <p className="mb-3 font-syne text-[9px] uppercase tracking-[0.34em] text-white/45">
                  {activeCategory.label}
                </p>

                <div className="grid max-w-[480px] gap-2.5">
                  {activeCategory.items.map((item, index) => {
                    const isActive = activeItemIndex === index;

                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => setActiveItemIndex(index)}
                        className={`
                          group flex items-center justify-between gap-4 rounded-3xl border
                          px-4 py-3 text-left backdrop-blur-xl transition
                          ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "border-white/14 bg-white/9 text-white/75 hover:border-white/25 hover:bg-white/14"
                          }
                        `}
                        style={
                          isActive
                            ? {
                                borderColor: `${item.accent}99`,
                              }
                            : {}
                        }
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.07,
                          ease: smoothEase,
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="font-logo text-[24px] leading-none text-white">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-[12px] text-white/55">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        <p
                          className="shrink-0 font-logo text-[21px]"
                          style={{
                            color: isActive ? item.accent : activeItem.accent,
                          }}
                        >
                          {item.price}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative isolate flex h-full min-h-[480px] items-center justify-center overflow-hidden">
            <motion.div
              className="absolute z-0 h-[390px] w-[390px] rounded-full border"
              style={{ borderColor: `${activeItem.accent}35` }}
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute z-0 h-[330px] w-[330px] rounded-full blur-3xl"
              style={{ backgroundColor: `${activeItem.accent}35` }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.name}
                className="pointer-events-none absolute top-[14%] z-0 text-center font-logo text-[110px] leading-none text-white/8"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.55, ease: smoothEase }}
              >
                {activeItem.name}
              </motion.div>
            </AnimatePresence>

            <motion.img
              key={activeItem.name}
              src={activeItem.image}
              alt={activeItem.name}
              style={{
                width: `${activeItem.width}px`,
              }}
              className="
                absolute
                z-[50]
                object-contain
                drop-shadow-[0_38px_55px_rgba(0,0,0,0.45)]
              "
              initial={{ opacity: 0, y: 35, scale: 0.92, rotate: -4 }}
              animate={{
                opacity: 1,
                y: [
                  activeItem.y || 0,
                  (activeItem.y || 0) - 10,
                  activeItem.y || 0,
                ],
                scale: 1,
                rotate: 0,
              }}
              transition={{
                opacity: { duration: 0.25 },
                scale: { duration: 0.45, ease: smoothEase },
                rotate: { duration: 0.45, ease: smoothEase },
                y: {
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.03, rotate: -2 }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeItem.name}-${activeItem.price}`}
                initial={{ opacity: 0, scale: 0.9, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 18 }}
                transition={{ duration: 0.45, ease: smoothEase }}
                className="
                  absolute bottom-[13%] right-[8%] z-[60]
                  rounded-3xl border border-white/25 bg-white/15
                  px-5 py-3.5 text-white shadow-2xl backdrop-blur-xl
                "
              >
                <p className="font-syne text-[9px] uppercase tracking-[0.24em] text-white/60">
                  {activeCategory.name}
                </p>
                <p
                  className="mt-1 font-logo text-[28px] leading-none"
                  style={{ color: activeItem.accent }}
                >
                  {activeItem.price}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.section>
    );
  }

  export default FeaturedMenu;