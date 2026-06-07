import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwUiZ1r1Tn2H-wxfUXypaj6qLWIjpxVR54r9ZzYco7Kvvvp6q39Mz6Ycf_Ni6hI0LN8/exec";

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [active, setActive] = useState(0);
  const [openForm, setOpenForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    rating: 5,
    review: "",
  });

  const [loading, setLoading] = useState(false);

  const activeReview =
    reviews.length > 0
      ? reviews[active]
      : {
          name: "Muse & Brew",
          rating: 5,
          review: "Be the first to share your experience at Muse & Brew.",
        };

  const getReviews = async () => {
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL);
      const data = await res.json();

      if (Array.isArray(data)) {
        setReviews(data);
      }
    } catch (err) {
      console.log("Failed to fetch reviews:", err);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const nextReview = () => {
    if (reviews.length === 0) return;
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    if (reviews.length === 0) return;
    setActive((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.review.trim()) return;

    setLoading(true);

    const newReview = {
      name: form.name,
      rating: form.rating,
      review: form.review,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(newReview),
      });

      setReviews((prev) => [newReview, ...prev]);
      setActive(0);
      setForm({ name: "", rating: 5, review: "" });
      setOpenForm(false);
    } catch (err) {
      console.log("Failed to submit review:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="review"
      className="
        relative
        overflow-hidden
        bg-[#FDF8F2]
        px-6
        py-24
        lg:min-h-screen
        lg:px-16
        lg:py-14
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-8
          -translate-x-1/2
          select-none
          whitespace-nowrap
          font-logo
          text-[58px]
          leading-none
          text-[#D5B893]/10
          sm:text-[80px]
          md:text-[140px]
        "
      >
        GUEST STORIES
      </div>

      <div className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full bg-[#D5B893]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[440px] w-[440px] rounded-full bg-[#4A2C2A]/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center lg:min-h-[calc(100vh-7rem)]">
        {/* HEADER */}
        <motion.div
          className="mx-auto mb-9 max-w-[700px] text-center lg:mb-5"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-8 bg-[#B8956A] sm:w-10" />

            <p className="font-manrope text-[10px] uppercase tracking-[0.26em] text-[#B8956A] sm:text-[11px] sm:tracking-[0.3em]">
              Testimoni / Review
            </p>

            <span className="h-px w-8 bg-[#B8956A] sm:w-10" />
          </div>

          <h2 className="font-logo text-[42px] leading-[0.95] tracking-[-0.04em] text-[#1B0F0A] md:text-[56px]">
            What our guests say.
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] font-manrope text-[14px] leading-7 text-[#5B4B3E]">
            A few warm words from people who have spent their slow moments at
            Muse & Brew.
          </p>
        </motion.div>

        {/* MAIN REVIEW */}
        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-4xl
            overflow-hidden
            rounded-[30px]
            border
            border-[#D8C5AE]
            bg-[#FFF8EF]/82
            px-5
            py-7
            text-center
            shadow-[0_26px_70px_rgba(74,44,42,0.11)]
            backdrop-blur-xl
            sm:px-7
            md:rounded-[32px]
            md:px-12
          "
          initial={{ opacity: 0, y: 45, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#D5B893]/18 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-white/70 blur-3xl" />

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeReview.name}-${active}`}
              className="relative z-10"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-manrope text-[13px] tracking-[0.18em] text-[#B8956A]">
                {"★".repeat(Number(activeReview.rating))}
                <span className="text-[#D8C5AE]">
                  {"★".repeat(5 - Number(activeReview.rating))}
                </span>
              </p>

              <p className="mx-auto mt-5 line-clamp-4 max-w-[720px] font-logo text-[25px] leading-[1.18] tracking-[-0.03em] text-[#1B0F0A] md:line-clamp-3 md:text-[30px]">
                “{activeReview.review}”
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4A2C2A] font-logo text-[22px] text-[#F7EFE3]">
                  {activeReview.name?.charAt(0) || "G"}
                </div>

                <div className="text-left">
                  <p className="font-logo text-[23px] leading-none text-[#1B0F0A]">
                    {activeReview.name}
                  </p>
                  <p className="mt-1 font-manrope text-[9px] uppercase tracking-[0.2em] text-[#B8956A]">
                    Muse & Brew Guest
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {reviews.length > 1 && (
            <div className="relative z-10 mt-6 flex items-center justify-center gap-3">
              <motion.button
                type="button"
                onClick={prevReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C5AE] bg-[#F7EFE3] text-[#4A2C2A] transition hover:bg-[#4A2C2A] hover:text-[#F7EFE3]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                ←
              </motion.button>

              <motion.button
                type="button"
                onClick={nextReview}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C5AE] bg-[#F7EFE3] text-[#4A2C2A] transition hover:bg-[#4A2C2A] hover:text-[#F7EFE3]"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                →
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* REVIEW PREVIEW CARDS */}
        {reviews.length > 0 && (
          <>
            {/* MOBILE SWIPE */}
            <div className="-mx-6 mt-6 flex gap-4 overflow-x-auto px-6 pb-2 md:hidden scrollbar-none">
              {reviews.slice(0, 3).map((item, index) => {
                const isActive = active === index;

                return (
                  <ReviewCard
                    key={`${item.name}-${index}`}
                    item={item}
                    index={index}
                    isActive={isActive}
                    setActive={setActive}
                    mobile
                  />
                );
              })}
            </div>

            {/* DESKTOP GRID */}
            <div className="mt-6 hidden gap-4 md:grid md:grid-cols-3">
              {reviews.slice(0, 3).map((item, index) => {
                const isActive = active === index;

                return (
                  <ReviewCard
                    key={`${item.name}-${index}`}
                    item={item}
                    index={index}
                    isActive={isActive}
                    setActive={setActive}
                  />
                );
              })}
            </div>
          </>
        )}

        <div className="mt-7 flex justify-center lg:mt-5">
          <motion.button
            type="button"
            onClick={() => setOpenForm(true)}
            className="
              rounded-full
              bg-[#4A2C2A]
              px-7
              py-3
              font-manrope
              text-sm
              font-semibold
              text-[#F7EFE3]
              shadow-[0_18px_40px_rgba(74,44,42,0.22)]
              transition
              hover:bg-[#1B0F0A]
            "
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Write Your Review
          </motion.button>
        </div>
      </div>

      {/* MODAL FORM */}
      <AnimatePresence>
        {openForm && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#120905]/55 px-5 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenForm(false)}
          >
            <motion.form
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 26, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="
                relative
                max-h-[90svh]
                w-full
                max-w-[520px]
                overflow-y-auto
                rounded-[30px]
                border
                border-[#D8C5AE]
                bg-[#FFF8EF]
                p-6
                shadow-[0_30px_90px_rgba(0,0,0,0.35)]
                md:rounded-[36px]
                md:p-7
              "
            >
              <button
                type="button"
                onClick={() => setOpenForm(false)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F7EFE3] text-[#4A2C2A]"
              >
                ×
              </button>

              <p className="font-manrope text-[10px] uppercase tracking-[0.24em] text-[#B8956A] md:text-[11px] md:tracking-[0.28em]">
                Share Your Experience
              </p>

              <h3 className="mt-3 max-w-[320px] font-logo text-[36px] leading-none text-[#1B0F0A] md:text-[40px]">
                Write a Review
              </h3>

              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-7 w-full rounded-2xl border border-[#D8C5AE] bg-[#F7EFE3] px-4 py-3.5 font-manrope text-sm text-[#1B0F0A] outline-none"
              />

              <div className="mt-5 flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setForm({ ...form, rating: star })}
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-lg
                      transition
                      ${
                        star <= Number(form.rating)
                          ? "border-[#B8956A] bg-[#D5B893] text-[#1B0F0A]"
                          : "border-[#D8C5AE] bg-[#F7EFE3] text-[#B8956A]/40"
                      }
                    `}
                  >
                    ★
                  </button>
                ))}
              </div>

              <textarea
                placeholder="Write your review..."
                value={form.review}
                onChange={(e) => setForm({ ...form, review: e.target.value })}
                rows="5"
                className="mt-5 w-full resize-none rounded-2xl border border-[#D8C5AE] bg-[#F7EFE3] px-4 py-3.5 font-manrope text-sm leading-7 text-[#1B0F0A] outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full rounded-full bg-[#4A2C2A] px-7 py-3.5 font-manrope text-sm font-semibold text-[#F7EFE3] transition hover:bg-[#1B0F0A] disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Review"}
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ReviewCard({ item, index, isActive, setActive, mobile = false }) {
  return (
    <motion.button
      onClick={() => setActive(index)}
      className={`
        group
        relative
        overflow-hidden
        rounded-[26px]
        border
        px-5
        py-5
        text-left
        transition-all
        duration-500
        ${mobile ? "min-w-[78vw]" : ""}
        ${
          isActive
            ? "border-[#4A2C2A] bg-[#4A2C2A] text-[#F7EFE3] shadow-[0_22px_55px_rgba(74,44,42,0.22)]"
            : "border-[#D8C5AE] bg-[#FFF8EF]/65 text-[#1B0F0A] hover:-translate-y-1 hover:bg-[#FFF8EF] hover:shadow-[0_18px_45px_rgba(74,44,42,0.10)]"
        }
      `}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className={`
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-32
          w-32
          rounded-full
          blur-3xl
          transition
          ${isActive ? "bg-[#D5B893]/20" : "bg-[#D5B893]/10"}
        `}
      />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <p
            className={`
              font-manrope
              text-[12px]
              tracking-[0.16em]
              ${isActive ? "text-[#D5B893]" : "text-[#B8956A]"}
            `}
          >
            {"★".repeat(Number(item.rating))}
            <span className={isActive ? "text-[#F7EFE3]/20" : "text-[#D8C5AE]"}>
              {"★".repeat(5 - Number(item.rating))}
            </span>
          </p>

          <span
            className={`
              font-logo
              text-[34px]
              leading-none
              ${isActive ? "text-[#D5B893]/40" : "text-[#D5B893]/30"}
            `}
          >
            “
          </span>
        </div>

        <p
          className={`
            line-clamp-2
            min-h-[48px]
            font-manrope
            text-[14px]
            leading-6
            ${isActive ? "text-[#F7EFE3]/78" : "text-[#5B4B3E]"}
          `}
        >
          {item.review}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <div
            className={`
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              font-logo
              text-[19px]
              ${
                isActive
                  ? "bg-[#D5B893] text-[#4A2C2A]"
                  : "bg-[#4A2C2A] text-[#F7EFE3]"
              }
            `}
          >
            {item.name?.charAt(0) || "G"}
          </div>

          <div>
            <p
              className={`
                font-logo
                text-[24px]
                leading-none
                ${isActive ? "text-[#F7EFE3]" : "text-[#1B0F0A]"}
              `}
            >
              {item.name}
            </p>

            <p
              className={`
                mt-1
                font-manrope
                text-[9px]
                uppercase
                tracking-[0.2em]
                ${isActive ? "text-[#D5B893]" : "text-[#B8956A]"}
              `}
            >
              Guest Review
            </p>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export default Testimonials;