import React from 'react';
import Navbar from './components/Navbar';
import SocialSidebars from './components/SocialSidebars';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Navbar />
      <SocialSidebars />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Box sx={{ 
        py: 3, 
        textAlign: 'center', 
        borderTop: '1px solid #333',
        typography: 'caption',
        color: 'text.secondary'
      }}>
        Designed & Built by Wei-Chen Hsu.
      </Box>
    </Box>
  );
}

export default App;