'use client';

import React from 'react';
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

    const navigateTo = (page: PageType) => {
        if (currentPage === page) return;

        setIsTransitioning(true);
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
            padding: '40px 0',
            position: 'absolute',
            top: 0,
            background: 'transparent',
            zIndex: 10,
            // Fade-in from top animation
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'center',
                margin: 0,
                padding: 0,
            }}>
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        onClick={() => navigateTo(item.page)}
                        style={{
                            margin: '0 30px',
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
        </nav>
    );
}