import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Maintenance = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', backgroundColor: '#eef2f6', color: '#1e293b', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
    <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#3b82f6' }}>Website Sedang Dalam Perbaikan</h1>
      <p style={{ fontSize: '1.2rem', color: '#475569' }}>Mohon maaf, website saat ini sedang dalam masa maintenance/perbaikan.</p>
      <p style={{ fontSize: '1.2rem', color: '#475569', marginTop: '0.5rem' }}>Silakan kembali lagi nanti.</p>
    </div>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Maintenance />
  </StrictMode>,
)
