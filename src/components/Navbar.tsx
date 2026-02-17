import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/events", label: "EVENTS" },
  { path: "/committee", label: "COMMITTEE" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", viewTransitionName: "none" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-6 left-1/2 w-full max-w-2xl z-50 px-4"
    >
      <div className="relative flex items-center justify-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">

        {/* Cinematic Shine Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />



        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1 border border-white/5 relative z-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-1.5 rounded-full transition-all duration-300 ${isActive ? "text-background bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "text-muted-foreground hover:text-white"
                  }`}
              >
                <span className="relative z-10 font-mono text-[10px] tracking-[0.15em] font-bold">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>


      </div>
    </motion.nav>
  );
};

export default Navbar;
