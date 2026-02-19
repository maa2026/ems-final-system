"use client";
import { motion } from "framer-motion";
import { Search, List, ChevronRight, ChevronLeft, Database } from "lucide-react";

export default function SearchBooth() {
  const s = {
    container: { 
      backgroundColor: "#010804", 
      minHeight: "100vh", 
      padding: "clamp(20px, 5vw, 40px) 20px", 
      color: "white", 
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      justifyContent: "center"
    },
    glassCard: { 
      background: "rgba(255, 255, 255, 0.02)", 
      backdropFilter: "blur(20px)", 
      border: "1px solid rgba(255, 255, 255, 0.05)", 
      padding: "clamp(20px, 4vw, 40px)", 
      borderRadius: "40px", 
      width: "100%",
      maxWidth: "1200px", 
      boxShadow: "0 25px 50px rgba(0,0,0,0.5)" 
    },
    input: { 
      background: "rgba(255,255,255,0.05)", 
      border: "1px solid rgba(255,255,255,0.1)", 
      padding: "14px", 
      borderRadius: "12px", 
      color: "#fff", 
      width: "100%", 
      fontSize: "14px", 
      outline: "none" 
    },
    label: { 
      color: "#DA251D", 
      fontSize: "11px", 
      fontWeight: "800", 
      marginBottom: "8px", 
      display: "block", 
      letterSpacing: "2px" 
    },
    gridFields: { 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", 
      gap: "20px", 
      marginBottom: "40px" 
    },
    
    // Updated Table Row: Gap fix kiya gaya hai
    tableRow: { 
      display: "grid", 
      gridTemplateColumns: "60px 120px 1fr", // No: 60px, Part: 120px, Booth: Baki sab (1fr)
      padding: "18px 15px", 
      borderBottom: "1px solid rgba(255,255,255,0.05)", 
      alignItems: "center",
      fontSize: "14px",
      textAlign: "left"
    },
    headerRow: {
        background: "rgba(218, 37, 29, 0.06)",
        color: "#DA251D",
        fontWeight: "900",
        fontSize: "12px",
        letterSpacing: "1px",
        borderRadius: "12px",
        marginBottom: "10px"
    }
  };

  return (
    <div style={s.container}>
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={s.glassCard}>
        
        {/* Branding Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 2.5rem)", fontWeight: "900", margin: 0, letterSpacing: "-1px", display: "flex", alignItems: "baseline" }}>
              SEARCH<span style={{ color: "#DA251D" }}>BOOTH</span>
              <span style={{ display: "inline-block", width: "0.15em", height: "0.15em", backgroundColor: "#DA251D", borderRadius: "50%", margin: "0 0.1em", boxShadow: "0 0 15px #DA251D" }} />
            </h1>
            <p style={{ color: "#444", fontSize: "11px", letterSpacing: "4px", fontWeight: "bold", marginTop: "5px" }}>UTTAR PRADESH INFRASTRUCTURE</p>
          </div>
          <div style={{ textAlign: 'right', background: 'rgba(255,255,255,0.03)', padding: '15px 25px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={s.label}>AC BOOTH COUNT</span>
            <div style={{ fontSize: '28px', fontWeight: '900', color: '#fff' }}>385</div>
          </div>
        </div>

        {/* Filters */}
        <div style={s.gridFields}>
          <div><label style={s.label}>STATE</label><input style={{...s.input, opacity: 0.5}} value="Uttar Pradesh" readOnly /></div>
          <div><label style={s.label}>ZONE</label><input style={s.input} placeholder="Auto Update..." readOnly /></div>
          <div>
            <label style={s.label}>DISTRICT</label>
            <select style={s.input}>
              <option>Search or DropDown</option>
              <option>Mainpuri</option>
              <option>Etawah</option>
            </select>
          </div>
          <div><label style={s.label}>CONSTITUENCY (AC)</label><input style={s.input} placeholder="Auto Fill..." /></div>
        </div>

        {/* Booth List Area */}
        <div style={{ marginTop: '50px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '3px', height: '20px', background: '#DA251D' }}></div>
              <span style={{ fontWeight: '800', fontSize: '15px', letterSpacing: '1px' }}>BOOTH LIST DISPLAY</span>
            </div>
            <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
              <Search size={18} color="#DA251D" style={{ position: 'absolute', right: '15px', top: '13px' }} />
              <input style={{ ...s.input, paddingRight: '45px' }} placeholder="Search..." />
            </div>
          </div>

          {/* Table Header */}
          <div style={{ ...s.tableRow, ...s.headerRow }}>
            <div>NO.</div>
            <div>PART NO</div>
            <div>BOOTH NAME / LOCATION</div>
          </div>

          {/* Data Rows */}
          {[...Array(10)].map((_, i) => (
            <motion.div 
              key={i} 
              whileHover={{ background: "rgba(255,255,255,0.02)", x: 5 }} 
              style={s.tableRow}
            >
              <div style={{ color: "#333", fontWeight: "bold" }}>{i + 1}</div>
              <div style={{ fontWeight: "800", color: "#DA251D" }}>{120 + i}</div>
              <div style={{ opacity: 0.9, fontWeight: "500" }}>Primary School, Room No. {i + 1}, Mainpuri North Block Division</div>
            </motion.div>
          ))}

          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '30px 10px', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <span style={{ fontSize: '12px', color: '#444', fontWeight: 'bold' }}>SHOWING 1-20 NEXT</span>
            <div style={{ display: 'flex', gap: '15px' }}>
              <motion.button whileTap={{ scale: 0.95 }} style={{ ...s.input, width: 'auto', padding: '12px 25px', cursor: 'pointer' }}>
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button whileTap={{ scale: 0.95 }} style={{ ...s.input, width: 'auto', padding: '12px 25px', background: '#DA251D', border: 'none', cursor: 'pointer', fontWeight: '800' }}>
                NEXT <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px', opacity: 0.2 }}>
           <Database size={18} color="#DA251D" />
           <p style={{ fontSize: '9px', letterSpacing: '4px', marginTop: '10px' }}>SECURE INFRASTRUCTURE NODE 2026</p>
        </div>

      </motion.div>
    </div>
  );
}