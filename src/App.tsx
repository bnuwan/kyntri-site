import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AISolutionsSection from './components/AISolutionsSection';
import AutomationSection from './components/AutomationSection';
import HeroGameSection from './components/HeroGameSection';
import AboutSection from './components/AboutSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ overflowX: 'hidden', width:"100%" }}>
                <Navbar />
                <main>
                    <HeroSection />
                    <HeroGameSection />
                    <ServicesSection />
                    <AISolutionsSection />
                    <AutomationSection />
                    <AboutSection />
                    <CTASection />
                </main>
                <Footer />
            </Box>
        </ThemeProvider>
    );
};

export default App;
