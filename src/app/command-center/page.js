"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Radio, Shield, User, Landmark, Star, Paperclip, X, FileText, ImageIcon, Film } from "lucide-react";

export default function AdvancedCommandCenter() {
  const [targetMode, setTargetMode] = useState("broadcast"); 
  const [attachedFiles, setAttachedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const isVip = targetMode === "vip";
  // Logic: VIP -> Gold (#FFC107), Others -> Green (#00914C)
  const primaryColor = isVip ? "#FFC107" : "#00914C";

  // --- AAPKI ORIGINAL DRAWING STYLES (NO CHANGES) ---
  const s = {
    container: { backgroundColor: "#000502", minHeight: "100vh", color: "white", fontFamily: "'Inter', sans-serif", display: "flex" },
    sidebar: { width: "320px", borderRight: "1px solid rgba(255,255,255,0.05)", padding: "30px", background: "rgba(255,255,255,0.01)", flexShrink: 0 },
    main: { flex: 1, padding: "40px", position: "relative", display: "flex", flexDirection: "column" },
    tab: (active, isVipTab) => ({
      padding: "16px", borderRadius: "15px", marginBottom: "12px", cursor: "pointer",
      background: active ? (isVipTab ? "rgba(255,193,7,0.1)" : "rgba(218,37,29,0.15)") : "rgba(255,255,255,0.02)",
      border: active ? (isVipTab ? "1px solid #FFC107" : "1px solid #DA251D") : "1px solid rgba(255,255,255,0.05)",
      color: active ? "white" : "#555", display: "flex", alignItems: "center", gap: "12px", transition: "0.3s"
    }),
    terminalInput: {
      width: "100%", padding: "20px", background: "#000", border: "1px solid #222", 
      borderRadius: "20px", color: "white", fontSize: "15px", outline: "none", marginTop: "20px", boxSizing: "border-box"
    }
  };

  return (
    <>
      {/* BULLETPROOF RESPONSIVE CSS: 
          Yeh Laptop par aapki Drawing ko touch nahi karega, 
          lekin Mobile par layout ko perfectly fit kar dega.
      */}
      <style>{`
        * { box-sizing: border-box; }
        .layout-root { display: flex; flex-direction: row; width: 100%; }
        
        @media (max-width: 1024px) {
          .layout-root { flex-direction: column !important; }
          .sidebar-root { width: 100% !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.05) !important; padding: 20px !important; }
          .tabs-wrapper { display: flex !important; flex-direction: row !important; overflow-x: auto !important; gap: 10px !important; }
          .tab-item { min-width: 160px !important; margin-bottom: 0 !important; flex-shrink: 0 !important; }
          .main-root { padding: 20px !important; }
          .grid-responsive { grid-template-columns: 1fr !important; }
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div style={s.container} className="layout-root">
        {/* --- SIDEBAR (Drawing Protected) --- */}
        <div style={s.sidebar} className="sidebar-root">
          <div style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "900" }}>PROTOCOL <span style={{ color: "#DA251D" }}>SYNC</span></h2>
            <p style={{ fontSize: "9px", color: "#333", letterSpacing: "3px", fontWeight: "900" }}>DIRECT COMMAND GATEWAY</p>
          </div>

          <div className="tabs-wrapper no-scrollbar">
            <div onClick={() => setTargetMode("broadcast")} style={s.tab(targetMode === "broadcast")} className="tab-item">
              <Radio size={18} /> <span>BROADCAST (ALL UP)</span>
            </div>
            
            <div onClick={() => setTargetMode("vip")} style={s.tab(targetMode === "vip", true)} className="tab-item">
              <Landmark size={18} color={isVip ? "#FFC107" : "#555"} /> 
              <span style={{ color: isVip ? "#FFC107" : "#555" }}>MLA / MP NODE</span>
            </div>

            <div onClick={() => setTargetMode("district")} style={s.tab(targetMode === "district")} className="tab-item">
              <Shield size={18} /> <span>DISTRICT UNIT</span>
            </div>
            
            <div onClick={() => setTargetMode("individual")} style={s.tab(targetMode === "individual")} className="tab-item">
              <User size={18} /> <span>INDIVIDUAL SATHI</span>
            </div>
          </div>

          <div style={{ marginTop: '50px', padding: '20px', background: 'rgba(255,193,7,0.05)', borderRadius: '20px', border: '1px solid rgba(255,193,7,0.1)' }}>
             <p style={{ fontSize: '10px', color: '#FFC107', fontWeight: '900', marginBottom: '10px' }}>VIP STATUS</p>
             <div style={{ fontSize: '12px', color: '#fff' }}>● 403 MLA NODES</div>
             <div style={{ fontSize: '12px', color: '#fff', marginTop: '5px' }}>● 80 MP NODES</div>
          </div>
        </div>

        {/* --- MAIN INTERFACE (Drawing Protected) --- */}
        <div style={s.main} className="main-root">
          <div style={{ flex: 1 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '10px' }}>
                {isVip ? "VIP LEGISLATOR " : "COMMAND "}
                <span style={{ color: primaryColor }}>TERMINAL</span>
              </h1>
              
              <div style={{ background: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontSize: '10px', fontWeight: '900', color: primaryColor, letterSpacing: '2px' }}>
                  {isVip ? "COMMUNICATE WITH PUBLIC REPRESENTATIVES" : "SET TARGET DESTINATION"}
                </span>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="grid-responsive">
                   {isVip && (
                     <>
                       <select style={s.terminalInput}><option>Select Constituency</option></select>
                       <select style={s.terminalInput}><option>Select Representative</option></select>
                     </>
                   )}
                   {targetMode === "district" && <select style={s.terminalInput}><option>Select District</option></select>}
                   
                   {/* ATTACHMENT MODULE: PDF, Word, Image, Video support */}
                   <div 
                     onClick={() => fileInputRef.current.click()} 
                     style={{ ...s.terminalInput, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', borderStyle: 'dashed', borderColor: '#444' }}
                   >
                     <Paperclip size={18} /> <span>ATTACH MEDIA / DOC</span>
                   </div>
                   <input type="file" ref={fileInputRef} hidden multiple accept=".pdf,.doc,.docx,image/*,video/*" onChange={handleFileChange} />
                </div>

                {/* File Preview Area */}
                {attachedFiles.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                    {attachedFiles.map((f, i) => (
                      <div key={i} style={{ background: '#111', padding: '10px 15px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #333' }}>
                        {f.type.includes('image') ? <ImageIcon size={14} color={primaryColor} /> : f.type.includes('video') ? <Film size={14} color={primaryColor} /> : <FileText size={14} color={primaryColor} />}
                        <span style={{ fontSize: '11px' }}>{f.name.substring(0, 10)}...</span>
                        <X size={14} style={{ cursor: 'pointer', color: '#DA251D' }} onClick={() => removeFile(i)} />
                      </div>
                    ))}
                  </div>
                )}

                <textarea placeholder="TYPE MISSION MESSAGE..." style={{ ...s.terminalInput, minHeight: '180px', resize: 'none' }}></textarea>

                {/* ACTION BUTTON: Curved (100px) + Instant Red Hover Rule */}
                <motion.button 
                  whileHover={{ backgroundColor: "#DA251D", color: "white", transition: { duration: 0 } }}
                  initial={{ backgroundColor: primaryColor, color: isVip ? "black" : "white" }}
                  animate={{ backgroundColor: primaryColor, color: isVip ? "black" : "white" }}
                  style={{ 
                    width: '100%', padding: '22px', borderRadius: '100px', 
                    border: 'none', fontWeight: '900', marginTop: '25px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', fontSize: '16px'
                  }}
                >
                  PUSH TO NODE <Star size={20} fill="currentColor" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* --- FOOTER (Mission 2027 Branding) --- */}
          <footer style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
            <p style={{ fontSize: "11px", color: "#555", fontWeight: "900", margin: 0 }}>
              EMS PROTOCOL V4.0 | <span style={{ color: "#DA251D" }}>MISSION 2027</span>
            </p>
            <div style={{ display: "flex", gap: "20px" }}>
              <span style={{ fontSize: "10px", color: primaryColor, fontWeight: "900" }}>● SYSTEM SECURE</span>
              <span style={{ fontSize: "10px", color: "#555", fontWeight: "900" }}>© 2026 EMS CENTER</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}