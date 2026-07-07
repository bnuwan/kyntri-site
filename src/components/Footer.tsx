import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const serviceLinks = [
    { name: 'AI & ML', href: '#services' },
    { name: 'Cloud Infrastructure', href: '#services' },
    { name: 'Custom Software', href: '#services' },
];

const companyLinks = [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
];

const linkSx = {
    color: '#9aa3b8',
    textDecoration: 'none',
    fontSize: '0.875rem',
    '&:hover': { color: '#8b5cf6' },
};

const Footer: React.FC = () => {
    return (
        <Box component="footer" sx={{ py: { xs: 6, md: 8.75 }, px: { xs: 3, md: 8 }, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <Grid container spacing={6} sx={{ maxWidth: 1400, mx: 'auto' }}>
                <Grid size={{ xs: 12, md: 4.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, mb: 1.75 }}>
                        <Box component="img" src="/logo.png" alt="Kyntri logo" sx={{ width: 28, height: 28 }} />
                        <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>Kyntri</Typography>
                    </Box>
                    <Typography sx={{ color: '#828aa0', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: 280 }}>
                        AI and cloud engineering for teams building the next generation of software.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 6, md: 2.5 }}>
                    <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: '#c3c8d9', mb: 2 }}>Services</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {serviceLinks.map((link) => (
                            <Box key={link.name} component="a" href={link.href} sx={linkSx}>{link.name}</Box>
                        ))}
                    </Box>
                </Grid>

                <Grid size={{ xs: 6, md: 2.5 }}>
                    <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: '#c3c8d9', mb: 2 }}>Company</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                        {companyLinks.map((link) => (
                            <Box key={link.name} component="a" href={link.href} sx={linkSx}>{link.name}</Box>
                        ))}
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 2.5 }}>
                    <Typography sx={{ fontSize: '0.8125rem', fontWeight: 600, color: '#c3c8d9', mb: 2 }}>Get in touch</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, fontSize: '0.875rem', color: '#9aa3b8' }}>
                        <div>hello@kyntri.com</div>
                        <div>+1 (415) 555-0192</div>
                    </Box>
                </Grid>
            </Grid>

            <Box
                sx={{
                    maxWidth: 1400,
                    mx: 'auto',
                    mt: 7,
                    pt: 3,
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                    fontSize: '0.8125rem',
                    color: '#6b7286',
                }}
            >
                <Box>© 2026 Kyntri Technology Solutions</Box>
                <Box sx={{ display: 'flex', gap: 2.5 }}>
                    <Box component="a" href="#" sx={linkSx}>Privacy</Box>
                    <Box component="a" href="#" sx={linkSx}>Terms</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
