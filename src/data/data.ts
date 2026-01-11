export type Tournament = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  videoHolder: string;
  mainImage: string;
  galleryImages: string[];
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
    title: "TITLE XD",
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget dolor quam. Suspendisse sit amet euismod quam. Donec venenatis euismod fermentum. Duis tincidunt consequat leo, nec dignissim tortor vehicula sed. Sed sed aliquet massa. Aenean finibus aliquam eros, viverra tincidu",
    fullDescription:
      "The MSOC Championship is our premier gaming tournament featuring top players and exciting matches. With a competitive prize pool and thrilling gameplay, this tournament showcases the best of competitive gaming.",
    videoHolder: "https://www.youtube.com/embed/Rj9NVKV2Ozk?si=cPVtWG1xNupR9Z7z",
    mainImage: "/tournaments/logo MSOC.png",
    galleryImages: [
      "https://picsum.photos/400/400?random=1",
      "https://picsum.photos/800/450?random=3",
      "https://picsum.photos/400/600?random=4",
      "https://picsum.photos/450/800?random=5",
      "https://picsum.photos/350/900?random=7",
      "https://picsum.photos/450/800?random=6",
    ],
  },
];

export const staffMembers: Staff[] = [
  {
    id: "1",
    name: "Rimuru",
    role: "Tournament Director",
    avatarUrl: "/avatar-1.png",
    bannerUrl: "/banner-2.png"
  },
  {
    id: "2",
    name: "Rimuru",
    role: "Event Coordinator",
    avatarUrl: "/avatar-2.png",
    bannerUrl: "/banner-2.png"
  },
  {
    id: "3",
    name: "Rimuru",
    role: "Technical Support Lead",
    avatarUrl: "/avatar-3.png",
    bannerUrl: "/banner-2.png"
  },
  {
    id: "4",
    name: "Rimuru",
    role: "Marketing Manager",
    avatarUrl: "/avatar-1.png",
    bannerUrl: "/banner-2.png"
  },
  {
    id: "5",
    name: "Rimuru",
    role: "Game Administrator",
    avatarUrl: "/avatar-2.png",
    bannerUrl: "/banner-2.png"
  },
  {
    id: "6",
    name: "Rimuru",
    role: "Community Manager",
    avatarUrl: "/avatar-3.png",
    bannerUrl: "/banner-2.png"
  },
  {
    id: "7",
    name: "Rimuru",
    role: "Broadcast Director",
    avatarUrl: "/avatar-1.png",
    bannerUrl: "/banner-2.png"
  },
  {
    id: "8",
    name: "Rimuru",
    role: "Player Relations",
    avatarUrl: "/avatar-2.png",
    bannerUrl: "/banner-2.png"
  },
  {
    id: "9",
    name: "Hotome Shiki",
    role: "Player Relations",
    avatarUrl: "/avatar-3.png",
    bannerUrl: "/banner-2.png"
  },
];

export const xaxalele = {
  boxGlitch: "/Box_glitch_1.png",
}
