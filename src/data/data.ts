export type Tournament = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  galleryImages: string[];
  videoUrl?: string;
};

export type Staff = {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  bannerUrl: string;
};

export const tournaments: Tournament[] = [
  {
    id: "1",
    title: "MSOC Tournament",
    shortDescription:
      "MSOC (MAIMAI STUDENT OPEN CUP) – The Student Showdown! Hosted at Dream Games Tan Phu, students represent their schools in a unique 1v1 (Team up 4) stamina format to claim the championship",
    fullDescription:
      "Organized by Area 57 Studio at Dream Games Tan Phu, MSOC is a dedicated rhythm game tournament for students. Featuring a unique 1v1 (Team up 4) stamina format, the event successfully brought together competitive teams representing various high schools and universities for an intense showdown.\n\nTOP 3 WINNERS\n\n• Champion: Team GLHF (SGU, NTTU, Pham Phu Thu HS, TDTU)\n• Runner-up: Team maimai.py (UIT)\n• 3rd Place: Team SoiCoDoc (HCMUTE, VHU, VSVC)",
    videoUrl: "https://www.youtube.com/watch?v=Rj9NVKV2Ozk",
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
    name: "Rimuru",
    role: "Tournament Director",
    avatarUrl: "/avatar-1.png",
    bannerUrl: "/banner-2.png",
  },
  {
    id: "2",
    name: "Rimuru",
    role: "Event Coordinator",
    avatarUrl: "/avatar-2.png",
    bannerUrl: "/banner-2.png",
  },
  {
    id: "3",
    name: "Rimuru",
    role: "Technical Support Lead",
    avatarUrl: "/avatar-3.png",
    bannerUrl: "/banner-2.png",
  },
  {
    id: "4",
    name: "Rimuru",
    role: "Marketing Manager",
    avatarUrl: "/avatar-1.png",
    bannerUrl: "/banner-2.png",
  },
  {
    id: "5",
    name: "Rimuru",
    role: "Game Administrator",
    avatarUrl: "/avatar-2.png",
    bannerUrl: "/banner-2.png",
  },
  {
    id: "6",
    name: "Rimuru",
    role: "Community Manager",
    avatarUrl: "/avatar-3.png",
    bannerUrl: "/banner-2.png",
  },
  {
    id: "7",
    name: "Rimuru",
    role: "Broadcast Director",
    avatarUrl: "/avatar-1.png",
    bannerUrl: "/banner-2.png",
  },
  {
    id: "8",
    name: "Rimuru",
    role: "Player Relations",
    avatarUrl: "/avatar-2.png",
    bannerUrl: "/banner-2.png",
  },
  {
    id: "9",
    name: "Hotome Shiki",
    role: "Player Relations",
    avatarUrl: "/avatar-3.png",
    bannerUrl: "/banner-2.png",
  },
];

export const xaxalele = {
  boxGlitch: "/Box_glitch_1.png",
};
