'use client';

import React from 'react';
import TournamentCard from '@/components/TournamentCard';
import { tournaments, xaxalele } from '../../data/data';
import { usePageContext } from '@/context/PageContext';
import { useState } from 'react';
import Image from 'next/image';

export default function TournamentsPage() {
    const { setCurrentPage, setSelectedTournamentId, setIsTransitioning } = usePageContext();
    const [xaxaleleClickCount, setXaxaleleClickCount] = useState(0);

    const handleTournamentClick = (id: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setSelectedTournamentId(id);
            setCurrentPage('tournament-detail');
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };

    // If user clicks the xaxalele box 7 times, direct them to a secret page (different url)
    const handleBoxXaxaleleClick = () => {
        const newClickCount = xaxaleleClickCount + 1;
        setXaxaleleClickCount(newClickCount);

        if(newClickCount >= 7) {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }
    }

    return (
        <main style={{
            margin: '0',
            padding: '120px 40px 60px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1000px',
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
            }}>
                {tournaments.map((tournament) => (
                    <div
                        key={tournament.id}
                        onClick={() => handleTournamentClick(tournament.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <TournamentCard
                            title={tournament.title}
                            description={tournament.shortDescription}
                            imageUrl={tournament.mainImage}
                        />
                    </div>
                ))}

                {/* Xaxalele thingy*/}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
                    <div
                        className="xaxalele-box"
                        onClick={handleBoxXaxaleleClick}
                        role="button"
                        tabIndex={0}
                        style={{
                            width: '100%',
                            maxWidth: '950px',
                            height: '160px',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            position: 'relative',
                        }}
                    >
                        <Image
                            src={xaxalele.boxGlitch}
                            alt="Xaxalele Box"
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 950px) 100vw, 950px"
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                        }}>
                            <span style={{
                                color: 'white',
                                fontSize: '1.25rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                textShadow: '0 2px 10px rgba(0,0,0,0.7)',
                                pointerEvents: 'none',
                            }}>
                                Click to open
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}