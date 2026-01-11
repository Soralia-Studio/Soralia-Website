'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { LogoAnimationPhase } from './SharedLogo';

interface IntroAnimationProps {
    /** Callback to update the shared logo's animation phase */
    onPhaseChange: (phase: LogoAnimationPhase) => void;
    /** Callback when all intro animations are complete */
    onComplete: () => void;
}

/**
 * IntroAnimation Component
 * 
 * Controls the intro animation sequence but does NOT render the logo.
 * The logo is rendered by SharedLogo in MainApp to prevent FOUC.
 * 
 * Full Flow:
 * 1. Logo rises from bottom (1.5s)
 * 2. Logo spins 360° in 3D (1s)
 * 3. Stamp effect with bounce (0.6s)
 * 4. Ripple reveals background (1.2s)
 * 5. UI elements fade in
 * 
 * Uses CSS animations for GPU acceleration and memory efficiency.
 */
export default function IntroAnimation({ onPhaseChange, onComplete }: IntroAnimationProps) {
    const [phase, setPhase] = useState<LogoAnimationPhase>('idle');
    const [showRipple, setShowRipple] = useState(false);

    /**
     * Handle animation phase transitions
     * Flow: idle → rise → spin → stamp → complete → content-ready
     */
    const advancePhase = useCallback(() => {
        setPhase((current) => {
            let nextPhase: LogoAnimationPhase;
            switch (current) {
                case 'idle':
                    nextPhase = 'logo-rise';
                    break;
                case 'logo-rise':
                    nextPhase = 'logo-spin';
                    break;
                case 'logo-spin':
                    nextPhase = 'logo-stamp';
                    break;
                case 'logo-stamp':
                    nextPhase = 'logo-complete';
                    break;
                case 'logo-complete':
                    nextPhase = 'content-ready';
                    break;
                default:
                    nextPhase = current;
            }
            return nextPhase;
        });
    }, []);

    // Notify parent of phase changes
    useEffect(() => {
        onPhaseChange(phase);
    }, [phase, onPhaseChange]);

    // Start animation sequence on mount
    useEffect(() => {
        const startTimer = setTimeout(() => {
            advancePhase();
        }, 300);

        return () => clearTimeout(startTimer);
    }, [advancePhase]);

    // Handle phase transitions with timers
    useEffect(() => {
        let timer: NodeJS.Timeout;

        switch (phase) {
            case 'logo-rise':
                // Rise animation duration
                timer = setTimeout(advancePhase, 1500);
                break;
            case 'logo-spin':
                // Spin animation duration
                timer = setTimeout(advancePhase, 1000);
                break;
            case 'logo-stamp':
                // Start ripple DURING stamp for instant connection (no gap)
                setShowRipple(true);
                // Stamp + ripple run together, advance after stamp completes
                timer = setTimeout(advancePhase, 300);
                break;
            case 'logo-complete':
                // Ripple already started, just wait for it to finish
                timer = setTimeout(advancePhase, 700);
                break;
            case 'content-ready':
                // Notify parent that intro is complete
                onComplete();
                break;
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [phase, advancePhase, onComplete]);

    // Don't render overlay after content is ready
    if (phase === 'content-ready') {
        return null;
    }

    return (
        <>
            {/* CSS Keyframes for ripple */}
            <style jsx global>{`
                @keyframes introRippleExpand {
                    0% {
                        clip-path: circle(0% at 50% 40%);
                    }
                    100% {
                        clip-path: circle(150% at 50% 40%);
                    }
                }
            `}</style>

            {/* Black overlay - visible during intro sequence */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#000',
                    zIndex: 50, // Below shared logo (z-index 100)
                    overflow: 'hidden',
                    pointerEvents: 'none',
                }}
            >
                {/* Ripple reveal - shows background through circular clip-path */}
                {showRipple && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url("/placeholders/Background.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            animation: 'introRippleExpand 1s ease-out forwards',
                            zIndex: 51,
                        }}
                    />
                )}
            </div>
        </>
    );
}
