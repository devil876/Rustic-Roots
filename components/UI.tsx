import Link from "next/link";
import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[var(--color-rust)]">
      <span className="w-6 h-px bg-[var(--color-rust)]" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 font-[family-name:var(--font-display)] text-4xl md:text-5xl leading-[1.1] text-balance ${
          light ? "text-white" : "text-[var(--color-charcoal)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-[var(--color-ink)]/70"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  variant = "solid",
  ...props
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const styles = {
    solid:
      "bg-[var(--color-rust)] text-white hover:bg-[var(--color-rust-deep)]",
    outline:
      "border border-[var(--color-charcoal)]/25 text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-white",
    light:
      "bg-white text-[var(--color-charcoal)] hover:bg-[var(--color-cream)]",
  };

  return (
    <Link
      href={href}
      {...props}
      className={`inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${styles[variant]}`}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M3 8h10M9 4l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

export function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[var(--color-rust)]">
        {value}
      </div>
      <div className="text-xs uppercase tracking-[0.15em] text-[var(--color-ink)]/60 mt-1">
        {label}
      </div>
    </div>
  );
}
