import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#8b5cf6',
            light: '#c8b8ff',
            dark: '#5a34b0',
        },
        secondary: {
            main: '#22d3ee',
            light: '#8beeff',
            dark: '#0d7f93',
        },
        background: {
            default: '#090c16',
            paper: '#0d1120',
        },
        text: {
            primary: '#eef0f6',
            secondary: '#9aa3b8',
        },
        success: {
            main: '#4CAF50',
        },
        warning: {
            main: '#FF9800',
        },
        error: {
            main: '#F44336',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 800,
            fontSize: '4rem',
            lineHeight: 1.06,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 800,
            fontSize: '2.625rem',
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            fontSize: '2.25rem',
            lineHeight: 1.3,
        },
        h4: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            fontSize: '1.75rem',
            lineHeight: 1.4,
        },
        h5: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            fontSize: '1.5rem',
            lineHeight: 1.4,
        },
        h6: {
            fontFamily: '"Sora", sans-serif',
            fontWeight: 700,
            fontSize: '1.25rem',
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        body2: {
            fontSize: '0.875rem',
            lineHeight: 1.6,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '1rem',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999,
                    padding: '12px 24px',
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: 'none',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 20,
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                },
            },
        },
    },
});
