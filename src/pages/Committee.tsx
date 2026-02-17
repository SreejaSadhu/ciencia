import { motion } from "framer-motion";

interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  division: string;
  securityLvl: string;
}

const committeeMembers: CommitteeMember[] = [
  { id: "CMD-001", name: "ARJUN MEHTA", role: "CHAIRPERSON", division: "EXECUTIVE", securityLvl: "L5" },
  { id: "CMD-002", name: "PRIYA SHARMA", role: "VICE CHAIRPERSON", division: "EXECUTIVE", securityLvl: "L5" },
  { id: "CMD-003", name: "RAHUL VERMA", role: "TECHNICAL HEAD", division: "TECHOPS", securityLvl: "L4" },
  { id: "CMD-004", name: "SNEHA PATEL", role: "EVENTS LEAD", division: "LOGISTICS", securityLvl: "L4" },
  { id: "CMD-005", name: "KARTHIK RAO", role: "FINANCE LEAD", division: "TREASURY", securityLvl: "L4" },
  { id: "CMD-006", name: "ANANYA IYER", role: "CREATIVE DIR", division: "DESIGN", securityLvl: "L3" },
  { id: "CMD-007", name: "VIKRAM SINGH", role: "LOGISTICS", division: "OPERATIONS", securityLvl: "L3" },
  { id: "CMD-008", name: "DEEPIKA NAIR", role: "PUBLIC RELATIONS", division: "OUTREACH", securityLvl: "L3" },
  { id: "CMD-009", name: "ADITYA JOSHI", role: "WEBMASTER", division: "TECHOPS", securityLvl: "L3" },
  { id: "CMD-010", name: "MEERA KULKARNI", role: "MARKETING", division: "MEDIA", securityLvl: "L2" },
  { id: "CMD-011", name: "ROHAN DAS", role: "HOSPITALITY", division: "LOGISTICS", securityLvl: "L2" },
  { id: "CMD-012", name: "ISHITA GUPTA", role: "VOLUNTEER COORD", division: "HUMAN RES", securityLvl: "L2" },
];

const CommitteePage = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Environmental Effects */}
      <div className="cinematic-grain" />
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-px h-full bg-white/5" />
      <div className="fixed top-0 right-1/4 w-px h-full bg-white/5" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Command Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center relative"
        >
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -z-10" />
          <span className="bg-background px-4 font-mono text-xs text-muted-foreground tracking-[0.5em] uppercase">
            Ciencia_2026 // Personnel_File_01
          </span>
          <h1 className="mt-6 font-heading text-5xl md:text-7xl tracking-[0.1em] text-white uppercase text-shadow-glow">
            <span className="text-transparent stroke-white text-outline-only">Command</span> Structure
          </h1>
        </motion.div>

        {/* Personnel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {committeeMembers.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {/* Lanyard Hole */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-900 border border-white/20 rounded-full z-20 flex items-center justify-center">
                <div className="w-8 h-1.5 bg-black rounded-full" />
              </div>

              {/* ID Card Body */}
              <div className="bg-[#0a0a0a] border border-white/10 relative overflow-hidden h-full flex flex-col shadow-2xl hover:border-primary/50 transition-colors duration-500">

                {/* Holographic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none z-10" />

                {/* Header Strip */}
                <div className="h-2 w-full bg-primary/80" />

                {/* Photo Area */}
                <div className="relative aspect-square w-full bg-neutral-900 border-b border-white/10 overflow-hidden group-photo">
                  <div className="absolute inset-0 bg-grid-thin opacity-30" />

                  {/* Placeholder Avatar */}
                  <div
                    className="absolute inset-4 bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500 border border-white/10"
                    style={{ backgroundImage: `url(https://i.pravatar.cc/400?u=${member.id})` }}
                  />

                  {/* Overlay Reticle */}
                  <div className="absolute inset-4 border border-white/20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-6 flex flex-col flex-grow relative bg-grid-dots bg-[length:4px_4px]">

                  <div className="mb-4">
                    <h3 className="text-2xl font-heading uppercase text-white tracking-wide group-hover:text-primary transition-colors">{member.name}</h3>
                    <span className="font-tech text-xs text-primary/70 block mt-1 tracking-widest border-b border-primary/20 pb-2">{member.role}</span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                      <span>DIV_ID</span>
                      <span className="text-white">{member.division}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                      <span>SEC_LVL</span>
                      <span className="text-white group-hover:text-green-400 font-pixel">{member.securityLvl}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-dashed border-white/10">
                    <div className="barcode-strip h-6 w-full opacity-50 mix-blend-screen" />
                    <div className="flex justify-between text-[8px] font-mono mt-1 text-white/30 uppercase">
                      <span>ID: {member.id}</span>
                      <span>Authorized</span>
                    </div>
                  </div>

                </div>

                {/* Bottom Strip */}
                <div className="h-1 w-full bg-neutral-800" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
