export type Tournament = {
  id: string;
  title: string;
  shortDescription: string;
  shortDescriptionVi: string;
  fullDescription: string;
  fullDescriptionVi: string;
  videoHolder: string;
  mainImage: string;
  galleryImagesPath: string;
  record: {
    groupPhoto: string;
    topThreePhoto: string[];
  };
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
    id: "MSOC",
    title: "MSOC Tournament",
    shortDescription:
      "MSOC (MAIMAI STUDENT OPEN CUP) – The Student Showdown! Hosted at Dream Games Tan Phu, students represent their schools in a unique 1v1 (Team up 4) stamina format to claim the championship",
    shortDescriptionVi:
      "MSOC (MAIMAI STUDENT OPEN CUP) – Giải đấu rhythm game dành cho sinh viên! Tổ chức tại Dream Games Tân Phú với format thi đấu độc đáo: 1v1 stamina (Team up 4), nơi các trường tranh tài giành ngôi vô địch.",
    fullDescription:
      "Curated by Area 57 Studio (now Soralia Studio) at Dream Games Tân Phú, MSOC stands as a purpose-built rhythm game tournament for students. Powered by a distinctive 1v1 stamina format (Team up 4), the event became a high-energy convergence point where elite teams from high schools and universities went head-to-head—testing endurance, precision, and team synergy in a truly electrifying showdown.\n\n**TOP 3 TEAMS**\n\n• **Champion: Team GLHF** (SGU, NTTU, Pham Phu Thu High School, TDTU)\n\n• **Runner-up: Team maimai.py** (UIT)\n\n• **3rd Place: Team SoiCoDoc** (HCMUTE, VHU, VSVC)\n\nMore than a competition, MSOC set the tempo for a growing student rhythm-game ecosystem—where **passion meets performance**, and every beat tells a story.",
    fullDescriptionVi:
      "Do Area 57 Studio (nay là Soralia Studio) tổ chức tại Dream Games Tân Phú, MSOC là giải đấu rhythm game được thiết kế riêng cho cộng đồng sinh viên. Với cơ chế thi đấu stamina 1v1 độc đáo (Team up 4), giải đấu đã trở thành sân chơi sôi động, quy tụ những đội tuyển xuất sắc từ các trường phổ thông và đại học—cùng thử sức qua độ bền, độ chính xác, và khả năng phối hợp đội hình trong những màn tranh tài đầy kịch tính.\n\n**TOP 3 ĐỘI XUẤT SẮC**\n\n• **Vô địch: Team GLHF** (SGU, NTTU, THPT Phạm Phú Thứ, TDTU)\n\n• **Á quân: Team maimai.py** (UIT)\n\n• **Hạng 3: Team SoiCoDoc** (HCMUTE, VHU, VSVC)\n\nMSOC không chỉ là một cuộc thi—đây là bước khởi đầu cho hệ sinh thái rhythm game sinh viên đang lớn mạnh. Nơi **đam mê hòa cùng thành tích**, và mỗi nhịp nhạc đều kể một câu chuyện riêng.",
    videoHolder:
      "https://www.youtube.com/embed/Rj9NVKV2Ozk?si=cPVtWG1xNupR9Z7z",
    mainImage: "/tournaments/MSOC/logo MSOC.png",
    galleryImagesPath: "/tournaments/MSOC/gallery",
    record: {
      groupPhoto: "/tournaments/MSOC/records/group.jpg",
      topThreePhoto: [
        "/tournaments/MSOC/records/top1.jpg",
        "/tournaments/MSOC/records/top2.jpg",
        "/tournaments/MSOC/records/top3.jpg",
      ],
    },
  },
];

export const staffMembers: Staff[] = [
  {
    id: "1",
    name: "Hidr0",
    role: "Team Leader",
    avatarUrl: "/Staff/Avatar/hidro.png",
    bannerUrl: "/Staff/Banner/hidro.gif",
  },
  {
    id: "2",
    name: "Flandoruu",
    role: "Designer",
    avatarUrl: "/Staff/Avatar/flandoruu.png",
    bannerUrl: "/Staff/Banner/flandoruu.png",
  },
  {
    id: "3",
    name: "NepChon",
    role: "Designer",
    avatarUrl: "/Staff/Avatar/nepchon.png",
    bannerUrl: "/Staff/Banner/nepchon.png",
  },
  {
    id: "4",
    name: "Hourai",
    role: "Artist",
    avatarUrl: "/Staff/Avatar/hourai.png",
    bannerUrl: "/Staff/Banner/hourai.png",
  },
  {
    id: "5",
    name: "BrianDM",
    role: "Artist",
    avatarUrl: "/Staff/Avatar/brian.png",
    bannerUrl: "/Staff/Banner/brian.jpg",
  },
  {
    id: "6",
    name: "Shiki",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/shiki.jpg",
    bannerUrl: "/Staff/Banner/shiki.jpg",
  },
  {
    id: "7",
    name: "Lotus",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/lotus.png",
    bannerUrl: "/Staff/Banner/lotus.png",
  },
  {
    id: "8",
    name: "Necros1s",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/necros1s.jpg",
    bannerUrl: "/Staff/Banner/necros1s.png",
  },
  {
    id: "9",
    name: "giabao06",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/giabao06.png",
    bannerUrl: "/Staff/Banner/giabao06.png",
  },
  {
    id: "10",
    name: "Foxeiz",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/foxeiz.jpg",
    bannerUrl: "/Staff/Banner/foxeiz.jpg",
  },
  {
    id: "11",
    name: "Shard",
    role: "Developer",
    avatarUrl: "/Staff/Avatar/shard.jpg",
    bannerUrl: "/Staff/Banner/shard.jpg",
  },
  {
    id: "12",
    name: "Swyrin",
    role: "Adviser",
    avatarUrl: "/Staff/Avatar/swyrin.jpg",
    bannerUrl: "/Staff/Banner/swyrin.png",
  },
  {
    id: "13",
    name: "AkaneOSK",
    role: "MC",
    avatarUrl: "/Staff/Avatar/akaneosk.png",
    bannerUrl: "/Staff/Banner/akaneosk.png",
  },
  {
    id: "14",
    name: "- Fubukiii",
    role: "MC",
    avatarUrl: "/Staff/Avatar/fbk.png",
    bannerUrl: "/Staff/Banner/fbk.gif",
  },
  {
    id: "15",
    name: "Kino",
    role: "Staff",
    avatarUrl: "/Staff/Avatar/kino.png",
    bannerUrl: "/Staff/Banner/kino.jpg",
  },
  {
    id: "16",
    name: "Nguwuyn",
    role: "Poller",
    avatarUrl: "/Staff/Avatar/nguwuyn.png",
    bannerUrl: "/Staff/Banner/nguwuyn.png",
  },
];

export const xaxalele = {
  boxGlitch: "/Box_glitch_1.png",
};

export const cafe = {
  image: "/cafe.jpg",
};

export const motd: string[] = [
  "This week is very special",
  "Cha m map",
  "Me may beo",
  "Tokai, Hey yo",
  "WHAT THE FUCK IS THE KILOMETERS 🦅",
];
