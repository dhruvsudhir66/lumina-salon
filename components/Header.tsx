"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import { Logo } from "./Logo";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/services", "Services"],
  ["/team", "Our Team"],
  ["/gallery", "Gallery"],
  ["/contact", "Contact"],
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e6ded4]/80 bg-[#fffcf8]/90 backdrop-blur-xl">
        <div className="container-page flex h-[78px] items-center justify-between">
          {/* LOGO */}
          <Logo />

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 md:flex">
            {links.map(([href, label]) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className="relative rounded-full px-4 py-2.5"
                >
                  {active && (
                    <motion.span
                      layoutId="active-nav"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-[#f1e9dc]"
                    />
                  )}

                  <span
                    className={`relative z-10 flex items-center gap-2 text-[11px] font-semibold tracking-[0.08em] transition-colors duration-200 ${
                      active
                        ? "text-[#92774d]"
                        : "text-[#766b69] hover:text-[#211a1b]"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-nav-dot"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-[#b89a68]"
                      />
                    )}

                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <Link
            href="/booking"
            className="group hidden items-center gap-2 rounded-full bg-[#302426] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#302426]/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#211a1b] md:flex"
          >
            <CalendarDays size={15} />

            Book a Visit

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={open}
            className="relative z-[70] grid h-11 w-11 place-items-center rounded-full border border-[#e6ded4] bg-[#fffcf8] text-[#302426] transition hover:border-[#b89a68] hover:text-[#92774d] md:hidden"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                >
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.8,
                  }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
                ease,
              }}
              className="overflow-hidden border-t border-[#e6ded4] bg-[#fffcf8]"
            >
              <nav className="container-page py-5 md:hidden">
                <div className="space-y-1">
                  {links.map(
                    ([href, label], index) => {
                      const active =
                        isActive(href);

                      return (
                        <motion.div
                          key={href}
                          initial={{
                            opacity: 0,
                            x: -15,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay: index * 0.045,
                            duration: 0.3,
                            ease,
                          }}
                        >
                          <Link
                            href={href}
                            className={`flex items-center justify-between rounded-xl px-4 py-4 transition ${
                              active
                                ? "bg-[#f1e9dc] text-[#92774d]"
                                : "text-[#766b69] hover:bg-[#f8f5ef]"
                            }`}
                          >
                            <span className="flex items-center gap-3 text-sm font-semibold">
                              <span
                                className={`h-1.5 w-1.5 rounded-full ${
                                  active
                                    ? "bg-[#b89a68]"
                                    : "bg-[#d8cec3]"
                                }`}
                              />

                              {label}
                            </span>

                            <ArrowUpRight
                              size={16}
                              className={
                                active
                                  ? "text-[#b89a68]"
                                  : "text-[#b9afaa]"
                              }
                            />
                          </Link>
                        </motion.div>
                      )
                    }
                  )}
                </div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 0.35,
                  }}
                  className="mt-4 border-t border-[#e6ded4] pt-4"
                >
                  <Link
                    href="/booking"
                    className="flex items-center justify-center gap-2 rounded-full bg-[#302426] px-5 py-4 text-sm font-semibold text-white"
                  >
                    <CalendarDays size={16} />
                    Book a Visit
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MOBILE BACKDROP */}
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#211a1b]/10 backdrop-blur-[2px] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}