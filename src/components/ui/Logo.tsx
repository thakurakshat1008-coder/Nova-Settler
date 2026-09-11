"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeMap = {
    sm: { icon: 24, text: "text-sm" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 64, text: "text-4xl" },
  };

  const { icon, text } = sizeMap[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
      >
        {/* Background Glow */}
        <defs>
          <radialGradient id="logoGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#logoGlow)" />

        {/* Orbital Rings */}
        <ellipse
          cx="50"
          cy="50"
          rx="45"
          ry="15"
          stroke="#D4AF37"
          strokeWidth="2"
          transform="rotate(-30 50 50)"
          className="opacity-60"
        />
        <ellipse
          cx="50"
          cy="50"
          rx="45"
          ry="15"
          stroke="#D4AF37"
          strokeWidth="2"
          transform="rotate(30 50 50)"
          className="opacity-60"
        />

        {/* Central Star */}
        <path
          d="M50 20L55 45L80 50L55 55L50 80L45 55L20 50L45 45Z"
          fill="#D4AF37"
          className="animate-pulse"
        />

        {/* Inner Accent */}
        <path
          d="M50 35L53 47L65 50L53 53L50 65L47 53L35 50L47 47Z"
          fill="#05070A"
        />
      </svg>
      {showText && (
        <span className={cn("font-display font-bold text-white tracking-tighter", text)}>
          NOVA<span className="text-stellar-gold">STELLAR</span>
        </span>
      )}
    </div>
  );
}
