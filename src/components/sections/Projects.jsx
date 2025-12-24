import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, IconButton } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projectList = [
  {
    title: "MAChallenge 2025",
    desc: "Sophisticated computer vision system (YOLO) for autonomous navigation and obstacle avoidance in lake environments.",
    tech: ["Python", "ROS2", "Computer Vision", "Gazebo"]
  },
  {
    title: "CFD Surrogate Model",
    desc: "Hybrid PPO-CNN framework accelerating CFD simulation by 99% while maintaining high physical accuracy.",
    tech: ["Reinforcement Learning", "Python", "Ansys Fluent", "CNN"]
  },
  {
    title: "Premier League Predictor",
    desc: "Machine Learning model (Logistic Regression, SVM) predicting match outcomes with 65% accuracy.",
    tech: ["Scikit-Learn", "Pandas", "Matplotlib"]
  },
  {
    title: "Skeletal Wing UAS",
    desc: "Optimized skeletal wing manufacturing method for Unmanned Aerial Systems, integrating ailerons for stability.",
    tech: ["Solidworks", "CFD", "Aerodynamics"]
  }
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 15, bgcolor: '#040907' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ color: '#fff', mr: 2 }}>03. Featured Projects</Typography>
            <Box sx={{ height: '1px', flexGrow: 1, bgcolor: '#1c4a38' }} /> {/* Green divider */}
        </Box>

        <Grid container spacing={4}>
            {projectList.map((project, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                    <Card sx={{ 
                        height: '100%', 
                        bgcolor: '#08120e', // Very dark green background
                        border: '1px solid rgba(176, 222, 197, 0.05)', // Almost invisible border initially
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'visible',
                        '&:hover': { 
                            transform: 'translateY(-8px)',
                            border: '1px solid #b0dec5', // Silver-Green border on hover
                            boxShadow: '0 10px 30px -10px rgba(11, 61, 40, 0.6)' // Green shadow
                        } 
                    }}>
                        <CardContent sx={{ p: 4 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                {/* The folder icon acts as the primary accent */}
                                <FolderOpenIcon sx={{ color: 'primary.main', fontSize: 40 }} />
                                <Box>
                                    <IconButton 
                                        sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }} 
                                        size="small"
                                    >
                                        <GitHubIcon />
                                    </IconButton>
                                    <IconButton 
                                        sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }} 
                                        size="small"
                                    >
                                        <LaunchIcon />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, fontFamily: 'Playfair Display' }}>
                                {project.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                                {project.desc}
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 'auto' }}>
                                {project.tech.map(t => (
                                    <Typography key={t} variant="caption" sx={{ 
                                        fontFamily: 'monospace', 
                                        color: 'primary.main',
                                        fontSize: '0.75rem'
                                    }}>
                                        {t}
                                    </Typography>
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;