import { Language } from "@/context/LanguageContext";

/**
 * Translation Keys
 *
 * Centralized translation dictionary for English and Vietnamese
 */
export type TranslationKey =
  // Navigation
  | "nav.home"
  | "nav.tournaments"
  | "nav.staff"
  // Home Page
  | "home.title"
  | "home.subtitle"
  | "home.description"
  // Tournaments Page
  | "tournaments.title"
  | "tournaments.subtitle"
  // Staff Page
  | "staff.title"
  | "staff.subtitle"
  // Tournament Detail
  | "tournament.details"
  | "tournament.gallery"
  | "tournament.records"
  | "tournament.topThree"
  // Social Media
  | "social.facebook"
  | "social.youtube"
  | "social.followUs"
  // Common
  | "common.loading"
  | "common.error"
  | "common.viewMore"
  | "common.backToHome";

/**
 * Translations Object
 */
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "HOME",
    "nav.tournaments": "TOURNAMENTS",
    "nav.staff": "STAFF",

    // Home Page
    "home.title": "Welcome to Soralia Studio",
    "home.subtitle": "Creating Amazing Experiences",
    "home.description":
      "We organize rhythm game tournaments and creative events",

    // Tournaments Page
    "tournaments.title": "Tournaments",
    "tournaments.subtitle": "Our Gaming Events",

    // Staff Page
    "staff.title": "Our Team",
    "staff.subtitle": "Meet the Soralia Studio Team",

    // Tournament Detail
    "tournament.details": "Details",
    "tournament.gallery": "Gallery",
    "tournament.records": "Records",
    "tournament.topThree": "Top 3 Winners",

    // Social Media
    "social.facebook": "Facebook",
    "social.youtube": "YouTube",
    "social.followUs": "Follow Us",

    // Common
    "common.loading": "Loading...",
    "common.error": "An error occurred",
    "common.viewMore": "View More",
    "common.backToHome": "Back to Home",
  },
  vi: {
    // Navigation
    "nav.home": "TRANG CHỦ",
    "nav.tournaments": "GIẢI ĐẤU",
    "nav.staff": "ĐỘI NGŨ",

    // Home Page
    "home.title": "Chào mừng đến Soralia Studio",
    "home.subtitle": "Tạo nên những trải nghiệm tuyệt vời",
    "home.description":
      "Chúng tôi tổ chức các giải đấu rhythm game và sự kiện sáng tạo",

    // Tournaments Page
    "tournaments.title": "Giải Đấu",
    "tournaments.subtitle": "Sự kiện Game của chúng tôi",

    // Staff Page
    "staff.title": "Đội Ngũ",
    "staff.subtitle": "Gặp gỡ đội ngũ Soralia Studio",

    // Tournament Detail
    "tournament.details": "Chi tiết",
    "tournament.gallery": "Thư viện ảnh",
    "tournament.records": "Thành tích",
    "tournament.topThree": "Top 3 Chiến thắng",

    // Social Media
    "social.facebook": "Facebook",
    "social.youtube": "YouTube",
    "social.followUs": "Theo dõi chúng tôi",

    // Common
    "common.loading": "Đang tải...",
    "common.error": "Đã xảy ra lỗi",
    "common.viewMore": "Xem thêm",
    "common.backToHome": "Về Trang chủ",
  },
};

/**
 * Get translation for a key in specific language
 *
 * @param language - Target language
 * @param key - Translation key
 * @returns Translated string or key if not found
 */
export const getTranslation = (language: Language, key: string): string => {
  return translations[language]?.[key] || key;
};
