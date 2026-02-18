import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/ciencia-hero.png";

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Countdown Logic
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-03-13T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{ days?: number; hours?: number; minutes?: number; seconds?: number }>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-background text-foreground">
      {/* Global Atmospherics */}
      <div className="cinematic-grain" />
      <div className="scanlines" />

      {/* 
        HERO SECTION 
        Goal: Cinematic, immersive, control-system feel
      */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-12 px-6 md:px-12">

        {/* BACKGROUND LAYERS */}
        <div className="absolute inset-0 z-0 bg-background" />

        {/* The Hero Image - ABSOLUTE & IMMERSIVE */}
        {/* The Hero Image - ABSOLUTE & IMMERSIVE */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-[1] w-full h-full"
        >
          <img
            src={heroImage}
            alt="CIENCIA 2026 Hero"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-1000 will-change-transform"
            style={{ imageRendering: 'high-quality' }} // Hint browser to use high quality interpolation
          />
          {/* Subtle vignette only, no wash-out overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
        </motion.div>

        {/* HERO CONTENT - ASYMMETRIC BOTTOM */}
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">

          {/* COUNTDOWN TIMER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="md:col-span-12 flex justify-center md:justify-end"
          >
            <div className="flex gap-2 md:gap-6 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-none border-t-2 border-t-primary/50">
              {/* Days */}
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-2xl md:text-4xl font-pixel text-chrome drop-shadow-[0_0_5px_rgba(160,160,255,0.4)]">
                  {String(timeLeft.days || 0).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-tech tracking-widest text-primary/80 uppercase mt-1">Days</span>
              </div>
              <div className="text-lg md:text-2xl font-pixel text-white/20 pt-2">:</div>

              {/* Hours */}
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-2xl md:text-4xl font-pixel text-chrome drop-shadow-[0_0_5px_rgba(160,160,255,0.4)]">
                  {String(timeLeft.hours || 0).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-tech tracking-widest text-primary/80 uppercase mt-1">Hours</span>
              </div>
              <div className="text-lg md:text-2xl font-pixel text-white/20 pt-2">:</div>

              {/* Minutes */}
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-2xl md:text-4xl font-pixel text-chrome drop-shadow-[0_0_5px_rgba(160,160,255,0.4)]">
                  {String(timeLeft.minutes || 0).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-tech tracking-widest text-primary/80 uppercase mt-1">Mins</span>
              </div>
              <div className="text-lg md:text-2xl font-pixel text-white/20 pt-2">:</div>

              {/* Seconds */}
              <div className="flex flex-col items-center min-w-[40px]">
                <span className="text-2xl md:text-4xl font-pixel text-chrome drop-shadow-[0_0_5px_rgba(160,160,255,0.4)]">
                  {String(timeLeft.seconds || 0).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-tech tracking-widest text-primary/80 uppercase mt-1">Secs</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 
        CONTENT SECTION - "ARCHIVE ACCESS" 
        Goal: Retro-Cyber Experimental Data Cards
      */}
      <section className="relative z-10 px-4 py-32 bg-background md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Section Header - Brutalist & Bold */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-4 border-white pb-6">
            <div>
              <span className="font-pixel text-xl text-primary mb-2 block tracking-widest">{`>>> ARCHIVE_ACCESS // 01`}</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase transform scale-y-110">
                Data<span className="text-outline-only text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>Base</span>
              </h2>
            </div>
            <div className="text-right mt-8 md:mt-0">
              <div className="barcode-strip h-8 w-48 mb-2 opacity-70" />
              <span className="block font-tech text-xs text-muted-foreground uppercase tracking-widest">
                SYS.INTEGRITY: 100%
              </span>
            </div>
          </div>

          {/* Grid Layout - 'Cyber Drive' Aesthetic */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* Cell 1: Description - 'Data Card' Style */}
            <div className="md:col-span-8 border-retro bg-grid-thin relative p-6 md:p-10 group overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="font-pixel text-4xl opacity-20 group-hover:opacity-50 transition-opacity">01</span>
              </div>

              <span className="font-tech text-xs bg-primary text-black px-2 py-1 mb-6 inline-block">PROJECT_OVERVIEW</span>

              <p className="text-xl md:text-3xl font-heading uppercase leading-tight text-white mb-8 max-w-2xl">
                CIENCIA 2026 represents the convergence of <span className="text-primary">experimental technology</span> and human ingenuity.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/20 pt-6">
                <div>
                  <span className="block font-pixel text-lg text-primary mb-1">24HRS</span>
                  <span className="font-tech text-[10px] text-muted-foreground">DURATION</span>
                </div>
                <div>
                  <span className="block font-pixel text-lg text-primary mb-1">08</span>
                  <span className="font-tech text-[10px] text-muted-foreground">MODULES</span>
                </div>
                <div>
                  <span className="block font-pixel text-lg text-primary mb-1">L-3</span>
                  <span className="font-tech text-[10px] text-muted-foreground">CLEARANCE</span>
                </div>
              </div>
            </div>

            {/* Cell 2: Visual/Sticker - 'Heat' Aesthetic */}
            <div className="md:col-span-4 border-retro bg-primary/10 relative p-6 flex flex-col justify-between group">
              <div className="absolute inset-0 bg-grid-dots opacity-30 pointer-events-none" />

              <div className="flex justify-between items-start z-10">
                <span className="font-pixel text-xs border border-white/30 px-2 py-0.5 rounded-full">TARGET_AUDIENCE</span>
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center animate-spin-slow">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>

              <div className="z-10 mt-12">
                <h3 className="text-4xl font-black italic tracking-tighter text-chrome mb-4 transform -skew-x-12">
                  INNOVATORS
                </h3>
                <div className="space-y-1 font-tech text-sm uppercase tracking-wider">
                  <div className="flex justify-between border-b border-white/10 py-1">
                    <span>CODING</span>
                    <span>[ OK ]</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 py-1">
                    <span>ROBOTICS</span>
                    <span>[ OK ]</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 py-1">
                    <span>DESIGN</span>
                    <span>[ OK ]</span>
                  </div>
                </div>
              </div>

              {/* Decorative Barcode */}
              <div className="mt-6">
                <div className="barcode-strip h-4 opacity-50" />
                <span className="font-mono text-[8px] block text-center mt-1 opacity-50">84-92-11-X</span>
              </div>
            </div>

          </div>



        </div>
      </section>

      {/* 
        PAST EVENTS - "TEMPORAL ARTIFACTS" 
        Goal: Digital Archive / Classified Footage look
      */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-background overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-12">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="relative">
              <span className="font-tech text-xs text-primary mb-2 block tracking-[0.3em]">{`// SYSTEM_MEMORY`}</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white leading-[0.9]">
                Past<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Events</span>
              </h2>
              {/* Decorative line */}
              <div className="absolute -left-6 top-2 bottom-2 w-1 bg-gradient-to-b from-primary via-transparent to-primary opacity-50 hidden md:block" />
            </div>

            <div className="mt-8 md:mt-0 max-w-sm text-right">
              <p className="font-tech text-xs text-muted-foreground leading-relaxed mb-4">
                RECOVERED DATA FRAGMENTS FROM PREVIOUS OPERATIONS.
                INTEGRITY: PARTIAL. VISUAL DECRYPTION REQUIRED.
              </p>
              <div className="flex justify-end gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className={`w-2 h-2 ${i < 3 ? 'bg-primary' : 'bg-gray-800'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Cyber Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[120vh] md:h-[80vh]">

            {/* ITEM 1: Large Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative group overflow-hidden border border-white/10 bg-black/50"
            >
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                alt="Event 01"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
                  <span className="font-pixel text-4xl text-white">01</span>
                  <span className="font-tech text-xs text-primary tracking-widest">HACKATHON_V1.0</span>
                </div>
                <p className="font-body text-sm text-gray-400 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Massive collaborative coding session involving 500+ participants.
                </p>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors" />
            </motion.div>

            {/* ITEM 2: Top Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 relative group overflow-hidden border border-white/10 bg-black/50"
            >
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                alt="Event 02"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />

              <div className="absolute top-0 right-0 p-6">
                <div className="bg-black/80 backdrop-blur border border-white/10 px-3 py-1">
                  <span className="font-mono text-xs text-primary">CYBER_SEC_WORKSHOP</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading text-2xl text-white uppercase tracking-wider group-hover:text-primary transition-colors">Net.Guard</h3>
              </div>
            </motion.div>

            {/* ITEM 3: Bottom Middle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden border border-white/10 bg-black/50"
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                alt="Event 03"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              />

              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_2px)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border border-white/50 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300 backdrop-blur-sm">
                  <span className="font-pixel text-xl text-white">VIEW</span>
                </div>
              </div>
            </motion.div>

            {/* ITEM 4: Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group overflow-hidden border border-white/10 bg-black/50 flex flex-col justify-between p-6"
            >
              <div className="absolute inset-0 bg-grid-thin opacity-20" />

              <div>
                <span className="font-tech text-4xl text-white/10 block mb-2">04</span>
                <h3 className="font-heading text-xl text-white">ROBOTICS EXPO</h3>
              </div>

              <div className="relative h-32 mt-4 border border-white/20 bg-black/50 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
                  alt="Robotics"
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              <div className="mt-4 flex justify-between items-center text-xs font-mono text-muted-foreground">
                <span>STATUS:</span>
                <span className="text-green-400">ARCHIVED</span>
              </div>
            </motion.div>

          </div>

          {/* Footer Metadata */}
          <div className="mt-8 flex justify-between items-center border-t border-white/10 pt-4">
            <span className="font-tech text-xs text-white/30">TOTAL_RECORDS: 3,429</span>
            <Link to="/gallery" className="group flex items-center gap-2 font-mono text-xs text-primary hover:text-white transition-colors">
              <span>FULL_DATABASE_ACCESS</span>
              <span className="group-hover:translate-x-1 transition-transform">{'->'}</span>
            </Link>
          </div>

        </div>
      </section>

      {/* 
        SPONSORS SECTION 
        Goal: Scrolling marquee, high-tech partner display
      */}
      <section className="py-24 border-t border-white/10 relative overflow-hidden bg-black">
        {/* Reference-style Dot Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative z-20 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">
            OUR <span className="text-[#a0a0ff]">SPONSORS</span>
          </h2>
        </div>

        {/* Clean Marquee Container */}
        <div className="relative z-20 w-full overflow-hidden">

          {/* Deep Fade Masks matching the reference dark aesthetic */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/90 to-transparent z-30 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/90 to-transparent z-30 pointer-events-none" />

          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-24 items-center px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            >
              {/* Duplicate twice for seamless loop */}
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex gap-24 items-center shrink-0">

                  {/* CVR College Logo (Centerpiece) */}
                  <div className="relative group/logo cursor-pointer transition-all duration-300 transform hover:scale-105">
                    <div className="w-48 h-48 flex items-center justify-center bg-white rounded-full p-2 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 hover:scale-105">
                      <img
                        src="/cvr-logo.png"
                        alt="CVR College of Engineering"
                        className="w-full h-full object-contain"
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* Random Relevant Tech Sponsors */}
                  {[
                    { name: "Google", slug: "google" },
                    { name: "Microsoft", slug: "microsoft" },
                    { name: "NASA", slug: "nasa" },
                    { name: "IEEE", slug: "ieee" },
                    { name: "NVIDIA", slug: "nvidia" },
                    { name: "Intel", slug: "intel" },
                    { name: "AMD", slug: "amd/white" },
                    { name: "GitHub", slug: "github/white" },
                    { name: "OpenAI", slug: "openai/white" },
                    { name: "Vercel", slug: "vercel/white" },
                    { name: "SpaceX", slug: "spacex/white" },
                    { name: "Amazon", slug: "amazon/white" }
                  ].map((partner) => (
                    <div key={partner.name} className="w-32 h-32 flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer">
                      <img
                        src={`https://cdn.simpleicons.org/${partner.slug}`}
                        alt={partner.name}
                        className="w-full h-full object-contain filter hover:brightness-125 transition-all duration-500"
                        loading="eager"
                      />
                    </div>
                  ))}

                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* End Section / Navigate */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t-2 border-dashed border-white/20 flex justify-between items-center opacity-70 hover:opacity-100 transition-opacity">
        <span className="font-pixel text-sm">{`<<< END_TRANSMISSION`}</span>
        <Link to="/events" className="font-tech text-sm hover:text-primary transition-colors hover:underline decoration-wavy underline-offset-4">PROCEED TO ARCHIVES</Link>
      </div>

    </div>
  );
};

export default HomePage;
