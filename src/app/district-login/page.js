"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { MapPin, Lock, User, ArrowLeft, Activity, ShieldCheck } from "lucide-react";

export default function DistrictLogin() {
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
      color: "#00914C", // District level ke liye Green accent use kiya hai
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
      {/* Cinematic Glows - District vibe (Green + Red) */}
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(0,145,76,0.08) 0%, transparent 70%)", top: "-10%", left: "-10%" }}></div>
      <div style={{ position: "absolute", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(218,37,29,0.06) 0%, transparent 70%)", bottom: "10%", right: "10%" }}></div>

      {/* Back Button */}
      <motion.button 
        onClick={() => router.push('/')}
        whileHover={{ x: -5 }}
        style={{ position: "absolute", top: "40px", left: "40px", background: "none", border: "none", color: "#444", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", zIndex: 20, fontSize: "12px", fontWeight: "bold" }}
      >
        <ArrowLeft size={18} /> BACK
      </motion.button>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        animate={{ opacity: 1, scale: 1 }} 
        style={s.glassCard}
      >
        <div style={{ marginBottom: "40px" }}>
          <div style={{ display: 'inline-flex', padding: '15px', borderRadius: '22px', background: 'rgba(0,145,76,0.1)', marginBottom: '20px', border: '1px solid rgba(0,145,76,0.2)' }}>
            <MapPin size={35} color="#00914C" />
          </div>
          
          <span style={s.badge}>District Administration</span>
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
          <p style={{ color: "#444", fontSize: "11px", marginTop: "8px", fontWeight: "700", letterSpacing: "1px" }}>REGIONAL DATA HUB</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ position: "relative" }}>
            <User size={18} color="#00914C" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <select style={{...s.input, appearance: "none"}}>
                <option>Select Your District</option>
                <option>Mainpuri</option>
                <option>Etawah</option>
                <option>Lucknow</option>
            </select>
          </div>

          <div style={{ position: "relative" }}>
            <Activity size={18} color="#00914C" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <input type="text" placeholder="District Officer ID" style={s.input} />
          </div>

          <div style={{ position: "relative" }}>
            <Lock size={18} color="#00914C" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <input type="password" placeholder="Secure Passcode" style={s.input} />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, backgroundColor: "#00914C", color: "white" }}
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
              boxShadow: "0 10px 30px rgba(0,145,76,0.15)",
              marginTop: "10px"
            }}
          >
            CONNECT TO DISTRICT
          </motion.button>
        </form>

        <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px" }}>
            <p style={{ fontSize: "9px", color: "#222", letterSpacing: "3px", fontWeight: "bold" }}>
              LOCAL NODE ENCRYPTION ACTIVE
            </p>
            <p style={{ fontSize: "8px", color: "#00914C", marginTop: "5px", fontWeight: "bold" }}>
              DISTRICT UNIT • EMS 2026
            </p>
        </div>
      </motion.div>
    </div>
  );
}