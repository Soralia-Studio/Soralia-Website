import React from 'react';
import Card from '@/components/Card';
import { tournaments } from '@/data/data';

export default function TournamentsPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Tournaments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tournaments.map((tournament) => (
          <Card
            key={tournament.id}
            id={tournament.id}
            title={tournament.title}
            description={tournament.shortDescription}
            imageUrl={tournament.mainImage}
            linkHref={`/tournaments/${tournament.id}`}
          />
        ))}
      </div>
    </div>
  );
}
