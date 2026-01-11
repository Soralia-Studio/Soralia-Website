'use client';

import React from 'react';
import Image from 'next/image';
import { tournaments } from '../../data/data';
import { usePageContext } from '@/context/PageContext';
import Masonry from 'react-masonry-css';

export default function TournamentDetailPage() {
    const { selectedTournamentId } = usePageContext();

    const masonryBreakpoints = {
        default: 4,
        1200: 3,
        800: 2,
        500: 1,
    }

    const tournament = tournaments.find((t) => t.id === selectedTournamentId);

    if (!tournament) {
        return <div>Tournament not found</div>;
    }

    return (
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
                marginTop: '80px',
            }}>
                <div style={{
                    position: 'relative',
                    width: '360px',
                    height: '360px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                }}>
                    <Image
                        src={tournament.mainImage}
                        alt={tournament.title}
                        className="object-contain scale-125"
                        fill
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
            width: '100%',
            maxWidth: '900px',
            aspectRatio: '16 / 9',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '40px',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            }}>
            <iframe
                src={tournament.videoHolder}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                    width: '100%',
                    height: '100%',
                    border: '0',
                }}
            />
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

            <Masonry
                breakpointCols={masonryBreakpoints}
                className="flex gap-2"
                columnClassName=""
            >
                {tournament.galleryImages.map((imageUrl, index) => (
                    <div
                        key={index}
                    >
                        <img src={imageUrl} alt={`Gallery ${index + 1}`} 
                            style={{
                                width: '100%',
                                marginBottom: '15px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                        />
                    </div>
                ))}
            </Masonry>
        </main>
    );
}