import { motion } from "framer-motion";
import { useState } from "react";

type EventCategory = "ALL" | "TECH" | "NON-TECH";

interface EventItem {
  id: string;
  name: string;
  category: "TECH" | "NON-TECH";
  status: "ACTIVE" | "LOCKED" | "COMPLETED";
  clearance: "L1" | "L2" | "L3";
  description: string;
}

const events: EventItem[] = [
  { id: "EVT-001", name: "CODE SPRINT", category: "TECH", status: "ACTIVE", clearance: "L3", description: "Algorithm optimization protocols. Competitive elimination rounds." },
  { id: "EVT-002", name: "ROBO WARS", category: "TECH", status: "ACTIVE", clearance: "L3", description: "Autonomous combat units. Arena destruction authorized." },
  { id: "EVT-003", name: "HACKATHON", category: "TECH", status: "ACTIVE", clearance: "L2", description: "48-hour development cycle. Innovation under constraints." },
  { id: "EVT-004", name: "CIRCUIT DEBUG", category: "TECH", status: "ACTIVE", clearance: "L2", description: "Hardware diagnostics. Embedded system repair." },
  { id: "EVT-005", name: "QUIZ BOWL", category: "NON-TECH", status: "ACTIVE", clearance: "L1", description: "General intelligence assessment. Trivia elimination." },
  { id: "EVT-006", name: "PHOTOGRAPHY", category: "NON-TECH", status: "ACTIVE", clearance: "L1", description: "Visual documentation. Pattern recognition." },
  { id: "EVT-007", name: "AI ARENA", category: "TECH", status: "LOCKED", clearance: "L3", description: "Neural network competition. Classified datasets." },
  { id: "EVT-008", name: "TREASURE HUNT", category: "NON-TECH", status: "LOCKED", clearance: "L1", description: "Cryptographic puzzle trail. Campus-wide search." },
];

const categories: EventCategory[] = ["ALL", "TECH", "NON-TECH"];

