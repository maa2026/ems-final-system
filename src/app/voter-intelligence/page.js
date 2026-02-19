"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Save, UserPlus, Trash2, Users, MapPin, Sword, CreditCard, Fingerprint, Phone, Zap, Activity, ShieldCheck, HardDrive, Database, Send, MessageSquare } from "lucide-react";

export default function VoterIntelligenceNode() {
  const [members, setMembers] = useState([{ id: 1 }]);

  const addMember = () => setMembers([...members, { id: Date.now() }]);
  const removeMember = (id) => members.length > 1 && setMembers(members.filter(m => m.id !== id));

  const s = {
    container: { 
      backgroundColor: "#000502", minHeight: "100vh", padding: "20px", color: "white", 
      fontFamily: "'Inter', sans-serif", position: "relative", overflowX: "hidden",
      backgroundImage: "radial-gradient(circle at 2px 2px, rgba(218,37,29,0.05) 1px, transparent 0)",
      backgroundSize: "40px 40px" 
    },
    liveBadge: {
      display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 15px', 
      borderRadius: '50px', background: 'rgba(218,37,29,0.1)', border: '1px solid #DA251D',
      color: '#DA251D', fontSize: '9px', fontWeight: '900', letterSpacing: '2px', marginBottom: '20px'
    },
    hierarchyCard: {
      background: "rgba(218,37,29,0.03)", backdropFilter: "blur(10px)",
      border: "1px solid rgba(218,37,29,0.15)", borderRadius: "25px", padding: "20px",
      marginBottom: "25px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
    },
    communicationNode: {
      background: "rgba(0, 145, 76, 0.03)", backdropFilter: "blur(10px)",
      border: "1px solid rgba(0, 145, 76, 0.2)", borderRadius: "25px", padding: "20px",
      marginBottom: "25px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
    },
    mainCard: {
      background: "rgba(255, 255, 255, 0.01)", backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "30px", padding: "25px",
      marginBottom: "25px"
    },
    input: {
      width: "100%", padding: "16px", borderRadius: "14px", border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(0,0,0,0.4)", color: "white", marginBottom: "12px", fontSize: "14px", outline: "none",
      boxSizing: "border-box"
    },
    label: { fontSize: "10px", fontWeight: "900", color: "#DA251D", letterSpacing: "2px", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" },
    badgeLabel: { fontSize: '8px', color: '#444', fontWeight: '900', letterSpacing: '1px', marginBottom: '4px', textTransform: 'uppercase' }
  };

  return (
    <div style={s.container}>
      <div style={{ position: "absolute", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(218,37,29,0.1) 0%, transparent 70%)", top: "-10%", right: "-20%", pointerEvents: "none" }}></div>

      <center>
        <div style={s.liveBadge}>
          <Activity size={12} className="animate-pulse" /> ENCRYPTED MISSION DATA SYNC
        </div>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "900", letterSpacing: "-1.5px", margin: "0 0 35px 0" }}>
          VOTER <span style={{ color: "#DA251D", textShadow: "0 0 20px rgba(218,37,29,0.3)" }}>INTELLIGENCE</span>
        </h1>
      </center>

      {/* --- 1. FULL HIERARCHY DETAILS --- */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={s.hierarchyCard}>
        <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <HardDrive size={14} color="#DA251D" />
            <span style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '2px' }}>ASSIGNMENT PROTOCOL</span>
        </div>
        <div>
            <p style={s.badgeLabel}>Jan Sampark Sathi</p>
            <b style={{ fontSize: '13px', color: '#fff' }}>AMIT KR. (ID: 7501)</b>
        </div>
        <div>
            <p style={s.badgeLabel}>Booth Location</p>
            <b style={{ fontSize: '13px', color: '#fff' }}>XY-04 (PAGE-08)</b>
        </div>
        <div style={{ height: '1px', background: 'rgba(218,37,29,0.1)', gridColumn: 'span 2' }}></div>
        <div>
            <p style={s.badgeLabel}>Booth Manager</p>
            <b style={{ fontSize: '12px', color: '#888' }}>RAJESH YADAV</b>
        </div>
        <div>
            <p style={s.badgeLabel}>Group Manager</p>
            <b style={{ fontSize: '12px', color: '#888' }}>VIKRAM SINGH</b>
        </div>
      </motion.div>

      {/* --- 2. ISOLATED COMMAND TERMINAL (Direct Communication) --- */}
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={s.communicationNode}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
            <Zap size={14} color="#00914C" fill="#00914C" />
            <span style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '2px', color: '#00914C' }}>STATE COMMAND SIGNAL</span>
        </div>
        
        {/* HQ Broadcast */}
        <div style={{ background: 'rgba(0,0,0,0.4)', padding: '15px', borderRadius: '15px', borderLeft: '3px solid #00914C', marginBottom: '15px' }}>
            <p style={{ fontSize: '8px', color: '#444', fontWeight: '900', marginBottom: '5px' }}>LATEST INSTRUCTION FROM LKO-HQ:</p>
            <p style={{ fontSize: '13px', color: '#fff', lineHeight: '1.4' }}>"Verify migration status for all voters on Page-08 by EOD."</p>
        </div>

        {/* Direct Signal Input */}
        <div style={{ position: 'relative' }}>
            <input type="text" placeholder="Report ground intelligence..." style={{ ...s.input, marginBottom: 0, border: '1px solid rgba(0,145,76,0.2)', paddingRight: '50px' }} />
            <motion.button whileTap={{ scale: 0.9 }} style={{ position: 'absolute', right: '10px', top: '10px', background: '#00914C', border: 'none', borderRadius: '8px', padding: '8px' }}>
                <Send size={16} color="white" />
            </motion.button>
        </div>
      </motion.div>

      {/* --- 3. HOUSEHOLD DETAILS --- */}
      <div style={s.mainCard}>
        <span style={s.label}><MapPin size={14} /> HOUSEHOLD COORDINATES</span>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" placeholder="Makan No." style={s.input} />
          <input type="text" placeholder="Area / Landmark" style={s.input} />
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <select style={s.input}><option>Category</option><option>Gen</option><option>OBC</option><option>SC</option><option>ST</option></select>
          <input type="text" placeholder="Sub-Caste (Jaati)" style={s.input} />
        </div>
        <textarea placeholder="Local Grievances / Mudde..." style={{ ...s.input, minHeight: "80px" }}></textarea>
      </div>

      {/* --- 4. DYNAMIC MEMBER STACK --- */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={s.label}><Users size={14} /> ENLISTED MEMBERS ({members.length})</span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(218,37,29,0.1)' }}></div>
      </div>

      <AnimatePresence>
        {members.map((member, index) => (
          <motion.div key={member.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            style={{ ...s.mainCard, borderLeft: '4px solid #DA251D', padding: '20px', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span style={{ fontSize: '9px', fontWeight: '900', color: '#444' }}>MEMBER UNIT_{index + 1}</span>
              {members.length > 1 && <Trash2 size={18} color="#DA251D" onClick={() => removeMember(member.id)} cursor="pointer" />}
            </div>

            <input type="text" placeholder="Full Identity Name" style={s.input} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="tel" placeholder="Mobile No." style={s.input} />
              <input type="number" placeholder="Age" style={{ ...s.input, width: '100px' }} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" placeholder="Voter ID (EPIC)" style={s.input} />
              <input type="text" placeholder="Aadhar Number" style={s.input} />
            </div>
            <select style={s.input}>
              <option>Employment Status</option>
              <option>Private</option><option>Govt</option><option>Farmer</option><option>Student</option><option>Unemployed</option>
            </select>
          </motion.div>
        ))}
      </AnimatePresence>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingBottom: '40px' }}>
        <motion.button 
          onClick={addMember} 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(218,37,29,0.15)", borderColor: "#DA251D", color: "#DA251D", boxShadow: "0 0 20px rgba(218,37,29,0.2)" }}
          whileTap={{ scale: 0.98, backgroundColor: "#DA251D", color: "white" }}
          style={{ padding: '20px', borderRadius: '15px', border: '1px dashed rgba(218,37,29,0.4)', background: 'transparent', color: 'rgba(218,37,29,0.7)', fontWeight: '900', cursor: 'pointer', fontSize: '13px', transition: '0.3s ease' }}
        >
          + ADD FAMILY MEMBER UNIT
        </motion.button>

        <motion.button 
          whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.98, backgroundColor: "#DA251D", color: "white" }}
          style={{ padding: '22px', borderRadius: '18px', border: 'none', background: 'white', color: 'black', fontWeight: '900', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
        >
          SYNC TO COMMAND CENTER <Zap size={20} fill="currentColor" />
        </motion.button>
      </div>

      <div style={{ marginTop: "30px", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '15px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00914C', boxShadow: '0 0 10px #00914C' }}></div>
          <span style={{ fontSize: '9px', fontWeight: '900', letterSpacing: '3px', color: '#444' }}>GROUND DATA PROTOCOL IS ACTIVE</span>
        </div>
        <div style={{ fontSize: '8px', color: '#222', fontWeight: '900', letterSpacing: '5px' }}>
          EMS.UP // GLOBAL INTELLIGENCE NODE // v4.0.2
        </div>
        <p style={{ fontSize: '10px', color: '#111', marginTop: '12px', fontWeight: 'bold' }}>SAMAJWADI CLOUD © 2026</p>
      </div>
    </div>
  );
}