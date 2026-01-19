'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { PageProvider } from '@/context/PageContext';
import NavigationBar from '@/components/NavigationBar';
import PageContainer from '@/components/PageContainer';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

/**
 * MainApp Component
 */
export default function MainApp() {
    const [showLogo, setShowLogo] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        // Step 1: Logo fade in immediately
        const logoTimer = setTimeout(() => {
            setShowLogo(true);
        }, 300);

        // Step 2: Navbar fade in after logo (1s delay)
        const navbarTimer = setTimeout(() => {
            setShowNavbar(true);
        }, 1300);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(navbarTimer);
        };
    }, []);

    return (
        <PageProvider>
            {/* Main content - ALWAYS rendered underneath */}
            <div
                className={poppins.className}
                style={{
                    minHeight: '100vh',
                    width: '100%',
                    maxWidth: '100vw',
                    margin: 0,
                    padding: 0,
                    overflowX: 'hidden',
                    backgroundImage: 'url("/placeholders/Background.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'scroll', // Changed from fixed for better mobile performance
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                }}
            >
                {/* Navigation bar - fade in after logo */}
                <NavigationBar fadeIn={showNavbar} />

                {/* Page content - logo fades in first */}
                <div style={{
                    opacity: showLogo ? 1 : 0,
                    transition: 'opacity 1s ease-out',
                    width: '100%',
                    height: '100%',
                }}>
                    <PageContainer />
                </div>
            </div>
        </PageProvider>
    );
}
