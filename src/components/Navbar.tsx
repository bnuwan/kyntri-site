import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@mui/material';
import { Close as CloseIcon, Menu as MenuIcon } from '@mui/icons-material';

const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => setMobileOpen((v) => !v);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    const drawer = (
        <Box sx={{ width: 260, height: '100%', background: '#0d1120' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
                <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.25rem' }}>
                    Kyntri
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'rgba(139,92,246,0.1)' } }}
                    >
                        <ListItemText primary={item.name} sx={{ color: '#c3c8d9' }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box
                component="nav"
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: { xs: 3, md: 8 },
                    py: 2.5,
                    background: scrolled ? 'rgba(9,12,22,0.85)' : 'rgba(9,12,22,0.72)',
                    backdropFilter: 'blur(14px)',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
                    <Box
                        component="img"
                        src="/logo.png"
                        alt="Kyntri logo"
                        sx={{
                            width: 32,
                            height: 32,
                            filter: 'drop-shadow(0 0 10px rgba(139,92,246,0.55))',
                        }}
                    />
                    <Typography sx={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                        Kyntri
                    </Typography>
                </Box>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 5 }}>
                    {navItems.map((item) => (
                        <Box
                            key={item.name}
                            component="button"
                            onClick={() => scrollToSection(item.href)}
                            sx={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontFamily: 'Inter, sans-serif',
                                fontSize: '0.9375rem',
                                color: '#c3c8d9',
                                '&:hover': { color: '#8b5cf6' },
                            }}
                        >
                            {item.name}
                        </Box>
                    ))}
                </Box>

                <Button
                    onClick={() => scrollToSection('#contact')}
                    sx={{
                        display: { xs: 'none', md: 'inline-flex' },
                        px: 3.25,
                        py: 1.25,
                        borderRadius: 999,
                        border: '1px solid transparent',
                        background: 'linear-gradient(#090c16,#090c16) padding-box, linear-gradient(90deg,#ec4899,#8b5cf6,#22d3ee) border-box',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        color: '#fff',
                    }}
                >
                    Get Started
                </Button>

                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' }, color: 'white' }}
                    aria-label="open menu"
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260, background: '#0d1120', border: 'none' },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
