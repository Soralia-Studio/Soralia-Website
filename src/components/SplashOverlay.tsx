'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

/**
 * Animation start delays (ms)
 */
const DELAY = {
    RISE: 300,
    SPIN: 1500,  // Rise (1.5s) completes
    STAMP: 2500, // Spin (1s) completes
    RIPPLE: 2800, // Stamp (0.3s) complete
    FINISH: 3800, // Ripple (1s) complete
};

/**
 * Animation phase types
 */
type OverlayPhase = 'idle' | 'rise' | 'spin' | 'stamp' | 'ripple' | 'complete';

interface SplashOverlayProps {
    onComplete: () => void;
}

export default function SplashOverlay({ onComplete }: SplashOverlayProps) {
    const [phase, setPhase] = useState<OverlayPhase>('idle');

    // Manage animation sequence
    useEffect(() => {
        // Start sequence
        const timers: NodeJS.Timeout[] = [];

        timers.push(setTimeout(() => setPhase('rise'), DELAY.RISE));
        timers.push(setTimeout(() => setPhase('spin'), DELAY.RISE + 1500));
        timers.push(setTimeout(() => setPhase('stamp'), DELAY.RISE + 1500 + 1000));

        // Overlap/Instant Ripple: Start ripple almost immediately with stamp or right after
        // User requesting fix for delay: Make it tight.
        // Stamp takes ~300ms. We can start ripple at 200ms into stamp or right at 300ms.
        timers.push(setTimeout(() => setPhase('ripple'), DELAY.RISE + 1500 + 1000 + 250));

        // Finish: Allow ripple to fully expand before unmounting
        timers.push(setTimeout(() => {
            setPhase('complete');
            onComplete();
        }, DELAY.RISE + 1500 + 1000 + 250 + 1000));

        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <>
            <style jsx global>{`
                /* Container */
                .splash-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 9999;
                    pointer-events: none; /* Let clicks pass through if needed, though usually blocks */
                }

                /* Background Layer */
                .splash-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #000;
                    z-index: 1;
                    /* Ripple will modify clip-path of this or a child, 
                       OR we mask this div. 
                       Actually, "Ripple reveals background" usually means we clip the BLACK overlay away.
                    */
                    transition: clip-path 1s ease-out;
                }

                .splash-bg.ripple {
                    animation: circleReveal 1.2s ease-out forwards;
                }

                @keyframes circleReveal {
                    0% {
                        clip-path: circle(0% at 50% 50%); /* Start closed? No, we want to reveal underneath. 
                        Wait, if this is the BLACK overlay, we want to REMOVE it with a ripple.
                        So we start full black, and hole expands?
                        Or we have a "Ripple" element that expands?
                        User said: "Ripple reveals background".
                        Usually means a hole opens in the black screen.
                        clip-path: circle(0% at ...) -> hole?
                        CSS clip-path shows what is INSIDE the shape.
                        To show a HOLE, we need mask-image or a different trick.
                        Easiest: Animate clip-path from 0% to 150%? 
                        If clip-path is 0%, element is hidden.
                        If clip-path is 100%, element is shown.
                        We want Black Screen to DISAPPEAR.
                        So we want to clip-path the Black Screen from 100% radius (full coverage) to 0%?
                        No, that shrinks to center.
                        We want a hole expanding from center. */
                    
                        /* Alternative: Use a radial-gradient mask */
                        mask-image: radial-gradient(circle at center, transparent 0%, black 0%);
                        -webkit-mask-image: radial-gradient(circle at center, transparent 0%, black 0%);
                    }
                    100% {
                        mask-image: radial-gradient(circle at center, transparent 150%, black 150%);
                        -webkit-mask-image: radial-gradient(circle at center, transparent 150%, black 150%);
                    }
                }
                
                /* Easier Alternative for "Ripple Reveal":
                   Just fade out? No, user liked the ripple.
                   Let's try the mask approach for the black background. 
                */
                
                .splash-bg-mask {
                    position: absolute;
                    inset: 0;
                    background-color: #000;
                    z-index: 1;
                }
                
                .splash-bg-mask.rippling {
                    animation: maskRipple 1s ease-out forwards;
                }
                
                @keyframes maskRipple {
                    0% {
                        -webkit-mask-image: radial-gradient(circle, transparent 0%, black 0.1%);
                        mask-image: radial-gradient(circle, transparent 0%, black 0.1%);
                    }
                    100% {
                        -webkit-mask-image: radial-gradient(circle, transparent 150%, black 150%);
                        mask-image: radial-gradient(circle, transparent 150%, black 150%);
                    }
                }

                /* Logo Layer */
                .splash-logo-container {
                    position: absolute;
                    top: 40%; /* Matching IntroSplash/SharedLogo position */
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 2; /* On top of black bg */
                    will-change: transform, opacity, top;
                }

                /* Logo Animations - Cloned from SharedLogo for consistency */
                .anim-idle { top: 150%; opacity: 0; }
                .anim-rise { animation: logoRise 1.5s ease-out forwards; }
                .anim-spin { top: 40%; opacity: 1; animation: logoSpin 1s ease-in-out forwards; }
                .anim-stamp { top: 40%; opacity: 1; animation: logoStamp 0.3s cubic-bezier(0.0, 0.0, 0.2, 1) forwards; }
                /* Post-stamp, logo stays static in stamped position (scale 1) */
                .anim-done { top: 40%; opacity: 1; transform: translate(-50%, -50%) scale(1); }

                @keyframes logoRise {
                    0% { top: 150%; opacity: 0; }
                    20% { opacity: 1; }
                    100% { top: 40%; opacity: 1; }
                }

                @keyframes logoSpin {
                    from { transform: translate(-50%, -50%) perspective(1000px) rotateY(0deg); }
                    to { transform: translate(-50%, -50%) perspective(1000px) rotateY(360deg); }
                }

                @keyframes logoStamp {
                    0% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.8; }
                    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                }
            `}</style>

            <div className="splash-overlay">
                {/* Black Background with Mask Animation */}
                <div className={`splash-bg-mask ${phase === 'ripple' || phase === 'complete' ? 'rippling' : ''}`} />

                {/* Animated Logo - Always visible on top of black bg */}
                <div className={`splash-logo-container ${phase === 'idle' ? 'anim-idle' :
                        phase === 'rise' ? 'anim-rise' :
                            phase === 'spin' ? 'anim-spin' :
                                phase === 'stamp' ? 'anim-stamp' :
                                    'anim-done'
                    }`}>
                    <Image
                        src="/placeholders/soraalia.png"
                        alt="Soralia Logo"
                        width={450}
                        height={450}
                        priority
                        style={{
                            width: 'auto',
                            height: 'auto',
                            filter: 'drop-shadow(0 0 30px rgba(255, 255, 255, 0.5))',
                        }}
                    />
                </div>
            </div>
        </>
    );
}
