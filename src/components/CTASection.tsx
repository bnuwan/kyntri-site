import React from 'react';
import { Box, Typography } from '@mui/material';

const CTASection: React.FC = () => {
    return (
        <Box id="contact" sx={{ py: { xs: 8, md: 14 }, px: { xs: 3, md: 8 } }}>
            <style>{`
                @keyframes ctaOrb1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px,-18px); } }
                @keyframes ctaOrb2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-24px,16px); } }
                @keyframes ctaGradientShift { 0% { background-position: 0% 50%; } 100% { background-position: 200% 50%; } }
            `}</style>
            <Box
                sx={{
                    maxWidth: 1400,
                    mx: 'auto',
                    position: 'relative',
                    borderRadius: '28px',
                    overflow: 'hidden',
                    py: { xs: 8, md: 10 },
                    px: { xs: 4, md: 8 },
                    background: 'linear-gradient(135deg,#181233,#0d1120)',
                    border: '1px solid rgba(139,92,246,0.25)',
                    textAlign: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute', width: 280, height: 280, borderRadius: '50%',
                        background: 'radial-gradient(circle,rgba(139,92,246,0.4),transparent 70%)',
                        top: -80, left: -60, animation: 'ctaOrb1 9s ease-in-out infinite',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute', width: 220, height: 220, borderRadius: '50%',
                        background: 'radial-gradient(circle,rgba(34,211,238,0.35),transparent 70%)',
                        bottom: -60, right: -40, animation: 'ctaOrb2 10s ease-in-out infinite',
                    }}
                />
                <Box sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant="h2" sx={{ fontSize: { xs: '1.875rem', md: '2.5rem' }, mb: 2.25 }}>
                        Ready to build what's next?
                    </Typography>
                    <Typography sx={{ color: '#b7bdd0', fontSize: '1.0625rem', mb: 4.5 }}>
                        Tell us where you're headed — we'll help you get there faster.
                    </Typography>
                    <Box
                        component="a"
                        href="mailto:hello@kyntri.com"
                        sx={{
                            display: 'inline-block',
                            px: 4.75,
                            py: 2,
                            borderRadius: 999,
                            background: 'linear-gradient(90deg,#ec4899,#8b5cf6,#22d3ee,#ec4899)',
                            backgroundSize: '200% auto',
                            animation: 'ctaGradientShift 6s linear infinite',
                            fontWeight: 700,
                            fontSize: '0.9375rem',
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                        Start a Conversation &nbsp;→
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CTASection;
