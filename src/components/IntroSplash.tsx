'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

/**
 * Animation phase types for intro splash
 */
type SplashPhase = 'idle' | 'logo-rise' | 'logo-spin' | 'logo-stamp' | 'ripple' | 'fadeout';

interface IntroSplashProps {
    /** Callback when splash animation completes */
    onComplete: () => void;
    /** Show skip button (if user has seen intro before) */
    showSkipButton?: boolean;
}

/**
 * IntroSplash Component
 * 
 * A self-contained one-time intro splash screen.
 * 
 * Animation Flow:
 * 1. Black screen with logo rising from bottom
 * 2. Logo spins 360° in 3D
 * 3. Stamp effect (critically damped)
 * 4. Ripple reveals background
 * 5. Fade out and call onComplete (component unmounts after)
 * 
 * If showSkipButton is true, user can skip the intro animation.
 */
export default function IntroSplash({ onComplete, showSkipButton = false }: IntroSplashProps) {
    const [phase, setPhase] = useState<SplashPhase>('idle');

    /**
     * Handle skip button click - immediately complete
     */
    const handleSkip = useCallback(() => {
        setPhase('fadeout');
    }, []);

    /**
     * Advance to next animation phase
     */
    const advancePhase = useCallback(() => {
        setPhase((current) => {
            switch (current) {
                case 'idle':
                    return 'logo-rise';
                case 'logo-rise':
                    return 'logo-spin';
                case 'logo-spin':
                    return 'logo-stamp';
                case 'logo-stamp':
                    return 'ripple';
                case 'ripple':
                    return 'fadeout';
                default:
                    return current;
            }
        });
    }, []);

    // Start animation on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            advancePhase();
        }, 300);
        return () => clearTimeout(timer);
    }, [advancePhase]);

    // Handle phase transitions
    useEffect(() => {
        let timer: NodeJS.Timeout;

        switch (phase) {
            case 'logo-rise':
                timer = setTimeout(advancePhase, 1500);
                break;
            case 'logo-spin':
                timer = setTimeout(advancePhase, 1000);
                break;
            case 'logo-stamp':
                timer = setTimeout(advancePhase, 300);
                break;
            case 'ripple':
                timer = setTimeout(advancePhase, 1000);
                break;
            case 'fadeout':
                // After fadeout animation completes, call onComplete
                timer = setTimeout(() => {
                    onComplete();
                }, 500);
                break;
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [phase, advancePhase, onComplete]);

    // Get logo animation class
    const getLogoClass = (): string => {
        switch (phase) {
            case 'idle':
                return 'splash-logo-idle';
            case 'logo-rise':
                return 'splash-logo-rising';
            case 'logo-spin':
                return 'splash-logo-spinning';
            case 'logo-stamp':
            case 'ripple':
            case 'fadeout':
                return 'splash-logo-stamping';
            default:
                return 'splash-logo-idle';
        }
    };

    return (
        <>
            <style jsx global>{`
                /* Splash container */
                .splash-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: #000;
                    z-index: 9999;
                    overflow: hidden;
                }

                .splash-container.fadeout {
                    animation: splashFadeout 0.5s ease-out forwards;
                }

                /* Logo states */
                .splash-logo {
                    position: absolute;
                    left: 50%;
                    top: 40%;
                    transform: translate(-50%, -50%);
                    z-index: 10;
                    will-change: transform, opacity, top;
                }

                .splash-logo-idle {
                    top: 150%;
                    opacity: 0;
                }

                .splash-logo-rising {
                    animation: splashLogoRise 1.5s ease-out forwards;
                }

                .splash-logo-spinning {
                    top: 40%;
                    opacity: 1;
                    animation: splashLogoSpin 1s ease-in-out forwards;
                }

                .splash-logo-stamping {
                    top: 40%;
                    opacity: 1;
                    animation: splashLogoStamp 0.3s cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
                }

                /* Ripple reveal */
                .splash-ripple {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url("/placeholders/Background.png");
                    background-size: cover;
                    background-position: center;
                    animation: splashRipple 1s ease-out forwards;
                    z-index: 5;
                }

                /* Keyframes */
                @keyframes splashLogoRise {
                    0% {
                        top: 150%;
                        opacity: 0;
                    }
                    20% {
                        opacity: 1;
                    }
                    100% {
                        top: 40%;
                        opacity: 1;
                    }
                }

                @keyframes splashLogoSpin {
                    0% {
                        transform: translate(-50%, -50%) perspective(1000px) rotateY(0deg);
                    }
                    100% {
                        transform: translate(-50%, -50%) perspective(1000px) rotateY(360deg);
                    }
                }

                @keyframes splashLogoStamp {
                    0% {
                        transform: translate(-50%, -50%) scale(1.2);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                }

                @keyframes splashRipple {
                    0% {
                        clip-path: circle(0% at 50% 40%);
                    }
                    100% {
                        clip-path: circle(150% at 50% 40%);
                    }
                }

                @keyframes splashFadeout {
                    0% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
            `}</style>

            <div className={`splash-container ${phase === 'fadeout' ? 'fadeout' : ''}`}>
                {/* Skip button - only shows if user has seen intro before */}
                {showSkipButton && phase !== 'fadeout' && (
                    <button
                        onClick={handleSkip}
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            right: '40px',
                            padding: '12px 24px',
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: 'white',
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            zIndex: 100,
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                    >
                        Skip Intro
                    </button>
                )}

                {/* Logo */}
                <div className={`splash-logo ${getLogoClass()}`}>
                    <Image
                        src="/placeholders/soraalia.png"
                        alt="Soralia Logo"
                        width={450}
                        height={450}
                        priority
                        style={{
                            filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))',
                        }}
                    />
                </div>

                {/* Ripple reveal */}
                {(phase === 'ripple' || phase === 'fadeout') && (
                    <div className="splash-ripple" />
                )}
            </div>
        </>
    );
}
