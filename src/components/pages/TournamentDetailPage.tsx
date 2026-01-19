import React from 'react';
import Image from 'next/image';
import { tournaments } from '../../data/data';
import { useLanguage } from '@/context/LanguageContext';
import { usePageContext } from '@/context/PageContext';
import Masonry from 'react-masonry-css';
import galleryImagesData from '@/data/galleryImages.json';
import zoomImagesData from '@/data/zoomImages.json';
import { AnimatePresence, motion } from 'framer-motion';

interface TournamentDetailPageProps {
    tournamentId: string;
}

export default function TournamentDetailPage({ tournamentId }: TournamentDetailPageProps) {
    const { language } = useLanguage();
    const { navigateToPage } = usePageContext();

    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
    const [podiumIndex, setPodiumIndex] = React.useState<number>(0);

    const masonryBreakpoints = {
        default: 4,
        1200: 3,
        800: 2,
        500: 1,
    }

    const tournament = tournaments.find((t) => t.id === tournamentId);

    if (!tournament) {
        return <div>Tournament not found</div>;
    }

    // Helper function to render text with bold markdown
    const renderDescription = (text: string) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, index) => {
            if (index % 2 === 1) {
                return <strong key={index}>{part}</strong>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    // Get description based on language
    const description = language === 'vi' ? tournament.fullDescriptionVi : tournament.fullDescription;

    const galleryImages = galleryImagesData as Record<string, string[]>;
    const zoomImages = zoomImagesData as Record<string, string[]>;

    const podiumImages = tournament.record.topThreePhoto;

    const prev = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex - 1 + galleryImages[tournament.id].length) % galleryImages[tournament.id].length);
    }

    const next = () => {
        if (selectedIndex === null) return;
        setSelectedIndex((selectedIndex + 1) % galleryImages[tournament.id].length);
    }

    const close = () => {
        setSelectedIndex(null);
    }

    const podiumPrev = () => {
        setPodiumIndex((podiumIndex - 1 + podiumImages.length) % podiumImages.length);
    }

    const podiumNext = () => {
        setPodiumIndex((podiumIndex + 1) % podiumImages.length);
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

            <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                padding: '30px',
                borderRadius: '16px',
                marginBottom: '40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
            }}>
                <p style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'rgba(255, 255, 255, 0.9)',
                    whiteSpace: 'pre-line',
                    fontFamily: language === 'vi' ? 'Inter, sans-serif' : 'var(--font-poppins), sans-serif',
                }}>
                    {renderDescription(description)}
                </p>

                <style jsx>{`
                    p strong {
                        font-weight: 800;
                        color: rgba(255, 255, 255, 1);
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                    }
                `}</style>
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
                GROUP PHOTO
            </h2>

            {/* Group shot */}
            <div style={{
                marginBottom: '1rem',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
            }} >
                <Image
                    src={tournament.record.groupPhoto}
                    alt="Group Photo"
                    width={3000}
                    height={2000}
                    className="rounded-lg border border-white/20 object-cover"
                ></Image>
            </div>

            <h3 style={{
                fontSize: '2rem',
                fontWeight: 600,
                marginBottom: '1rem',
                textAlign: 'center'
            }}>
                PODIUM
            </h3>

            <div style={{
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                position: 'relative',
            }}>

                <button
                    onClick={podiumPrev}
                    className="text-white text-4xl opacity-70 hover:opacity-100 select-none"
                >
                    &#10094;
                </button>

                <div className='max-w-3xl w-full'>
                    <Image
                        src={podiumImages[podiumIndex]}
                        alt={`Podium Position ${podiumIndex + 1}`}
                        width={1200}
                        height={600}
                        className="rounded-lg border border-white/20 object-cover aspect-[4/3]"
                    ></Image>
                </div>

                <button
                    onClick={podiumNext}
                    className="text-white text-4xl opacity-70 hover:opacity-100 select-none"
                >
                    &#10095;
                </button>
            </div>

            <h2 style={{
                fontSize: '2rem',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '30px',
                textTransform: 'uppercase',
            }}>
                GALLERY
            </h2>

            {/**
             * TODO: Nesting div issue address later
             */}

            <Masonry
                breakpointCols={masonryBreakpoints}
                className="flex gap-2"
                columnClassName=""
            >
                {galleryImages[tournament.id]?.map((imageUrl, index) => (
                    <div
                        key={index}
                    >
                        <img decoding='async' loading='lazy' src={imageUrl} alt={`Gallery ${index + 1}`} onClick={() => setSelectedIndex(index)}
                            style={{
                                width: '100%',
                                aspectRatio: '4 / 3',
                                marginBottom: '15px',
                                borderRadius: '8px',
                                objectFit: 'cover',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                            }}
                        />

                        {/* <Image
                            src={imageUrl}
                            loading='lazy'
                            decoding='async'
                            alt={`Gallery ${index + 1}`}
                            onClick={() => setSelectedIndex(index)}
                            sizes="(max-width: 600px) 100vw, 33vw"
                        ></Image> */}
                    </div>
                ))}
            </Masonry>

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                        onClick={close}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >

                        <button
                            onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                prev();
                            }}

                            className='absolute left-4 text-white text-4xl opacity-70 hover:opacity-100 select-none'
                        >
                            &#10094;
                        </button>

                        <motion.img src={zoomImages[tournament.id][selectedIndex]}
                            className='max-h-[90vh] max-w-[90vw] object-contain rounded-lg'
                            loading='lazy'
                            decoding='async'
                            onClick={(e: React.MouseEvent) => e.stopPropagation()}
                            initial={{ scale: 1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                        />

                        <button
                            onClick={(e: React.MouseEvent) => {
                                e.stopPropagation();
                                next();
                            }}

                            className='absolute right-5 text-white text-4xl opacity-70 hover:opacity-100 select-none'
                        >
                            &#10095;
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}