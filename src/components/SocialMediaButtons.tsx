'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Social Media Button Props
 */
interface SocialMediaButtonsProps {
    /** Position variant: 'bottom-bar' for fixed bottom bar, 'inline' for sidebar */
    variant?: 'bottom-bar' | 'inline';
    /** Custom className for additional styling */
    className?: string;
}

/**
 * Social Media & Language Bar Component
 * 
 * Displays Facebook, YouTube links and language switcher.
 * Supports two variants:
 * - 'bottom-bar': Fixed horizontal bar at bottom (desktop)
 * - 'inline': Inline display for mobile sidebar
 */
export default function SocialMediaButtons({
    variant = 'bottom-bar',
    className = ''
}: SocialMediaButtonsProps) {
    const { language, setLanguage } = useLanguage();
    const socialLinks = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/profile.php?id=61585538547593',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            url: 'https://www.youtube.com/channel/UCrdFmNZ3NN_oJWTnIYPN3aA',
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            ),
        },
    ];

    // Bottom bar variant (desktop)
    if (variant === 'bottom-bar') {
        return (
            <div
                className={`social-language-bar ${className}`}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'linear-gradient(135deg, rgba(20, 60, 150, 0.95) 0%, rgba(15, 45, 110, 0.95) 100%)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '50px',
                    padding: '8px 16px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    zIndex: 50,
                }}
            >
                {/* Social Links */}
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            fontSize: '18px',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {social.icon}
                    </a>
                ))}

                {/* Divider */}
                <div style={{
                    width: '1px',
                    height: '24px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    margin: '0 4px',
                }} />

                {/* Language Toggle Switch */}
                <button
                    onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
                    aria-label="Switch language"
                    style={{
                        position: 'relative',
                        width: '70px',
                        height: '36px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        border: 'none',
                        borderRadius: '18px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: '0',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    }}
                >
                    {/* Toggle Background Labels */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 8px',
                        fontSize: '11px',
                        fontWeight: '700',
                        color: 'rgba(255, 255, 255, 0.5)',
                    }}>
                        <span>EN</span>
                        <span>VI</span>
                    </div>
                    {/* Toggle Circle */}
                    <div style={{
                        position: 'absolute',
                        top: '3px',
                        left: language === 'en' ? '3px' : 'calc(100% - 33px)',
                        width: '30px',
                        height: '30px',
                        background: 'white',
                        borderRadius: '50%',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        fontWeight: '700',
                        color: '#1a3d7c',
                    }}>
                        {language.toUpperCase()}
                    </div>
                </button>

                <style jsx>{`
                    @media (max-width: 768px) {
                        .social-language-bar {
                            display: none !important;
                        }
                    }
                `}</style>
            </div>
        );
    }

    // Inline variant (mobile sidebar)
    return (
        <div
            className={className}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '16px 20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                marginTop: '12px',
            }}
        >
            {/* Social Links Row */}
            <div style={{
                display: 'flex',
                gap: '12px',
                justifyContent: 'center',
            }}>
                {socialLinks.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: 'rgba(255, 255, 255, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            fontSize: '20px',
                        }}
                    >
                        {social.icon}
                    </a>
                ))}
            </div>

            {/* Language Switcher */}
            <button
                onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
                aria-label="Switch language"
                style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '8px',
                    padding: '10px 16px',
                    cursor: 'pointer',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                }}
            >
                {language === 'en' ? 'Tiếng Việt' : 'English'}
            </button>
        </div>
    );
}
