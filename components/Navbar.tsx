"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/rooms", label: "Rooms" },
  { href: "/experiences", label: "Experiences" },
  { href: "/gallery", label: "Gallery" },
  { href: "/explore", label: "Explore Shahpur" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation without a separate effect:
  // detect the pathname change during render and reset state immediately.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  const solid = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-[var(--color-parchment)]/95 backdrop-blur-sm shadow-[0_4px_24px_-8px_rgba(33,29,23,0.25)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className={`font-[family-name:var(--font-display)] text-xl md:text-2xl italic tracking-tight transition-colors ${
              solid ? "text-[var(--color-charcoal)]" : "text-white"
            }`}
          >
            {SITE.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors relative group ${
                solid ? "text-[var(--color-ink)]" : "text-white"
              } ${pathname === link.href ? "opacity-100" : "opacity-80 hover:opacity-100"}`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${
                  solid ? "bg-[var(--color-rust)]" : "bg-white"
                }`}
              />
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300 ${
            solid
              ? "bg-[var(--color-rust)] text-white hover:bg-[var(--color-rust-deep)]"
              : "bg-white/95 text-[var(--color-charcoal)] hover:bg-white"
          }`}
        >
          Book a Stay
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              solid ? "bg-[var(--color-charcoal)]" : "bg-white"
            } ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              solid ? "bg-[var(--color-charcoal)]" : "bg-white"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-300 ${
              solid ? "bg-[var(--color-charcoal)]" : "bg-white"
            } ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 bg-[var(--color-parchment)] ${
          open ? "max-h-[32rem] border-t border-[var(--color-cream-deep)]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base font-medium text-[var(--color-ink)] border-b border-[var(--color-cream-deep)] last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 text-center px-5 py-3 rounded-full bg-[var(--color-rust)] text-white text-sm font-semibold uppercase tracking-wide"
          >
            Book a Stay
          </Link>
        </div>
      </div>
    </header>
  );
}
