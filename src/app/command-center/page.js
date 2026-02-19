"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Users, User, Shield, Radio, Zap, MessageSquare, Search, Landmark, Star } from "lucide-react";

export default function AdvancedCommandCenter() {
  const [targetMode, setTargetMode] = useState("broadcast"); // 'broadcast', 'district', 'individual', 'vip'

  const s = {
    container: { backgroundColor: "#000502", minHeight: "100vh", color: "white", fontFamily: "'Inter', sans-serif", display: "flex" },
    sidebar: { width: "320px", borderRight: "1px solid rgba(255,255,255,0.05)", padding: "30px", background: "rgba(255,255,255,0.01)" },
    main: { flex: 1, padding: "40px", position: "relative" },
    tab: (active, isVip) => ({
      padding: "16px", borderRadius: "15px", marginBottom: "12px", cursor: "pointer",
      background: active ? (isVip ? "rgba(255,193,7,0.1)" : "rgba(218,37,29,0.15)") : "rgba(255,255,255,0.02)",
      border: active ? (isVip ? "1px solid #FFC107" : "1px solid #DA251D") : "1px solid rgba(255,255,255,0.05)",
      color: active ? "white" : "#555", display: "flex", alignItems: "center", gap: "12px", transition: "0.3s"
    }),
    terminalInput: {
      width: "100%", padding: "20px", background: "#000", border: "1px solid #222", 
      borderRadius: "20px", color: "white", fontSize: "15px", outline: "none", marginTop: "20px"
    }
  };

  return (
    <div style={s.container}>
      {/* --- SIDEBAR: TARGET SELECTION --- */}
      <div style={s.sidebar}>
        <div style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: "900" }}>PROTOCOL <span style={{ color: "#DA251D" }}>SYNC</span></h2>
          <p style={{ fontSize: "9px", color: "#333", letterSpacing: "3px", fontWeight: "900" }}>DIRECT COMMAND GATEWAY</p>
        </div>

        <div onClick={() => setTargetMode("broadcast")} style={s.tab(targetMode === "broadcast")}>
          <Radio size={18} /> <span>BROADCAST (ALL UP)</span>
        </div>
        
        {/* MLA / MP DEDICATED SECTION */}
        <div onClick={() => setTargetMode("vip")} style={s.tab(targetMode === "vip", true)}>
          <Landmark size={18} color={targetMode === "vip" ? "#FFC107" : "#555"} /> 
          <span style={{ color: targetMode === "vip" ? "#FFC107" : "#555" }}>MLA / MP NODE</span>
        </div>

        <div onClick={() => setTargetMode("district")} style={s.tab(targetMode === "district")}>
          <Shield size={18} /> <span>DISTRICT / ZONE UNIT</span>
        </div>
        
        <div onClick={() => setTargetMode("individual")} style={s.tab(targetMode === "individual")}>
          <User size={18} /> <span>INDIVIDUAL SATHI</span>
        </div>

        <div style={{ marginTop: '50px', padding: '20px', background: 'rgba(255,193,7,0.05)', borderRadius: '20px', border: '1px solid rgba(255,193,7,0.1)' }}>
           <p style={{ fontSize: '10px', color: '#FFC107', fontWeight: '900', marginBottom: '10px' }}>VIP STATUS</p>
           <div style={{ fontSize: '12px', color: '#fff' }}>● 403 MLA NODES</div>
           <div style={{ fontSize: '12px', color: '#fff', marginTop: '5px' }}>● 80 MP NODES</div>
        </div>
      </div>

      {/* --- MAIN INTERFACE --- */}
      <div style={s.main}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '10px' }}>
            {targetMode === "vip" ? "VIP LEGISLATOR " : "COMMAND "}
            <span style={{ color: targetMode === "vip" ? "#FFC107" : "#DA251D" }}>TERMINAL</span>
          </h1>
          
          <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: '10px', fontWeight: '900', color: targetMode === "vip" ? "#FFC107" : "#DA251D", letterSpacing: '2px' }}>
              {targetMode === "vip" ? "COMMUNICATE WITH PUBLIC REPRESENTATIVES" : "SET TARGET DESTINATION"}
            </span>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '15px' }}>
               {targetMode === "vip" && (
                 <>
                   <select style={s.terminalInput}>
                      <option>Select Constituency (Vidhan Sabha)</option>
                      <option>Mainpuri City</option><option>Karhal</option>
                   </select>
                   <select style={s.terminalInput}>
                      <option>Select Representative (MLA/MP Name)</option>
                      <option>Shri Akhilesh Yadav (MLA)</option>
                      <option>Smt. Dimple Yadav (MP)</option>
                   </select>
                 </>
               )}
               {targetMode === "district" && (
                 <select style={s.terminalInput}><option>Select District</option></select>
               )}
               <select style={s.terminalInput}>
                  <option>Priority: Tactical Alert</option>
                  <option>Priority: VIP Instruction</option>
                  <option>Priority: Personal Note</option>
               </select>
            </div>

            <textarea 
              placeholder={targetMode === "vip" ? "Type confidential message for MLA/MP..." : "Type mission message..."} 
              style={{ ...s.terminalInput, minHeight: '200px', border: '1px solid #111' }}
            ></textarea>

            <motion.button 
              whileHover={{ scale: 1.02, backgroundColor: targetMode === "vip" ? "#FFC107" : "#DA251D", color: "black" }}
              whileTap={{ scale: 0.98 }}
              style={{ width: '100%', padding: '22px', borderRadius: '18px', border: 'none', background: 'white', color: 'black', fontWeight: '900', marginTop: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}
            >
              PUSH TO VIP NODE <Star size={20} fill="currentColor" />
            </motion.button>
          </div>
        </motion.div>

        {/* Live VIP Feed Confirmation */}
        {targetMode === "vip" && (
          <div style={{ marginTop: '30px' }}>
             <span style={{ fontSize: '10px', fontWeight: '900', color: '#FFC107', letterSpacing: '2px' }}>CONSTITUENCY PULSE (LIVE FOR VIP)</span>
             <div style={{ padding: '20px', background: 'rgba(255,193,7,0.02)', border: '1px solid rgba(255,193,7,0.1)', borderRadius: '15px', marginTop: '10px' }}>
                <p style={{ fontSize: '13px', color: '#888' }}>
                  <b>Note:</b> MLA/MP will receive this message on their **Personal VIP Dashboard** along with the list of top 5 issues reported by Booth Managers in their area today.
                </p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}