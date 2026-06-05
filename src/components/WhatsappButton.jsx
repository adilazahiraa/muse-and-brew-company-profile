import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import whatsappIcon from "../assets/images/whatsapp.png";

function WhatsAppButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.75;
      setShowButton(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButton && (
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="
            fixed
            right-0
            top-1/2
            z-[999]
            -translate-y-1/2

            group
            flex
            items-center
            overflow-hidden

            rounded-l-full
            bg-[#4A2C2A]/95
            backdrop-blur-xl
            shadow-[0_15px_40px_rgba(0,0,0,0.22)]
            no-underline
          "
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex h-12 w-12 items-center justify-center">
            <img
            src={whatsappIcon}
            alt="WhatsApp"
            className="
                h-6
                w-6
                object-contain

                brightness-0
                invert
                sepia
                saturate-[0.6]
            "
            />
          </div>

          <div className="max-w-0 overflow-hidden whitespace-nowrap transition-all duration-300 group-hover:max-w-[160px]">
            <span className="pr-5 font-manrope text-sm font-medium text-[#F7EFE3]">
              Chat With Us
            </span>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

export default WhatsAppButton;