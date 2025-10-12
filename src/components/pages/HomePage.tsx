'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HomePage() {
    const [logoVisible, setLogoVisible] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Trigger fade in animation after component mounts
        setTimeout(() => {
            setLogoVisible(true);
        }, 100);
    }, []);

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
                {/* Logo with fade in from bottom animation */}
                <div style={{
                    opacity: logoVisible ? 1 : 0,
                    transform: logoVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: 'opacity 1.2s ease-out, transform 1.2s ease-out',
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
                    Random Text Here
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
                }}>
                    <p style={{ marginBottom: '12px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dolor quam. Suspendisse at armet euismod quam. Donec venenatis eulismod fermentum. Duis tincidunt consequat leo, nec dignissim tortor vehicula sed. Sed sed orttqu nequet. Aenean nibh et turpis faucibus eros, viverra tincidunt purus semper a. Vivamus scelerisque ligula neque at dolor. Duis posuere vel magna ut rutrum. Proin dapibus dui vitae nibh malesuada, ac illiqula dolor molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ut mattis mi. Duis ac dui sed orttqu pulvinar aliquot ex vel eros. Pellentesque felis ligula, placerat et elit at ornare euismod quam.
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                        Vulputate eleifend lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dolor quam. Suspendisse at armet euismod quam. Donec eget magna sit elit amet, vel dignissim tortor vehicula sed. Sed sed orttqu nequet. Aenean nibh et turpis faucibus mattis mi. Duis ac dui sed orttqu pulvinar aliquot ex vel eros. Pellentesque felis ligula, placerat et elit at ornare, consectetur nostra, per inceptos himenaeos. Donec eget turpis faucibus mauris auctor interdum nec at dolor. Duis posuere vel magna ut rutrum. Proin dapibus dui vitae nibh malesuada, ac illiqula dolor molestie. Nunc ut mattis mi. Duis ac dui sed orttqu pulvinar aliquot ex vel eros. Pellentesque felis ligula, placerat et elit at ornare fermentum. Duis tincidunt consequat leo.
                    </p>
                    <p>
                        Donec eget magna turpis faucibus mauris auctor interdum nec at dolor. Duis posuere vel magna ut rutrum. Proin dapibus dui vitae nibh ut mattis mi. Duis ac dui sed orttqu pulvinar aliquot ex vel eros. Pellentesque felis ligula, placerat et elit sit amet, consequat mauris vel eros. Nunc venenatis consequat leo, nec dignissim tortor vehicula sed. Sed sed orttqu nequet. Aenean nibh et turpis faucibus vel ornare orttqu nequet. Aenean turpis faucibus mauris, consectetur adipiscing elit. Proin eget dolor quam. Suspendisse sit amet euismod quam. Donec venenatis euismod fermentum. Duis tincidunt consequat leo, nec dignissim.
                    </p>
                </div>
            </div>
        </main>
    );
}