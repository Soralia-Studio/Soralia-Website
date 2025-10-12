'use client';

import React from 'react';
import StaffCard from '@/components/StaffCard';
import { staffMembers } from '@/data/data';

export default function StaffPage() {
    return (
        <main style={{
            margin: '80px 0 100px 0',
            padding: '80px 0 100px 0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
        }}>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '50px',
                fontWeight: 600,
                letterSpacing: '1px',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}>Our Staff</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '30px',
                maxWidth: '1200px',
                width: '90%',
                margin: '0 auto',
            }}>
                {staffMembers.map((staff) => (
                    <StaffCard
                        key={staff.id}
                        name={staff.name}
                        role={staff.role}
                        avatarUrl={staff.avatarUrl}
                    />
                ))}
            </div>
        </main>
    );
}