# Dhauladhar Basera — Homestay Website (Shahpur, Kangra)

A full Next.js 16 (App Router) website for a homestay in Shahpur, Kangra, Himachal Pradesh.

## Pages included
- `/` — Home (hero, intro, room previews, experiences strip, testimonials, CTA)
- `/about` — Our Story (family history, timeline, hosts, values)
- `/rooms` — Rooms & Rates (all 4 rooms with details)
- `/rooms/[slug]` — Individual room detail pages (gallery, amenities, booking card)
- `/experiences` — Things to do (kitchen table, tea gardens, treks, day trips)
- `/gallery` — Filterable photo gallery
- `/explore` — Explore Shahpur & Kangra (nearby attractions, embedded map, FAQ)
- `/contact` — Contact & booking inquiry form

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Customizing

- **Site info** (phone, email, address, room data, testimonials, attractions, FAQs):
  edit `lib/data.ts` — everything content-related lives in this one file.
- **Colors & fonts**: CSS variables are defined in `app/globals.css` (`--color-*`)
  and fonts are loaded in `app/layout.tsx` (Fraunces + Manrope via next/font/google).
- **Images**: currently sourced from Unsplash for placeholder purposes — replace
  the URLs in `lib/data.ts` and `app/page.tsx`/`app/about/page.tsx` with your own
  photos. If hosting images locally, drop them in `/public` and update `next.config.ts`
  if you remove the Unsplash remote pattern.
- **Contact form**: `components/ContactForm.tsx` currently simulates a submission.
  Wire it up to an API route, email service (Resend, SendGrid), or a booking backend
  to receive real inquiries.
- **Map embeds**: both `/contact` and `/explore` use a basic Google Maps iframe embed
  keyed to "Shahpur, Kangra". Replace with your exact coordinates/Place ID for precision.

## Stack
- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- next/font (Google Fonts: Fraunces + Manrope)
