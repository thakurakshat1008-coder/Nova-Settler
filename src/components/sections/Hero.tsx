"use client";

import { motion } from "framer-motion";
import RevealText from "../animations/RevealText";
import BlurFade from "../animations/BlurFade";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="nebula-glow absolute top-[-10%] left-[-10%] w-[50%] h-[50%]" />
        <div className="nebula-glow absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%]" />
        {/* Simple starfield effect */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="px-4 py-1 rounded-full border border-stellar-gold/30 text-stellar-gold text-xs uppercase tracking-widest backdrop-blur-md bg-stellar-gold/5">
            Now Booking for Galactic Cycle 2027
          </span>
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-tight">
          <RevealText
            text="Beyond the Horizon of the Known"
            className="text-white"
          />
        </h1>

        <BlurFade delay={0.5} className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            Experience the universe's most exclusive destinations. From the crystalline spires
            of Kepler-186f to the eternal glow of the Andromeda core.
          </p>
        </BlurFade>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" variant="primary">
            Explore Destinations
          </Button>
          <Button size="lg" variant="secondary">
            Meet Your Concierge
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-stellar-gold rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
