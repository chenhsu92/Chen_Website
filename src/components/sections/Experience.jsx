import React, { useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Fade } from '@mui/material';

const experiences = [
  {
    company: "National Institute of Applied Research",
    role: "Junior Researcher",
    date: "June 2025 - Present",
    points: [
      "Designed and validated a multi-module microfluidic organ-on-chip system.",
      "Optimised dynamic cell culture conditions using CFD analysis (0.1-0.5 dyn/cm² shear stress).",
      "Pioneered an AI-driven development framework for an 'Aging-on-Chip' platform."
    ]
  },
  {
    company: "UCL",
    role: "BEng Mechanical Engineering",
    date: "Sept 2022 - June 2025",
    points: [
      "Architected a novel hybrid PPO-CNN framework reducing extrapolation error by 57%.",
      "Achieved a 99% acceleration in simulation time over Ansys Fluent.",
      "Projected a 98.83% reduction in carbon emissions per simulation."
    ]
  },

  {
    company: "Arculus Systems",
    role: "Software & IC Intern",
    date: "July 2024 - Sept 2024",
    points: [
      "Collaborated on business plans for 3D IC EDA Tools expansion in Europe.",
      "Assisted in UK-Taiwan Collaboration Funding Application (~£700k target).",
      "Led a team to develop training courses for future interns."
    ]
  }
];

const Experience = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box id="experience" sx={{ py: 15, bgcolor: '#0a0a0a' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
            <Typography variant="h4" sx={{ color: '#fff', mr: 2 }}>02. Experience</Typography>
            <Box sx={{ height: '1px', flexGrow: 1, bgcolor: '#333' }} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '300px' }}>
            <Tabs 
                orientation="vertical" 
                variant="scrollable"
                value={value} 
                onChange={handleChange}
                sx={{ 
                    borderRight: { md: 1 }, 
                    borderBottom: { xs: 1, md: 0 }, 
                    borderColor: 'rgba(255,255,255,0.1)', 
                    minWidth: '200px',
                    '& .MuiTabs-indicator': { bgcolor: 'primary.main', width: '4px', left: 0 } 
                }}
            >
                {experiences.map((exp, index) => (
                    <Tab 
                        key={index} 
                        label={exp.company} 
                        sx={{ 
                            alignItems: 'flex-start', 
                            textAlign: 'left',
                            color: 'text.secondary',
                            '&.Mui-selected': { color: '#fff' }
                        }} 
                    />
                ))}
            </Tabs>

            <Box sx={{ p: 3, flexGrow: 1 }}>
                {experiences.map((exp, index) => (
                    <div role="tabpanel" hidden={value !== index} key={index}>
                        {value === index && (
                            <Fade in={true}>
                                <Box>
                                    <Typography variant="h5" color="text.primary">
                                        {exp.role} <span style={{ color: '#d1d1d1' }}>@ {exp.company}</span>
                                    </Typography>
                                    <Typography variant="caption" display="block" sx={{ mb: 2, mt: 1, fontFamily: 'monospace' }}>
                                        {exp.date}
                                    </Typography>
                                    {exp.points.map((point, i) => (
                                        <Box key={i} sx={{ display: 'flex', mb: 1.5 }}>
                                            <Typography sx={{ color: 'primary.main', mr: 2 }}>▹</Typography>
                                            <Typography variant="body2" color="text.secondary">{point}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Fade>
                        )}
                    </div>
                ))}
            </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;