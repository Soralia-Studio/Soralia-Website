import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  id?: string | number;
  title: string;
  description: string;
  imageUrl: string;
  linkHref?: string;
  imageSize?: {
    width: number;
    height: number;
  };
};

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  linkHref,
  imageSize = { width: 400, height: 250 },
}) => {
  const content = (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <div className="relative w-full" style={{ height: `${imageSize.height}px` }}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-grow">
        <h3 className="font-bold text-xl mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );

  if (linkHref) {
    return (
      <Link href={linkHref} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
};

export default Card;
