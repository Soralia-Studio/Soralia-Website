'use client';

import { useLanguage } from '@/context/LanguageContext';
import { usePageContext } from '@/context/PageContext';
import { useState, useEffect } from 'react';

/**
 * NavigationBar Component
 * 
 * Main navigation bar with scroll-based visibility and bilingual support.
 * 
 * Features:
 * - Fixed position at top with transparent background
 * - Auto-hide when scrolling down past 100px, show when scrolling up
 * - Active page highlighting (tournaments highlighted for detail pages too)
 * - Smooth fade transitions using PageContext
 * - Strong text shadows for visibility over any background
 * 
 * Navigation items: Home → Tournaments → Staff
 */
export default function NavigationBar() {
    const { language } = useLanguage();
    const { currentPage, navigateToPage } = usePageContext();

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    /**
     * Scroll behavior:
     * - Always visible when scrolled < 100px from top
     * - Hide when scrolling down past 100px
     * - Show when scrolling up
     */
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                setIsVisible(true);
            } else {
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false); // Scrolling down
                } else if (currentScrollY < lastScrollY) {
                    setIsVisible(true); // Scrolling up
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navItems = [
        { key: 'home', label: { en: 'Home', vi: 'Trang chủ' }, page: 'home' as const },
        { key: 'tournaments', label: { en: 'Tournaments', vi: 'Giải đấu' }, page: 'tournaments' as const },
        { key: 'staff', label: { en: 'Staff', vi: 'Nhân Sự' }, page: 'staff' as const },
    ];

    return (
        <nav
            style={{
                width: '100%',
                padding: '20px 0',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: 'transparent',
                zIndex: 100,
                fontFamily: language === 'vi' ? 'Inter, sans-serif' : 'var(--font-poppins), sans-serif',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                pointerEvents: isVisible ? 'auto' : 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ul
                style={{
                    listStyle: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: 0,
                    padding: 0,
                }}
            >
                {navItems.map((item) => {
                    const isActive = currentPage === item.page || (item.page === 'tournaments' && currentPage === 'tournament-detail');

                    return (
                        <li
                            key={item.key}
                            onClick={() => navigateToPage(item.page)}
                            style={{
                                margin: '0 20px',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                position: 'relative',
                                padding: '5px 0',
                                borderBottom: isActive ? '2px solid white' : 'none',
                            }}
                        >
                            <span
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    fontSize: '1.1rem',
                                    paddingBottom: '8px',
                                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {item.label[language]}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
} 40