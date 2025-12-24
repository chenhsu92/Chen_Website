import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme, GlobalStyles } from '@mui/material'

// Aston Martin Aesthetic Theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      // A metallic, silvery-green (Sterling Green) for text highlights and icons
      // This ensures readability against the dark background while keeping the green hue.
      main: '#b0dec5', 
    },
    secondary: {
      // Deep British Racing Green for heavy accents (borders, active states)
      main: '#0b3d28', 
    },
    background: {
      default: '#040907', // Very deep charcoal-green (Obsidian)
      paper: '#0a1612',   // Slightly lighter dark green for cards
    },
    text: {
      primary: '#e6e6e6', // Platinum silver
      secondary: '#94a39b', // Muted grey-green
    },
  },
  typography: {
    fontFamily: '"Lato", "Roboto", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 600, letterSpacing: '0.05em' },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h4: { fontFamily: '"Playfair Display", serif', fontWeight: 500 },
    button: { letterSpacing: '0.15em', fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'uppercase',
          borderColor: 'rgba(176, 222, 197, 0.3)', // Subtle primary border
          color: '#e6e6e6',
          transition: 'all 0.4s ease',
          '&:hover': {
            borderColor: '#b0dec5', // Brighten border
            backgroundColor: 'rgba(11, 61, 40, 0.4)', // Deep Green fill
            boxShadow: '0 0 15px rgba(11, 61, 40, 0.5)', // Subtle glow
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        }
      }
    }
  },
})

// Global styles
const globalStyles = (
  <GlobalStyles
    styles={{
      body: { scrollBehavior: 'smooth' },
      '::-webkit-scrollbar': { width: '8px' },
      '::-webkit-scrollbar-track': { background: '#040907' },
      '::-webkit-scrollbar-thumb': { background: '#1c4a38', borderRadius: '0px' }, // Green scrollbar
      '::-webkit-scrollbar-thumb:hover': { background: '#2d6a52' },
    }}
  />
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)