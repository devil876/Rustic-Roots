import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)] relative overflow-hidden">
      <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-[var(--color-rust)]/10 blur-3xl" />
      <div className="absolute -left-16 bottom-0 w-56 h-56 rounded-full bg-[var(--color-deodar)]/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-[family-name:var(--font-display)] italic text-2xl md:text-3xl mb-4">
              {SITE.name}
            </h3>
            <p className="text-[var(--color-cream)]/70 max-w-sm leading-relaxed text-sm">
              A four-room family homestay on the pine slopes above Shahpur, Kangra —
              facing the Dhauladhar range, minutes from tea gardens, and built around
              a kitchen table that never quite empties.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[var(--color-cream)]/40">
              {SITE.address}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-cream)]/75">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/rooms" className="hover:text-white transition-colors">Rooms &amp; Rates</Link></li>
              <li><Link href="/experiences" className="hover:text-white transition-colors">Experiences</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/explore" className="hover:text-white transition-colors">Explore Shahpur</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-4">
              Reach Us
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--color-cream)]/75">
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <Link href="/contact" className="inline-block mt-2 px-4 py-2 rounded-full bg-[var(--color-rust)] text-white text-xs font-semibold uppercase tracking-wide hover:bg-[var(--color-rust-deep)] transition-colors">
                  Book a Stay
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[var(--color-cream)]/40">
          <p>© {new Date().getFullYear()} {SITE.name}. Shahpur, Kangra, Himachal Pradesh.</p>
          <p>Built with care, one kettle of chai at a time.</p>
        </div>
      </div>
    </footer>
  );
}
