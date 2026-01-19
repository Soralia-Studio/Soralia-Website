'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { cafe } from '@/data/data';
import MessageOfTheDay from '@/script/messageOfTheDay';

/**
 * HomePage Component
 * 
 * Main landing page with logo, title, and content sections.
 * Logo is always visible - splash overlay handles the reveal animation.
 */
export default function HomePage() {
    const contentRef = useRef<HTMLDivElement>(null);

    const vineBoomRef = useRef<HTMLAudioElement>(null);

    const [message, setMessage] = React.useState<string>('');

    React.useEffect(() => {
        setMessage(MessageOfTheDay.getMessage());
    }, []);

    const playVineBoom = (e: React.MouseEvent) => {
        if (vineBoomRef.current) {
            e.stopPropagation();
            vineBoomRef.current.play();
        }
    }

    const scrollToContent = () => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <main style={{
            margin: '0',
            padding: '0',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            overflowY: 'auto',
            overflowX: 'hidden',
            height: '100vh',
        }}>
            {/* First section - Logo and Text */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '20px',
                paddingBottom: '40px',
            }}>
                {/* Logo - always visible (splash handles reveal) */}
                <div style={{
                    marginBottom: '20px',
                    width: '100%',
                    maxWidth: '450px',
                    aspectRatio: '1/1',
                    position: 'relative',
                }}>
                    <Image
                        src="/placeholders/soraalia.png"
                        alt="Soralia Studio Logo"
                        fill
                        style={{
                            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))',
                            objectFit: 'contain',
                        }}
                    />
                </div>

                <h1 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.8rem)',
                    fontWeight: 600,
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    marginBottom: '40px',
                    marginTop: '10px',
                    padding: '0 20px',
                    maxWidth: '90%',
                }}>
                    {message}
                </h1>

                {/* Down arrow icon with animation and click handler */}
                <div
                    onClick={scrollToContent}
                    style={{
                        cursor: 'pointer',
                        opacity: 0.7,
                        animation: 'bounce 2s infinite',
                        transition: 'opacity 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                >
                    <svg style={{ width: 'clamp(50px, 10vw, 70px)', height: 'clamp(50px, 10vw, 70px)' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 14L12 19L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {
                        transform: translateY(0);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    60% {
                        transform: translateY(-5px);
                    }
                }
            `}</style>

            {/* Second section - Lorem ipsum text */}
            <div
                ref={contentRef}
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'clamp(30px, 8vw, 60px) clamp(20px, 5vw, 40px)',
                }}
            >
                <div style={{
                    maxWidth: '900px',
                    width: '100%',
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    lineHeight: '1.8',
                    textAlign: 'justify',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    padding: 'clamp(20px, 4vw, 30px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                    <div style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '600px',
                        aspectRatio: '1/1',
                        margin: '0 auto',
                    }}>
                        <Image
                            src={cafe.image}
                            alt='manhattan cafe'
                            fill
                            loading='eager'
                            onClick={playVineBoom}
                            style={{
                                objectFit: 'contain',
                                cursor: 'pointer',
                            }}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}