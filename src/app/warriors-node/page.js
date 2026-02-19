"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Sword, Smartphone, ArrowLeft, Zap, ShieldCheck } from "lucide-react";

export default function WarriorsNodeLogin() {
  const router = useRouter();

  const s = {
    container: { backgroundColor: "#010804", minHeight: "100vh", width: "100vw", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontFamily: "'Inter', sans-serif", padding: "20px", position: "relative", overflow: "hidden" },
    glassCard: { background: "rgba(255, 255, 255, 0.02)", backdropFilter: "blur(25px)", border: "1px solid rgba(218, 37, 29, 0.15)", padding: "40px 30px", borderRadius: "40px", width: "100%", maxWidth: "420px", textAlign: "center", zIndex: 10, boxShadow: "0 25px 50px rgba(0,0,0,0.9)" },
    input: { width: "100%", padding: "18px 20px 18px 50px", borderRadius: "15px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "white", fontSize: "16px", outline: "none", boxSizing: "border-box", marginBottom: "20px" },
    actionBtn: { width: "100%", padding: "20px", borderRadius: "15px", border: "none", backgroundColor: "#DA251D", color: "white", fontWeight: "900", fontSize: "16px", cursor: "pointer", boxShadow: "0 10px 30px rgba(218,37,29,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }
  };

  return (
    <div style={s.container}>
      {/* Intense Crimson Background Glow */}
      <div style={{ position: "absolute", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(218,37,29,0.12) 0%, transparent 70%)", bottom: "-10%", left: "-10%" }}></div>

      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={s.glassCard}>
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: 'inline-flex', padding: '15px', borderRadius: '20px', background: 'rgba(218,37,29,0.1)', marginBottom: '20px', border: '1px solid rgba(218, 37, 29, 0.2)' }}>
            <Sword size={35} color="#DA251D" />
          </div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: "900", margin: 0, letterSpacing: "-1px" }}>
            WARRIORS<span style={{ color: "#DA251D" }}>NODE</span>
          </h1>
          <p style={{ color: "#555", fontSize: "11px", fontWeight: "800", letterSpacing: "3px", marginTop: "10px" }}>BACKBONE ACCESS ONLY</p>
        </div>

        {/* Warriors Mobile Login Form */}
        <div style={{ position: "relative" }}>
          <Smartphone size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "20px" }} />
          <input type="tel" placeholder="Mobile Number" style={s.input} />
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          onClick={() => alert("OTP Sent to Warrior!")}
          style={s.actionBtn}
        >
          GENERATE OTP <Zap size={18} fill="currentColor" />
        </motion.button>

        <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "25px" }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: 0.4, marginBottom: '20px' }}>
             <ShieldCheck size={14} color="#DA251D" />
             <span style={{ fontSize: '10px', fontWeight: 'bold', letterSpacing: '1px' }}>SECURE FIELD ENCRYPTION</span>
          </div>
          <button 
            onClick={() => router.push('/')}
            style={{ background: "none", border: "none", color: "#444", cursor: "pointer", fontSize: "12px", fontWeight: "900" }}
          >
            ← BACK TO COMMAND CENTER
          </button>
        </div>
      </motion.div>
    </div>
  );
}