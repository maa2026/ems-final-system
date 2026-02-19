"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Activity, ShieldCheck, Globe, Users, Send, Target, AlertTriangle } from "lucide-react";

export default function StateWarRoom() {
  const s = {
    container: { 
      backgroundColor: "#000502", minHeight: "100vh", padding: "20px", color: "white", 
      fontFamily: "'Inter', sans-serif", backgroundImage: "radial-gradient(circle at 2px 2px, rgba(218,37,29,0.03) 1px, transparent 0)", backgroundSize: "30px 30px" 
    },
    topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px' },
    warRoomGrid: { display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' },
    feedCard: { background: "rgba(255, 255, 255, 0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "24px", padding: "20px", height: "75vh", overflowY: "auto" },
    signalBox: { background: 'rgba(218,37,29,0.05)', border: '1px solid rgba(218,37,29,0.1)', borderRadius: '15px', padding: '15px', marginBottom: '15px', position: 'relative' }
  };

  return (
    <div style={s.container}>
      {/* HEADER SECTION */}
      <div style={s.topBar}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-1px' }}>STATE <span style={{ color: "#DA251D" }}>WAR-ROOM</span></h1>
          <p style={{ fontSize: '9px', color: '#444', fontWeight: '900', letterSpacing: '2px' }}>UP ELECTION COMMAND CENTER // 2026</p>
        </div>
        <div style={{ textAlign: 'right' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(0,145,76,0.1)', padding: '8px 15px', borderRadius: '50px', border: '1px solid #00914C' }}>
              <Activity size={12} color="#00914C" className="animate-pulse" />
              <span style={{ fontSize: '10px', color: '#00914C', fontWeight: '900' }}>TOTAL ACTIVE SATHI: 42,890</span>
           </div>
        </div>
      </div>

      <div style={s.warRoomGrid}>
        {/* LEFT: LIVE INTELLIGENCE FEED */}
        <div>
          <span style={{ fontSize: '10px', fontWeight: '900', color: '#DA251D', letterSpacing: '2px', display: 'block', marginBottom: '15px' }}>
            ● LIVE GROUND SIGNALS
          </span>
          <div style={s.feedCard} className="custom-scrollbar">
            {/* Sample Signal Card (Sathi Amit's Message) */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={s.signalBox}>
               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '9px', color: '#DA251D', fontWeight: '900' }}>SATHI: AMIT KR. // DISTRICT: MAINPURI</span>
                  <span style={{ fontSize: '9px', color: '#444' }}>02 MINS AGO</span>
               </div>
               <p style={{ fontSize: '14px', fontWeight: '600', color: '#fff', margin: '0 0 10px 0' }}>
                  "Booth 124, Page-08: Youth voters demand better stadium facilities. Sentiment shift noticed."
               </p>
               <div style={{ display: 'flex', gap: '10px' }}>
                  <span style={{ fontSize: '8px', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px', color: '#888' }}>MOOD: NEUTRAL</span>
                  <span style={{ fontSize: '8px', background: 'rgba(255,255,255,0.05)', padding: '4px 8px', borderRadius: '4px', color: '#888' }}>FAMILY ID: #8821</span>
               </div>
            </motion.div>

            {/* Emergency Signal Card */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ ...s.signalBox, borderColor: '#DA251D', background: 'rgba(218,37,29,0.1)' }}>
               <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                  <AlertTriangle size={14} color="#DA251D" />
                  <span style={{ fontSize: '9px', color: '#DA251D', fontWeight: '900' }}>URGENT SIGNAL: KANNAUJ</span>
               </div>
               <p style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>"Opponents distributing pamphlets in Ward 12. Immediate intervention required."</p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT: GLOBAL BROADCAST CENTER */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ ...s.mainCard, background: 'rgba(0,145,76,0.02)', border: '1px solid rgba(0,145,76,0.1)', padding: '25px', borderRadius: '24px' }}>
            <span style={{ fontSize: '10px', fontWeight: '900', color: '#00914C', letterSpacing: '2px', display: 'block', marginBottom: '20px' }}>
              <Zap size={14} fill="#00914C" /> BROADCAST TO GROUND ZERO
            </span>
            <select style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', marginBottom: '15px' }}>
               <option>Target: ALL SATHIS (UP)</option>
               <option>Target: ZONE 1 (West UP)</option>
               <option>Target: DISTRICT (Mainpuri)</option>
            </select>
            <textarea placeholder="Enter Mission Instruction..." style={{ width: '100%', minHeight: '120px', padding: '15px', background: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', marginBottom: '15px', outline: 'none' }}></textarea>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ width: '100%', padding: '18px', borderRadius: '14px', border: 'none', background: '#00914C', color: 'white', fontWeight: '900', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              TRANSMIT PROTOCOL <Send size={18} />
            </motion.button>
          </div>

          <div style={{ ...s.mainCard, padding: '25px', borderRadius: '24px', textAlign: 'center' }}>
             <Users size={30} color="#444" style={{ marginBottom: '15px' }} />
             <h3 style={{ margin: 0, fontSize: '1.2rem' }}>75/75</h3>
             <p style={{ fontSize: '9px', color: '#444', fontWeight: '900', letterSpacing: '1px' }}>DISTRICTS SYNCED</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ marginTop: '30px', textAlign: 'center', opacity: 0.2, fontSize: '9px', letterSpacing: '5px' }}>
        SAMAJWADI CLOUD COMMAND // MISSION 2026
      </div>
    </div>
  );
}