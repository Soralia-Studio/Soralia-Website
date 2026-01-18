'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { cafe } from '@/data/data';
import { motd } from '@/data/data';

/**
 * HomePage Component
 * 
 * Main landing page with logo, title, and content sections.
 * Logo is always visible - splash overlay handles the reveal animation.
 */
export default function HomePage() {
    const contentRef = useRef<HTMLDivElement>(null);
    
    const vineBoomRef = useRef<HTMLAudioElement>(null);
    const tsunagiteRef = useRef<HTMLAudioElement>(null);

    const playVineBoom = () => {
        if(vineBoomRef.current) {
            vineBoomRef.current.play();
        }
    }

    const playTsunagite = () => {
        if(tsunagiteRef.current) {
            tsunagiteRef.current.play();
        }
    }

    const scrollToContent = () => {
        if (contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Random message per each refresh
    const messageOfTheDay = () => {
        const messages = motd;
        const randomIndex = Math.floor(Math.random() * messages.length);
        
        return messages[randomIndex];
    }

    const message: string = messageOfTheDay();

    return (
        <main style={{
            margin: '0',
            padding: '0',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            overflowY: 'auto',
            height: '100vh',
        }}>
            {/* First section - Logo and Text */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                paddingBottom: '20px',
            }}>
                {/* Logo - always visible (splash handles reveal) */}
                <div style={{
                    marginBottom: '30px',
                }}>
                    <Image
                        src="/placeholders/soraalia.png"
                        alt="Soralia Studio Logo"
                        width={450}
                        height={450}
                        style={{
                            filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))',
                        }}
                    />
                </div>

                <h1 style={{
                    fontSize: '2.8rem',
                    fontWeight: 600,
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                    marginBottom: '40px',
                    marginTop: '10px',
                }}>
                    <p
                        onClick={message.indexOf('Click') > -1 ? playTsunagite : undefined}
                        className={message.indexOf('Click') > -1 ? 'clickable-text' : ''}
                    >
                        <audio ref={tsunagiteRef} src="/audio/tsunagite.mp3"></audio>
                        {message}
                    </p>
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
                    <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    padding: '60px 40px',
                }}
            >
                <div style={{
                    maxWidth: '900px',
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: '0.95rem',
                    lineHeight: '1.8',
                    textAlign: 'justify',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(10px)',
                    padding: '30px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                    <Image
                        src={cafe.image}
                        alt='manhattan cafe'
                        width={600}
                        height={600}
                        loading= 'eager'
                        onClick={playVineBoom}
                    ></Image>
                    <audio ref={vineBoomRef} src="/audio/vine-boom.mp3" />
                </div>
            </div>
        </main>
    );
}