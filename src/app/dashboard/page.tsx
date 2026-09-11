"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Wallet, Calendar, MapPin, LogOut } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState({
    name: "Commander Orion",
    credits: 1250000,
    rank: "Elite Voyager"
  });

  const [bookings, setBookings] = useState([
    { id: "b1", destination: "Crystal Spires", date: "2027-04-12", status: "CONFIRMED" },
    { id: "b2", destination: "Europa's Abyss", date: "2027-08-20", status: "PENDING" }
  ]);

  return (
    <div className="min-h-screen bg-deep-space py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold text-white mb-2">Welcome, {user.name}</h1>
            <p className="text-stellar-gold font-medium uppercase tracking-widest text-sm">{user.rank}</p>
          </div>
          <Button variant="secondary" className="flex items-center gap-2">
            <LogOut size={18} /> Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-stellar-gold/20 flex items-center justify-center text-stellar-gold">
              <Wallet size={24} />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Galactic Credits</p>
              <p className="text-2xl font-bold text-white">{user.credits.toLocaleString()}</p>
            </div>
          </Card>

          <Card className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-nebula-violet/20 flex items-center justify-center text-nebula-violet">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Upcoming Trips</p>
              <p className="text-2xl font-bold text-white">{bookings.length}</p>
            </div>
          </Card>

          <Card className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest">Sectors Explored</p>
              <p className="text-2xl font-bold text-white">14</p>
            </div>
          </Card>
        </div>

        <h2 className="text-2xl font-display font-bold text-white mb-6">Your Flight Manifest</h2>
        <div className="grid grid-cols-1 gap-4">
          {bookings.map((booking, i) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex items-center justify-between p-4 hover:border-stellar-gold/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
                    <PlaneTakeoff size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold">{booking.destination}</p>
                    <p className="text-white/40 text-sm">{booking.date}</p>
                  </div>
                </div>
                <div className={cn(
                  "px-3 py-1 rounded-full text-xs font-bold",
                  booking.status === "CONFIRMED" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
                )}>
                  {booking.status}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlaneTakeoff(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M14.7 14.7L14 15" />
    </svg>
  );
}
