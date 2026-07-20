"use client";

import Link from "next/link";
import { HardHat, Mail, Phone, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 hairline" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-gold/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link href="#home" className="flex items-center gap-2 group">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold shadow-md">
                <HardHat className="h-5 w-5 text-charcoal" strokeWidth={2.4} />
              </span>
              <span className="font-display text-2xl">
                Skandha Constructions<span className="text-gradient-cream"> .</span>
              </span>
            </Link>
            <p className="mt-6 text-ivory/65 max-w-md leading-relaxed">
              Building landmark infrastructure across the nation since 1996. A
              legacy of precision, scale and uncompromising trust — for
              governments, enterprises and visionaries.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-ivory/70 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-ivory/70 hover:border-[#E1306C] hover:bg-[#E1306C] hover:text-white transition">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-ivory/70 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-ivory/70 hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/919087353637" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-ivory/70 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-2 mb-5">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/70 hover:text-gold-2 transition text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-2 mb-5">Get in touch</h4>
            <ul className="space-y-4 text-sm text-ivory/75">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                12 Brigade Road, Bengaluru, IN 560001
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                +91 80 4000 1996
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                hello@skandhaconstructions.com
              </li>
            </ul>

            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              <p className="text-xs uppercase tracking-widest text-ivory/50 mb-3">
                Newsletter
              </p>
              <div className="flex items-center gap-2 rounded-full border border-gold/25 bg-graphite/60 p-1.5 pl-5">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
                />
                <button className="rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold text-charcoal">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Skandha Constructions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-2 transition">Privacy</a>
            <a href="#" className="hover:text-gold-2 transition">Terms</a>
            <a href="#" className="hover:text-gold-2 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
