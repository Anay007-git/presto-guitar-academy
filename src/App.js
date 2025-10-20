import React, { useState, useEffect } from 'react';
import './App.css';

// Import components with error handling
let Navbar, Hero, StudentZone, ChordLibrary, Classes, StudentsGallery, Community, MusicNotations, DemoBooking, Contact, Footer, FloatingChatBot, AITutor, AudioPlayer, SEO, SmokeCanvas, LazyImage;

try {
  Navbar = require('./components/Navbar').default;
  Hero = require('./components/Hero').default;
  StudentZone = require('./components/StudentZone').default;
  ChordLibrary = require('./components/ChordLibrary').default;
  Classes = require('./components/Classes').default;
  StudentsGallery = require('./components/StudentsGallery').default;
  Community = require('./components/Community').default;

  MusicNotations = require('./components/MusicNotations').default;
  DemoBooking = require('./components/DemoBooking').default;
  Contact = require('./components/Contact').default;
  Footer = require('./components/Footer').default;
  FloatingChatBot = require('./components/FloatingChatBot').default;
  AITutor = require('./components/AITutor').default;
  AudioPlayer = require('./components/AudioPlayer').default;
  SEO = require('./components/SEO').default;
  SmokeCanvas = require('./components/SmokeCanvas').default;
  LazyImage = require('./components/LazyImage').default;

} catch (error) {
  console.error('Component import error:', error);
}

// Fallback components
const FallbackComponent = ({ name }) => (
  <div style={{ padding: '2rem', textAlign: 'center', color: '#667eea' }}>
    <h2>🎸 {name} Component Loading...</h2>
    <p>Presto Guitar Academy</p>
  </div>
);

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'system';
  });

  useEffect(() => {
    const applyTheme = () => {
      const root = document.documentElement;
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.setAttribute('data-theme', systemTheme);
      } else {
        root.setAttribute('data-theme', theme);
      }
    };
    
    applyTheme();
    localStorage.setItem('theme', theme);
    
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', applyTheme);
      return () => mediaQuery.removeEventListener('change', applyTheme);
    }
  }, [theme]);

  return (
    <div className="App">

      {Navbar ? <Navbar theme={theme} setTheme={setTheme} /> : <FallbackComponent name="Navigation" />}
      {Hero ? <Hero /> : <FallbackComponent name="Hero" />}
      {StudentZone ? <StudentZone /> : <FallbackComponent name="Student Zone" />}
      {ChordLibrary ? <ChordLibrary /> : <FallbackComponent name="Chord Library" />}
      {Classes ? <Classes /> : <FallbackComponent name="Classes" />}
      {StudentsGallery ? <StudentsGallery /> : <FallbackComponent name="Gallery" />}
      {Community ? <Community /> : <FallbackComponent name="Community" />}

      {MusicNotations ? <MusicNotations /> : <FallbackComponent name="Music Notations" />}
      {DemoBooking ? <DemoBooking /> : <FallbackComponent name="Demo Booking" />}
      {Contact ? <Contact /> : <FallbackComponent name="Contact" />}
      {Footer ? <Footer /> : <FallbackComponent name="Footer" />}
      {FloatingChatBot ? <FloatingChatBot /> : null}
    </div>
  );
}

export default App;

// Jbanez Guitar Theme Styles
const globalStyles = `
  :root {
    --bg-primary: #0d0d0d;
    --bg-secondary: #1a1a1a;
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --accent: #ff6b35;
    --accent-secondary: #ff8c42;
    --border: rgba(255, 107, 53, 0.2);
    --glass: rgba(255, 107, 53, 0.1);
    --dark-overlay: rgba(0, 0, 0, 0.8);
  }
  
  [data-theme="light"] {
    --bg-primary: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-primary: #2c2c2c;
    --text-secondary: #666666;
    --accent: #ff6b35;
    --accent-secondary: #ff8c42;
    --border: rgba(255, 107, 53, 0.3);
    --glass: rgba(255, 107, 53, 0.1);
    --dark-overlay: rgba(255, 255, 255, 0.9);
  }
  
  [data-theme="light"] .tab-btn {
    background: rgba(102, 126, 234, 0.1) !important;
    color: #1a202c !important;
    border: 2px solid rgba(102, 126, 234, 0.3) !important;
  }
  
  [data-theme="light"] .tab-btn.active {
    background: #667eea !important;
    color: white !important;
  }
  
  [data-theme="light"] .glass-card {
    background: rgba(0, 0, 0, 0.03) !important;
    border: 1px solid rgba(0, 0, 0, 0.1) !important;
    color: #1a202c !important;
  }
  
  [data-theme="light"] h1, [data-theme="light"] h2, [data-theme="light"] h3 {
    color: #1a202c !important;
  }
  
  [data-theme="light"] p {
    color: #4a5568 !important;
  }
  
  body {
    background: var(--bg-primary) !important;
    color: var(--text-primary) !important;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }
  
  .App {
    min-height: 100vh;
    position: relative;
  }
  

`;

// Inject global styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = globalStyles;
  document.head.appendChild(styleSheet);
}