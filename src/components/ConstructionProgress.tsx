"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { CONSTRUCTION_PROGRESS_GALLERY } from "@/lib/data";

export default function ConstructionProgress() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + CONSTRUCTION_PROGRESS_GALLERY.length) % CONSTRUCTION_PROGRESS_GALLERY.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % CONSTRUCTION_PROGRESS_GALLERY.length));
  }, []);

  return (
    <section id="construction-progress" className="py-24 sm:py-32 bg-charcoal text-ivory relative overflow-hidden">
      <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-2">
            <span className="h-px w-8 bg-gold" /> Ongoing
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Construction <span className="text-gradient-gold italic">progress.</span>
          </h2>
          <p className="mt-4 text-ivory/65 max-w-xl leading-relaxed">
            A look at our active sites — scaffolding going up, foundations being poured and
            structures taking shape across our ongoing projects.
          </p>
        </div>

        <motion.div layout className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          <AnimatePresence mode="popLayout">
            {CONSTRUCTION_PROGRESS_GALLERY.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-gold/15 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-ivory opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={CONSTRUCTION_PROGRESS_GALLERY[lightboxIndex].src}
                alt={CONSTRUCTION_PROGRESS_GALLERY[lightboxIndex].alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                sizes="100vw"
              />

              <div className="mt-4 flex items-center justify-between text-ivory/70 text-sm px-1">
                <span className="text-xs text-gold-2">{CONSTRUCTION_PROGRESS_GALLERY[lightboxIndex].alt}</span>
                <span>{lightboxIndex + 1} / {CONSTRUCTION_PROGRESS_GALLERY.length}</span>
              </div>

              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
