'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type PageType = 'home' | 'tournaments' | 'staff' | 'tournament-detail';

interface PageContextType {
    currentPage: PageType;
    setCurrentPage: (page: PageType) => void;
    isTransitioning: boolean;
    setIsTransitioning: (transitioning: boolean) => void;
    selectedTournamentId: string | null;
    setSelectedTournamentId: (id: string | null) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [currentPage, setCurrentPage] = useState<PageType>('home');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [selectedTournamentId, setSelectedTournamentId] = useState<string | null>(null);

    return (
        <PageContext.Provider
            value={{
                currentPage,
                setCurrentPage,
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