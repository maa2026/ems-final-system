"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShieldAlert, Lock, User, ArrowLeft, Globe, Zap } from "lucide-react";

export default function StateLogin() {
  const router = useRouter();

  const s = {
    container: { 
      backgroundColor: "#010804", 
      minHeight: "100vh", 
      width: "100vw", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      color: "white", 
      fontFamily: "'Inter', sans-serif", 
      position: "relative", 
      overflow: "hidden", 
      padding: "20px" 
    },
    glassCard: { 
      background: "rgba(255, 255, 255, 0.02)", 
      backdropFilter: "blur(25px)", 
      WebkitBackdropFilter: "blur(25px)", 
      border: "1px solid rgba(255, 255, 255, 0.1)", 
      padding: "clamp(30px, 8vw, 50px)", 
      borderRadius: "40px", 
      width: "100%", 
      maxWidth: "450px", 
      textAlign: "center", 
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.8)", 
      zIndex: 10 
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
      transition: "0.3s"
    },
    badge: { 
      color: "#DA251D", 
      fontSize: "10px", 
      fontWeight: "900", 
      letterSpacing: "4px", 
      marginBottom: "15px", 
      display: "block",
      textTransform: "uppercase" 
    }
  };

  return (
    <div style={s.container}>
      {/* Background Cinematic Glows */}
      <div style={{ position: "absolute", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(218,37,29,0.1) 0%, transparent 70%)", top: "-10%", right: "-10%" }}></div>
      <div style={{ position: "absolute", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(0,145,76,0.05) 0%, transparent 70%)", bottom: "-5%", left: "-5%" }}></div>

      {/* Back Button */}
      <motion.button 
        onClick={() => router.push('/')}
        whileHover={{ x: -5 }}
        style={{ position: "absolute", top: "40px", left: "40px", background: "none", border: "none", color: "#444", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", zIndex: 20, fontSize: "12px", fontWeight: "bold" }}
      >
        <ArrowLeft size={18} /> BACK TO HOME
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        style={s.glassCard}
      >
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: 'inline-flex', padding: '15px', borderRadius: '22px', background: 'rgba(218,37,29,0.12)', marginBottom: '20px', border: '1px solid rgba(218,37,29,0.2)' }}>
            <ShieldAlert size={40} color="#DA251D" />
          </div>
          
          <span style={s.badge}>Authority Protocol Level-1</span>
          <h1 style={{ 
            fontSize: "clamp(2.5rem, 8vw, 3rem)", 
            fontWeight: "900", 
            margin: 0, 
            letterSpacing: "-2px", 
            display: "flex", 
            alignItems: "baseline", 
            justifyContent: "center" 
          }}>
            EMS<span style={{ display: "inline-block", width: "0.15em", height: "0.15em", backgroundColor: "#DA251D", borderRadius: "50%", margin: "0 0.1em", boxShadow: "0 0 15px #DA251D" }} />UP
          </h1>
          <p style={{ color: "#444", fontSize: "12px", marginTop: "10px", fontWeight: "700", letterSpacing: "1px" }}>STATE HEADQUARTERS ACCESS</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ position: "relative" }}>
            <Globe size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <input type="text" placeholder="Admin Access ID" style={s.input} />
          </div>

          <div style={{ position: "relative" }}>
            <Lock size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <input type="password" placeholder="Authority Token" style={s.input} />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#DA251D", color: "white" }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              width: "100%", 
              padding: "20px", 
              borderRadius: "15px", 
              border: "none", 
              backgroundColor: "white", 
              color: "black", 
              fontWeight: "900", 
              fontSize: "16px", 
              cursor: "pointer", 
              boxShadow: "0 10px 30px rgba(218,37,29,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px"
            }}
          >
            INITIALIZE STATE NODE <Zap size={18} fill="currentColor" />
          </motion.button>
        </form>

        <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
            <p style={{ fontSize: "9px", color: "#222", letterSpacing: "3px", fontWeight: "bold" }}>
              ENCRYPTED BIOMETRIC HANDSHAKE ACTIVE
            </p>
            <p style={{ fontSize: "8px", color: "#DA251D", marginTop: "5px", fontWeight: "bold" }}>
              SAMAJWADI CLOUD © 2026
            </p>
        </div>
      </motion.div>
    </div>
  );
}