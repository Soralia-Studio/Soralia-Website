import React from 'react';
import Image from 'next/image';

type StaffCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  bannerUrl: string;
};

const StaffCard: React.FC<StaffCardProps> = ({ name, role, avatarUrl, bannerUrl }) => {

  /*
      TODO:
      - Fix font issues
      - Fix avatar position
      - Add hover effects (done)
   */

  return (
    <div className="border-2 border-amber-50 container relative hover:scale-105 transition-transform duration-300 ease-in-out">
      {/* Banner */}
      <div className='w-full h-12 relative rounded-lg overflow-hidden shadow-lg'>
        <Image
          src={bannerUrl}
          alt={`${name} Banner`}
          fill
          className='object-cover object-center'
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent"></div>

        {/* Avatar and Info */}
        <div className='relative flex items-center gap-3'>
          <div className="relative w-12 h-12">
            <Image 
              src={avatarUrl}
              alt={`${name} Avatar`}
              fill
            />
          </div>

          <div className="relative flex flex-col justify-center items-start">
            <div className="text-2xl font-bold text-white leading-tight">{name} </div>
            <div className="text-sm">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
