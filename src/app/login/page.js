"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShieldCheck, User, Lock, ArrowLeft } from "lucide-react";

export default function Login() {
  const router = useRouter();

  const containerStyle = {
    backgroundColor: "#010804",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    position: "relative",
    overflow: "hidden",
    padding: "20px"
  };

  const glassCard = {
    background: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "clamp(30px, 8vw, 50px)",
    borderRadius: "40px",
    width: "100%",
    maxWidth: "450px",
    textAlign: "center",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    zIndex: 10
  };

  const inputStyle = {
    width: "100%",
    padding: "18px 20px 18px 50px",
    borderRadius: "15px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "white",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    marginBottom: "20px"
  };

  return (
    <div style={containerStyle}>
      {/* Back Button */}
      <motion.button 
        onClick={() => router.push('/')}
        style={{ position: "absolute", top: "40px", left: "40px", background: "none", border: "none", color: "#666", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px", zIndex: 20 }}
      >
        <ArrowLeft size={20} /> <span style={{fontSize: '12px', fontWeight: 'bold'}}>BACK</span>
      </motion.button>

      {/* Red Glow Background */}
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(218,37,29,0.1) 0%, transparent 70%)", top: "-100px", right: "-100px" }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={glassCard}
      >
        <div style={{ marginBottom: "40px" }}>
          {/* Small Icon Badge */}
          <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '15px', background: 'rgba(218,37,29,0.1)', marginBottom: '15px' }}>
            <ShieldCheck size={30} color="#DA251D" />
          </div>
          
          {/* Main EMS.UP Typography (Synced with Welcome Page) */}
          <h1 style={{ 
            fontSize: "clamp(2.5rem, 8vw, 3.5rem)", 
            fontWeight: "900", 
            margin: 0, 
            letterSpacing: "-0.05em",
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center"
          }}>
            EMS
            <span style={{ 
              display: "inline-block",
              width: "0.15em",
              height: "0.15em",
              backgroundColor: "#DA251D",
              borderRadius: "50%",
              margin: "0 0.05em",
              boxShadow: "0 0 15px rgba(218,37,29,0.5)"
            }} />
            UP
          </h1>
          
          <p style={{ color: "#666", fontSize: "12px", marginTop: "10px", fontWeight: "bold", letterSpacing: "2px" }}>
            OFFICER ACCESS NODE
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ position: "relative", textAlign: "left" }}>
            <User size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <input type="text" placeholder="Officer ID" style={inputStyle} />
          </div>

          <div style={{ position: "relative", textAlign: "left" }}>
            <Lock size={18} color="#DA251D" style={{ position: "absolute", left: "18px", top: "20px", opacity: 0.8 }} />
            <input type="password" placeholder="Secure Token" style={inputStyle} />
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
              marginTop: "10px",
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
            }}
          >
            AUTHORIZE ACCESS
          </motion.button>
        </form>

        <p style={{ marginTop: "40px", fontSize: "9px", color: "#333", letterSpacing: "3px", fontWeight: "bold", textTransform: "uppercase" }}>
          ENCRYPTED BY SAMAJWADI DIGITAL CELL
        </p>
      </motion.div>
    </div>
  );
}