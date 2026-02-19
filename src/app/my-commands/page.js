"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Crown, CheckCheck, ArrowLeft, Paperclip, ImageIcon, FileText, Film, X } from "lucide-react";

export default function WarriorMobileChat() {
  const [message, setMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState([]);
  const fileInputRef = useRef(null);
  
  const [chat, setChat] = useState([
    { id: 1, sender: "HQ", text: "Amit, booth 124 par polling status kya hai?", isMe: false },
    { id: 2, sender: "ME", text: "Sir, abhi 45% voting hui hai. Sab shanti hai.", isMe: true }
  ]);

  // Attachment Logic
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const sendMessage = () => {
    if (message.trim() === "" && attachedFiles.length === 0) return;
    setChat([...chat, { id: Date.now(), sender: "ME", text: message, isMe: true, files: attachedFiles }]);
    setMessage("");
    setAttachedFiles([]);
  };

  const s = {
    container: { backgroundColor: "#000", height: "100dvh", display: "flex", flexDirection: "column", color: "white", overflow: "hidden" },
    header: { padding: "15px 20px", background: "#DA251D", display: "flex", alignItems: "center", gap: "15px", zIndex: 10 },
    chatBody: { flex: 1, padding: "20px", display: "flex", flexDirection: "column", gap: "12px", overflowY: "auto" },
    inputContainer: { background: "#080808", borderTop: "1px solid #1a1a1a", padding: "10px 15px", paddingBottom: "env(safe-area-inset-bottom, 15px)" },
    attachmentPreview: { display: "flex", gap: "10px", padding: "10px", overflowX: "auto", background: "#050505", borderBottom: "1px solid #111" }
  };

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div style={s.container}>
        {/* HEADER */}
        <div style={s.header}>
          <ArrowLeft size={20} />
          <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
             <Crown size={24} color="#DA251D" />
          </div>
          <div style={{ flex: 1 }}>
            <b style={{ fontSize: "16px" }}>STATE HQ COMMAND</b>
            <div style={{ fontSize: "10px", fontWeight: "900", opacity: 0.8 }}>● DIRECT SECURE LINE</div>
          </div>
        </div>

        {/* CHAT BODY */}
        <div style={s.chatBody} className="no-scrollbar">
          {chat.map((m) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              key={m.id} 
              style={{
                alignSelf: m.isMe ? "flex-end" : "flex-start",
                background: m.isMe ? "#DA251D" : "#1A1A1A",
                padding: "12px 16px",
                borderRadius: m.isMe ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                maxWidth: "85%", fontSize: "14px"
              }}
            >
              {m.text}
              {m.files && m.files.length > 0 && (
                <div style={{ marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '8px' }}>
                  {m.files.map((f, i) => (
                    <div key={i} style={{ fontSize: '11px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <FileText size={12} /> {f.name.substring(0, 15)}...
                    </div>
                  ))}
                </div>
              )}
              <div style={{ textAlign: "right", marginTop: "4px" }}>
                 <CheckCheck size={12} color={m.isMe ? "#fff" : "#DA251D"} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ATTACHMENT PREVIEW DRAWER */}
        <AnimatePresence>
          {attachedFiles.length > 0 && (
            <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={s.attachmentPreview} className="no-scrollbar">
              {attachedFiles.map((file, i) => (
                <div key={i} style={{ position: 'relative', background: '#111', padding: '8px 12px', borderRadius: '12px', border: '1px solid #333', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {file.type.includes('image') ? <ImageIcon size={14} color="#DA251D" /> : <FileText size={14} color="#DA251D" />}
                  <span style={{ fontSize: '10px' }}>{file.name.substring(0, 8)}...</span>
                  <X size={14} onClick={() => removeFile(i)} style={{ cursor: 'pointer', color: '#666' }} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* INPUT AREA WITH ATTACHMENT ICON */}
        <div style={s.inputContainer}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button 
              onClick={() => fileInputRef.current.click()}
              style={{ background: '#151515', border: 'none', borderRadius: '50%', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <Paperclip size={20} color={attachedFiles.length > 0 ? "#DA251D" : "#666"} />
            </button>
            
            <input 
              type="file" ref={fileInputRef} hidden multiple 
              accept="image/*,video/*,.pdf,.doc,.docx" 
              onChange={handleFileChange} 
            />

            <input 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type message to HQ..." 
              style={{ flex: 1, background: "#151515", border: "1px solid #222", padding: "14px 20px", borderRadius: "100px", color: "white", fontSize: "14px" }} 
            />

            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={sendMessage}
              style={{ background: "#DA251D", border: "none", borderRadius: "50%", width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            >
              <Send size={20} color="white" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}