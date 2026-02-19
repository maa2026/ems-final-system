"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Globe, Users, Map, Info, ArrowRight, Award, Megaphone } from "lucide-react";

export default function PublicPortal() {
  const router = useRouter();

  const s = {
    container: { backgroundColor: "#010804", minHeight: "100vh", width: "100vw", color: "white", fontFamily: "'Inter', sans-serif", overflowX: "hidden" },
    nav: { padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100 },
    hero: { padding: "80px 20px", textAlign: "center", position: "relative" },
    cardGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", padding: "40px", maxWidth: "1200px", margin: "0 auto" },
    statCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", padding: "30px", borderRadius: "25px", textAlign: "center" },
    badge: { background: "rgba(218, 37, 29, 0.1)", color: "#DA251D", padding: "8px 15px", borderRadius: "30px", fontSize: "10px", fontWeight: "900", letterSpacing: "2px", marginBottom: "20px", display: "inline-block" }
  };

  return (
    <div style={s.container}>
      {/* Simple Public Nav */}
      <nav style={s.nav}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "900", margin: 0 }}>EMS<span style={{ color: "#DA251D" }}>.UP</span></h2>
        <button 
          onClick={() => router.push('/portal')}
          style={{ background: "#DA251D", color: "white", border: "none", padding: "10px 20px", borderRadius: "12px", fontWeight: "800", fontSize: "12px", cursor: "pointer" }}
        >
          OFFICER ACCESS
        </button>
      </nav>

      {/* Hero Section */}
      <section style={s.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span style={s.badge}>PUBLIC INFORMATION NODE</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", fontWeight: "900", lineHeight: 1, marginBottom: "20px" }}>
            SANGATHAN <span style={{ color: "#DA251D" }}>SETU</span>
          </h1>
          <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto", fontSize: "16px", lineHeight: "1.6" }}>
            Uttar Pradesh ke har booth ko sashakt banane ka abhiyan. Real-time data aur sangathan ki shakti ka transparent darpan.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <div style={s.cardGrid}>
        <motion.div whileHover={{ y: -10 }} style={s.statCard}>
          <Users size={40} color="#DA251D" style={{ marginBottom: "20px" }} />
          <h3 style={{ fontSize: "32px", fontWeight: "900", margin: "0 0 5px 0" }}>1.2M+</h3>
          <p style={{ color: "#444", fontSize: "12px", fontWeight: "bold", letterSpacing: "1px" }}>TOTAL ENROLLMENTS</p>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} style={s.statCard}>
          <Map size={40} color="#DA251D" style={{ marginBottom: "20px" }} />
          <h3 style={{ fontSize: "32px", fontWeight: "900", margin: "0 0 5px 0" }}>75</h3>
          <p style={{ color: "#444", fontSize: "12px", fontWeight: "bold", letterSpacing: "1px" }}>DISTRICTS ACTIVE</p>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} style={s.statCard}>
          <Award size={40} color="#DA251D" style={{ marginBottom: "20px" }} />
          <h3 style={{ fontSize: "32px", fontWeight: "900", margin: "0 0 5px 0" }}>1.6L+</h3>
          <p style={{ color: "#444", fontSize: "12px", fontWeight: "bold", letterSpacing: "1px" }}>BOOTHS COVERED</p>
        </motion.div>
      </div>

      {/* Public Announcement Section */}
      <section style={{ padding: "60px 20px", background: "rgba(218, 37, 29, 0.03)", marginTop: "40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <Megaphone size={30} color="#DA251D" style={{ marginBottom: "20px" }} />
          <h2 style={{ fontWeight: "900" }}>LATEST UPDATES</h2>
          <div style={{ textAlign: "left", marginTop: "30px" }}>
             {[1, 2, 3].map((item) => (
               <div key={item} style={{ padding: "20px", borderLeft: "4px solid #DA251D", background: "rgba(255,255,255,0.02)", marginBottom: "15px", borderRadius: "0 15px 15px 0" }}>
                 <p style={{ margin: 0, fontSize: "14px", fontWeight: "500" }}>Naye Karyakarta enrollment ki samay seema badha di gayi hai. Apne booth par aaj hi sampark karein.</p>
                 <span style={{ fontSize: "10px", color: "#333", marginTop: "10px", display: "block" }}>POSTED ON: 19 FEB 2026</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "900" }}>Sangathan se Judna Chahte Hain?</h2>
        <button 
          onClick={() => router.push('/signup')}
          style={{ marginTop: "30px", padding: "20px 40px", borderRadius: "15px", border: "none", background: "white", color: "black", fontWeight: "900", fontSize: "16px", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "10px" }}
        >
          BECOME A KARYAKARTA <ArrowRight size={20} />
        </button>
      </section>

      <footer style={{ padding: "40px", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: "10px", color: "#222", letterSpacing: "2px" }}>
        EMS.UP • PUBLIC DATA NODE • 2026
      </footer>
    </div>
  );
}