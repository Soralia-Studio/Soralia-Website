export type Tournament = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  galleryImages: string[];
};

export type Staff = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
};

export const tournaments: Tournament[] = [
  {
    id: "1",
    title: "TITLE XD",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dolor quam. Suspendisse sit amet euismod quam. Donec venenatis euismod fermentum. Duis tincidunt consequat leo, nec dignissim tortor vehicula sed. Sed sed aliquet massa. Aenean finibus aliquam eros, viverra tincidu",
    fullDescription:
      "The MSOC Championship is our premier gaming tournament featuring top players and exciting matches. With a competitive prize pool and thrilling gameplay, this tournament showcases the best of competitive gaming.",
    mainImage: "/tournaments/logo MSOC.png",
    galleryImages: [
      "/gallery-1-1.jpg",
      "/gallery-1-2.jpg",
      "/gallery-1-3.jpg",
      "/gallery-1-4.jpg",
      "/gallery-1-5.jpg",
      "/gallery-1-6.jpg",
    ],
  },
];

export const staffMembers: Staff[] = [
  {
    id: "1",
    name: "Alex Chen",
    role: "Tournament Director",
    avatarUrl: "/avatar-1.jpg",
  },
  {
    id: "2",
    name: "Maria Rodriguez",
    role: "Event Coordinator",
    avatarUrl: "/avatar-2.jpg",
  },
  {
    id: "3",
    name: "James Wilson",
    role: "Technical Support Lead",
    avatarUrl: "/avatar-3.jpg",
  },
  {
    id: "4",
    name: "Sophia Kim",
    role: "Marketing Manager",
    avatarUrl: "/avatar-4.jpg",
  },
  {
    id: "5",
    name: "David Patel",
    role: "Game Administrator",
    avatarUrl: "/avatar-5.jpg",
  },
  {
    id: "6",
    name: "Emma Johnson",
    role: "Community Manager",
    avatarUrl: "/avatar-6.jpg",
  },
  {
    id: "7",
    name: "Michael Zhang",
    role: "Broadcast Director",
    avatarUrl: "/avatar-7.jpg",
  },
  {
    id: "8",
    name: "Olivia Thompson",
    role: "Player Relations",
    avatarUrl: "/avatar-8.jpg",
  },
];
