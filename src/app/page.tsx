import Hero from "@/components/sections/Hero";
import DestinationGrid from "@/components/sections/DestinationGrid";
import Navbar from "@/components/shared/Navbar";
import AstraChat from "@/components/sections/AstraChat";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-space">
      <Navbar />
      <AstraChat />

      {/* Background glow effect
 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="nebula-glow absolute top-[-20%] left-[-10%] w-[60%] h-[60%]" />
        <div className="nebula-glow absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] opacity-10" />
      </div>

      <div className="relative z-10">
        <Hero />

        {/* Introduction Section */}
        <section className="py-32 px-4 max-w-4xl mx-auto text-center relative">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
              The Universe is No Longer <span className="text-stellar-gold">Out of Reach</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              For centuries, we looked at the stars with longing. Now, we navigate them with luxury.
              Nova Stellar provides the most advanced transit systems in the quadrant,
              ensuring your journey is as breathtaking as the destination.
            </p>
          </div>
        </section>

        <DestinationGrid />

        {/* Final CTA Section */}
        <section className="py-32 px-4 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-nebula-violet/10 blur-3xl rounded-full scale-50" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Ready to Leave <br />
              <span className="text-stellar-gold">Earth Behind?</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto">
              Our limited-entry flight cycle begins next month. Secure your cabin in the
              most exclusive fleet in the galaxy.
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-stellar-gold text-deep-space px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all transform hover:scale-105">
                Reserve Your Seat
              </button>
            </div>
          </div>
        </section>

        <footer className="py-12 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2026 Nova Stellar Interstellar. All Rights Reserved. Galactic Council Certified.</p>
        </footer>
      </div>
    </main>
  );
}
