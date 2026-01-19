'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '@/data/translations';

/**
 * Supported Languages
 */
export type Language = 'en' | 'vi';

/**
 * Language Context Interface
 */
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Language Provider Component
 * 
 * Provides language state and translation function to all child components.
 * Persists language selection to localStorage.
 */
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');
    const [isClient, setIsClient] = useState(false);

    // Load language from localStorage on mount
    useEffect(() => {
        setIsClient(true);
        const savedLang = localStorage.getItem('soralia-language') as Language;
        if (savedLang && (savedLang === 'en' || savedLang === 'vi')) {
            setLanguageState(savedLang);
        }
    }, []);

    // Save language to localStorage
    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (isClient) {
            localStorage.setItem('soralia-language', lang);
        }
    };

    // Translation function (will be enhanced with translations data)
    const t = (key: string): string => {
        // Import translations dynamically
        return translations[language]?.[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

/**
 * Hook to use Language Context
 * 
 * @returns Language context with current language, setter, and translation function
 * @throws Error if used outside LanguageProvider
 */
export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
