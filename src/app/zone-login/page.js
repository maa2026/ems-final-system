"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Zap, Lock, User, ArrowLeft, Layers, ShieldCheck } from "lucide-react";

export default function ZoneLogin() {
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
      border: "1px solid rgba(255, 255, 255, 0.08)", 
      padding: "clamp(30px, 8vw, 50px)", 
      borderRadius: "40px", 
      width: "100%", 
      maxWidth: "420px", 
      textAlign: "center", 
      boxShadow: "0 25px 50px rgba(0, 0, 0, 0.7)", 
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
      {/* Cinematic Glows - Zone vibe (Orange-ish Red + Dark) */}
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(218,37,29,0.1) 0%, transparent 70%)", top: "-5%", right: "-5%" }}></div>
      <div style={{ position: "absolute", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)", bottom: "5%", left: "5%" }}></div>

      {/* Back Button */}
      <motion.button 
        onClick={() => router.push('/')}
        whileHover={{ x: -5 }}
        style={{ position: "absolute", top: "40px", left: "40px", background: "none", border: "none", color: "#444", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", zIndex: 20, fontSize: "12px", fontWeight: "bold" }}
      >
        <ArrowLeft size={18} /> BACK
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        style={s.glassCard}
      >
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: 'inline-flex', padding: '15px', borderRadius: '22px', background: 'rgba(218,37,29,0.1)', marginBottom: '20px', border: '1px solid rgba(218,37,29,0.2)' }}>
            <Zap size={35} color="#DA251D" fill="#DA251D" style={{ opacity: 0.8 }} />
          </div>
          
          <span style={s.badge}>Zonal Strategic Node</span>
          <h1 style={{ 
            fontSize: "clamp(2rem, 7vw, 2.5rem)", 
            fontWeight: "900", 
            margin: 0, 
            letterSpacing: "-1px", 
            display: "flex", 
            alignItems: "baseline", 
            justifyContent: "center" 
          }}>
            EMS<span style={{ display: "inline-block", width: "0.15em", height: "0.15em", backgroundColor: "#DA251D", borderRadius: "50%", margin: "0 0.1em", boxShadow: "0 0 12px #DA251D" }} />UP
          </h1>
          <p style={{ color: "#444", fontSize: "11px", marginTop: "8px", fontWeight: "700", letterSpacing: "1px" }}>SECTOR MANAGEMENT CORE</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ position: "relative" }}>
            <Layers size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <select style={{...s.input, appearance: "none"}}>
                <option>Select Your Zone</option>
                <option>Braj Zone</option>
                <option>Paschim Zone</option>
                <option>Kashi Zone</option>
                <option>Gorakhpur Zone</option>
                <option>Awadh Zone</option>
                <option>Kanpur Zone</option>
            </select>
          </div>

          <div style={{ position: "relative" }}>
            <User size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <input type="text" placeholder="Zone Officer ID" style={s.input} />
          </div>

          <div style={{ position: "relative" }}>
            <Lock size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <input type="password" placeholder="Access Token" style={s.input} />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#DA251D", color: "white" }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              width: "100%", 
              padding: "18px", 
              borderRadius: "15px", 
              border: "none", 
              backgroundColor: "white", 
              color: "black", 
              fontWeight: "900", 
              fontSize: "16px", 
              cursor: "pointer", 
              boxShadow: "0 10px 30px rgba(218,37,29,0.2)",
              marginTop: "10px"
            }}
          >
            AUTHORIZE ZONE ACCESS
          </motion.button>
        </form>

        <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
            <p style={{ fontSize: "9px", color: "#222", letterSpacing: "3px", fontWeight: "bold" }}>
              ZONAL ENCRYPTION ACTIVE
            </p>
            <p style={{ fontSize: "8px", color: "#DA251D", marginTop: "5px", fontWeight: "bold" }}>
              UP SECTOR UNIT • EMS 2026
            </p>
        </div>
      </motion.div>
    </div>
  );
}