const EventsPage = () => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("ALL");

  const filtered = activeCategory === "ALL"
    ? events
    : events.filter((e) => e.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 md:px-12 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />
      <div className="cinematic-grain" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between border-b-4 border-white pb-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-primary animate-pulse" />
              <span className="font-pixel text-xs text-primary tracking-widest">DATABASE_ACCESS // ROOT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-chrome uppercase drop-shadow-[0_0_4px_rgba(160,160,255,0.15)] transform -skew-x-6 origin-left">
              Operational<br /><span className="text-outline-only text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Protocols</span>
            </h1>
          </div>
          <div className="mt-8 md:mt-0 text-right">
            <div className="barcode-strip h-6 w-32 ml-auto mb-2 opacity-60" />
            <span className="font-tech text-xs bg-white text-black px-2 py-0.5">
              RECORDS: {String(events.length).padStart(3, '0')}
            </span>
          </div>
        </motion.div>

        {/* Filters - System Mode Selector */}
        <div className="flex flex-wrap gap-4 mb-16">
          <span className="font-pixel text-xs self-center mr-4 text-white/50">{`>>> SELECT_MODE:`}</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2 font-tech text-sm tracking-widest uppercase transition-all duration-300 border-2 ${activeCategory === cat
                ? "bg-white text-black border-white shadow-[4px_4px_0px_rgba(100,100,255,0.5)] transform -translate-y-1"
                : "text-muted-foreground border-white/20 hover:border-white hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Data Grid - Zig-Zag Timeline Layout */}
        <div className="relative flex flex-col gap-12">
          {/* Central Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />

          {filtered.map((event, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group relative bg-black border-2 border-white/20 hover:border-primary transition-all duration-300 shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-[8px_8px_0px_theme('colors.primary.DEFAULT')] overflow-hidden"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} min-h-[350px]`}>

                  {/* Graphic Side - Title Area */}
                  <div className={`md:w-1/3 bg-white/5 relative p-6 flex flex-col justify-between border-b md:border-b-0 ${isEven ? 'md:border-r' : 'md:border-l'} border-white/10 overflow-hidden`}>
                    <div className="absolute inset-0 bg-grid-thin opacity-20 pointer-events-none" />
                    <div className={`absolute inset-0 bg-primary/10 transition-transform duration-500 z-0 ${isEven ? 'translate-x-[-100%] group-hover:translate-x-0' : 'translate-x-[100%] group-hover:translate-x-0'}`} />

                    <div className="flex justify-between items-start z-10 relative">
                      <span className="font-pixel text-xs bg-black/50 backdrop-blur-md border border-white/20 text-primary px-2 py-1">
                        {event.id}
                      </span>
                      <div className={`flex items-center gap-2 border px-2 py-1 bg-black/50 backdrop-blur-md ${event.status === 'ACTIVE' ? 'border-green-500/30 text-green-400' : 'border-red-500/30 text-red-400'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${event.status === 'ACTIVE' ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                        <span className="font-mono text-[10px]">{event.status}</span>
                      </div>
                    </div>

                    <div className="relative z-10 mt-6 md:mt-auto mb-6">
                      <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-transparent stroke-white text-outline-only group-hover:text-white transition-colors duration-500 leading-[0.9] break-words" style={{ WebkitTextStroke: '1px white' }}>
                        {event.name}
                      </h3>
                    </div>

                    <div className="relative z-10">
                      <span className="font-tech text-xs text-muted-foreground tracking-[0.2em] block mb-1">DIVISION // {event.category}</span>
                      <div className={`h-1 w-12 bg-primary transition-all duration-500 ${isEven ? 'group-hover:w-full' : 'ml-auto group-hover:w-full'}`} />
                    </div>
                  </div>

                  {/* Poster Image Column */}
                  <div className={`md:w-1/3 relative border-b md:border-b-0 ${isEven ? 'md:border-r' : 'md:border-l'} border-white/10 overflow-hidden bg-neutral-900 group-poster`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"
                      style={{ backgroundImage: `url(https://loremflickr.com/600/800/cyberpunk,technology,neon?lock=14)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                    {/* Overlay Elements */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="barcode-strip h-8 w-24 opacity-80 mix-blend-screen" />
                      <span className="font-pixel text-[10px] bg-black text-white px-2 py-1 transform -rotate-2">
                        IMG_REF_0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Info Side - Details */}
                  <div className="md:w-1/3 p-6 flex flex-col justify-between relative bg-black/80">
                    <div className={`md:px-2 mt-4 md:mt-0 ${isEven ? '' : 'text-right'}`}>
                      <p className={`text-base text-gray-300 font-light mb-6 leading-relaxed border-primary/50 ${isEven ? 'border-l-2 pl-4' : 'border-r-2 pr-4'}`}>
                        {event.description}
                      </p>

                      <div className={`grid grid-cols-1 gap-3 max-w-sm mb-6 ${isEven ? '' : 'ml-auto direction-rtl'}`}>
                        <div className={`flex flex-col ${isEven ? '' : 'items-end'}`}>
                          <span className="text-[9px] text-muted-foreground uppercase tracking-widest mb-1">Clearance Level</span>
                          <span className="font-pixel text-lg text-white border border-white/20 px-3 py-1 inline-block">{event.clearance}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`flex items-end border-t border-white/10 pt-6 mt-4 ${isEven ? 'justify-between' : 'flex-row-reverse justify-between'}`}>
                      <span className="font-tech text-xs text-muted-foreground self-center hidden md:block">
                        SECURE_LINK
                      </span>
                      <button className={`w-full md:w-auto px-6 py-3 bg-white text-black font-tech font-bold text-sm uppercase hover:bg-primary transition-colors flex items-center justify-center gap-3 group/btn ${isEven ? '' : 'flex-row-reverse'}`}>
                        <span>Access Protocol</span>
                        <span className={`font-pixel text-[10px] transition-transform ${isEven ? 'group-hover/btn:translate-x-1' : 'group-hover/btn:-translate-x-1'}`}>{`>>>`}</span>
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
