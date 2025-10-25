import React from "react";
import Image from "next/image";

type StaffCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  backgroundUrl?: string;
};

const StaffCard: React.FC<StaffCardProps> = ({
  name,
  role,
  avatarUrl,
  backgroundUrl = "/default-bg.jpg", // fallback background
}) => {
  return (
    <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Background image */}
      <div className="relative h-28 w-full">
        <Image
          src={backgroundUrl}
          alt="Background"
          fill
          className="object-cover brightness-75"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center px-5">
        {/* Avatar + Info */}
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="relative w-14 h-14 rounded-lg overflow-hidden border-2 border-white shadow-md">
            <Image
              src={avatarUrl}
              alt={`${name} avatar`}
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-white text-xl font-bold leading-tight">
              {name}
            </h3>
            <p className="text-gray-200 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffCard;
