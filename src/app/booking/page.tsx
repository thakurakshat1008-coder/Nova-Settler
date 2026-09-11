"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { Calendar, ShieldCheck, PlaneTakeoff } from "lucide-react";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    destination: "crystal-spires",
    travelDate: "",
    tier: "first-class"
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleBooking = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-deep-space flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-panel p-12 rounded-3xl text-center max-w-md"
        >
          <div className="w-20 h-20 bg-stellar-gold rounded-full flex items-center justify-center mx-auto mb-6 text-deep-space">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-3xl font-display font-bold text-white mb-4">Booking Confirmed</h1>
          <p className="text-white/60 mb-8">Your journey to the stars is now secured. Check your dashboard for the flight manifest.</p>
          <Button variant="primary" className="w-full" onClick={() => window.location.href = "/dashboard"}>
            Go to Dashboard
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-space py-24 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12">
        <div className="text-left">
          <h1 className="text-5xl font-display font-bold text-white mb-6">Reserve Your <br /><span className="text-stellar-gold">Odyssey</span></h1>
          <p className="text-white/60 text-lg mb-8">Complete your credentials and select your departure window to begin the boarding process.</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-8 h-8 rounded-full bg-stellar-gold/20 flex items-center justify-center text-stellar-gold">1</div>
              <span>Destination Selection</span>
            </div>
            <div className={cn("flex items-center gap-4 transition-colors", step === 2 ? "text-stellar-gold" : "text-white/40")}>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">2</div>
              <span>Travel Parameters</span>
            </div>
            <div className={cn("flex items-center gap-4 transition-colors", step === 3 ? "text-stellar-gold" : "text-white/40")}>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">3</div>
              <span>Final Verification</span>
            </div>
          </div>
        </div>

        <Card className="p-8">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Choose Your Destination</h3>
              <div className="space-y-3">
                {["Crystal Spires", "Eternal Core", "Europa's Abyss", "Void Sanctuary"].map(dest => (
                  <div
                    key={dest}
                    onClick={() => setFormData({...formData, destination: dest.toLowerCase().replace(/\s+/g, '-')})}
                    className={cn(
                      "p-4 rounded-xl border cursor-pointer transition-all",
                      formData.destination === dest.toLowerCase().replace(/\s+/g, '-')
                        ? "border-stellar-gold bg-stellar-gold/10 text-white"
                        : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                    )}
                  >
                    {dest}
                  </div>
                ))}
              </div>
              <Button variant="primary" className="w-full" onClick={() => setStep(2)}>Continue</Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">Travel Parameters</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">Departure Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                    <input
                      type="date"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-white focus:outline-none focus:border-stellar-gold"
                      onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-white/40 mb-2 block">Cabin Class</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Standard", "First Class", "Nebula Suite", "Singularity"].map(tier => (
                      <div
                        key={tier}
                        onClick={() => setFormData({...formData, tier: tier.toLowerCase().replace(/\s+/g, '-')})}
                        className={cn(
                          "p-3 rounded-xl border text-center cursor-pointer text-sm transition-all",
                          formData.tier === tier.toLowerCase().replace(/\s+/g, '-')
                            ? "border-stellar-gold bg-stellar-gold/10 text-white"
                            : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10"
                        )}
                      >
                        {tier}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" className="flex-1" onClick={() => setStep(1)}>Back</Button>
                <Button variant="primary" className="flex-1" onClick={() => setStep(3)}>Verify</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-center">
              <div className="w-16 h-16 bg-stellar-gold/20 rounded-full flex items-center justify-center mx-auto text-stellar-gold mb-4">
                <PlaneTakeoff size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">Verify Itinerary</h3>
              <div className="glass-panel p-4 rounded-2xl text-left space-y-2 text-sm text-white/80">
                <div className="flex justify-between"><span>Destination:</span> <span className="text-stellar-gold">{formData.destination}</span></div>
                <div className="flex justify-between"><span>Date:</span> <span className="text-stellar-gold">{formData.travelDate || "Not selected"}</span></div>
                <div className="flex justify-between"><span>Class:</span> <span className="text-stellar-gold">{formData.tier}</span></div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" className="flex-1" onClick={() => setStep(2)}>Edit</Button>
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={handleBooking}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Confirm Booking"}
                </Button>
              </div>
            </motion.div>
          )}
        </Card>
      </div>
    </div>
  );
}
