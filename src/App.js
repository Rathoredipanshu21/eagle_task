import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import gsap from 'gsap';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import ParticleBackground from './Components/ParticalBackground';
import Homepage from './Components/Home';
import TalentHuntDetailsPage from './Components/TalentHuntDetailsPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/Contact';
import ApplyNowPage from './Components/Apply';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });
    }, []);

    const navigateTo = (page) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const mainContent = document.getElementById('main-content');
        gsap.to(mainContent, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                setCurrentPage(page);
                window.scrollTo(0, 0);
                AOS.refresh();
                gsap.to(mainContent, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out',
                    onComplete: () => setIsAnimating(false)
                });
            }
        });
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Homepage navigateTo={navigateTo} />;
            case 'details':
                return <TalentHuntDetailsPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            case 'apply':
                return <ApplyNowPage />;
            default:
                return <Homepage navigateTo={navigateTo} />;
        }
    };

    return (
        <>
            <ParticleBackground />
            <Header currentPage={currentPage} navigateTo={navigateTo} />
            <main id="main-content">
                {renderPage()}
            </main>
            <Footer />
        </>
    );
}

export default App;
