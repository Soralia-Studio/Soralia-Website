import React from 'react';
import Image from 'next/image';

type StaffCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  bannerUrl: string;
};

const StaffCard: React.FC<StaffCardProps> = ({ name, role, avatarUrl, bannerUrl }) => {

  return (
    // <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
    //   <div className="relative w-32 h-32 mb-4">
    //     <Image
    //       src={avatarUrl}
    //       alt={`${name} avatar`}
    //       fill
    //       className="rounded-full object-cover border-4 border-blue-900"
    //     />
    //   </div>
    //   <h3 className="text-xl font-bold text-blue-900">{name}</h3>
    //   <p className="text-gray-600">{role}</p>
    // </div>

    <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={bannerUrl}
          alt={`${name} banner`}
          fill
          className="object-cover"
        />
      </div>

      {/* Gradient Overlay - dark on left, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center gap-3 px-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          <Image 
            src={avatarUrl}
            alt={`${name} avatar`}
            fill
            className="border-2 object-cover border-amber-50 rounded-sm"
          />
        </div>

        <div className="flex flex-col justify-center items-start">
          <h3 className="text-xl font-bold text-white leading-tight">{name}</h3>
          <p className="text-sm text-gray-300">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
