import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 20, bgcolor: '#0a0a0a', textAlign: 'center' }}>
      <Container maxWidth="sm">
        <Typography variant="caption" color="primary" sx={{ letterSpacing: '0.1em' }}>
            04. What's Next?
        </Typography>
        <Typography variant="h2" sx={{ color: '#fff', my: 2 }}>
            Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
            I am currently open to new opportunities in AI-driven Engineering and Robotics. 
            Whether you have a question or just want to say hi, my inbox is always open.
        </Typography>
        <Button 
            variant="outlined" 
            size="large" 
            href="mailto:chenhsu0916@gmail.com"
            sx={{ px: 5, py: 2 }}
        >
            Say Hello
        </Button>
      </Container>
    </Box>
  );
};

export default Contact;