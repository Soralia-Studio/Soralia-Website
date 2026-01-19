'use client';

import React from 'react';
import { usePageContext } from '@/context/PageContext';
import HomePage from './pages/HomePage';
import TournamentsPage from './pages/TournamentsPage';
import StaffPage from './pages/StaffPage';
import TournamentDetailPage from './pages/TournamentDetailPage';

/**
 * PageContainer Component
 * 
 * Central page renderer that displays the current page based on navigation state.
 * Manages fade transitions (300ms out, 50ms in) between page changes.
 * 
 * Pages:
 * - home: Landing page with hero section
 * - tournaments: Tournament list page
 * - staff: Staff member grid
 * - tournament-detail: Individual tournament details
 * 
 * State managed by PageContext:
 * - currentPage: Active page type
 * - isTransitioning: Fade animation state
 * - selectedTournamentId: Tournament ID for detail page
 */
export default function PageContainer() {
    const { currentPage, isTransitioning, selectedTournamentId } = usePageContext();

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'tournaments':
                return <TournamentsPage />;
            case 'staff':
                return <StaffPage />;
            case 'tournament-detail':
                return <TournamentDetailPage tournamentId={selectedTournamentId || ''} />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div
            style={{
                opacity: isTransitioning ? 0 : 1,
                transition: 'opacity 0.3s ease-in-out',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}
        >
            {renderPage()}
        </div>
    );
}
