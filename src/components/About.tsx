"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Credentials panel — replaces stock founder photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-5"
          >
            {/* Hero stat */}
            <div className="bg-gradient-wine rounded-3xl p-8 text-ivory shadow-2xl">
              <p className="font-display text-8xl sm:text-9xl leading-none text-white/90">14+</p>
              <p className="mt-2 text-white/60 text-xs uppercase tracking-[0.3em] font-medium">Years of Excellence</p>
              <p className="mt-4 text-white/75 text-sm leading-relaxed max-w-xs">
                From foundations to final finishing — every project delivered with engineering precision and on-time accountability.
              </p>
            </div>

            {/* Two mini-stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-gold/20 bg-white/50 p-6 hover-lift">
                <p className="font-display text-4xl text-gradient-gold leading-none">420+</p>
                <p className="mt-2 text-xs text-charcoal/55 uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div className="rounded-2xl border border-gold/20 bg-white/50 p-6 hover-lift">
                <p className="font-display text-4xl text-gradient-gold leading-none">180+</p>
                <p className="mt-2 text-xs text-charcoal/55 uppercase tracking-wider">Machine Fleet</p>
              </div>
            </div>

            {/* Credential badges */}
            <div className="rounded-2xl border border-gold/15 bg-white/40 p-5">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-deep mb-3 font-medium">Certifications &amp; Compliance</p>
              <div className="flex flex-col gap-2">
                {[
                  "ISO 9001:2015 Certified",
                  "Government Class-A Registered",
                  "HSE Protocol Compliant",
                  "LEED Aligned Practices",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0" />
                    <span className="text-sm text-charcoal/70 font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Story + feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
              <span className="h-px w-8 bg-gold" />
              About Skandha Constructions
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              14+ years of <span className="text-gradient-gold italic">precision,</span> scale &amp; trust.
            </h2>
            <p className="mt-2 text-sm font-semibold text-gold-deep tracking-wide">
              Led by Karuppusamy Udhayakumar
            </p>
            <p className="mt-4 text-base sm:text-lg text-charcoal/70 leading-relaxed">
              Founded with a vision to deliver world-class construction services, Skandha Constructions
              has grown into one of the region&apos;s most trusted names in civil and structural
              construction, backed by a 180+ strong fleet of earth-moving machinery.
            </p>
            <p className="mt-4 text-sm text-charcoal/60 leading-relaxed">
              Our work spans government infrastructure, private developments, and large-scale
              industrial projects. Through our sister brand{" "}
              <span className="font-semibold" style={{ color: "#f5a623" }}>DiyaDev Developers</span>,
              we also deliver quality residential and commercial real estate across the region.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Engineering Excellence",
                  desc: "Senior structural engineers on every project, with rigorous QA gates.",
                },
                {
                  title: "Fleet at Scale",
                  desc: "180+ heavy machines, 24/7 maintenance and certified operators.",
                },
                {
                  title: "Compliance First",
                  desc: "ISO certified, government Class-A registered, full HSE protocols.",
                },
                {
                  title: "On-Time Delivery",
                  desc: "96% of projects delivered on or before contractual deadline.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-gold/15 bg-white/40 p-5 hover:border-gold/40 transition">
                  <h4 className="font-display text-lg text-charcoal">{f.title}</h4>
                  <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold-deep transition-colors group"
            >
              Discover what we do
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
