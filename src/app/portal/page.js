"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShieldAlert, Zap, MapPin, ArrowLeft, Lock, User, Globe, ChevronRight } from "lucide-react";

export default function UnifiedPortal() {
  const router = useRouter();
  const [level, setLevel] = useState(null);

  const s = {
    container: { backgroundColor: "#010804", minHeight: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "'Inter', sans-serif", padding: "20px", position: "relative", overflow: "hidden" },
    glassCard: { background: "rgba(255, 255, 255, 0.02)", backdropFilter: "blur(30px)", border: "1px solid rgba(255, 255, 255, 0.05)", padding: "clamp(25px, 5vw, 45px)", borderRadius: "40px", width: "100%", maxWidth: "500px", textAlign: "center", zIndex: 10, boxShadow: "0 25px 50px rgba(0,0,0,0.8)" },
    input: { width: "100%", padding: "18px 20px 18px 50px", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "white", fontSize: "16px", outline: "none", boxSizing: "border-box", marginBottom: "15px" },
    
    // Base style for buttons
    optionBtn: (active, color) => ({
      width: "100%", 
      padding: "18px", 
      borderRadius: "20px", 
      border: active ? `1px solid ${color}` : "1px solid rgba(255,255,255,0.05)",
      background: active ? `rgba(${color === '#DA251D' ? '218,37,29' : '0,145,76'}, 0.2)` : "rgba(255,255,255,0.02)",
      cursor: "pointer", 
      display: "flex", 
      alignItems: "center", 
      gap: "15px", 
      marginBottom: "12px", 
      textAlign: "left",
      transition: "0.4s ease", // Smooth transition like welcome page
    })
  };

  return (
    <div style={s.container}>
      {/* Dynamic Glow */}
      <div style={{ position: "absolute", width: "600px", height: "600px", background: level === 'District' ? "radial-gradient(circle, rgba(0,145,76,0.15) 0%, transparent 70%)" : "radial-gradient(circle, rgba(218,37,29,0.15) 0%, transparent 70%)", top: "-10%", right: "-10%", transition: "1s" }}></div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={s.glassCard}>
        
        <div style={{ marginBottom: "35px" }}>
          <h1 style={{ fontSize: "2.2rem", fontWeight: "900", margin: 0 }}>
            OFFICER<span style={{ color: "#DA251D" }}>PORTAL</span>
          </h1>
          <p style={{ color: "#444", fontSize: "10px", fontWeight: "800", letterSpacing: "2px", marginTop: "10px" }}>SELECT ACCESS LEVEL</p>
        </div>

        {/* --- STATE BUTTON: Hover Red --- */}
        <motion.div 
          whileHover={{ backgroundColor: "#DA251D", scale: 1.02 }}
          onHoverStart={() => {}} // Dynamic feedback
          onClick={() => setLevel('State')} 
          style={s.optionBtn(level === 'State', '#DA251D')}
        >
          <ShieldAlert size={22} color={level === 'State' ? 'white' : '#DA251D'} />
          <div style={{ flex: 1 }}><div style={{ fontWeight: "900", color: "white" }}>STATE HEADQUARTERS</div></div>
          <ChevronRight size={18} />
        </motion.div>

        {/* --- ZONE BUTTON: Hover Red --- */}
        <motion.div 
          whileHover={{ backgroundColor: "#DA251D", scale: 1.02 }}
          onClick={() => setLevel('Zone')} 
          style={s.optionBtn(level === 'Zone', '#DA251D')}
        >
          <Zap size={22} color={level === 'Zone' ? 'white' : '#DA251D'} fill={level === 'Zone' ? 'white' : 'none'} />
          <div style={{ flex: 1 }}><div style={{ fontWeight: "900", color: "white" }}>ZONE COMMAND</div></div>
          <ChevronRight size={18} />
        </motion.div>

        {/* --- DISTRICT BUTTON: Hover Green --- */}
        <motion.div 
          whileHover={{ backgroundColor: "#00914C", scale: 1.02 }}
          onClick={() => setLevel('District')} 
          style={s.optionBtn(level === 'District', '#00914C')}
        >
          <MapPin size={22} color={level === 'District' ? 'white' : '#00914C'} />
          <div style={{ flex: 1 }}><div style={{ fontWeight: "900", color: "white" }}>DISTRICT UNIT</div></div>
          <ChevronRight size={18} />
        </motion.div>

        {/* --- LOGIN FORM SECTION --- */}
        <AnimatePresence>
          {level && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              style={{ marginTop: "20px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}
            >
              <div style={{ position: "relative" }}>
                <User size={18} color={level === 'District' ? '#00914C' : '#DA251D'} style={{ position: "absolute", left: "18px", top: "20px" }} />
                <input type="text" placeholder={`${level} ID`} style={s.input} />
              </div>

              <div style={{ position: "relative" }}>
                <Lock size={18} color={level === 'District' ? '#00914C' : '#DA251D'} style={{ position: "absolute", left: "18px", top: "20px" }} />
                <input type="password" placeholder="Passcode" style={s.input} />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "white", color: "black" }}
                style={{ width: "100%", padding: "18px", borderRadius: "15px", border: "none", backgroundColor: level === 'District' ? '#00914C' : '#DA251D', color: "white", fontWeight: "900", cursor: "pointer" }}
              >
                LOGIN AS {level.toUpperCase()}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        <button onClick={() => router.push('/')} style={{ background: "none", border: "none", color: "#333", cursor: "pointer", marginTop: "30px", fontWeight: "bold" }}>
          ← EXIT SYSTEM
        </button>

      </motion.div>
    </div>
  );
}