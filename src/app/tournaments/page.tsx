import React from 'react';
import TournamentCard from '../../components/TournamentCard';
import { tournaments } from '../../data/data';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function TournamentsPage() {
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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      <nav style={{
        width: '100%',
        padding: '25px 0',
        position: 'absolute',
        top: 0,
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
          <li style={{ margin: '0 30px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold', position: 'relative', padding: '5px 0' }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '1.1rem', paddingBottom: '8px' }}>HOME</Link>
          </li>
          <li style={{ margin: '0 30px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold', position: 'relative', padding: '5px 0', borderBottom: '2px solid white' }}>
            <Link href="/tournaments" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '1.1rem', paddingBottom: '8px' }}>TOURNAMENTS</Link>
          </li>
          <li style={{ margin: '0 30px', cursor: 'pointer', textTransform: 'uppercase', fontWeight: 'bold', position: 'relative', padding: '5px 0' }}>
            <Link href="/staff" style={{ color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', fontSize: '1.1rem', paddingBottom: '8px' }}>STAFF</Link>
          </li>
        </ul>
      </nav>

      <main style={{
        margin: '80px 0 100px 0',
        padding: '80px 0 100px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '30px',
          marginTop: '-15px',
          fontWeight: 600,
          letterSpacing: '1px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}>Tournaments</h1>

        <div style={{
          textAlign: 'justify',
          margin: '0 auto',
          fontSize: '1.1rem',
          lineHeight: '1.6',
          width: '95%',
          maxWidth: '800px',
          position: 'relative',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {tournaments.map((tournament) => (
              <TournamentCard
                key={tournament.id}
                id={tournament.id}
                title={tournament.title}
                description={tournament.shortDescription}
                imageUrl={tournament.mainImage}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
