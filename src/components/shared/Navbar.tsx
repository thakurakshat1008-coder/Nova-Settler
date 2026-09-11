"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "py-3 glass-panel" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo size="md" />

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          {["Destinations", "Expeditions", "Fleet", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-stellar-gold transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button size="sm" variant="primary">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
