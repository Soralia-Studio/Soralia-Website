'use client';

import React from 'react';

/**
 * AnimatedBackground Component
 * 
 * Creates a subtle animated background similar to Background.png:
 * - Dark blue gradient base
 * - Floating light orbs that move slowly
 * - Subtle glow effects
 * 
 * Designed to be non-distracting with very slow, gentle animations.
 * Uses CSS animations for GPU acceleration and low memory usage.
 */
export default function AnimatedBackground() {
    return (
        <>
            <style jsx global>{`
                /* Base gradient matching Background.png */
                .animated-bg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background: linear-gradient(
                        135deg,
                        #0a1628 0%,
                        #0d2847 30%,
                        #0f3a6d 60%,
                        #0a1f3d 100%
                    );
                    overflow: hidden;
                    z-index: -1;
                }

                /* Subtle top-right glow like in Background.png */
                .bg-glow {
                    position: absolute;
                    top: -20%;
                    right: -10%;
                    width: 60%;
                    height: 60%;
                    background: radial-gradient(
                        ellipse at center,
                        rgba(30, 80, 140, 0.4) 0%,
                        rgba(15, 50, 100, 0.2) 40%,
                        transparent 70%
                    );
                    animation: glowPulse 8s ease-in-out infinite;
                }

                /* Floating orbs - very subtle and slow */
                .floating-orb {
                    position: absolute;
                    border-radius: 50%;
                    background: radial-gradient(
                        circle at 30% 30%,
                        rgba(100, 150, 220, 0.15) 0%,
                        rgba(50, 100, 180, 0.05) 50%,
                        transparent 70%
                    );
                    filter: blur(2px);
                    pointer-events: none;
                }

                .orb-1 {
                    width: 300px;
                    height: 300px;
                    top: 10%;
                    left: 20%;
                    animation: floatOrb1 25s ease-in-out infinite;
                }

                .orb-2 {
                    width: 200px;
                    height: 200px;
                    top: 60%;
                    right: 15%;
                    animation: floatOrb2 30s ease-in-out infinite;
                }

                .orb-3 {
                    width: 150px;
                    height: 150px;
                    bottom: 20%;
                    left: 10%;
                    animation: floatOrb3 20s ease-in-out infinite;
                }

                .orb-4 {
                    width: 100px;
                    height: 100px;
                    top: 40%;
                    right: 40%;
                    animation: floatOrb4 35s ease-in-out infinite;
                }

                /* Very gentle floating animations */
                @keyframes glowPulse {
                    0%, 100% {
                        opacity: 0.6;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.8;
                        transform: scale(1.05);
                    }
                }

                @keyframes floatOrb1 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(30px, 20px);
                    }
                    50% {
                        transform: translate(-20px, 40px);
                    }
                    75% {
                        transform: translate(40px, -10px);
                    }
                }

                @keyframes floatOrb2 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    33% {
                        transform: translate(-40px, -30px);
                    }
                    66% {
                        transform: translate(25px, 20px);
                    }
                }

                @keyframes floatOrb3 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(50px, -30px);
                    }
                }

                @keyframes floatOrb4 {
                    0%, 100% {
                        transform: translate(0, 0);
                    }
                    25% {
                        transform: translate(-20px, 30px);
                    }
                    50% {
                        transform: translate(30px, 50px);
                    }
                    75% {
                        transform: translate(-10px, -20px);
                    }
                }
            `}</style>

            <div className="animated-bg">
                {/* Top-right glow effect */}
                <div className="bg-glow" />

                {/* Floating orbs for subtle movement */}
                <div className="floating-orb orb-1" />
                <div className="floating-orb orb-2" />
                <div className="floating-orb orb-3" />
                <div className="floating-orb orb-4" />
            </div>
        </>
    );
}
