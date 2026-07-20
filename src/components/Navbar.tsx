"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-1.5" : "py-3"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-[auto_1fr_auto] items-center rounded-2xl px-5 sm:px-7 gap-4 transition-all duration-500 ${
            scrolled
              ? "py-2 glass shadow-[0_8px_40px_-8px_rgba(45,90,22,0.25)] border border-gold/20"
              : "py-3 bg-ivory/20 backdrop-blur-md border border-white/20"
          }`}
        >
          {/* Logo — left column, sized container with fill for reliable large rendering */}
          <Link href="#home" className="flex items-center group">
            <div
              className={`relative transition-all duration-300 group-hover:scale-[1.03] ${
                scrolled ? "h-[75px] w-[235px]" : "h-[130px] w-[300px]"
              }`}
            >
              <Image
                src="/images/logo1.png"
                alt="Skandha Constructions"
                fill
                sizes="(max-width: 1024px) 235px, 300px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop navigation — centred in the middle column */}
          <nav className="hidden lg:flex items-center justify-center gap-0.5">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3.5 py-2.5 text-sm font-semibold text-charcoal/70 hover:text-charcoal transition-colors duration-200 group"
              >
                {l.label}
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 w-0 rounded-full bg-linear-to-r from-transparent via-gold to-transparent transition-all duration-300 group-hover:w-4/5" />
              </a>
            ))}
          </nav>

          {/* Right-side CTA — right column */}
          <div className="hidden lg:flex items-center gap-4 justify-end">
            {/* CTA button */}
            <a
              href="#contact"
              className="shine group inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-ivory hover:bg-graphite hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-charcoal/25"
            >
              Request a Quote
              <span className="h-2 w-2 rounded-full bg-gold-2 group-hover:scale-125 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile hamburger — right column on small screens */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 text-charcoal hover:bg-gold/10 hover:border-gold/60 active:scale-95 transition-all duration-150"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-2xl border border-gold/20"
            >
              <nav className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-base font-medium text-charcoal/80 hover:text-charcoal border-b border-gold/10 last:border-0 transition-colors duration-150"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex justify-center items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-ivory shadow-lg"
                >
                  Request a Quote
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-2" />
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
