"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Send, Bot, User, X } from "lucide-react";

interface Message {
  role: "user" | "astra";
  content: string;
}

export default function AstraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "astra", content: "Greetings, Traveler. I am Astra, your Nova Stellar concierge. Where in the cosmos shall we take you today?" }
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);

    // Simulate Astra's "thinking" and response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: "astra",
        content: `Analyzing stellar coordinates for "${userMsg}"... I recommend the Crystal Spires of Kepler-186f for your preference. Would you like to see the flight itinerary?`
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-stellar-gold shadow-[0_0_20px_rgba(212,175,55,0.5)] flex items-center justify-center text-deep-space cursor-pointer"
          >
            <Bot size={32} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass-panel w-80 md:w-96 h-[500px] rounded-3xl flex flex-col overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-stellar-gold rounded-full flex items-center justify-center text-deep-space">
                  <Bot size={18} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Astra</h4>
                  <span className="text-stellar-gold text-[10px] uppercase tracking-widest">AI Concierge</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={cn("flex gap-3", msg.role === "user" ? "flex-row-reverse" : "flex-row")}>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    msg.role === "user" ? "bg-white/10 text-white" : "bg-stellar-gold text-deep-space"
                  )}>
                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={cn(
                    "p-3 rounded-2xl text-sm max-w-[80%]",
                    msg.role === "user"
                      ? "bg-stellar-gold text-deep-space rounded-tr-none"
                      : "bg-white/10 text-white rounded-tl-none"
                  )}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex gap-2 bg-white/5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Astra..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-stellar-gold transition-colors"
              />
              <button type="submit" className="p-2 bg-stellar-gold text-deep-space rounded-full hover:bg-yellow-500 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
