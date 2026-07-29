"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl -z-10" />
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-gold-2/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
            <span className="h-px w-8 bg-gold" /> Let’s Build
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Start your <span className="text-gradient-gold italic">next landmark</span> with us.
          </h2>
          <p className="mt-6 text-charcoal/70 leading-relaxed max-w-xl text-lg">
            Whether you’re commissioning a megaproject or leasing a single
            excavator for a weekend, our team responds within one business
            hour. Reach us directly — no forms, no waiting.
          </p>
        </motion.div>

        {/* Direct contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {[
            { icon: Phone, label: "Call us", value: "+91 98654 60607", href: "tel:+919865460607" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: "https://wa.me/919865460607" },
            { icon: Mail, label: "Email", value: "support@skandhaconstructions.com", href: "mailto:support@skandhaconstructions.com" },
            { icon: MapPin, label: "Headquarters", value: "28, Siva Sakthi Colony, Kuruchi, SIDCO Post, Coimbatore, Tamil Nadu, 641021", href: "https://maps.google.com/?q=Coimbatore" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col rounded-3xl border border-gold/15 bg-white/60 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-lg">
                  <c.icon className="h-5 w-5 text-charcoal" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-charcoal/30 group-hover:text-charcoal/70 transition" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-charcoal/50">{c.label}</p>
              <p className="mt-1 text-base font-medium text-charcoal leading-snug">{c.value}</p>
            </a>
          ))}
        </motion.div>

        {/* Office hours + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid lg:grid-cols-3 gap-5"
        >
          <div className="lg:col-span-2 grid grid-cols-3 gap-4">
            {["Mon–Sat", "08:00–20:00", "24/7 Fleet"].map((s, i) => (
              <div key={i} className="rounded-2xl border border-gold/15 bg-white/50 p-5 text-center flex flex-col justify-center">
                <p className="font-display text-2xl text-gradient-gold">{s.split(" ")[0]}</p>
                <p className="text-xs text-charcoal/60 mt-1">{s.split(" ").slice(1).join(" ") || "Office"}</p>
              </div>
            ))}
          </div>

          <a
            href="tel:+919865460607"
            className="shine flex items-center justify-center gap-2 rounded-2xl bg-charcoal px-8 py-6 text-base font-medium text-ivory hover:bg-graphite transition shadow-xl shadow-charcoal/20"
          >
            <Phone className="h-5 w-5" /> Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
