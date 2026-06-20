"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Check, Truck, ShieldCheck, Gauge, Wrench } from "lucide-react";

const EQUIPMENT_TYPES = [
  "Excavators",
  "Bulldozers",
  "Motor Graders",
  "Compactors",
  "Dumpers",
  "Cranes",
  "Transit Mixers",
  "Wheel Loaders",
  "Backhoe Loaders",
  "Other",
];

function Field({
  label, name, type = "text", placeholder, required = true,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#607848" }}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition"
        style={{ borderColor: "#bdd4a5", backgroundColor: "#fff" }}
      />
    </div>
  );
}

export default function Equipment() {
  const [sent, setSent] = useState(false);

  return (
    <section id="equipment" className="py-24 sm:py-32 relative overflow-hidden bg-charcoal text-ivory">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 hairline" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold-deep/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-2">
              <span className="h-px w-8 bg-gold" /> Equipment Leasing
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Need Heavy Equipment <br />
              <span className="text-gradient-cream italic">for Your Project?</span>
            </h2>
            <p className="mt-6 text-ivory/70 leading-relaxed max-w-lg">
              We provide a <span className="text-gold-2 font-semibold">180+ fleet</span> of premium
              earth-moving machinery available for lease across India — daily, monthly, and
              full-project terms.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {[
                { icon: Truck, title: "180+ Machines", desc: "Excavators, bulldozers, cranes, graders, compactors & more." },
                { icon: ShieldCheck, title: "Fully Insured", desc: "Comprehensive coverage on every lease arrangement." },
                { icon: Wrench, title: "24/7 Service", desc: "Mobile maintenance crews on call, zero downtime." },
                { icon: Gauge, title: "Live Telematics", desc: "Real-time monitoring and reporting on all machines." },
              ].map((b) => (
                <div key={b.title} className="rounded-2xl glass p-5 flex items-start gap-4">
                  <div
                    className="h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"
                    style={{ background: "linear-gradient(135deg, #f2f6ed, #bdd4a5)" }}
                  >
                    <b.icon className="h-5 w-5 text-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-display text-base text-ivory">{b.title}</h4>
                    <p className="text-xs text-ivory/60 mt-1 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — enquiry form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
              (e.target as HTMLFormElement).reset();
            }}
            className="relative rounded-3xl border p-6 sm:p-10 shadow-2xl"
            style={{ backgroundColor: "#f2f6ed", borderColor: "rgba(74,124,42,0.25)" }}
          >
            <div
              className="absolute -inset-1 rounded-3xl blur-xl -z-10 opacity-50"
              style={{ background: "linear-gradient(135deg, rgba(74,124,42,0.2), transparent, rgba(158,196,104,0.15))" }}
            />

            <h3 className="font-display text-2xl sm:text-3xl" style={{ color: "#1c3c0e" }}>
              Send an Enquiry
            </h3>
            <p className="text-sm mt-2" style={{ color: "#607848" }}>
              Tell us your requirements — we respond within 1 business hour.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" placeholder="Your name" />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+91 ..." />
            </div>

            <div className="mt-5">
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#607848" }}>
                Equipment Type
              </label>
              <select
                name="equipment_type"
                required
                className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition"
                style={{ borderColor: "#bdd4a5", backgroundColor: "#fff", color: "#1c3c0e" }}
              >
                <option value="">Select equipment type...</option>
                {EQUIPMENT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 gap-5">
              <Field label="Project Location" name="location" placeholder="City, State" />
              <Field label="Project Duration" name="duration" placeholder="e.g. 3 months" />
            </div>

            <div className="mt-5">
              <label className="block text-xs uppercase tracking-widest mb-2" style={{ color: "#607848" }}>
                Message / Requirements
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Describe your project needs, quantity required, timeline..."
                className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none transition resize-none"
                style={{ borderColor: "#bdd4a5", backgroundColor: "#fff" }}
              />
            </div>

            <button
              type="submit"
              className="shine mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-ivory transition shadow-xl"
              style={{ backgroundColor: "#2d5a16" }}
            >
              {sent ? (
                <><Check className="h-4 w-4" /> Enquiry Sent!</>
              ) : (
                <><Send className="h-4 w-4" /> Send Enquiry</>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
