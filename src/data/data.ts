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
    name: "Hidr0",
    role: "Team Leader",
    avatarUrl: "/Staff/Avatar/hidro.png",
    bannerUrl: "/Staff/Banner/hidro.gif"
  },
  {
    id: "2",
    name: "Flandoruu",
    role: "Designer",
    avatarUrl: "/Staff/Avatar/flandoruu.png",
    bannerUrl: "/Staff/Banner/flandoruu.png"
  },
  {
    id: "3",
    name: "NepChon",
    role: "Designer",
    avatarUrl: "/Staff/Avatar/nepchon.png",
    bannerUrl: "/Staff/Banner/nepchon.png"
  },
  {
    id: "4",
    name: "Hourai",
    role: "Artist",
    avatarUrl: "/Staff/Avatar/hourai.png",
    bannerUrl: "/Staff/Banner/hourai.png"
  },
  {
    id: "5",
    name: "BrianDM",
    role: "Artist",
    avatarUrl: "/Staff/Avatar/brian.png",
    bannerUrl: "/Staff/Banner/brian.jpg"
  },
  {
    id: "6",
    name: "Shiki",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/shiki.jpg",
    bannerUrl: "/Staff/Banner/shiki.jpg"
  },
  {
    id: "7",
    name: "Lotus",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/lotus.png",
    bannerUrl: "/Staff/Banner/lotus.png"
  },
  {
    id: "8",
    name: "Necros1s",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/necros1s.jpg",
    bannerUrl: "/Staff/Banner/necros1s.png"
  },
  {
    id: "9",
    name: "giabao06",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/giabao06.png",
    bannerUrl: "/Staff/Banner/giabao06.png"
  },
  {
    id: "10",
    name: "Foxeiz",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/foxeiz.jpg",
    bannerUrl: "/Staff/Banner/foxeiz.jpg"
  },
  {
    id: "11",
    name: "Shard",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/shard.jpg",
    bannerUrl: "/Staff/Banner/shard.jpg"
  },
  {
    id: "12",
    name: "Swyrin",
    role: "Adviser",
    avatarUrl: "/Staff/Avatar/swyrin.jpg",
    bannerUrl: "/Staff/Banner/swyrin.png"
  },
  {
    id: "13",
    name: "AkaneOSK",
    role: "MC",
    avatarUrl: "/Staff/Avatar/akaneosk.png",
    bannerUrl: "/Staff/Banner/akaneosk.png"
  },
  {
    id: "14",
    name: "- Fubukiii",
    role: "MC",
    avatarUrl: "/Staff/Avatar/fbk.png",
    bannerUrl: "/Staff/Banner/fbk.gif"
  },
  {
    id: "15",
    name: "Hyu",
    role: "Videographer",
    avatarUrl: "/Staff/Avatar/hyu.png",
    bannerUrl: "/Staff/Banner/hyu.png"
  },
  {
    id: "16",
    name: "Kino",
    role: "Staff",
    avatarUrl: "/Staff/Avatar/kino.png",
    bannerUrl: "/Staff/Banner/kino.jpg"
  },
  {
    id: "17",
    name: "Nguwuyn",
    role: "Poller",
    avatarUrl: "/Staff/Avatar/nguwuyn.png",
    bannerUrl: "/Staff/Banner/nguwuyn.png"
  }
];

export const xaxalele = {
  boxGlitch: "/Box_glitch_1.png",
}
