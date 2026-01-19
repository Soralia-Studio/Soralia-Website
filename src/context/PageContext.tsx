'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';

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
    
    // Initialize currentPage based on current URL
    const getPageFromPathname = useCallback((path: string): PageType => {
        if (path === '/') return 'home';
        if (path === '/staff') return 'staff';
        if (path === '/tournaments') return 'tournaments';
        return 'home';
    }, []);
    
    const [currentPage, setCurrentPage] = useState<PageType>(() => getPageFromPathname(pathname));
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedTournamentId, setSelectedTournamentId] = useState<string | null>(null);

    // Sync currentPage with URL changes (for browser back/forward)
    // BUT don't override tournament-detail page
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

    const navigateToPage = useCallback((page: PageType) => {
        if (page === currentPage) return;

        // Start fade out
        setIsTransitioning(true);

        // After fade out, change page and URL, then fade in
        setTimeout(() => {
            setCurrentPage(page);
            
            // Update URL without triggering Next.js navigation (no page reload)
            const urlMap: Record<PageType, string> = {
                'home': '/',
                'tournaments': '/tournaments',
                'staff': '/staff',
                'tournament-detail': '/tournaments',
            };
            
            const newUrl = urlMap[page];
            
            // Use window.history.pushState to update URL without page reload
            if (window.location.pathname !== newUrl) {
                window.history.pushState({}, '', newUrl);
            }
            
            // Fade in
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