import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const stats = [
    { value: '150+', label: 'Projects delivered' },
    { value: '40+', label: 'AI models shipped' },
    { value: '99.9%', label: 'Cloud uptime SLA' },
    { value: '24/7', label: 'Support & monitoring' },
];

const AboutSection: React.FC = () => {
    return (
        <Box id="about" sx={{ position: 'relative', background: '#0d1120', py: { xs: 8, md: 14 }, px: { xs: 3, md: 8 }, overflow: 'hidden' }}>
            <Box
                sx={{
                    position: 'absolute',
                    width: 520,
                    height: 520,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle,rgba(124,58,237,0.16),transparent 70%)',
                    top: -180,
                    right: -140,
                }}
            />
            <Grid container spacing={10} alignItems="center" sx={{ maxWidth: 1400, mx: 'auto', position: 'relative' }}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography sx={{ fontSize: '0.8125rem', letterSpacing: '0.12em', color: '#22d3ee', fontWeight: 600, mb: 1.75 }}>
                        WHY KYNTRI
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: '1.875rem', md: '2.375rem' }, lineHeight: 1.2, mb: 2.5 }}>
                        Senior engineers, embedded like a product team
                    </Typography>
                    <Typography sx={{ color: '#9aa3b8', fontSize: '1rem', lineHeight: 1.7 }}>
                        No hand-offs, no black boxes. We work directly with your team to design, build, and
                        operate systems that hold up under real production load — with the same rigor whether
                        it's a model in training or a cluster in prod.
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Grid container spacing={2.5}>
                        {stats.map((stat) => (
                            <Grid key={stat.label} size={{ xs: 6 }}>
                                <Box sx={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', p: 3.5 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Sora, sans-serif',
                                            fontWeight: 800,
                                            fontSize: '2.125rem',
                                            background: 'linear-gradient(90deg,#c8b8ff,#22d3ee)',
                                            WebkitBackgroundClip: 'text',
                                            backgroundClip: 'text',
                                            color: 'transparent',
                                        }}
                                    >
                                        {stat.value}
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.875rem', color: '#9aa3b8', mt: 0.75 }}>
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutSection;
