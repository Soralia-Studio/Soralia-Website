import React from 'react';
import StaffCard from '@/components/StaffCard';
import { staffMembers } from '../../data/data';

export default function StaffPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Staff</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
    </div>
  );
}
