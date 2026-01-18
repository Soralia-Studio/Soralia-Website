'use client'

import Image from "next/image";
import Link from "next/link";

interface TournamentCardProps {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function TournamentCard({ id, title, description, imageUrl }: TournamentCardProps) {
  const CardContent = (
    <article style={{
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '160px',
      }}>
        {/* Image on the left - rounded square */}
        <div style={{
          position: 'relative',
          width: '220px',
          height: '160px',
          flexShrink: 0,
          overflow: 'hidden',
          padding: '15px',
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
              sizes="190px"
            />
          </div>
        </div>

        {/* Content on the right */}
        <div style={{
          flex: 1,
          padding: '20px 25px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: 'white',
            textTransform: 'uppercase',
            marginBottom: '12px',
            letterSpacing: '0.5px',
          }}>
            {title}
          </h2>
          <p style={{
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: '0.95rem',
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

  if (id) {
    return (
      <Link href={`/tournaments/${id}`} style={{ display: 'block', width: '100%', maxWidth: '950px', margin: '0 auto', textDecoration: 'none' }}>
        {CardContent}
      </Link>
    );
  }

  return <div style={{ display: 'block', width: '100%', maxWidth: '950px', margin: '0 auto' }}>{CardContent}</div>;
}