'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { IoMusicalNotes, IoPause } from 'react-icons/io5';

/**
 * MusicPlayer Component
 * 
 * A floating music player positioned at bottom-right corner.
 * Features:
 * - Music note icon with floating animation
 * - Shows "Tai Pak Market" text when playing
 * - Auto-play when component mounts (with user interaction fallback)
 * - Appropriate volume level (0.3 for background music)
 * 
 * Uses HTML5 Audio element for efficient playback without memory issues.
 */

interface MusicPlayerProps {
    /** Whether to show the music player (for fade-in control) */
    show?: boolean;
    /** Whether to auto-play the music (default: true) */
    autoPlay?: boolean;
}

export default function MusicPlayer({ show = true, autoPlay = true }: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [showText, setShowText] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const hasAttemptedAutoPlay = useRef(false);

    // Initialize audio element on mount
    useEffect(() => {
        // Create audio element only on client side
        audioRef.current = new Audio('/Song/Tai Pak market arknights.mp3');
        audioRef.current.loop = true;
        // Appropriate volume for background music (not too loud)
        audioRef.current.volume = 0.3;

        // Cleanup on unmount
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.src = '';
                audioRef.current = null;
            }
        };
    }, []);

    // Auto-play when component becomes visible (after ripple completes)
    useEffect(() => {
        if (show && autoPlay && audioRef.current && !hasAttemptedAutoPlay.current) {
            hasAttemptedAutoPlay.current = true;

            // Small delay to ensure ripple animation is complete
            const playTimer = setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.play()
                        .then(() => {
                            setIsPlaying(true);
                            setShowText(true);
                        })
                        .catch((error) => {
                            // Browser blocked autoplay - this is expected
                            // User will need to click the music button
                            console.log('Auto-play blocked, click music button to play');
                        });
                }
            }, 300); // 300ms delay after content appears

            return () => clearTimeout(playTimer);
        }
    }, [show, autoPlay]);

    /**
     * Toggle play/pause state
     * Shows song text when playing starts
     */
    const togglePlay = useCallback(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch((error) => {
                console.log('Audio play failed:', error);
            });
            setIsPlaying(true);
            setShowText(true);
        }
    }, [isPlaying]);

    // Show text on hover or when playing
    const shouldShowText = showText || isHovered || isPlaying;

    return (
        <>
            {/* Keyframe animations */}
            <style jsx global>{`
                @keyframes musicPlayerFadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes musicNoteFloat {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-3px) rotate(-5deg);
                    }
                    50% {
                        transform: translateY(-5px) rotate(0deg);
                    }
                    75% {
                        transform: translateY(-3px) rotate(5deg);
                    }
                }

                @keyframes musicNotePulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                }
            `}</style>

            {/* Music player container */}
            <div
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    opacity: show ? 1 : 0,
                    visibility: show ? 'visible' : 'hidden',
                    animation: show ? 'musicPlayerFadeIn 0.8s ease-out 0.3s forwards' : 'none',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Song title text */}
                <div
                    style={{
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                        opacity: shouldShowText ? 1 : 0,
                        transform: shouldShowText ? 'translateX(0)' : 'translateX(10px)',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                    }}
                >
                    Tai Pak Market
                </div>

                {/* Music note icon button */}
                <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                    style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        border: 'none',
                        background: isPlaying
                            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                            : 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: isPlaying
                            ? '0 4px 20px rgba(102, 126, 234, 0.5)'
                            : '0 4px 15px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease',
                        animation: isPlaying
                            ? 'musicNotePulse 1s ease-in-out infinite'
                            : 'musicNoteFloat 3s ease-in-out infinite',
                    }}
                >
                    {/* Icon from react-icons library */}
                    {isPlaying ? (
                        <IoPause size={24} color="white" />
                    ) : (
                        <IoMusicalNotes size={24} color="white" />
                    )}
                </button>
            </div>
        </>
    );
}
