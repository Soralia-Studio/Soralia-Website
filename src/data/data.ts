export type Tournament = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  videoHolder: string;
  mainImage: string;
  galleryImagesPath: string;
  record: {
    groupPhoto: string;
    topThreePhoto: string[]; 
  }
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
    title: "MSOC",
    shortDescription:
      "MSOC (MAIMAI STUDENT OPEN CUP) – The Student Showdown! Hosted at Dream Games Tan Phu, students represent their schools in a unique 1v1 (Team up 4) stamina format to claim the championship",
    fullDescription:
      "Organized by Area 57 Studio at Dream Games Tan Phu, MSOC is a dedicated rhythm game tournament for students. Featuring a unique 1v1 (Team up 4) stamina format, the event successfully brought together competitive teams representing various high schools and universities for an intense showdown.\n\nTOP 3 WINNERS\n\n• Champion: Team GLHF (SGU, NTTU, Pham Phu Thu HS, TDTU)\n• Runner-up: Team maimai.py (UIT)\n• 3rd Place: Team SoiCoDoc (HCMUTE, VHU, VSVC)",
    videoHolder: "https://www.youtube.com/embed/Rj9NVKV2Ozk?si=cPVtWG1xNupR9Z7z",
    mainImage: "/tournaments/MSOC/logo MSOC.png",
    galleryImagesPath: "/tournaments/MSOC/gallery",
    record: {
      groupPhoto: '/tournaments/MSOC/records/group.jpg',
      topThreePhoto: [
        '/tournaments/MSOC/records/top1.jpg',
        '/tournaments/MSOC/records/top2.jpg',
        '/tournaments/MSOC/records/top3.jpg',
      ]
    }
  }
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
    name: "Kino",
    role: "Staff",
    avatarUrl: "/Staff/Avatar/kino.png",
    bannerUrl: "/Staff/Banner/kino.jpg"
  },
  {
    id: "16",
    name: "Nguwuyn",
    role: "Poller",
    avatarUrl: "/Staff/Avatar/nguwuyn.png",
    bannerUrl: "/Staff/Banner/nguwuyn.png"
  }
];

export const xaxalele = {
  boxGlitch: "/Box_glitch_1.png",
}
