import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const destinations = [
    {
      name: "The Crystal Spires",
      description: "Floating crystalline cities above an iridescent ocean of liquid neon.",
      location: "Kepler-186f",
      price: 150000,
      imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfdcdec9b?auto=format&fit=crop&w=800&q=80",
      details: "Enjoy the weightless architecture of the Spires, where light behaves as a physical sculpture."
    },
    {
      name: "The Eternal Core",
      description: "A journey to the center of a galaxy. Pure energy, timeless existence.",
      location: "Andromeda Sector 7",
      price: 500000,
      imageUrl: "https://images.unsplash.com/photo-1465101162946-43f9c7a5d27d?auto=format&fit=crop&w=800&q=80",
      details: "Witness the birth of stars from the safety of our singularity-shielded luxury pods."
    },
    {
      name: "Europa's Abyss",
      description: "Deep-sea luxury habitats under the ice crust of Jupiter's moon.",
      location: "Jupiter Orbit",
      price: 85000,
      imageUrl: "https://images.unsplash.com/photo-1614728894840-986987ec77ed?auto=format&fit=crop&w=800&q=80",
      details: "Explore the bioluminescent depths of Europa's ocean in our diamond-glass submarines."
    },
    {
      name: "The Void Sanctuary",
      description: "The ultimate in isolation. A sanctuary at the edge of the observable universe.",
      location: "The Great Attractor",
      price: 1200000,
      imageUrl: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
      details: "Total silence. Total peace. The most exclusive destination for those who seek absolute solitude."
    }
  ];

  for (const dest of destinations) {
    await prisma.destination.upsert({
      where: { id: dest.name.toLowerCase().replace(/\s+/g, '-') },
      update: {},
      create: {
        id: dest.name.toLowerCase().replace(/\s+/g, '-'),
        ...dest
      }
    });
  }

  console.log("✅ Destinations seeded successfully");
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());
