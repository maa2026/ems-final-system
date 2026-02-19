"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User, Shield, Star, Crown, Zap, ChevronDown, Landmark, Map, Users, Target, Fingerprint, Database, Upload, Trash2, Settings, FileSpreadsheet, CheckCircle2, AlertCircle } from "lucide-react";

export default function MultiLevelBulkManager() {
  const [activeChat, setActiveChat] = useState(null);
  const [openSection, setOpenSection] = useState("state"); 
  const [isAdminMode, setIsAdminMode] = useState(false); 
  const [uploadStatus, setUploadStatus] = useState("idle"); // idle, processing, success

  const s = {
    container: { backgroundColor: "#000502", height: "100vh", display: "flex", color: "white", fontFamily: "'Inter', sans-serif" },
    sidebar: { width: "380px", borderRight: "1px solid rgba(255,255,255,0.05)", background: "#010804", display: "flex", flexDirection: "column" },
    bulkPanel: { background: "rgba(218,37,29,0.08)", padding: "25px", borderBottom: "1px solid rgba(218,37,29,0.2)", position: "relative", boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)" },
    sectionHeader: { padding: "15px 25px", background: "rgba(255,255,255,0.02)", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" },
    contactItem: (active) => ({
      padding: "12px 25px", cursor: "pointer", background: active ? "rgba(218,37,29,0.12)" : "transparent",
      display: "flex", alignItems: "center", gap: "12px", borderLeft: active ? "3px solid #DA251D" : "3px solid transparent"
    }),
    uploadBox: { border: "1px dashed rgba(218,37,29,0.4)", padding: "20px", borderRadius: "15px", textAlign: "center", cursor: "pointer", background: "rgba(0,0,0,0.3)" }
  };

  const hierarchy = {
    state: [{ id: 'hq', name: 'STATE HQ (LUCKNOW)', role: 'SUPREME COMMAND', color: '#DA251D', icon: <Crown size={14} /> }],
    vip: [{ id: 'mla1', name: 'AKHILESH YADAV', role: 'MLA (KARHAL)', color: '#FFC107', icon: <Star size={14} color="black" /> }],
    zone: [{ id: 'z1', name: 'WEST UP ZONE', role: 'ZONE INCHARGE', color: '#E67E22', icon: <Map size={14} /> }],
    district: [{ id: 'd1', name: 'MAINPURI DISTRICT', role: 'DISTRICT PRESIDENT', color: '#00914C', icon: <Shield size={14} /> }],
    field: [
      { id: 'bgm1', name: 'VIKRAM SINGH', role: 'BOOTH GROUP MGR', color: '#8E44AD', icon: <Users size={14} /> },
      { id: 'jss1', name: 'AMIT KUMAR', role: 'JAN SAMPARK SATHI', color: '#27AE60', icon: <Fingerprint size={14} /> }
    ]
  };

  const startBulkUpload = () => {
    setUploadStatus("processing");
    setTimeout(() => setUploadStatus("success"), 3000);
  };

  const renderSection = (key, label, icon) => (
    <div key={key}>
      <div style={s.sectionHeader} onClick={() => setOpenSection(openSection === key ? null : key)}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {icon} <span style={{ fontSize: '10px', fontWeight: '900', letterSpacing: '1.5px', color: '#444' }}>{label}</span>
        </div>
        <ChevronDown size={14} color="#333" />
      </div>
      <AnimatePresence>
        {openSection === key && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
            {hierarchy[key].map(node => (
              <div key={node.id} onClick={() => setActiveChat(node)} style={s.contactItem(activeChat?.id === node.id)}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: node.color, display: "flex", alignItems: "center", justifyContent: "center" }}>{node.icon}</div>
                <div style={{ flex: 1 }}><div style={{ fontSize: '13px', fontWeight: '700' }}>{node.name}</div></div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div style={s.container}>
      <div style={s.sidebar}>
        <div style={{ padding: "30px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
             <h2 style={{ fontSize: "1.4rem", fontWeight: "900" }}>COMM <span style={{ color: "#DA251D" }}>SYNC</span></h2>
             <Settings size={18} color={isAdminMode ? "#DA251D" : "#444"} style={{ cursor: 'pointer' }} onClick={() => setIsAdminMode(!isAdminMode)} />
           </div>
        </div>

        {/* --- 5-LEVEL BULK UPLOAD PANEL --- */}
        <AnimatePresence>
          {isAdminMode && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} style={s.bulkPanel}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <Database size={14} color="#DA251D" />
                  <span style={{ fontSize: '10px', fontWeight: '900' }}>5-LEVEL BULK INGESTION</span>
               </div>
               
               <div style={s.uploadBox} onClick={startBulkUpload}>
                  {uploadStatus === "idle" ? (
                    <>
                       <FileSpreadsheet size={24} color="#DA251D" style={{ margin: '0 auto 10px' }} />
                       <p style={{ fontSize: '11px', fontWeight: 'bold' }}>Upload 5-Level Master Sheet</p>
                       <span style={{ fontSize: '8px', color: '#444' }}>Supports .XLSX, .CSV (Max 3.5M Rows)</span>
                    </>
                  ) : uploadStatus === "processing" ? (
                    <div style={{ color: '#DA251D' }}>
                       <Zap size={24} className="animate-pulse" style={{ margin: '0 auto 10px' }} />
                       <p style={{ fontSize: '10px', fontWeight: '900' }}>MAPPING HIERARCHY...</p>
                    </div>
                  ) : (
                    <div style={{ color: '#00914C' }}>
                       <CheckCircle2 size={24} style={{ margin: '0 auto 10px' }} />
                       <p style={{ fontSize: '10px', fontWeight: '900' }}>3.5M NODES SYNCED</p>
                    </div>
                  )}
               </div>

               <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#555' }}>
                    <span>L1-L2 (LEGISLATORS)</span><span style={{ color: '#FFC107' }}>AUTO-MAPPED</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#555' }}>
                    <span>L3-L5 (FIELD OPS)</span><span style={{ color: '#00914C' }}>SYNC READY</span>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div style={{ flex: 1, overflowY: 'auto' }}>
           {renderSection('state', 'LEVEL 1: CORE COMMAND', <Crown size={14} color="#DA251D" />)}
           {renderSection('vip', 'LEVEL 2: LEGISLATORS', <Landmark size={14} color="#FFC107" />)}
           {renderSection('zone', 'LEVEL 3: ZONE/DIVISION', <Map size={14} color="#E67E22" />)}
           {renderSection('district', 'LEVEL 4: DISTRICT UNIT', <Shield size={14} color="#00914C" />)}
           {renderSection('field', 'LEVEL 5: FIELD WARRIORS', <Zap size={14} color="#27AE60" />)}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
         <div style={{ textAlign: 'center', opacity: 0.1 }}>
            <Database size={100} />
            <h1 style={{ letterSpacing: '10px' }}>EMS.UP</h1>
         </div>
      </div>
    </div>
  );
}