'use client';

import React from 'react';
import StaffCard from '@/components/StaffCard';
import { staffMembers } from '../../data/data';
import { useLanguage } from '@/context/LanguageContext';

export default function StaffPage() {
    const { language } = useLanguage();
    
    return (
        <main style={{
            margin: 'clamp(40px, 10vw, 80px) 0 clamp(50px, 10vw, 100px) 0',
            padding: 'clamp(40px, 10vw, 80px) clamp(15px, 3vw, 30px) clamp(50px, 10vw, 100px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            overflowX: 'hidden',
        }}>
            <h1 style={{
                fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                marginBottom: 'clamp(30px, 6vw, 50px)',
                fontWeight: 600,
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                padding: '0 20px',
            }}>{language === 'vi' ? 'Dàn nhân sự' : 'Our Staff'}</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                gap: 'clamp(0.8rem, 2vw, 1rem)',
                maxWidth: '1200px',
                width: '100%',
                margin: '0 auto',
                gridAutoFlow: 'row',
                padding: '0 10px',
            }}>
                {staffMembers.map((staff) => (
                    <StaffCard
                        key={staff.id}
                        name={staff.name}
                        role={staff.role}
                        avatarUrl={staff.avatarUrl}
                        bannerUrl={staff.bannerUrl}
                    />
                ))}
            </div>
        </main>
    );
}