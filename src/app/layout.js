"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Home, Shield, Zap, MapPin, Sword, Search, 
  Swords, BarChart3, MessageSquare, UserPlus, 
  LayoutGrid, Server, Globe 
} from "lucide-react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  // Aapke saare 14 pages ka data mapping
  const menuItems = [
    { name: 'Home', path: '/welcome-page', icon: <Home size={20} /> },
    { name: 'Portal', path: '/portal', icon: <Shield size={20} /> },
    { name: 'State L', path: '/state-login', icon: <Zap size={20} /> },
    { name: 'Zone L', path: '/zone-login', icon: <Zap size={20} /> },
    { name: 'Dist L', path: '/district-login', icon: <MapPin size={20} /> },
    { name: 'Warriors', path: '/warriors-node', icon: <Sword size={20} /> },
    { name: 'Search', path: '/search-booth', icon: <Search size={20} /> },
    { name: 'WarRoom', path: '/state-war-room', icon: <Swords size={20} /> },
    { name: 'Intel', path: '/voter-intelligence', icon: <BarChart3 size={20} /> },
    { name: 'Chat', path: '/messenger', icon: <MessageSquare size={20} /> },
    { name: 'SignUp', path: '/signup', icon: <UserPlus size={20} /> },
    { name: 'Cmds', path: '/my-commands', icon: <LayoutGrid size={20} /> },
    { name: 'Server', path: '/reporting-server', icon: <Server size={20} /> },
    { name: 'Public', path: '/public-info', icon: <Globe size={20} /> },
  ];

  if (!mounted) return <html lang="en"><body style={{background: '#000'}}></body></html>;

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000', color: 'white', overflowX: 'hidden' }}>
        
        {/* --- DYNAMIC BRAND HEADER --- */}
        <header style={{ 
          position: 'fixed', top: 0, width: '100%', zIndex: 1000,
          background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)',
          padding: '15px 20px', display: 'flex', justifyContent: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.05)' 
        }}>
          <div style={{ fontWeight: 900, letterSpacing: '4px', fontSize: '1.1rem' }}>
            EMS<span style={{color: '#DA251D'}}>.</span>UP
          </div>
        </header>

        {/* --- PAGE CONTENT RENDER --- */}
        <main style={{ paddingTop: '80px', paddingBottom: '130px', minHeight: '100vh' }}>
          {children}
        </main>

        {/* --- MAC STYLE DOCK (GLOBAL) --- */}
        <div className="ems-floating-dock-wrapper">
          <nav className="dock-glass-blur no-scrollbar">
            {menuItems.map((item) => {
              const active = pathname === item.path;
              return (
                <div 
                  key={item.path} 
                  onClick={() => router.push(item.path)}
                  className={`dock-icon-node ${active ? 'active' : ''}`}
                >
                  <span className="dock-tooltip-top">{item.name}</span>
                  <div className="icon-container" style={{ color: active ? '#DA251D' : '#555' }}>
                    {item.icon}
                  </div>
                  {active && <motion.div layoutId="activeDot" className="indicator-dot" />}
                </div>
              );
            })}
          </nav>
        </div>

        <style>{`
          .ems-floating-dock-wrapper {
            position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);
            z-index: 99999; max-width: 95vw;
          }
          .dock-glass-blur {
            display: flex; gap: 8px; padding: 10px 18px;
            background: rgba(255, 255, 255, 0.01); backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 26px;
            overflow-x: auto; scrollbar-width: none;
            box-shadow: 0 20px 50px rgba(0,0,0,0.7);
          }
          .dock-glass-blur::-webkit-scrollbar { display: none; }
          .dock-icon-node {
            position: relative; display: flex; flex-direction: column; align-items: center;
            padding: 10px; cursor: pointer; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .dock-icon-node:hover { transform: scale(1.4) translateY(-12px); }
          .dock-tooltip-top {
            position: absolute; top: -50px; background: #000; color: #fff;
            padding: 6px 12px; border-radius: 8px; font-size: 10px; font-weight: 1000;
            opacity: 0; pointer-events: none; transition: 0.2s; border: 1px solid #222;
          }
          .dock-icon-node:hover .dock-tooltip-top { opacity: 1; }
          .indicator-dot {
            width: 4px; height: 4px; background: #DA251D; border-radius: 50%;
            margin-top: 5px; box-shadow: 0 0 10px #DA251D;
          }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          @media (max-width: 768px) {
            .dock-tooltip-top { display: none; }
            .ems-floating-dock-wrapper { bottom: 15px; width: 92vw; }
            .dock-glass-blur { padding: 8px; gap: 4px; }
          }
        `}</style>
      </body>
    </html>
  );
}