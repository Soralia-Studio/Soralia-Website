import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { tournaments } from '@/data/data';
import { notFound } from 'next/navigation';

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
    <div className="container mx-auto">
      <div className="mb-6">
        <Link href="/tournaments" className="text-blue-900 hover:underline flex items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Tournaments
        </Link>
      </div>

      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={tournament.mainImage}
            alt={tournament.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">{tournament.title}</h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">{tournament.fullDescription}</p>

          <h2 className="text-2xl font-bold text-blue-900 mb-4">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tournament.galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
