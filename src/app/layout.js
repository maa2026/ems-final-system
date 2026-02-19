import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: '#051a10' }}>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        background: '#051a10', 
        minHeight: '100vh',
        display: 'block' 
      }}>
        {children}
      </body>
    </html>
  );
}
