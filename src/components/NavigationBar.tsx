'use client';

import { useLanguage } from '@/context/LanguageContext';
import { usePageContext } from '@/context/PageContext';
import { useState, useEffect } from 'react';

export default function NavigationBar() {
  const { language } = useLanguage();
  
  // Make PageContext optional - use try/catch or conditional hook
  let currentPage: string = 'home';
  let navigateToPage: ((page: any) => void) | null = null;
  
  try {
    const pageContext = usePageContext();
    currentPage = pageContext.currentPage;
    navigateToPage = pageContext.navigateToPage;
  } catch (e) {
    // No PageContext available (e.g., in tournament detail page)
    // Use URL-based navigation instead
  }
  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scroll threshold - navbar fades when scrolled past 100px
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Scrolling down - hide navbar
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        }
        // Scrolling up - show navbar
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { key: 'home', label: { en: 'Home', vi: 'Trang chủ' }, page: 'home' as const, href: '/' },
    { key: 'tournaments', label: { en: 'Tournaments', vi: 'Giải đấu' }, page: 'tournaments' as const, href: '/tournaments' },
    { key: 'staff', label: { en: 'Staff', vi: 'Nhân Sự' }, page: 'staff' as const, href: '/staff' },
  ];
  
  const handleNavClick = (item: typeof navItems[0]) => {
    if (navigateToPage) {
      // Use PageContext navigation if available
      navigateToPage(item.page);
    } else {
      // Fallback to regular navigation
      window.location.href = item.href;
    }
  };

  return (
    <nav
      style={{
        width: '100%',
        padding: '20px 0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'transparent',
        zIndex: 100,
        fontFamily: language === 'vi' ? 'Inter, sans-serif' : 'var(--font-poppins), sans-serif',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: isVisible ? 'auto' : 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        {navItems.map((item) => {
          const isActive = currentPage === item.page || (item.page === 'tournaments' && currentPage === 'tournament-detail');
          
          return (
            <li
              key={item.key}
              onClick={() => handleNavClick(item)}
              style={{
                margin: '0 20px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                position: 'relative',
                padding: '5px 0',
                borderBottom: isActive ? '2px solid white' : 'none',
              }}
            >
              <span
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  fontSize: '1.1rem',
                  paddingBottom: '8px',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)',
                }}
              >
                {item.label[language]}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
} 40