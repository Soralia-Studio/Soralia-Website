'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Animation phase types for the shared logo
 * Full flow: rise → spin → stamp → complete
 */
export type LogoAnimationPhase =
    | 'idle'           // Starting state, logo hidden below screen
    | 'logo-rise'      // Logo rises from bottom to center
    | 'logo-spin'      // Logo spins 360° in 3D (rotateY)
    | 'logo-stamp'     // Stamp/heavy impact effect with bounce
    | 'logo-complete'  // Animation done, logo stays visible
    | 'content-ready'; // Content is fading in, logo still visible

interface SharedLogoProps {
    /** Current animation phase */
    phase: LogoAnimationPhase;
}

/**
 * SharedLogo Component
 * 
 * A persistent logo component that is NEVER unmounted.
 * Shared between intro animation and main content to prevent FOUC.
 * 
 * Animation Flow:
 * 1. Logo rises from bottom to center
 * 2. Logo spins 360° in 3D (rotateY)
 * 3. Stamp effect: pulse up (1.15) → slam down (0.92) → bounce settle (1.0)
 * 4. After stamp settles, UI fades in
 * 5. Logo stays visible at all times - never fades
 * 
 * Size: 450x450 matching HomePage
 * Position: 40% from top (centered horizontally)
 */
export default function SharedLogo({ phase }: SharedLogoProps) {
    // Get animation class based on current phase
    const getAnimationClass = (): string => {
        switch (phase) {
            case 'idle':
                return 'logo-idle';
            case 'logo-rise':
                return 'logo-rising';
            case 'logo-spin':
                return 'logo-spinning';
            case 'logo-stamp':
                return 'logo-stamping';
            case 'logo-complete':
            case 'content-ready':
                return 'logo-visible';
            default:
                return 'logo-visible';
        }
    };

    return (
        <>
            {/* CSS Animations with animation-fill-mode: forwards */}
            <style jsx global>{`
                /* Logo container base styles */
                .shared-logo-container {
                    position: fixed;
                    left: 50%;
                    top: 40%;
                    transform: translate(-50%, -50%);
                    z-index: 100;
                    will-change: transform, opacity, top;
                }

                /* Idle state - hidden below screen */
                .logo-idle {
                    top: 150%;
                    opacity: 0;
                }

                /* Rising animation - from bottom to center */
                .logo-rising {
                    animation: sharedLogoRise 1.5s ease-out forwards;
                }

                /* 3D Spin animation */
                .logo-spinning {
                    top: 40%;
                    opacity: 1;
                    animation: sharedLogoSpin3D 1s ease-in-out forwards;
                }

                /* Stamp/Heavy Impact - CRITICALLY DAMPED (solid impact, no bounce) */
                .logo-stamping {
                    top: 40%;
                    /* ease-out for critically damped feel - fast start, smooth settle */
                    animation: sharedLogoStamp 0.3s cubic-bezier(0.0, 0.0, 0.2, 1) forwards;
                }

                /* Final visible state - persists after animations */
                .logo-visible {
                    top: 40%;
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }

                /* Keyframes - Rise from bottom */
                @keyframes sharedLogoRise {
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

                /* Keyframes - 3D Spin (rotateY 360°) */
                @keyframes sharedLogoSpin3D {
                    0% {
                        transform: translate(-50%, -50%) perspective(1000px) rotateY(0deg);
                    }
                    100% {
                        transform: translate(-50%, -50%) perspective(1000px) rotateY(360deg);
                    }
                }

                /* Keyframes - Stamp/Heavy Impact - CRITICALLY DAMPED */
                @keyframes sharedLogoStamp {
                    /* Start: slightly larger and semi-transparent */
                    0% {
                        transform: translate(-50%, -50%) scale(1.2);
                        opacity: 0.8;
                    }
                    /* Impact: slam down to final size immediately */
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                        opacity: 1;
                    }
                }
            `}</style>

            {/* Logo element - size 450x450 matching HomePage */}
            <div className={`shared-logo-container ${getAnimationClass()}`}>
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
        </>
    );
}
