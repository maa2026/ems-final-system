"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Crown, CheckCheck, Landmark, ShieldAlert, ArrowLeft } from "lucide-react";

export default function WarriorMobileChat() {
  // Yeh data backend se aayega ki login karne wala Sathi hai ya MLA
  const userRole = "SATHI"; 

  const [chat, setChat] = useState([
    { id: 1, sender: "HQ", text: "Amit, booth 124 par polling status kya hai?", isMe: false },
    { id: 2, sender: "ME", text: "Sir, abhi 45% voting hui hai. Sab shanti hai.", isMe: true }
  ]);

  return (
    <div style={{ backgroundColor: "#000", height: "100vh", display: "flex", flexDirection: "column", color: "white" }}>
      
      {/* HEADER: Sathi ko dikhega ki woh kisse baat kar raha hai */}
      <div style={{ padding: "20px", background: "#DA251D", display: "flex", alignItems: "center", gap: "15px" }}>
        <ArrowLeft size={20} />
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <Crown size={24} color="#DA251D" />
        </div>
        <div>
          <b style={{ fontSize: "16px" }}>STATE HQ COMMAND</b>
          <div style={{ fontSize: "10px", opacity: 0.8 }}>Direct Secure Line</div>
        </div>
      </div>

      {/* CHAT BODY: Bilkul WhatsApp jaisa feel */}
      <div style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", gap: "10px", overflowY: "auto" }}>
        {chat.map((m) => (
          <div key={m.id} style={{
            alignSelf: m.isMe ? "flex-end" : "flex-start",
            background: m.isMe ? "#DA251D" : "#1A1A1A",
            padding: "12px 16px",
            borderRadius: m.isMe ? "15px 15px 2px 15px" : "15px 15px 15px 2px",
            maxWidth: "80%", fontSize: "14px"
          }}>
            {m.text}
            <div style={{ textAlign: "right", marginTop: "4px" }}>
               <CheckCheck size={12} color={m.isMe ? "#fff" : "#444"} />
            </div>
          </div>
        ))}
      </div>

      {/* INPUT AREA: Sathi yahan se reply karega jo aapko War Room mein dikhega */}
      <div style={{ padding: "20px", background: "#080808", display: "flex", gap: "10px" }}>
        <input 
          type="text" 
          placeholder="Type reply to HQ..." 
          style={{ flex: 1, background: "#151515", border: "none", padding: "15px", borderRadius: "10px", color: "white" }} 
        />
        <button style={{ background: "#DA251D", border: "none", borderRadius: "10px", width: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Send size={20} color="white" />
        </button>
      </div>
    </div>
  );
}