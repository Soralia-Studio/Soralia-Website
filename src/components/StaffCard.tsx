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
        <div className="bg-white relative overflow-hidden rounded-l-lg" style={{
          width: 'clamp(40px, 10vw, 48px)',
          height: 'clamp(40px, 10vw, 48px)',
          minWidth: '40px',
          minHeight: '40px',
        }}>
          <Image
            src={avatarUrl}
            alt={`${name} Avatar`}
            decoding='async'
            loading='lazy'
            fill
            className='object-cover'
          />
        </div>

        {/* Banner */}
        <div className='relative flex flex-1 w-full overflow-hidden shadow-lg p-2 rounded-r-lg' style={{
          height: 'clamp(40px, 10vw, 48px)',
          minHeight: '40px',
        }}>
          <Image
            src={bannerUrl}
            alt={`${name} Banner`}
            decoding='async'
            loading='lazy'
            fill
            className='object-cover'
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

          {/* Name and Role */}
          <div className="font-sans relative z-10 left-1.5 flex flex-col items-start justify-center" style={{
            overflow: 'visible',
          }}>
            <div style={{
              paddingBottom: '0.1rem',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
              fontWeight: 600,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            }}>
              {name}
            </div>
            <div style={{
              fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
              fontStyle: 'italic',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              width: 'max-content',
              flexShrink: 0,
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
