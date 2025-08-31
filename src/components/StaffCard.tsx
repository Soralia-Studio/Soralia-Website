import React from 'react';
import Image from 'next/image';

type StaffCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
};

const StaffCard: React.FC<StaffCardProps> = ({ name, role, avatarUrl }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
      <div className="relative w-32 h-32 mb-4">
        <Image
          src={avatarUrl}
          alt={`${name} avatar`}
          fill
          className="rounded-full object-cover border-4 border-blue-900"
        />
      </div>
      <h3 className="text-xl font-bold text-blue-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

export default StaffCard;
