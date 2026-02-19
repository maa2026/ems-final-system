"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Sword, Smartphone, ArrowLeft, Zap, ShieldCheck } from "lucide-react";

export default function WarriorsNodeLogin() {
  const router = useRouter();

  const s = {
    container: { 
      backgroundColor: "#010804", 
      minHeight: "100vh", 
      width: "100%", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      color: "white", 
      fontFamily: "'Inter', sans-serif", 
      padding: "15px", // Side gaps for mobile
      position: "relative", 
      overflow: "hidden",
      boxSizing: "border-box" 
    },
    glassCard: { 
      background: "rgba(255, 255, 255, 0.02)", 
      backdropFilter: "blur(25px)", 
      border: "1px solid rgba(218, 37, 29, 0.2)", 
      padding: "clamp(20px, 5vw, 40px)", 
      borderRadius: "35px", 
      width: "100%",
      maxWidth: "400px", // Card size control
      textAlign: "center", 
      zIndex: 10, 
      boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
      boxSizing: "border-box",
      margin: "0 auto"
    },
    input: { 
      width: "100%", 
      padding: "18px 20px 18px 50px", 
      borderRadius: "15px", 
      border: "1px solid rgba(255,255,255,0.1)", 
      background: "rgba(255,255,255,0.05)", 
      color: "white", 
      fontSize: "16px", 
      outline: "none", 
      boxSizing: "border-box", 
      marginBottom: "20px",
      display: "block"
    }
  };

  return (
    <div style={s.container}>
      {/* Intense Crimson Glow */}
      <div style={{ position: "absolute", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(218,37,29,0.15) 0%, transparent 70%)", top: "-50px", right: "-50px", pointerEvents: "none" }}></div>

      {/* BACK BUTTON */}
      <button 
        onClick={() => router.push('/')}
        style={{ position: 'absolute', top: '30px', left: '25px', background: 'none', border: 'none', color: '#444', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 20, fontSize: '11px', fontWeight: '900' }}
      >
        <ArrowLeft size={16} /> BACK
      </button>

      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={s.glassCard}>
        <div style={{ marginBottom: "30px" }}>
          <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '18px', background: 'rgba(218,37,29,0.1)', marginBottom: '15px' }}>
            <Sword size={30} color="#DA251D" />
          </div>
          
          {/* TITLE FIX: Ab ye kabhi bahar nahi jayega */}
          <h1 style={{ 
            fontSize: "clamp(1.5rem, 7vw, 2.1rem)", // Mobile par automatic chota ho jayega
            fontWeight: "1000", 
            margin: 0, 
            letterSpacing: "-1px",
            whiteSpace: "nowrap", // Ek hi line mein rahega
            textAlign: "center",
            width: "100%",
            display: "block"
          }}>
            WARRIORS <span style={{ color: "#DA251D" }}>NODE</span>
          </h1>
          <p style={{ color: "#444", fontSize: "10px", fontWeight: "900", letterSpacing: "3px", marginTop: "10px", textTransform: "uppercase" }}>
            FIELD ACCESS PROTOCOL
          </p>
        </div>

        <div style={{ width: "100%", position: "relative" }}>
          <div style={{ position: "relative" }}>
            <Smartphone size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "18px", opacity: 0.8 }} />
            <input type="tel" placeholder="Mobile Number" style={s.input} />
          </div>

          <motion.button 
            whileTap={{ scale: 0.98 }} 
            style={{ 
              width: "100%", padding: "20px", borderRadius: "100px", border: "none", 
              backgroundColor: "#DA251D", color: "white", fontWeight: "900", 
              fontSize: "15px", cursor: "pointer", boxShadow: "0 10px 25px rgba(218,37,29,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"
            }}
          >
            GENERATE OTP <Zap size={18} fill="currentColor" />
          </motion.button>
        </div>

        <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: 0.3 }}>
             <ShieldCheck size={14} color="#DA251D" />
             <span style={{ fontSize: '9px', fontWeight: 'bold' }}>SECURE FIELD LINE</span>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        body { margin: 0; padding: 0; background: #010804; overflow: hidden; }
      `}</style>
    </div>
  );
}