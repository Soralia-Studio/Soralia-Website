'use client'

import Image from "next/image";
import { usePageContext } from '@/context/PageContext';

interface TournamentCardProps {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function TournamentCard({ id, title, description, imageUrl }: TournamentCardProps) {
  const { setSelectedTournamentId, navigateToPage } = usePageContext();

  console.log('TournamentCard render - id:', id);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('TournamentCard clicked:', id);
    if (id) {
      setSelectedTournamentId(id);
      console.log('Calling navigateToPage with tournament-detail');
      navigateToPage('tournament-detail');
    }
  };

  const CardContent = (
    <article 
      onClick={id ? handleClick : undefined}
      style={{
        background: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        cursor: id ? 'pointer' : 'default',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      }}
      onMouseEnter={(e) => {
        if (id) {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (id) {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: 'clamp(120px, 20vw, 160px)',
      }}>
        {/* Image on the left - rounded square */}
        <div style={{
          position: 'relative',
          width: 'clamp(140px, 25vw, 220px)',
          height: 'clamp(120px, 20vw, 160px)',
          flexShrink: 0,
          overflow: 'hidden',
          padding: 'clamp(10px, 2vw, 15px)',
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '15px',
            overflow: 'hidden',
          }}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 640px) 140px, 220px"
            />
          </div>
        </div>

        {/* Content on the right */}
        <div style={{
          flex: 1,
          padding: 'clamp(15px, 3vw, 25px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minWidth: 0,
        }}>
          <h2 style={{
            fontSize: 'clamp(1.2rem, 3.5vw, 1.8rem)',
            fontWeight: 700,
            color: 'white',
            textTransform: 'uppercase',
            marginBottom: 'clamp(8px, 2vw, 12px)',
            letterSpacing: '0.5px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}>
            {title}
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
            lineHeight: '1.6',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
          }}>
            {description}
          </p>
        </div>
      </div>
    </article>
  );

  return <div style={{ display: 'block', width: '100%', maxWidth: '950px', margin: '0 auto' }}>{CardContent}</div>;
}