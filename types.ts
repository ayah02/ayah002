
export type Language = 'en' | 'ar';

export interface Translation {
  en: string;
  ar: string;
}

export interface SiteSettings {
  eventName: Translation;
  themeName: Translation;
  heroTitle: Translation;
  heroSubtitle: Translation;
  date: string;
  location: Translation;
  lumaUrl: string;
  liveUrl: string;
  trailerUrl: string;
  volunteerUrl: string; 
  announcement: Translation | null;
  universityLogo: string;
  eventLogo: string;
  themeLogo: string;
  socialLinks: {
    twitter: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}

export interface Speaker {
  id: string;
  name: Translation;
  role: Translation;
  talkTitle: Translation;
  talkDescription: Translation;
  bio: Translation;
  photo: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface ScheduleItem {
  id: string;
  startTime: string;
  endTime: string;
  title: Translation;
  speakerId?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Platinum' | 'Gold' | 'Silver' | 'Partner';
  description?: Translation;
  logo: string;
  url: string;
}

export interface TeamMember {
  id: string;
  name: Translation;
  role: Translation;
  photo: string;
  team: Translation;
}

export interface FAQItem {
  id: string;
  question: Translation;
  answer: Translation;
}

export interface VolunteerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  appliedAt: string;
}
