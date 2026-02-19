"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Globe, Users, Map, Info, ArrowRight, Award, Megaphone } from "lucide-react";

export default function PublicPortal() {
  const router = useRouter();

  const s = {
    // Width 100vw ko 100% kiya taaki horizontal scroll na aaye
    container: { backgroundColor: "#010804", minHeight: "100vh", width: "100%", color: "white", fontFamily: "'Inter', sans-serif", overflowX: "hidden" },
    nav: { padding: "15px clamp(15px, 5vw, 40px)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100 },
    hero: { padding: "clamp(50px, 10vw, 80px) 20px", textAlign: "center", position: "relative" },
    cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", padding: "20px clamp(15px, 5vw, 40px)", maxWidth: "1200px", margin: "0 auto" },
    statCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "30px", borderRadius: "25px", textAlign: "center" }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        /* Title mobile par wrap na ho uske liye adjustments */
        @media (max-width: 768px) {
          .hero-h1 { font-size: 2.8rem !important; }
          .hero-p { font-size: 14px !important; }
          .cta-btn { width: 100% !important; padding: 20px !important; }
        }
      `}</style>

      <div style={s.container}>
        {/* NAV */}
        <nav style={s.nav}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "900", margin: 0 }}>
            EMS<span style={{ color: "#DA251D" }}>.UP</span>
          </h2>
          <button 
            onClick={() => router.push('/portal')}
            style={{ background: "#DA251D", color: "white", border: "none", padding: "10px 15px", borderRadius: "10px", fontWeight: "800", fontSize: "10px", cursor: "pointer" }}
          >
            OFFICER LOGIN
          </button>
        </nav>

        {/* HERO */}
        <section style={s.hero}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span style={{ background: "rgba(218, 37, 29, 0.1)", color: "#DA251D", padding: "6px 12px", borderRadius: "20px", fontSize: "9px", fontWeight: "900", letterSpacing: "2px" }}>
              LIVE STATUS NODE
            </span>
            <h1 className="hero-h1" style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", fontWeight: "900", marginTop: "15px", lineHeight: 1.1 }}>
              SANGATHAN <span style={{ color: "#DA251D" }}>SETU</span>
            </h1>
            <p className="hero-p" style={{ color: "#666", maxWidth: "600px", margin: "15px auto", fontSize: "16px", lineHeight: 1.6 }}>
              Har booth ki shakti, har karyakarta ka samman. Digital kranti se judiye.
            </p>
          </motion.div>
        </section>

        {/* STATS */}
        <div style={s.cardGrid}>
          {[
            { icon: <Users size={32} color="#DA251D" />, val: "1.2M+", label: "KARYAKARTA" },
            { icon: <Map size={32} color="#DA251D" />, val: "75", label: "DISTRICTS" },
            { icon: <Award size={32} color="#DA251D" />, val: "1.6L+", label: "BOOTHS" }
          ].map((stat, i) => (
            <div key={i} style={s.statCard}>
              <div style={{ marginBottom: "15px", display: "flex", justifyContent: "center" }}>{stat.icon}</div>
              <h3 style={{ fontSize: "32px", fontWeight: "900", margin: 0 }}>{stat.val}</h3>
              <p style={{ color: "#444", fontSize: "10px", fontWeight: "900", letterSpacing: "1px", marginTop: "5px" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ANNOUNCEMENTS */}
        <section style={{ padding: "40px 20px", background: "rgba(218, 37, 29, 0.02)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "1.2rem", fontWeight: "900", marginBottom: "30px", letterSpacing: "2px" }}>NEWS & UPDATES</h2>
            {[1, 2].map((i) => (
              <div key={i} style={{ padding: "15px", borderLeft: "3px solid #DA251D", background: "rgba(255,255,255,0.01)", marginBottom: "10px", borderRadius: "0 12px 12px 0" }}>
                <p style={{ margin: 0, fontSize: "13px", color: "#888" }}>Booth level training camps starting from next week. Register now.</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "50px 20px", textAlign: "center" }}>
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="cta-btn"
            style={{ padding: "18px 40px", borderRadius: "100px", border: "none", background: "white", color: "black", fontWeight: "900", fontSize: "14px", cursor: "pointer", boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
          >
            JOIN THE MISSION <ArrowRight size={18} style={{ marginLeft: "10px" }} />
          </motion.button>
          <p style={{ marginTop: "40px", fontSize: "9px", color: "#222", fontWeight: "900", letterSpacing: "2px" }}>
            © 2026 EMS.UP | MISSION 2027
          </p>
        </footer>
      </div>
    </>
  );
}