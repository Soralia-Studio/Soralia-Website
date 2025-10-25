'use client';
import React from 'react';
import StaffCard from '@/components/StaffCard';
import { staffMembers } from '@/data/data';

export default function StaffPage() {
    return (
        <main style={{
            margin: '80px 0 100px 0',
            padding: '0',
            minHeight: '100vh',
            width: '100%',
            position: 'relative',
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '20px',
                maxWidth: '950px',
                width: '90%',
                paddingLeft: '200px',
                paddingTop: '40px',
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