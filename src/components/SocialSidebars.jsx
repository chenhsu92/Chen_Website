import React from 'react';
import { Box, Link, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import YouTubeIcon from '@mui/icons-material/YouTube'; // Added Import

const SocialSidebars = () => {
  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        left: { xs: 10, md: 40 },
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        zIndex: 10,
        '&::after': {
            content: '""',
            display: 'block',
            width: '1px',
            height: '90px',
            backgroundColor: '#e0e0e0',
            mt: 2
        }
      }}>
        <IconButton component={Link} href="https://github.com/chenhsu92" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
        
        <IconButton component={Link} href="https://linkedin.com/in/chenhsu92/" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>

        {/* Added YouTube Link */}
        <IconButton component={Link} href="https://www.youtube.com/@chenhsu92" target="_blank" color="inherit">
          <YouTubeIcon />
        </IconButton>
      </Box>

      {/* Right Sidebar - Email */}
      <Box sx={{
        position: 'fixed',
        bottom: 0,
        right: { xs: 10, md: 40 },
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10,
        '&::after': {
            content: '""',
            display: 'block',
            width: '1px',
            height: '90px',
            backgroundColor: '#e0e0e0',
            mt: 2
        }
      }}>
        <Link 
            href="mailto:chenhsu0916@gmail.com" 
            sx={{ 
                writingMode: 'vertical-rl', 
                textDecoration: 'none', 
                color: 'inherit',
                letterSpacing: '0.1em',
                fontFamily: 'Lato',
                fontSize: '0.9rem',
                mb: 2,
                '&:hover': { color: '#d1d1d1', transform: 'translateY(-3px)', transition: '0.2s' }
            }}
        >
            chenhsu0916@gmail.com
        </Link>
      </Box>
    </>
  );
};

export default SocialSidebars;