"use client";

import { useState } from "react";
import { rooms } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // In production, wire this up to an API route, email service, or booking backend.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-[var(--color-deodar)]/10 flex items-center justify-center mb-5">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M4 12l6 6L20 6" stroke="var(--color-deodar)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-2xl text-[var(--color-charcoal)] mb-3">
          Thank you — message sent
        </h3>
        <p className="text-[var(--color-ink)]/65 max-w-sm mx-auto leading-relaxed">
          We usually reply within a few hours. For anything urgent, call or WhatsApp
          us directly using the details alongside this form.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[var(--color-cream-deep)] p-7 md:p-9">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mb-2">
            Full name
          </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Your name"
            className="w-full rounded-lg border border-[var(--color-cream-deep)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/40 focus:border-[var(--color-rust)] transition"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mb-2">
            Phone or WhatsApp
          </label>
          <input
            required
            type="tel"
            name="phone"
            placeholder="+91 00000 00000"
            className="w-full rounded-lg border border-[var(--color-cream-deep)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/40 focus:border-[var(--color-rust)] transition"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mb-2">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-lg border border-[var(--color-cream-deep)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/40 focus:border-[var(--color-rust)] transition"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mb-2">
            Check-in
          </label>
          <input
            required
            type="date"
            name="checkin"
            className="w-full rounded-lg border border-[var(--color-cream-deep)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/40 focus:border-[var(--color-rust)] transition"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mb-2">
            Check-out
          </label>
          <input
            required
            type="date"
            name="checkout"
            className="w-full rounded-lg border border-[var(--color-cream-deep)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/40 focus:border-[var(--color-rust)] transition"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mb-2">
            Guests
          </label>
          <input
            required
            type="number"
            min={1}
            name="guests"
            placeholder="2"
            className="w-full rounded-lg border border-[var(--color-cream-deep)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/40 focus:border-[var(--color-rust)] transition"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mb-2">
            Preferred room
          </label>
          <select
            name="room"
            className="w-full rounded-lg border border-[var(--color-cream-deep)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/40 focus:border-[var(--color-rust)] transition bg-white"
          >
            <option value="">No preference</option>
            {rooms.map((r) => (
              <option key={r.slug} value={r.name}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="block text-xs uppercase tracking-wide text-[var(--color-ink)]/50 mb-2">
            Anything we should know?
          </label>
          <textarea
            name="message"
            rows={4}
            placeholder="Dietary needs, arrival time, trekking interests, etc."
            className="w-full rounded-lg border border-[var(--color-cream-deep)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/40 focus:border-[var(--color-rust)] transition resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wide bg-[var(--color-rust)] text-white hover:bg-[var(--color-rust-deep)] transition-all disabled:opacity-60"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>
      <p className="mt-4 text-xs text-[var(--color-ink)]/45">
        This form is a front-end demo — connect it to an email service or booking API to receive live inquiries.
      </p>
    </form>
  );
}
