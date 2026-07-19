import type { Metadata } from "next";
import MountainRidge from "@/components/MountainRidge";
import { SectionHeading } from "@/components/UI";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Book | Dhauladhar Basera, Shahpur",
  description:
    "Check availability and book your stay at Dhauladhar Basera homestay in Shahpur, Kangra. Call, WhatsApp, or send an inquiry.",
};

const contactCards = [
  {
    label: "Call Us",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    icon: (
      <path d="M4 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 5a2 2 0 0 1 2-2z" />
    ),
  },
  {
    label: "WhatsApp",
    value: "Chat with the host family",
    href: `https://wa.me/${SITE.whatsapp}`,
    icon: <path d="M4 20l1.5-4A8 8 0 1 1 9 19l-5 1z" />,
  },
  {
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: <path d="M3 6h18v12H3zM3 6l9 7 9-7" />,
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 bg-[var(--color-pine)] overflow-hidden">
        <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-[var(--color-rust)]/10 blur-3xl" />
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center relative">
          <SectionHeading
            eyebrow="Contact & Booking"
            title="Let's get your dates on our calendar"
            description="Reach out directly, or send a short inquiry below — we typically confirm availability within a few hours."
            light
            align="center"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <MountainRidge fill="var(--color-parchment)" />
        </div>
      </section>

      <section className="bg-[var(--color-parchment)] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-5">
            {contactCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "WhatsApp" ? "_blank" : undefined}
                rel={c.label === "WhatsApp" ? "noreferrer" : undefined}
                className="flex items-start gap-4 bg-white rounded-2xl border border-[var(--color-cream-deep)] p-6 hover:border-[var(--color-rust)]/40 transition-colors group"
              >
                <span className="shrink-0 w-11 h-11 rounded-full bg-[var(--color-cream)] group-hover:bg-[var(--color-rust)]/10 flex items-center justify-center transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-rust)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {c.icon}
                  </svg>
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/45 mb-1">{c.label}</p>
                  <p className="font-medium text-[var(--color-charcoal)] text-sm">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-6">
              <p className="text-xs uppercase tracking-wide text-[var(--color-ink)]/45 mb-2">Address</p>
              <p className="text-sm text-[var(--color-charcoal)] leading-relaxed mb-4">{SITE.address}</p>
              <div className="rounded-xl overflow-hidden aspect-video border border-[var(--color-cream-deep)]">
                <iframe
                  title="Map to Dhauladhar Basera"
                  src="https://www.google.com/maps?q=Shahpur,Kangra,Himachal+Pradesh&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="bg-[var(--color-deodar)] rounded-2xl p-6 text-white/85 text-sm leading-relaxed">
              <p className="font-[family-name:var(--font-display)] text-lg text-white mb-2">
                Check-in / Check-out
              </p>
              Check-in from 12:00 PM, check-out by 11:00 AM. Early arrivals and late
              departures are usually possible — just ask.
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
