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
    title: "Coffee Bar",
    desc: "Where every cup is crafted with care.",
    image: gallery2,
    className: "",
  },
  {
    title: "Cozy Corner",
    desc: "A warm spot for calm talks and quiet moments.",
    image: gallery3,
    className: "",
  },
  {
    title: "Window Seat",
    desc: "Natural light, leafy views, and slow coffee moments.",
    image: gallery4,
    className: "",
  },
  {
    title: "Creative Space",
    desc: "A bright place to work, read, and connect.",
    image: gallery5,
    className: "",
  },
];

function GalleryCard({ item, index, mobile = false }) {
  return (
    <motion.div
      className={`
        group
        relative
        overflow-hidden
        rounded-[30px]
        shadow-[0_24px_55px_rgba(74,44,42,0.16)]
        ${mobile ? "h-[430px] min-w-[82vw]" : item.className}
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

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#120905]/82
          via-[#120905]/22
          to-transparent
          opacity-80
          transition
          duration-500
          group-hover:opacity-95
        "
      />

      <div
        className="
          absolute
          left-0
          bottom-0
          w-full
          p-6
          transition
          duration-500
          md:translate-y-3
          md:opacity-90
          md:group-hover:translate-y-0
          md:group-hover:opacity-100
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
  );
}

function Gallery() {
  return (
    <section
      id="gallery"
      className="
        relative
        overflow-hidden
        bg-[#F7EFE3]
        px-6
        py-24
        lg:px-16
        lg:py-28
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
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 max-w-[720px] lg:mb-14"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-12 bg-[#B8956A]" />

            <p className="font-manrope text-[11px] uppercase tracking-[0.28em] text-[#B8956A] md:text-[12px] md:tracking-[0.3em]">
              Gallery / Foto Tempat
            </p>
          </div>

          <h2 className="font-logo text-[42px] leading-[0.98] tracking-[-0.04em] text-[#1B0F0A] md:text-[70px] md:leading-[0.95]">
            Corners made for comfort and creativity.
          </h2>

          <p className="mt-5 max-w-[560px] font-manrope text-[14px] leading-7 text-[#5B4B3E] md:mt-6 md:text-[15px]">
            Take a closer look at the warm atmosphere of Muse & Brew — from cozy
            seating areas to calming corners made for ideas, conversations, and
            slow coffee moments.
          </p>
        </motion.div>

        {/* MOBILE SWIPE GALLERY */}
        <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-3 md:hidden scrollbar-none">
          {galleries.map((item, index) => (
            <GalleryCard key={item.title} item={item} index={index} mobile />
          ))}
        </div>

        {/* DESKTOP GALLERY GRID */}
        <div className="hidden auto-rows-[240px] grid-cols-1 gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
          {galleries.map((item, index) => (
            <GalleryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;