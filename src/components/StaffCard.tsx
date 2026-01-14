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
<<<<<<< HEAD
    <div className="container relative hover:scale-105 transition-transform duration-300 ease-in-out" style={{
      border: '2px solid white',
      borderRadius: '15px',
      overflow: 'hidden',
      backgroundColor: 'white'
    }}>
      
      <div className='relative flex shrink-0 items-center p-1'>
        {/* Avatar and Info */}
        <div className="relative w-12 h-12 overflow-hidden">
=======
    <div className="container relative hover:scale-105 transition-transform duration-300 ease-in-out">
      
      <div className='relative flex shrink-0 items-center p-1'>
        {/* Avatar and Info */}
        <div className="bg-white relative w-12 h-12 overflow-hidden rounded-l-lg">
>>>>>>> 4cbc121 (Refactor (Staff Card): Update layout and visual design)
          <Image 
            src={avatarUrl}
            alt={`${name} Avatar`}
            fill
            className='object-contain'
          />
        </div>

        {/* Banner */}
        <div className='relative flex flex-1 w-full h-12 overflow-hidden shadow-lg p-2'>
          <Image
            src={bannerUrl}
            alt={`${name} Banner`}
            fill
<<<<<<< HEAD
            className='object-cover'
=======
            className='object-cover rounded-r-lg'
>>>>>>> 4cbc121 (Refactor (Staff Card): Update layout and visual design)
          />
          
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          {/* Name and Role */}
          <div className="relative z-10 left-1.5 flex flex-col items-start justify-center">
            <div className="text-2xl font-bold text-white">{name} </div>
            <div className="text-sm">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
