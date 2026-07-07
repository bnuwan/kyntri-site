import React, { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const stats = [
    { value: '150+', label: 'Projects delivered' },
    { value: '99.9%', label: 'Cloud uptime SLA' },
    { value: '40+', label: 'AI models shipped' },
];

const HeroSection: React.FC = () => {
    const orbRef = useRef<HTMLDivElement>(null);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    };

    const handleHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const el = orbRef.current;
        if (!el) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `rotateY(${px * 14}deg) rotateX(${-py * 14}deg)`;
    };

    return (
        <Box
            onMouseMove={handleHeroMove}
            sx={{
                position: 'relative',
                minHeight: { xs: 'auto', md: '920px' },
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                alignItems: 'center',
                gap: 5,
                pt: { xs: 16, md: 20 },
                pb: { xs: 8, md: 12.5 },
                px: { xs: 3, md: 8 },
                maxWidth: 1520,
                mx: 'auto',
            }}
        >
            <style>{`
                @keyframes heroFloatA { 0%,100% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(0,-26px,0) rotate(6deg); } }
                @keyframes heroFloatB { 0%,100% { transform: translate3d(0,0,0) rotate(0deg); } 50% { transform: translate3d(0,22px,0) rotate(-8deg); } }
                @keyframes heroFloatC { 0%,100% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(0,-14px,0) scale(1.06); } }
                @keyframes heroSpinSlow { from { transform: rotateX(70deg) rotateZ(0deg); } to { transform: rotateX(70deg) rotateZ(360deg); } }
                @keyframes heroSpinSlow2 { from { transform: rotateX(60deg) rotateY(20deg) rotateZ(0deg); } to { transform: rotateX(60deg) rotateY(20deg) rotateZ(-360deg); } }
                @keyframes heroPulseGlow { 0%,100% { opacity: 0.55; } 50% { opacity: 1; } }
            `}</style>

            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.07) 1px,transparent 1px)',
                    backgroundSize: '34px 34px',
                    opacity: 0.5,
                    maskImage: 'radial-gradient(ellipse 900px 700px at 30% 40%, black, transparent)',
                    WebkitMaskImage: 'radial-gradient(ellipse 900px 700px at 30% 40%, black, transparent)',
                    pointerEvents: 'none',
                }}
            />

            <Box sx={{ position: 'relative', zIndex: 2 }}>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 2,
                            py: 0.875,
                            borderRadius: 999,
                            background: 'rgba(139,92,246,0.12)',
                            border: '1px solid rgba(139,92,246,0.35)',
                            fontSize: '0.8125rem',
                            color: '#c8b8ff',
                            mb: 3.5,
                            letterSpacing: '0.03em',
                        }}
                    >
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#22d3ee', boxShadow: '0 0 8px #22d3ee' }} />
                        AI &amp; CLOUD SOLUTIONS
                    </Box>

                    <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4rem' }, maxWidth: 620, mb: 3 }}
                    >
                        Engineering intelligence for the cloud era
                    </Typography>

                    <Typography sx={{ fontSize: '1.1875rem', lineHeight: 1.6, color: '#9aa3b8', maxWidth: 520, mb: 5 }}>
                        We build AI/ML systems, automation pipelines, and cloud infrastructure that help
                        ambitious teams ship faster and scale without limits.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            sx={{
                                px: 4,
                                py: 1.875,
                                borderRadius: 999,
                                border: '1px solid transparent',
                                background: 'linear-gradient(#090c16,#090c16) padding-box, linear-gradient(90deg,#ec4899,#8b5cf6,#22d3ee) border-box',
                                fontWeight: 700,
                                fontSize: '0.9375rem',
                                color: '#fff',
                            }}
                        >
                            Get Started &nbsp;→
                        </Button>
                        <Button
                            onClick={() => scrollToSection('#services')}
                            sx={{
                                px: 3.5,
                                py: 1.875,
                                borderRadius: 999,
                                fontWeight: 600,
                                fontSize: '0.9375rem',
                                color: '#e6e8f0',
                                border: '1px solid rgba(255,255,255,0.14)',
                            }}
                        >
                            Explore Services
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 5.5, mt: 8, flexWrap: 'wrap' }}>
                        {stats.map((stat) => (
                            <Box key={stat.label}>
                                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.75rem' }}>
                                    {stat.value}
                                </Typography>
                                <Typography sx={{ fontSize: '0.8125rem', color: '#828aa0', mt: 0.5 }}>
                                    {stat.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </motion.div>
            </Box>

            <Box sx={{ position: 'relative', zIndex: 2, height: { xs: 420, md: 640 }, perspective: '1400px', display: { xs: 'none', md: 'block' } }}>
                <Box ref={orbRef} sx={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', transition: 'transform 0.3s ease-out' }}>
                    <Box
                        sx={{
                            position: 'absolute', left: '50%', top: '52%', width: 420, height: 420, margin: '-210px 0 0 -210px',
                            border: '1px solid rgba(139,92,246,0.35)', borderRadius: '50%',
                            animation: 'heroSpinSlow 16s linear infinite', boxShadow: '0 0 60px rgba(139,92,246,0.15) inset',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute', left: '50%', top: '52%', width: 300, height: 300, margin: '-150px 0 0 -150px',
                            border: '1px solid rgba(34,211,238,0.35)', borderRadius: '50%',
                            animation: 'heroSpinSlow2 22s linear infinite', boxShadow: '0 0 60px rgba(34,211,238,0.15) inset',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute', left: '26%', top: '30%', width: 230, height: 230, borderRadius: '50%',
                            background: 'radial-gradient(circle at 32% 28%, #b79bff, #7c3aed 55%, #3f1d8f 100%)',
                            boxShadow: '0 0 90px rgba(124,58,237,0.55), inset -18px -18px 40px rgba(0,0,0,0.35)',
                            animation: 'heroFloatA 7s ease-in-out infinite',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute', right: '14%', top: '14%', width: 150, height: 150, borderRadius: '50%',
                            background: 'radial-gradient(circle at 30% 25%, #8beeff, #22d3ee 55%, #0d7f93 100%)',
                            boxShadow: '0 0 70px rgba(34,211,238,0.55), inset -14px -14px 30px rgba(0,0,0,0.3)',
                            animation: 'heroFloatB 8s ease-in-out infinite',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute', right: '20%', bottom: '12%', width: 110, height: 110, borderRadius: '50%',
                            background: 'radial-gradient(circle at 30% 25%, #ff9ecb, #ec4899 55%, #7a1252 100%)',
                            boxShadow: '0 0 60px rgba(236,72,153,0.5), inset -12px -12px 26px rgba(0,0,0,0.3)',
                            animation: 'heroFloatC 6.5s ease-in-out infinite',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute', left: '34%', bottom: '16%', width: 64, height: 64, borderRadius: '16px',
                            background: 'linear-gradient(135deg, rgba(199,178,255,0.5), rgba(139,92,246,0.12))',
                            border: '1px solid rgba(216,204,255,0.6)',
                            boxShadow: '0 6px 18px rgba(124,58,237,0.35), inset 2px 2px 6px rgba(255,255,255,0.5)',
                            transform: 'rotate(20deg)', animation: 'heroFloatB 9s ease-in-out infinite',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute', left: '64%', top: '6%', width: 44, height: 44, borderRadius: '12px',
                            background: 'linear-gradient(135deg, rgba(154,230,255,0.55), rgba(34,211,238,0.12))',
                            border: '1px solid rgba(190,240,255,0.6)',
                            boxShadow: '0 6px 16px rgba(34,211,238,0.3), inset 2px 2px 5px rgba(255,255,255,0.55)',
                            transform: 'rotate(-15deg)', animation: 'heroFloatA 10s ease-in-out infinite',
                        }}
                    />
                    <Box sx={{ position: 'absolute', left: '50%', top: '52%', width: 6, height: 6, margin: '-140px 0 0 60px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px #fff', animation: 'heroPulseGlow 3s ease-in-out infinite' }} />
                    <Box sx={{ position: 'absolute', left: '50%', top: '52%', width: 5, height: 5, margin: '110px 0 0 -160px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px #fff', animation: 'heroPulseGlow 4s ease-in-out infinite' }} />
                    <Box sx={{ position: 'absolute', left: '50%', top: '52%', width: 5, height: 5, margin: '-90px 0 0 -190px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px #fff', animation: 'heroPulseGlow 3.6s ease-in-out infinite' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
