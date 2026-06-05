import { motion } from "framer-motion";

import gallery1 from "../assets/images/gallery-1.png";
import gallery2 from "../assets/images/gallery-2.png";
import gallery3 from "../assets/images/gallery-3.png";
import gallery4 from "../assets/images/gallery-4.png";
import gallery5 from "../assets/images/gallery-5.png";

const galleries = [
  {
    title: "Warm Entrance",
    desc: "A cozy welcome before your first sip.",
    image: gallery1,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Window Seat",
    desc: "A calm corner with natural light.",
    image: gallery2,
    className: "",
  },
  {
    title: "Coffee Bar",
    desc: "Where every cup is crafted with care.",
    image: gallery3,
    className: "",
  },
  {
    title: "Cozy Corner",
    desc: "Made for slow talks and quiet ideas.",
    image: gallery4,
    className: "",
  },
  {
    title: "Creative Space",
    desc: "A place to work, read, and connect.",
    image: gallery5,
    className: "",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        bg-[#F7EFE3]
        px-6
        py-28
        lg:px-16
      "
    >
      {/* BACKGROUND DECOR */}
      <div className="pointer-events-none absolute -top-32 right-0 h-[380px] w-[380px] rounded-full bg-[#D5B893]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-[#4A2C2A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 max-w-[720px]"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#B8956A]" />

            <p className="font-manrope text-[12px] uppercase tracking-[0.3em] text-[#B8956A]">
              Gallery / Foto Tempat
            </p>
          </div>

          <h2 className="font-logo text-[48px] leading-[0.95] tracking-[-0.04em] text-[#1B0F0A] md:text-[70px]">
            Corners made for comfort and creativity.
          </h2>

          <p className="mt-6 max-w-[560px] font-manrope text-[15px] leading-7 text-[#5B4B3E]">
            Take a closer look at the warm atmosphere of Muse & Brew — from cozy
            seating areas to calming corners made for ideas, conversations, and
            slow coffee moments.
          </p>
        </motion.div>

        {/* GALLERY GRID */}
        <div className="grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {galleries.map((item, index) => (
            <motion.div
              key={item.title}
              className={`
                group
                relative
                overflow-hidden
                rounded-[30px]
                shadow-[0_24px_55px_rgba(74,44,42,0.16)]
                ${item.className}
              `}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#120905]/80
                  via-[#120905]/20
                  to-transparent
                  opacity-75
                  transition
                  duration-500
                  group-hover:opacity-95
                "
              />

              {/* CAPTION */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  translate-y-3
                  p-6
                  opacity-90
                  transition
                  duration-500
                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <p className="font-logo text-[30px] leading-none text-[#FBF6EE]">
                  {item.title}
                </p>

                <p className="mt-2 max-w-[280px] font-manrope text-[13px] leading-6 text-[#FBF6EE]/72">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;