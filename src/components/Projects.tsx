"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Clock, CheckCircle, ArrowUpRight } from "lucide-react";
import { RESIDENTIAL_PROJECTS, COMMERCIAL_PROJECTS, type PortfolioStatus } from "@/lib/data";

type TabType = "Residential" | "Commercial";
type FilterType = "All" | PortfolioStatus;

const STATUS_BADGE: Record<PortfolioStatus, { label: string; cls: string }> = {
  Ongoing: { label: "Ongoing", cls: "bg-orange-100 text-orange-700 border-orange-200" },
  Completed: { label: "Completed", cls: "bg-green-100 text-green-700 border-green-200" },
};

export default function Projects() {
  const [tab, setTab] = useState<TabType>("Residential");
  const [filter, setFilter] = useState<FilterType>("All");

  const baseProjects = tab === "Residential" ? RESIDENTIAL_PROJECTS : COMMERCIAL_PROJECTS;
  const filtered = filter === "All" ? baseProjects : baseProjects.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-pearl/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
            <span className="h-px w-8 bg-gold" /> Selected Portfolio <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Landmarks we&apos;re{" "}
            <span className="text-gradient-gold italic">proud</span> of.
          </h2>
        </div>

        {/* Tab + Filter bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Tabs */}
          <div className="inline-flex items-center gap-1 rounded-full glass p-1.5">
            {(["Residential", "Commercial"] as const).map((t) => (
              <button
                key={t}
                onClick={() => { setTab(t); setFilter("All"); }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  tab === t ? "bg-charcoal text-ivory shadow-md" : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {t === "Residential" ? "🏠 Residential" : "🏢 Commercial"}
              </button>
            ))}
          </div>

          {/* Status filters */}
          <div className="inline-flex items-center gap-1 rounded-full glass p-1.5">
            {(["All", "Ongoing", "Completed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  filter === f ? "bg-charcoal text-ivory shadow-md" : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={`${tab}-${p.id}`}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
                className="group relative overflow-hidden rounded-3xl border border-gold/15 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

                  {/* Status badge */}
                  <span
                    className={`absolute top-4 left-4 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${STATUS_BADGE[p.status].cls}`}
                  >
                    {p.status === "Ongoing" ? (
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {STATUS_BADGE[p.status].label}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" /> {STATUS_BADGE[p.status].label}
                      </span>
                    )}
                  </span>

                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-charcoal opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>

                  {/* Info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory">
                    <h3 className="font-display text-xl sm:text-2xl leading-tight">{p.name}</h3>
                    <p className="mt-1.5 text-xs text-ivory/55">{p.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-charcoal/50 mt-12 text-sm">
            No projects found for this filter.
          </p>
        )}
      </div>
    </section>
  );
}
