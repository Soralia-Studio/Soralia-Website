'use client';

import React, { useState } from 'react';
import { usePageContext, PageType } from '@/context/PageContext';

/**
 * NavigationBar Props
 */
interface NavigationBarProps {
    /** Controls fade-in animation from top after intro completes */
    fadeIn?: boolean;
}

/**
 * NavigationBar Component
 * 
 * Main navigation bar with page links.
 * Supports fade-in animation from top when fadeIn prop changes.
 */
export default function NavigationBar({ fadeIn = true }: NavigationBarProps) {
    const { currentPage, setCurrentPage, setIsTransitioning } = usePageContext();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigateTo = (page: PageType) => {
        if (currentPage === page) {
            setMobileMenuOpen(false);
            return;
        }

        setIsTransitioning(true);
        setMobileMenuOpen(false);
        setTimeout(() => {
            setCurrentPage(page);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };

    const navItems = [
        { name: 'HOME', page: 'home' as PageType },
        { name: 'TOURNAMENTS', page: 'tournaments' as PageType },
        { name: 'STAFF', page: 'staff' as PageType },
    ];

    return (
        <nav style={{
            width: '100%',
            padding: '20px 0',
            position: 'absolute',
            top: 0,
            background: 'transparent',
            zIndex: 100,
            // Fade-in from top animation
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}>
            {/* Hamburger/Close Menu Button (Mobile) */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                style={{
                    position: 'fixed',
                    right: '20px',
                    top: '20px',
                    background: mobileMenuOpen ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '10px',
                    padding: '12px',
                    cursor: 'pointer',
                    zIndex: 1001,
                    transition: 'all 0.3s ease',
                    boxShadow: mobileMenuOpen ? '0 4px 12px rgba(0, 0, 0, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.2)',
                    width: '48px',
                    height: '48px',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                className="mobile-menu-button"
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = mobileMenuOpen ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.1)';
                }}
            >
                {mobileMenuOpen ? (
                    // X icon when menu is open
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ) : (
                    // Hamburger icon when menu is closed
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </button>

            {/* Desktop Navigation */}
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                margin: 0,
                padding: 0,
            }}
                className="desktop-nav">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        onClick={() => navigateTo(item.page)}
                        style={{
                            margin: '0 20px',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            position: 'relative',
                            padding: '5px 0',
                            borderBottom: currentPage === item.page ? '2px solid white' : 'none',
                        }}
                    >
                        <span style={{
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            fontSize: '1.1rem',
                            paddingBottom: '8px',
                        }}>
                            {item.name}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Mobile Navigation Menu */}
            <div
                style={{
                    display: 'none',
                    position: 'fixed',
                    top: 0,
                    right: mobileMenuOpen ? 0 : '-100%',
                    width: '240px',
                    maxWidth: '75vw',
                    height: '100vh',
                    minHeight: '100vh',
                    background: 'linear-gradient(180deg, rgba(20, 60, 150, 0.98) 0%, rgba(15, 45, 110, 0.98) 100%)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.5)',
                    transition: 'right 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1000,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
                className="mobile-nav"
            >
                {/* Navigation Items */}
                <div style={{
                    padding: '80px 0 40px',
                    minHeight: '100vh',
                }}>
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            onClick={() => navigateTo(item.page)}
                            style={{
                                padding: '16px 20px',
                                margin: '4px 12px',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontWeight: '700',
                                fontSize: '0.95rem',
                                letterSpacing: '0.5px',
                                borderRadius: '8px',
                                backgroundColor: currentPage === item.page ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                                transition: 'all 0.2s ease',
                                color: 'white',
                            }}
                            onMouseEnter={(e) => {
                                if (currentPage !== item.page) {
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (currentPage !== item.page) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay when mobile menu is open */}
            {mobileMenuOpen && (
                <div
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                        display: 'none',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(2px)',
                        zIndex: 999,
                        animation: 'fadeIn 0.3s ease',
                    }}
                    className="mobile-overlay"
                />
            )}

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-button {
                        display: block !important;
                    }
                    .mobile-nav {
                        display: flex !important;
                        flex-direction: column;
                    }
                    .mobile-overlay {
                        display: block !important;
                    }
                }

                /* Custom scrollbar for mobile nav */
                .mobile-nav::-webkit-scrollbar {
                    width: 8px;
                }
                .mobile-nav::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.2);
                }
                .mobile-nav::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 4px;
                }
                .mobile-nav::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </nav>
    );
} 40