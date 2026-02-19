"use client";
import React, { useState } from 'react';

export default function SignupPage() {
  const s = {
    // Container responsive padding
    container: { 
      backgroundColor: "#000", 
      minHeight: "100vh", 
      padding: "20px", // Mobile par kam padding
      color: "#fff", 
      fontFamily: "'Inter', sans-serif", 
      display: "flex", 
      justifyContent: "center" 
    },
    // Card width adjustments
    card: { 
      maxWidth: "1100px", 
      width: "100%", 
      background: "rgba(10, 10, 10, 0.9)", 
      padding: "clamp(20px, 5vw, 45px)", // Screen size ke hisaab se padding badlegi
      borderRadius: "25px", 
      border: "1px solid #1a1a1a", 
      boxShadow: "0 0 60px rgba(0,0,0,1)" 
    },
    logoShield: { 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      border: '2px solid #DA251D', 
      borderRadius: '12px', 
      padding: '10px', 
      color: '#DA251D',
      marginBottom: '15px'
    },
    redBar: { width: "4px", height: "24px", background: "#DA251D", marginRight: "12px", borderRadius: "2px" },
    secTitle: { fontSize: "16px", fontWeight: "700", marginBottom: "25px", display: "flex", alignItems: "center", color: "#DA251D", textTransform: "uppercase" },
    
    // Grid system: Desktop par multi-column, Mobile par auto-stack
    responsiveGrid: { 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
      gap: "20px", 
      marginBottom: "20px" 
    },
    
    inputGroup: { marginBottom: "15px" },
    label: { color: "#555", fontSize: "11px", marginBottom: "8px", display: "block", fontWeight: "600", textTransform: "uppercase" },
    input: { background: "#0c0c0c", border: "1px solid #222", padding: "14px", borderRadius: "10px", color: "#fff", width: "100%", fontSize: "14px", outline: "none", boxSizing: "border-box" },
    btn: { width: "100%", padding: "18px", background: "#DA251D", color: "#fff", border: "none", borderRadius: "12px", fontWeight: "800", cursor: "pointer", fontSize: "16px", marginTop: "20px" }
  };

  return (
    <div style={s.container}>
      <div style={s.card}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={s.logoShield}>
            <svg width="25" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 11 12 14 22 4"></polyline></svg>
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '800', margin: '0' }}>Sangathan Setu</h1>
          <p style={{ color: '#DA251D', fontSize: '10px', letterSpacing: '2px', marginTop: '5px', fontWeight: 'bold' }}>SECURE ACCESS • UP UNIT</p>
        </div>

        <div style={s.secTitle}><div style={s.redBar}></div> 1. Personal Profile</div>
        <div style={s.responsiveGrid}>
          <div style={s.inputGroup}><label style={s.label}>Full Name</label><input style={s.input} placeholder="Voter ID Name" /></div>
          <div style={s.inputGroup}><label style={s.label}>Father's Name</label><input style={s.input} placeholder="Guardian Name" /></div>
          <div style={s.inputGroup}><label style={s.label}>Date of Birth</label><input type="date" style={s.input} /></div>
          <div style={s.inputGroup}><label style={s.label}>Primary Mobile</label><input style={s.input} placeholder="+91" /></div>
          <div style={s.inputGroup}><label style={s.label}>WhatsApp</label><input style={s.input} placeholder="+91" /></div>
          <div style={s.inputGroup}><label style={s.label}>Alt Mobile</label><input style={s.input} placeholder="Optional" /></div>
        </div>

        <div style={s.secTitle}><div style={s.redBar}></div> 2. Residential</div>
        <div style={s.responsiveGrid}>
          <div style={s.inputGroup}><label style={s.label}>Address 1</label><input style={s.input} placeholder="House No" /></div>
          <div style={s.inputGroup}><label style={s.label}>Address 2</label><input style={s.input} placeholder="Village/Mohalla" /></div>
          <div style={s.inputGroup}><label style={s.label}>Tehsil</label><input style={s.input} placeholder="Tehsil" /></div>
          <div style={s.inputGroup}><label style={s.label}>Police Station</label><input style={s.input} placeholder="Thana" /></div>
          <div style={s.inputGroup}><label style={s.label}>PinCode</label><input style={s.input} placeholder="2xxxxx" /></div>
        </div>

        <div style={s.secTitle}><div style={s.redBar}></div> 3. Organization</div>
        <div style={s.responsiveGrid}>
          <div style={s.inputGroup}><label style={s.label}>District</label><input style={s.input} placeholder="District" /></div>
          <div style={s.inputGroup}><label style={s.label}>Constituency</label><input style={s.input} placeholder="AC" /></div>
          <div style={s.inputGroup}><label style={s.label}>Block</label><input style={s.input} placeholder="Block" /></div>
          <div style={s.inputGroup}><label style={s.label}>Booth No</label><input style={s.input} placeholder="Booth" /></div>
        </div>

        <div style={s.secTitle}><div style={s.redBar}></div> 4. Experience</div>
        <div style={s.responsiveGrid}>
          <div style={s.inputGroup}><label style={s.label}>Voter ID No</label><input style={s.input} placeholder="ID" /></div>
          <div style={s.inputGroup}><label style={s.label}>Education</label><select style={s.input}><option>12th</option><option>Graduate</option></select></div>
          <div style={s.inputGroup}><label style={s.label}>Exp</label><select style={s.input}><option>Fresher</option><option>1-3 yrs</option></select></div>
        </div>

        <button style={s.btn}>SUBMIT ENROLLMENT</button>
        <p style={{ textAlign: 'center', color: '#222', fontSize: '10px', marginTop: '30px' }}>ENCRYPTED BY SAMAJWADI DIGITAL CELL</p>
      </div>
    </div>
  );
}