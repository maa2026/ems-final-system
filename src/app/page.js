"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { UserPlus, ShieldCheck, Globe, Sword } from "lucide-react";

export default function Welcome() {
  const router = useRouter();

  const containerStyle = {
    backgroundColor: "#010804",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontFamily: "'Inter', sans-serif",
    margin: 0,
    overflowX: "hidden",
    position: "relative",
    textAlign: "center",
    padding: "40px 20px"
  };

  return (
    <main style={containerStyle}>
      {/* Cinematic Background Glow */}
      <div style={{
        position: "absolute",
        width: "80vw",
        height: "80vw",
        background: "radial-gradient(circle, rgba(218,37,29,0.07) 0%, transparent 70%)",
        top: "-20%",
        left: "-10%",
        pointerEvents: "none"
      }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      >
        <div style={{ 
          color: "#00914C", 
          fontSize: "clamp(10px, 2vw, 11px)", 
          fontWeight: "800", 
          letterSpacing: "5px", 
          marginBottom: "30px",
          opacity: 0.8
        }}>
          UP ELECTION INFRASTRUCTURE 2026
        </div>

        {/* Logo with Perfect Round Dot */}
        <h1 style={{ 
          fontSize: "clamp(3.5rem, 18vw, 11rem)", 
          fontWeight: "900", 
          margin: 0, 
          letterSpacing: "-0.05em",
          lineHeight: "0.85",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center"
        }}>
          EMS
          <span 
            style={{ 
              display: "inline-block",
              width: "0.15em",
              height: "0.15em",
              backgroundColor: "#DA251D",
              borderRadius: "50%",
              margin: "0 0.05em",
              boxShadow: "0 0 25px #DA251D"
            }}
          />
          UP
        </h1>

        <p style={{ 
          fontSize: "clamp(16px, 4vw, 19px)", 
          color: "#888", 
          marginTop: "30px", 
          maxWidth: "500px",
          fontWeight: "300",
          lineHeight: "1.6"
        }}>
          Advanced Digital Governance for a New Era.<br/>
          Secure. Transparent. Scalable.
        </p>

        {/* Triple Button Layout - With Dynamic Theme Hover */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "15px", 
          marginTop: "50px",
          width: "100%",
          maxWidth: "380px" 
        }}>
          
          {/* 1. Officer Route - Hover RED */}
          <motion.button 
            whileHover={{ 
              scale: 1.03, 
              backgroundColor: "#DA251D", 
              color: "white",
              boxShadow: "0 0 30px rgba(218,37,29,0.4)" 
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/portal')}
            style={{
              padding: "20px",
              fontSize: "15px",
              fontWeight: "900",
              borderRadius: "100px",
              border: "none",
              backgroundColor: "white",
              color: "black",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
              transition: "0.3s ease"
            }}
          >
            OFFICER LOGIN <ShieldCheck size={20} />
          </motion.button>

          {/* 2. BOOTH WARRIORS NODE - Hover CRIMSON/DARK RED */}
          <motion.button 
            whileHover={{ 
              scale: 1.03, 
              backgroundColor: "#8B0000", 
              color: "white",
              borderColor: "#8B0000",
              boxShadow: "0 0 30px rgba(139,0,0,0.5)" 
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/warriors-node')}
            style={{
              padding: "20px",
              fontSize: "15px",
              fontWeight: "900",
              borderRadius: "100px",
              border: "1px solid rgba(218,37,29,0.3)",
              backgroundColor: "rgba(218,37,29,0.05)",
              color: "#DA251D",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              transition: "0.3s ease"
            }}
          >
            BOOTH WARRIORS NODE <Sword size={20} />
          </motion.button>

          {/* 3. Enrollment - Hover GREEN */}
          <motion.button 
            whileHover={{ 
              scale: 1.03, 
              backgroundColor: "#00914C", 
              color: "white",
              borderColor: "#00914C",
              boxShadow: "0 0 30px rgba(0,145,76,0.4)" 
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push('/signup')}
            style={{
              padding: "18px",
              fontSize: "14px",
              fontWeight: "700",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "transparent",
              color: "white",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              opacity: 0.8,
              transition: "0.3s ease"
            }}
          >
            NEW ENROLLMENT <UserPlus size={18} />
          </motion.button>

          {/* Public Info Link */}
          <motion.button 
            whileHover={{ color: "#DA251D", opacity: 1 }}
            onClick={() => router.push('/public-info')}
            style={{
              background: "none",
              border: "none",
              color: "#444",
              fontSize: "11px",
              fontWeight: "800",
              letterSpacing: "2px",
              marginTop: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <Globe size={14} /> VIEW PUBLIC UPDATES
          </motion.button>
        </div>
      </motion.div>

      <div style={{ 
        position: "absolute", 
        bottom: "40px", 
        opacity: 0.2,
        fontSize: "10px",
        letterSpacing: "3px",
        fontWeight: "bold"
      }}>
        SAMAJWADI CLOUD © 2026
      </div>
    </main>
  );
}