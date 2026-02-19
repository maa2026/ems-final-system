"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ShieldCheck, User, Lock, ArrowLeft } from "lucide-react";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push('/command-center');
  };

  // --- STYLES (Drawing Protected + Responsive Fix) ---
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
      position: "relative",
      overflow: "hidden",
      padding: "20px",
      boxSizing: "border-box"
    },
    glassCard: {
      background: "rgba(255, 255, 255, 0.02)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      padding: "clamp(25px, 5vw, 50px)", // Responsive Padding
      borderRadius: "40px",
      width: "100%",
      maxWidth: "420px", // Card size control
      textAlign: "center",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      zIndex: 10,
      boxSizing: "border-box"
    },
    inputWrapper: {
      position: "relative",
      textAlign: "left",
      width: "100%"
    },
    input: {
      width: "100%",
      padding: "18px 20px 18px 55px",
      borderRadius: "15px",
      border: "1px solid rgba(255,255,255,0.1)",
      background: "rgba(255,255,255,0.05)",
      color: "white",
      fontSize: "16px",
      outline: "none",
      boxSizing: "border-box",
      marginBottom: "15px",
      display: "block"
    },
    backBtn: {
      position: "absolute",
      top: "clamp(20px, 4vw, 40px)",
      left: "clamp(20px, 4vw, 40px)",
      background: "none",
      border: "none",
      color: "#666",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      zIndex: 20
    }
  };

  return (
    <div style={s.container}>
      {/* Back Button */}
      <motion.button onClick={() => router.push('/')} style={s.backBtn}>
        <ArrowLeft size={18} /> 
        <span style={{fontSize: '11px', fontWeight: 'bold', letterSpacing: '1px'}}>BACK</span>
      </motion.button>

      {/* Red Glow Background - Responsive Size */}
      <div style={{ 
        position: "absolute", 
        width: "clamp(300px, 60vw, 600px)", 
        height: "clamp(300px, 60vw, 600px)", 
        background: "radial-gradient(circle, rgba(218,37,29,0.1) 0%, transparent 70%)", 
        top: "-150px", 
        right: "-150px" 
      }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={s.glassCard}
      >
        <div style={{ marginBottom: "30px" }}>
          <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '15px', background: 'rgba(218,37,29,0.15)', marginBottom: '15px' }}>
            <ShieldCheck size={28} color="#DA251D" />
          </div>
          
          <h1 style={{ 
            fontSize: "clamp(2rem, 10vw, 3.5rem)", // Fluid Typography
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
              boxShadow: "0 0 15px rgba(218,37,29,0.6)"
            }} />
            UP
          </h1>
          
          <p style={{ color: "#555", fontSize: "10px", marginTop: "10px", fontWeight: "900", letterSpacing: "2px" }}>
            OFFICER ACCESS NODE
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <div style={s.inputWrapper}>
            <User size={18} color="#DA251D" style={{ position: "absolute", left: "20px", top: "20px", opacity: 0.8 }} />
            <input type="text" placeholder="Officer ID" required style={s.input} />
          </div>

          <div style={s.inputWrapper}>
            <Lock size={18} color="#DA251D" style={{ position: "absolute", left: "20px", top: "20px", opacity: 0.8 }} />
            <input type="password" placeholder="Secure Token" required style={s.input} />
          </div>

          <motion.button 
            type="submit"
            whileHover={{ scale: 1.02, backgroundColor: "#DA251D", color: "white", transition: { duration: 0 } }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: "100%",
              padding: "20px",
              borderRadius: "100px", // Pill Shape as per your EMS branding
              border: "none",
              backgroundColor: "white",
              color: "black",
              fontWeight: "900",
              fontSize: "15px",
              cursor: "pointer",
              marginTop: "10px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              textTransform: "uppercase"
            }}
          >
            AUTHORIZE ACCESS
          </motion.button>
        </form>

        <p style={{ marginTop: "40px", fontSize: "8px", color: "#222", letterSpacing: "3px", fontWeight: "900" }}>
          ENCRYPTED BY SAMAJWADI DIGITAL CELL
        </p>
      </motion.div>

      {/* Footer Constraint to prevent scroll issues on small screens */}
      <style jsx global>{`
        body { margin: 0; padding: 0; overflow-x: hidden; background: #010804; }
      `}</style>
    </div>
  );
}