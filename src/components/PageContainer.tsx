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
 * Container that renders the current page based on navigation state.
 * Handles page transitions with opacity animation.
 */
export default function PageContainer() {
    const { currentPage, isTransitioning } = usePageContext();

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'tournaments':
                return <TournamentsPage />;
            case 'staff':
                return <StaffPage />;
            case 'tournament-detail':
                return <TournamentDetailPage />;
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
