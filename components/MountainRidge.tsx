type Props = {
  className?: string;
  fill?: string;
  flip?: boolean;
};

export default function MountainRidge({ className = "", fill = "var(--color-cream)", flip = false }: Props) {
  return (
    <div className={`w-full leading-none ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 160"
        className="w-full h-auto block"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 160 L0 96 L120 52 L230 96 L340 28 L430 84 L540 12 L650 76 L760 40 L860 96 L960 60 L1080 110 L1180 70 L1300 118 L1440 84 L1440 160 Z"
          fill={fill}
          opacity="0.55"
        />
        <path
          d="M0 160 L0 120 L100 80 L210 130 L320 64 L420 112 L520 48 L630 104 L730 68 L840 128 L950 92 L1060 140 L1170 100 L1290 144 L1440 116 L1440 160 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
