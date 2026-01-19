'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageContext - Client-side Navigation System
 * 
 * Custom navigation context that replaces Next.js routing to enable:
 * - Smooth fade transitions between pages (300ms fade out → 50ms fade in)
 * - URL updates without page reload (using window.history.pushState)
 * - Tournament detail state management
 * 
 * Why not Next.js routing?
 * - router.push() triggers full page reload, breaking animations
 * - We need fine control over transition timing
 * - Tournament details share /tournaments URL but different page state
 * 
 * Usage:
 * const { navigateToPage, currentPage } = usePageContext();
 * navigateToPage('tournaments'); // Fades to tournaments page with URL update
 */

export type PageType = 'home' | 'tournaments' | 'staff' | 'tournament-detail';

interface PageContextType {
    currentPage: PageType;
    setCurrentPage: (page: PageType) => void;
    navigateToPage: (page: PageType) => void;
    isTransitioning: boolean;
    setIsTransitioning: (transitioning: boolean) => void;
    selectedTournamentId: string | null;
    setSelectedTournamentId: (id: string | null) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const pathname = usePathname();

    /**
     * Maps URL pathname to PageType
     * Used for initial page load and browser back/forward navigation
     */
    const getPageFromPathname = useCallback((path: string): PageType => {
        if (path === '/') return 'home';
        if (path === '/staff') return 'staff';
        if (path === '/tournaments') return 'tournaments';
        return 'home';
    }, []);

    const [currentPage, setCurrentPage] = useState<PageType>(() => getPageFromPathname(pathname));
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedTournamentId, setSelectedTournamentId] = useState<string | null>(null);

    /**
     * Syncs page state with URL changes from browser back/forward buttons
     * 
     * Critical: Prevents tournament-detail page from resetting to tournaments list
     * when URL is /tournaments but we're viewing a specific tournament.
     */
    useEffect(() => {
        const pageFromPath = getPageFromPathname(pathname);
        // Don't reset if we're on tournament-detail and pathname is /tournaments
        if (currentPage === 'tournament-detail' && pathname === '/tournaments') {
            return;
        }
        if (pageFromPath !== currentPage && !isTransitioning) {
            setCurrentPage(pageFromPath);
        }
    }, [pathname, currentPage, isTransitioning, getPageFromPathname]);

    /**
     * Navigate to a different page with fade transition
     * 
     * Timeline:
     * 1. Start fade out (opacity 0, 300ms)
     * 2. Change page state
     * 3. Update URL via window.history.pushState (no page reload)
     * 4. Fade in (opacity 1, 50ms)
     * 
     * @param page - Target page to navigate to
     */
    const navigateToPage = useCallback((page: PageType) => {
        if (page === currentPage) return;

        // Start fade out transition
        setIsTransitioning(true);

        // After fade out completes, update page and URL
        setTimeout(() => {
            setCurrentPage(page);

            // Map page types to URL paths
            const urlMap: Record<PageType, string> = {
                'home': '/',
                'tournaments': '/tournaments',
                'staff': '/staff',
                'tournament-detail': '/tournaments', // Detail shares /tournaments URL
            };

            const newUrl = urlMap[page];

            // Update browser URL without triggering navigation/reload
            if (window.location.pathname !== newUrl) {
                window.history.pushState({}, '', newUrl);
            }

            // Quick fade in after state update
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    }, [currentPage]);

    return (
        <PageContext.Provider
            value={{
                currentPage,
                setCurrentPage,
                navigateToPage,
                isTransitioning,
                setIsTransitioning,
                selectedTournamentId,
                setSelectedTournamentId,
            }}
        >
            {children}
        </PageContext.Provider>
    );
};

export const usePageContext = (): PageContextType => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePageContext must be used within a PageProvider');
    }
    return context;
};