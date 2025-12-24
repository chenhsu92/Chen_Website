import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Button } from '@mui/material';
import { Link } from 'react-scroll';
// 1. Import your logo image here
import logoImg from '../assets/logo.png'; 

const navLinks = ['About', 'Experience', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        background: scrolled ? 'rgba(4, 9, 7, 0.9)' : 'transparent', // Updated to theme dark green background
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? '1px solid rgba(176, 222, 197, 0.1)' : 'none', // Subtle green border
        py: 1 // Added slight padding for better vertical alignment
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>
        
        {/* 2. The Logo Container */}
        <Box 
            component={Link} 
            to="hero" 
            smooth={true} 
            sx={{ 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {/* 3. The Image Component replacing text */}
            <Box
                component="img"
                src={logoImg}
                alt="WCH Logo"
                sx={{
                    height: { xs: '40px', md: '50px' }, // Responsive height fitting the navbar
                    width: 'auto',
                    transition: '0.3s ease',
                    // Optional: A subtle hover effect making it slightly brighter
                    '&:hover': { transform: 'scale(1.05)', filter: 'brightness(1.2)' }
                }}
            />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
          {navLinks.map((item) => (
            <Link key={item} to={item.toLowerCase()} smooth={true} duration={500} offset={-70}>
              <Button 
                color="inherit" 
                sx={{ 
                    fontSize: '0.85rem', 
                    letterSpacing: '0.15em',
                    color: 'text.primary',
                    // Overriding default button hover for navbar links for a cleaner look
                    '&:hover': { 
                        bgcolor: 'transparent', 
                        color: 'primary.main' // Turns silver-green on hover
                    }
                }}
              >
                {item}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;