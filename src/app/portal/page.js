"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShieldAlert, Zap, MapPin, Lock, User, ChevronRight, ShieldCheck } from "lucide-react";

export default function UnifiedPortal() {
  const router = useRouter();
  const [level, setLevel] = useState(null);

  const s = {
    container: { 
      backgroundColor: "#010804", 
      minHeight: "100vh", 
      width: "100%", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "center", 
      color: "white", 
      fontFamily: "'Inter', sans-serif", 
      padding: "20px", 
      position: "relative", 
      overflowX: "hidden",
      boxSizing: "border-box"
    },
    glassCard: { 
      background: "rgba(255, 255, 255, 0.02)", 
      backdropFilter: "blur(30px)", 
      border: "1px solid rgba(255, 255, 255, 0.05)", 
      padding: "clamp(25px, 7vw, 50px)", 
      borderRadius: "35px", 
      width: "100%", 
      maxWidth: "520px", // Width thodi badhai taaki title ek line mein aaye
      textAlign: "center", 
      zIndex: 10, 
      boxShadow: "0 25px 50px rgba(0,0,0,0.8)",
      boxSizing: "border-box",
      marginBottom: "40px"
    },
    input: { 
      width: "100%", 
      padding: "20px 20px 20px 55px", 
      borderRadius: "18px", 
      border: "1px solid rgba(255,255,255,0.1)", 
      background: "rgba(255,255,255,0.05)", 
      color: "white", 
      fontSize: "16px", 
      outline: "none", 
      boxSizing: "border-box", 
      marginBottom: "15px",
      display: "block"
    },
    optionBtn: (active, color) => ({
      width: "100%", 
      padding: "20px", 
      borderRadius: "20px", 
      border: active ? `2px solid ${color}` : "1px solid rgba(255,255,255,0.05)",
      background: active ? `rgba(${color === '#DA251D' ? '218,37,29' : '0,145,76'}, 0.15)` : "rgba(255,255,255,0.02)",
      cursor: "pointer", 
      display: "flex", 
      alignItems: "center", 
      gap: "15px", 
      marginBottom: "12px", 
      textAlign: "left",
      transition: "0.3s ease"
    })
  };

  return (
    <div style={s.container}>
      {/* Background Red Glow */}
      <div style={{ 
        position: "absolute", 
        width: "clamp(300px, 80vw, 600px)", 
        height: "clamp(300px, 80vw, 600px)", 
        background: "radial-gradient(circle, rgba(218,37,29,0.1) 0%, transparent 70%)", 
        top: "-5%", 
        right: "-5%", 
        pointerEvents: "none"
      }}></div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={s.glassCard}>
        <div style={{ marginBottom: "40px" }}>
          {/* FIXED TITLE: ONE LINE ONLY */}
          <h1 style={{ 
            fontSize: "clamp(1.6rem, 7vw, 2.3rem)", // Font size adjust kiya mobile ke liye
            fontWeight: "900", 
            margin: 0,
            letterSpacing: "2px", 
            textTransform: "uppercase",
            whiteSpace: "nowrap", // Ise force kiya ki ek hi line mein rahe
            display: "block",
            width: "100%"
          }}>
            OFFICER <span style={{ color: "#DA251D" }}>PORTAL</span>
          </h1>
          <p style={{ color: "#444", fontSize: "11px", fontWeight: "800", letterSpacing: "3px", marginTop: "12px" }}>
            SECURE ACCESS AUTHORIZATION
          </p>
        </div>

        {/* --- STATE HQ --- */}
        <div onClick={() => setLevel('State')} style={s.optionBtn(level === 'State', '#DA251D')}>
          <ShieldAlert size={22} color="#DA251D" />
          <div style={{ flex: 1, fontWeight: "900", fontSize: "14px", letterSpacing: "1px" }}>STATE HEADQUARTERS</div>
          <ChevronRight size={18} color="#333" />
        </div>

        {/* --- ZONE COMMAND --- */}
        <div onClick={() => setLevel('Zone')} style={s.optionBtn(level === 'Zone', '#DA251D')}>
          <Zap size={22} color="#DA251D" fill="#DA251D" />
          <div style={{ flex: 1, fontWeight: "900", fontSize: "14px", letterSpacing: "1px" }}>ZONE COMMAND</div>
          <ChevronRight size={18} color="#333" />
        </div>

        {/* --- DISTRICT UNIT --- */}
        <div onClick={() => setLevel('District')} style={s.optionBtn(level === 'District', '#00914C')}>
          <MapPin size={22} color="#00914C" />
          <div style={{ flex: 1, fontWeight: "900", fontSize: "14px", letterSpacing: "1px" }}>DISTRICT UNIT</div>
          <ChevronRight size={18} color="#333" />
        </div>

        {/* LOGIN FORM SECTION */}
        <AnimatePresence mode="wait">
          {level && (
            <motion.div 
              key={level}
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              style={{ marginTop: "25px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "25px", overflow: "hidden" }}
            >
              <div style={{ position: "relative" }}>
                <User size={20} color={level === 'District' ? '#00914C' : '#DA251D'} style={{ position: "absolute", left: "20px", top: "20px" }} />
                <input type="text" placeholder={`${level} Access ID`} style={s.input} />
              </div>
              <motion.button 
                whileTap={{ scale: 0.96 }}
                style={{ 
                  width: "100%", padding: "22px", borderRadius: "100px", border: "none", 
                  backgroundColor: level === 'District' ? '#00914C' : '#DA251D', 
                  color: "white", fontWeight: "900", cursor: "pointer", fontSize: "15px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                }}
              >
                AUTHORIZE {level.toUpperCase()}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- FOOTER --- */}
      <footer style={{ textAlign: "center", zIndex: 10, width: "100%", maxWidth: "500px", paddingBottom: "30px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "15px" }}>
          <ShieldCheck size={16} color="#00914C" />
          <span style={{ fontSize: "11px", fontWeight: "900", color: "#444", letterSpacing: "1.5px" }}>ENCRYPTED PROTOCOL ACTIVE</span>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
          <p style={{ fontSize: "12px", color: "#333", fontWeight: "900", margin: 0 }}>
            © 2026 EMS SYSTEM | <span style={{ color: "#DA251D" }}>MISSION 2027</span>
          </p>
          <p style={{ fontSize: "10px", color: "#222", marginTop: "8px", letterSpacing: "3px" }}>
            SAMAJWADI DIGITAL CELL
          </p>
        </div>
      </footer>
    </div>
  );
}