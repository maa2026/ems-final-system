"use client";
import { useState } from "react";

export default function HiringPage() {
  const s = {
    container: { backgroundColor: "#000", minHeight: "100vh", padding: "40px", display: "flex", justifyContent: "center", fontFamily: "sans-serif" },
    card: { maxWidth: "1000px", width: "100%", background: "#0a0a0a", padding: "40px", borderRadius: "30px", border: "1px solid #1a1a1a", boxShadow: "0 25px 50px rgba(0,0,0,0.8)" },
    sectionTitle: { color: "#DA251D", fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "20px", marginTop: "30px", borderLeft: "4px solid #DA251D", paddingLeft: "15px" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" },
    inputGroup: { display: "flex", flexDirection: "column" },
    label: { color: "#555", fontSize: "12px", marginBottom: "8px", fontWeight: "600" },
    input: { padding: "12px 15px", borderRadius: "10px", border: "1px solid #222", background: "#111", color: "#fff", outline: "none", fontSize: "14px" },
    button: { width: "100%", padding: "18px", background: "#DA251D", color: "#fff", border: "none", borderRadius: "12px", fontWeight: "bold", fontSize: "16px", cursor: "pointer", marginTop: "40px" }
  };

  return (
    <div style={s.container}>
      <div style={s.card}>
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
          <h1 style={{color: '#fff', fontSize: '32px'}}>Karyakarta Hiring Node</h1>
          <p style={{color: '#666', fontSize: '14px'}}>EMS 2026 • Uttar Pradesh State Unit</p>
        </div>

        <div style={s.sectionTitle}>1. Personal & Family Profile</div>
        <div style={s.grid}>
          <div style={s.inputGroup}><label style={s.label}>Full Name (As per Voter ID)</label><input style={s.input} placeholder="Enter Full Name" /></div>
          <div style={s.inputGroup}><label style={s.label}>Father's / Husband's Name</label><input style={s.input} placeholder="Guardian Name" /></div>
          <div style={s.inputGroup}>
            <label style={s.label}>Gender</label>
            <select style={s.input}><option>Select</option><option>Male</option><option>Female</option><option>Other</option></select>
          </div>
          <div style={s.inputGroup}><label style={s.label}>Date of Birth</label><input type="date" style={s.input} /></div>
          <div style={s.inputGroup}><label style={s.label}>Mobile (WhatsApp)</label><input style={s.input} placeholder="+91" /></div>
          <div style={s.inputGroup}>
            <label style={s.label}>Education</label>
            <select style={s.input}><option>Select</option><option>10th Pass</option><option>12th Pass</option><option>Graduate</option><option>Post Graduate</option></select>
          </div>
        </div>

        <div style={s.sectionTitle}>2. Residential & Identity</div>
        <div style={s.grid}>
          <div style={{...s.inputGroup, gridColumn: "span 2"}}><label style={s.label}>Full Address</label><input style={s.input} placeholder="House No, Village/Mohalla, Post, Tehsil" /></div>
          <div style={s.inputGroup}><label style={s.label}>Pin Code</label><input style={s.input} placeholder="2xxxxx" /></div>
        </div>

        <div style={s.sectionTitle}>3. Organizational Allocation</div>
        <div style={s.grid}>
          <div style={s.inputGroup}><label style={s.label}>State</label><input style={s.input} value="Uttar Pradesh" readOnly /></div>
          <div style={s.inputGroup}>
            <label style={s.label}>District</label>
            <select style={s.input}><option>Mainpuri</option><option>Lucknow</option><option>Etawah</option></select>
          </div>
          <div style={s.inputGroup}><label style={s.label}>Constituency (AC)</label><input style={s.input} placeholder="Vidhan Sabha Name" /></div>
          <div style={s.inputGroup}>
            <label style={s.label}>Post Applied For</label>
            <select style={s.input}><option>JS (Jansampark Sathi)</option><option>BM (Booth Manager)</option><option>BGM (Group Manager)</option></select>
          </div>
        </div>

        <button style={s.button}>GENERATE RECRUITMENT REQUEST</button>
      </div>
    </div>
  );
}
