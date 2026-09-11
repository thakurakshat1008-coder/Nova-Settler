"use client";

import { motion } from "framer-motion";
import Card from "../ui/Card";
import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";
import RevealText from "../animations/RevealText";

const DESTINATIONS = [
  {
    id: "k-186f",
    name: "The Crystal Spires",
    location: "Kepler-186f",
    price: 150000,
    image: "https://images.unsplash.com/photo-1462331940025-496dfdcdec9b?auto=format&fit=crop&w=800&q=80",
    desc: "Floating crystalline cities above an iridescent ocean of liquid neon."
  },
  {
    id: "andromeda",
    name: "The Eternal Core",
    location: "Andromeda Sector 7",
    price: 500000,
    image: "https://images.unsplash.com/photo-1465101162946-43f9c7a5d27d?auto=format&fit=crop&w=800&q=80",
    desc: "A journey to the center of a galaxy. Pure energy, timeless existence."
  },
  {
    id: "europa",
    name: "Europa's Abyss",
    location: "Jupiter Orbit",
    price: 85000,
    image: "https://images.unsplash.com/photo-1614728894840-986987ec77ed?auto=format&fit=crop&w=800&q=80",
    desc: "Deep-sea luxury habitats under the ice crust of Jupiter's moon."
  },
  {
    id: "void",
    name: "The Void Sanctuary",
    location: "The Great Attractor",
    price: 1200000,
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    desc: "The ultimate in isolation. A sanctuary at the edge of the observable universe."
  }
];

export default function DestinationGrid() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto relative">
      <div className="text-center mb-20">
        <RevealText
          text="Curated Interstellar Journeys"
          className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
        />
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Carefully selected coordinates for the most discerning travelers of the galaxy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {DESTINATIONS.map((dest, i) => (
          <ScrollReveal key={dest.id} delay={i * 0.2} direction={i % 2 === 0 ? "left" : "right"}>
            <Card className="group overflow-hidden">
              <div className="relative h-64 w-full mb-6 overflow-hidden rounded-2xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-stellar-gold text-deep-space px-3 py-1 rounded-full text-xs font-bold">
                  {dest.price.toLocaleString()} Credits
                </div>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{dest.name}</h3>
                  <p className="text-stellar-gold text-sm font-medium">{dest.location}</p>
                </div>
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center group-hover:bg-stellar-gold transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-deep-space transition-colors">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              </div>

              <p className="text-white/60 mb-6 leading-relaxed">
                {dest.desc}
              </p>

              <Button variant="secondary" className="w-full">
                View Itinerary
              </Button>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
