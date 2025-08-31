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
    title: "Summer Championship 2025",
    shortDescription:
      "Annual summer gaming tournament with prizes up to $10,000",
    fullDescription:
      "The Summer Championship 2025 is our flagship annual gaming tournament featuring multiple games across different genres. With a prize pool of $10,000, this tournament attracts the best players from around the region. The event spans over three days with preliminary rounds, semi-finals, and finals. Spectators can enjoy food vendors, gaming merchandise booths, and meet-and-greet sessions with professional players.",
    mainImage: "/placeholder-tournament-1.jpg",
    galleryImages: [
      "/gallery-1-1.jpg",
      "/gallery-1-2.jpg",
      "/gallery-1-3.jpg",
      "/gallery-1-4.jpg",
      "/gallery-1-5.jpg",
      "/gallery-1-6.jpg",
    ],
  },
  {
    id: "2",
    title: "Winter Gaming Festival",
    shortDescription:
      "Cozy indoor tournament with hot chocolate and fierce competition",
    fullDescription:
      "The Winter Gaming Festival is our seasonal indoor tournament designed to bring warmth to the cold months. Players compete in a friendly yet competitive environment with various gaming stations set up throughout the venue. The tournament features both team-based and individual competitions, with special events like cosplay contests and gaming trivia. Our signature hot chocolate bar and comfort food options make this a truly cozy gaming experience.",
    mainImage: "/placeholder-tournament-2.jpg",
    galleryImages: [
      "/gallery-2-1.jpg",
      "/gallery-2-2.jpg",
      "/gallery-2-3.jpg",
      "/gallery-2-4.jpg",
      "/gallery-2-5.jpg",
      "/gallery-2-6.jpg",
    ],
  },
  {
    id: "3",
    title: "Indie Showcase Challenge",
    shortDescription:
      "Highlighting the best indie games with competitive gameplay",
    fullDescription:
      "The Indie Showcase Challenge focuses on celebrating independent game developers and their creations. This tournament features exclusively indie games across multiple platforms. Participants get to compete in newly released and upcoming indie titles, with the developers often in attendance to gather feedback and interact with players. This event helps bridge the gap between indie developers and gaming communities, offering exposure for innovative games and exciting competition for players.",
    mainImage: "/placeholder-tournament-3.jpg",
    galleryImages: [
      "/gallery-3-1.jpg",
      "/gallery-3-2.jpg",
      "/gallery-3-3.jpg",
      "/gallery-3-4.jpg",
      "/gallery-3-5.jpg",
      "/gallery-3-6.jpg",
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
