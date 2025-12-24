import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <Box 
      id="hero"
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        // The gradient: A deep emerald center fading into absolute darkness
        background: 'radial-gradient(circle at 50% 40%, #0e2e22 0%, #040907 70%)',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography variant="h6" sx={{ mb: 2, letterSpacing: '0.3em', color: 'primary.main', opacity: 0.8 }}>
            LONDON, UNITED KINGDOM
          </Typography>
          
          <Typography variant="h1" sx={{ 
              fontSize: { xs: '3rem', md: '5.5rem' }, 
              color: '#fff', 
              lineHeight: 1,
              textShadow: '0px 0px 20px rgba(176, 222, 197, 0.1)' // Very subtle metallic glow
          }}>
            Wei-Chen Hsu.
          </Typography>
          
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '3.5rem' }, color: 'text.secondary', mt: 1 }}>
            Engineering Intelligence.
          </Typography>

          <Typography sx={{ maxWidth: '600px', mt: 4, mb: 6, fontSize: '1.1rem', color: 'text.secondary', lineHeight: 1.8 }}>
            Bridging advanced fluid dynamics with artificial intelligence. 
            Designing the future of <strong>CFD</strong> and <strong>Autonomous Systems</strong> with precision and elegance.
          </Typography>

          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <Button 
                variant="outlined" 
                size="large" 
                sx={{ px: 5, py: 1.5, fontSize: '1rem', borderWidth: '1px' }}
            >
                Engineering Projects
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;