import React from 'react';
import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// IMPORT YOUR IMAGE HERE
import profileImg from '../../assets/profile.jpg'; 

const skills = [
  'Python, C++, MATLAB', 'Reinforcement Learning', 
  'CFD (Ansys Fluent)', 'Computer Vision (YOLO)',
  'React, Material UI', 'Mechanical Engineering'
];

const About = () => {
  return (
    <Box id="about" sx={{ py: 15, bgcolor: '#040907' }}>
      <Container maxWidth="md">
        <Grid container spacing={6}>
          {/* Left Side: Text */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Typography variant="h4" sx={{ color: '#fff', mr: 2 }}>01. About Me</Typography>
                <Box sx={{ height: '1px', flexGrow: 1, bgcolor: '#1c4a38' }} />
            </Box>
            
            <Typography sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.7 }}>
              Hello! My name is Wei-Chen, an engineer based in London who enjoys tackling complex physical problems with digital intelligence. 
              I graduated with <strong>First Class Honours</strong> in Mechanical Engineering from <strong>University College London (UCL)</strong>.
            </Typography>
            
            <Typography sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.7 }}>
              My recent work focuses on architecting hybrid PPO-CNN frameworks to accelerate CFD simulations by <strong>99%</strong>. 
              I also have industry experience in Bio-FET sensors and Microfluidics.
            </Typography>

            <Typography sx={{ mb: 2, color: '#fff', fontWeight: 600 }}>
              Technical Skills:
            </Typography>
            
            <Grid container>
              {skills.map((skill) => (
                <Grid item xs={6} key={skill}>
                  <List dense disablePadding>
                    <ListItem disablePadding>
                      <ListItemIcon sx={{ minWidth: '30px', color: 'primary.main' }}>
                        <ArrowRightIcon />
                      </ListItemIcon>
                      <ListItemText primary={skill} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Right Side: Image with Aston Martin Style Effect */}
          <Grid item xs={12} md={5}>
            <Box sx={{ 
                width: '100%', 
                maxWidth: '300px', // Limits size on large screens
                height: 'auto',
                aspectRatio: '1/1', // Keeps it square
                position: 'relative',
                mx: 'auto', // Centers on mobile
                // The Frame
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    width: '100%',
                    height: '100%',
                    border: '2px solid #b0dec5', // Sterling Green border
                    zIndex: 0,
                    transition: 'all 0.3s ease-in-out',
                },
                // Hover Effects
                '&:hover': {
                    // Move the frame closer to image
                    '&::after': {
                        top: '10px',
                        left: '10px',
                        borderColor: '#0b3d28', // Shifts to darker Racing Green
                    },
                    // Remove filter from image
                    '& img': {
                        filter: 'grayscale(0%) contrast(1)',
                        transform: 'translate(-5px, -5px)',
                    }
                }
            }}>
                <Box 
                    component="img"
                    src={profileImg}
                    alt="Wei-Chen Hsu"
                    sx={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        position: 'relative',
                        zIndex: 1,
                        borderRadius: '2px',
                        // The "Spy" Filter: Grayscale + high contrast initially
                        // filter: 'grayscale(100%) contrast(1.1)', 
                        transition: 'all 0.3s ease-in-out',
                        bgcolor: '#0a1612'
                    }}
                />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;