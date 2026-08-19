"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Capabilities", href: "#capabilities", id: "capabilities" },
  { label: "Playground", href: "#playground", id: "playground" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  // =========================
  // NAVBAR SCROLL BEHAVIOR
  // =========================

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    setIsScrolled(latest > 40);

    if (isOpen) {
      setIsVisible(true);
      lastScrollY.current = latest;
      return;
    }

    if (latest < 100) {
      setIsVisible(true);
    } else if (latest > previous + 4) {
      setIsVisible(false);
    } else if (latest < previous - 4) {
      setIsVisible(true);
    }

    lastScrollY.current = latest;
  });

  // =========================
  // ACTIVE SECTION
  // =========================

  useEffect(() => {
    const handleActiveSection = () => {
      const triggerPoint = window.innerHeight * 0.3;

      let currentSection = "";

      for (const item of navigation) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerPoint && rect.bottom > triggerPoint) {
          currentSection = item.id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
      window.removeEventListener("resize", handleActiveSection);
    };
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <motion.header
        initial={{ y: 0 }}
        animate={{
          y: isVisible ? 0 : "-100%",
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed left-0 top-0 z-50 w-full
          transition-[background-color,border-color,backdrop-filter]
          duration-500

          ${
            isScrolled
              ? "border-b border-white/10 bg-[#080808]/75 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto flex max-w-360
            items-center justify-between
            px-6
            transition-[height] duration-500
            md:px-10
            lg:px-16

            ${isScrolled ? "h-16 md:h-18" : "h-20 md:h-24"}
          `}
        >
          {/* Logo */}

          <a
            href="#home"
            className="relative z-50 flex items-center"
            aria-label="S4Z - Back to top"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/images/logo/logo.png"
              alt="S4Z"
              className={`
                w-auto object-contain
                transition-[height] duration-500

                ${isScrolled ? "h-7" : "h-7 md:h-8"}
              `}
            />
          </a>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-7 md:flex lg:gap-8">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`
                    group relative
                    py-2 text-sm
                    transition-colors duration-300

                    ${
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    }
                  `}
                >
                  {item.label}

                  {/* Active dot */}

                  <span
                    className={`
                      absolute
                      -bottom-0.5 left-1/2
                      h-1 w-1
                      -translate-x-1/2
                      rounded-full
                      bg-[#3B82F6]
                      transition-all duration-300

                      ${
                        isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isOpen}
            onClick={() => {
              setIsOpen((value) => !value);
              setIsVisible(true);
            }}
            className="
              relative z-50
              flex h-10 w-10
              items-center justify-center
              text-white
              md:hidden
            "
          >
            {isOpen ? (
              <X size={22} strokeWidth={1.5} />
            ) : (
              <Menu size={22} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          fixed inset-0 z-40
          bg-[#080808]
          transition-all duration-500 ease-out
          md:hidden

          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div className="mx-auto flex min-h-dvh max-w-360 flex-col px-6 pb-8 pt-28">
          <nav className="mt-auto">
            {navigation.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    group flex items-center
                    border-b border-white/10
                    py-5
                  "
                >
                  {/* Number */}

                  <span
                    className={`
                      mr-5
                      text-[10px]
                      tracking-[0.15em]
                      transition-colors duration-300

                      ${isActive ? "text-[#3B82F6]" : "text-white/25"}
                    `}
                  >
                    0{index + 1}
                  </span>

                  {/* Label */}

                  <span
                    className={`
                      font-display
                      text-[clamp(2.5rem,12vw,4rem)]
                      font-medium
                      leading-none
                      tracking-tighter
                      transition-colors duration-300

                      ${isActive ? "text-white" : "text-white/55"}
                    `}
                  >
                    {item.label}
                  </span>

                  {/* Active indicator */}

                  <span
                    className={`
                      ml-auto
                      h-1.5 w-1.5
                      rounded-full
                      bg-[#3B82F6]
                      transition-all duration-300

                      ${
                        isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                      }
                    `}
                  />
                </a>
              );
            })}
          </nav>

          {/* ================= MOBILE FOOTER ================= */}

          <div className="mt-auto flex items-end justify-between pt-10">
            <p className="text-[10px] uppercase tracking-[0.15em] text-white/30">
              UI/UX Designer
              <br />
              Indonesia
            </p>

            <p className="text-[10px] uppercase tracking-[0.15em] text-white/20">
              © 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
