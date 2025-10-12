import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tournaments } from '@/data/data';
import { notFound } from 'next/navigation';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type Props = {
  params: {
    id: string;
  };
};

export default function TournamentDetailPage({ params }: Props) {
  const tournament = tournaments.find((t) => t.id === params.id);

  if (!tournament) {
    notFound();
  }

  return (
    <div className={poppins.className} style={{
      minHeight: '100vh',
      width: '100vw',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      backgroundImage: 'url("/placeholders/Background.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      color: 'white',
    }}>
      {/* Navigation */}
      <nav style={{
        width: '100%',
        padding: '25px 0',
        background: 'transparent',
        zIndex: 10,
      }}>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          margin: 0,
          padding: 0,
        }}>
          <li style={{ margin: '0 30px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>HOME</a>
          </li>
          <li style={{ margin: '0 30px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold', borderBottom: '2px solid white', paddingBottom: '5px' }}>
            <a href="/tournaments" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>TOURNAMENTS</a>
          </li>
          <li style={{ margin: '0 30px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold' }}>
            <a href="/staff" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1rem' }}>STAFF</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main style={{
        padding: '40px 20px 60px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* Tournament Image */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '30px',
        }}>
          <div style={{
            position: 'relative',
            width: '360px',
            height: '360px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}>
            <Image
              src={tournament.mainImage}
              alt={tournament.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Tournament Title */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '25px',
          textTransform: 'uppercase',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}>
          {tournament.title}
        </h1>

        {/* Tournament Description */}
        <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          padding: '30px',
          borderRadius: '16px',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: 600,
            marginBottom: '15px',
          }}>
            (Short summary + top 3)
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.7',
            color: 'rgba(255, 255, 255, 0.9)',
          }}>
            {tournament.fullDescription}
          </p>
        </div>

        {/* Video Placeholder */}
        <div style={{
          backgroundColor: 'rgba(200, 200, 200, 0.9)',
          height: '400px',
          borderRadius: '16px',
          marginBottom: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid rgba(255, 255, 255, 0.2)',
        }}>
          <span style={{ color: '#666', fontSize: '1.2rem' }}>Video Placeholder</span>
        </div>

        {/* Gallery Section */}
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          textAlign: 'center',
          marginBottom: '30px',
          textTransform: 'uppercase',
        }}>
          GALLERY
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '15px',
          marginBottom: '30px',
        }}>
          {tournament.galleryImages.slice(0, 15).map((image, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%',
                backgroundColor: 'rgba(200, 200, 200, 0.9)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: '#666', fontSize: '0.8rem' }}>Gallery {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
