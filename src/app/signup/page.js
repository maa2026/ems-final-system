"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck } from 'lucide-react'; // Icons ke liye

export default function SignupPage() {
  const router = useRouter();

  // Handle Form Submission
  const handleSignup = (e) => {
    e.preventDefault();
    // Yahan hum enrollment ke baad user ko Login page par bhej rahe hain
    alert("Enrollment Submitted Successfully! Redirecting to Login...");
    router.push('/login');
  };

  const s = {
    container: { 
      backgroundColor: "#000", 
      minHeight: "100vh", 
      padding: "20px", 
      color: "#fff", 
      fontFamily: "'Inter', sans-serif", 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center" 
    },
    card: { 
      maxWidth: "1100px", 
      width: "100%", 
      background: "rgba(10, 10, 10, 0.9)", 
      padding: "clamp(20px, 5vw, 45px)", 
      borderRadius: "25px", 
      border: "1px solid #1a1a1a", 
      boxShadow: "0 0 60px rgba(0,0,0,1)",
      position: "relative"
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
    responsiveGrid: { 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
      gap: "20px", 
      marginBottom: "20px" 
    },
    inputGroup: { marginBottom: "15px" },
    label: { color: "#555", fontSize: "11px", marginBottom: "8px", display: "block", fontWeight: "600", textTransform: "uppercase" },
    input: { background: "#0c0c0c", border: "1px solid #222", padding: "14px", borderRadius: "10px", color: "#fff", width: "100%", fontSize: "14px", outline: "none", boxSizing: "border-box" },
    btn: { width: "100%", padding: "18px", background: "#DA251D", color: "#fff", border: "none", borderRadius: "12px", fontWeight: "800", cursor: "pointer", fontSize: "16px", marginTop: "20px", transition: "0.3s" }
  };

  return (
    <div style={s.container}>
      {/* Back Button */}
      <button 
        onClick={() => router.push('/')}
        style={{ alignSelf: 'flex-start', background: 'none', border: 'none', color: '#444', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontWeight: 'bold', fontSize: '12px' }}
      >
        <ArrowLeft size={16} /> BACK TO GATEWAY
      </button>

      <div style={s.card}>
        <form onSubmit={handleSignup}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={s.logoShield}>
              <ShieldCheck size={30} />
            </div>
            <h1 style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: '800', margin: '0' }}>Sangathan Setu</h1>
            <p style={{ color: '#DA251D', fontSize: '10px', letterSpacing: '2px', marginTop: '5px', fontWeight: 'bold' }}>SECURE ACCESS • UP UNIT</p>
          </div>

          <div style={s.secTitle}><div style={s.redBar}></div> 1. Personal Profile</div>
          <div style={s.responsiveGrid}>
            <div style={s.inputGroup}><label style={s.label}>Full Name</label><input required style={s.input} placeholder="Voter ID Name" /></div>
            <div style={s.inputGroup}><label style={s.label}>Father's Name</label><input required style={s.input} placeholder="Guardian Name" /></div>
            <div style={s.inputGroup}><label style={s.label}>Date of Birth</label><input required type="date" style={s.input} /></div>
            <div style={s.inputGroup}><label style={s.label}>Primary Mobile</label><input required style={s.input} placeholder="+91" /></div>
            <div style={s.inputGroup}><label style={s.label}>WhatsApp</label><input style={s.input} placeholder="+91" /></div>
            <div style={s.inputGroup}><label style={s.label}>Alt Mobile</label><input style={s.input} placeholder="Optional" /></div>
          </div>

          <div style={s.secTitle}><div style={s.redBar}></div> 2. Residential</div>
          <div style={s.responsiveGrid}>
            <div style={s.inputGroup}><label style={s.label}>Address 1</label><input required style={s.input} placeholder="House No" /></div>
            <div style={s.inputGroup}><label style={s.label}>Address 2</label><input required style={s.input} placeholder="Village/Mohalla" /></div>
            <div style={s.inputGroup}><label style={s.label}>Tehsil</label><input required style={s.input} placeholder="Tehsil" /></div>
            <div style={s.inputGroup}><label style={s.label}>Police Station</label><input required style={s.input} placeholder="Thana" /></div>
            <div style={s.inputGroup}><label style={s.label}>PinCode</label><input required style={s.input} placeholder="2xxxxx" /></div>
          </div>

          <div style={s.secTitle}><div style={s.redBar}></div> 3. Organization</div>
          <div style={s.responsiveGrid}>
            <div style={s.inputGroup}><label style={s.label}>District</label><input required style={s.input} placeholder="District" /></div>
            <div style={s.inputGroup}><label style={s.label}>Constituency</label><input required style={s.input} placeholder="AC" /></div>
            <div style={s.inputGroup}><label style={s.label}>Block</label><input required style={s.input} placeholder="Block" /></div>
            <div style={s.inputGroup}><label style={s.label}>Booth No</label><input required style={s.input} placeholder="Booth" /></div>
          </div>

          <div style={s.secTitle}><div style={s.redBar}></div> 4. Experience</div>
          <div style={s.responsiveGrid}>
            <div style={s.inputGroup}><label style={s.label}>Voter ID No</label><input required style={s.input} placeholder="ID" /></div>
            <div style={s.inputGroup}><label style={s.label}>Education</label><select style={s.input}><option>12th</option><option>Graduate</option></select></div>
            <div style={s.inputGroup}><label style={s.label}>Exp</label><select style={s.input}><option>Fresher</option><option>1-3 yrs</option></select></div>
          </div>

          <button type="submit" style={s.btn}>SUBMIT ENROLLMENT</button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p style={{ fontSize: '12px', color: '#666' }}>
            Already Enrolled? <span onClick={() => router.push('/login')} style={{ color: '#DA251D', cursor: 'pointer', fontWeight: 'bold' }}>Login here</span>
          </p>
        </div>
        
        <p style={{ textAlign: 'center', color: '#222', fontSize: '10px', marginTop: '30px' }}>ENCRYPTED BY SAMAJWADI DIGITAL CELL</p>
      </div>
    </div>
  );
}