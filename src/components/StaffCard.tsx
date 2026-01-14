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
    <div className="container relative transition-all duration-300 hover:brightness-110 hover:saturate-110">
      <div className='relative flex shrink-0 items-center p-1'>
        {/* Avatar and Info */}
        <div className="bg-white relative w-12 h-12 overflow-hidden rounded-l-lg">
          <Image 
            src={avatarUrl}
            alt={`${name} Avatar`}
            fill
            className='object-cover'
          />
        </div>

        {/* Banner */}
        <div className='relative flex flex-1 w-full h-12 overflow-hidden shadow-lg p-2 rounded-r-lg'>
          <Image
            src={bannerUrl}
            alt={`${name} Banner`}
            fill
            className='object-cover'
          />
          
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          {/* Name and Role */}
          <div className="font-sans relative z-10 left-1.5 flex flex-col items-start justify-center">
            <div style={{
              paddingBottom: '0.2rem',
              fontSize: '1.15rem',
              fontWeight: 600,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
            }}>
              {name}
            </div>
            <div style={{
              fontSize: '0.875rem',
              fontStyle: 'italic'
            }}>
              {role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
