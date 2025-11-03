'use client';

import React from 'react';
import TournamentCard from '@/components/TournamentCard';
import { tournaments } from '@/data/data';
import { usePageContext } from '@/context/PageContext';

export default function TournamentsPage() {
    const { setCurrentPage, setSelectedTournamentId, setIsTransitioning } = usePageContext();

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
            </div>
        </main>
    );
}