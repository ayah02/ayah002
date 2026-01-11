
import { SiteSettings, Speaker, ScheduleItem, Sponsor, TeamMember, FAQItem } from './types';

export const SITE_SETTINGS: SiteSettings = {
  eventName: { en: "TEDx YU Khobar", ar: "تيدكس جامعة اليمامة - الخبر" },
  themeName: { en: "Min Badeet", ar: "من بدأت" },
  heroTitle: { en: "Where it all began", ar: "من حيث بدأت" },
  heroSubtitle: { 
    en: "Exploring origins, foundations, and the spark of creation at Al Yamamah University Khobar.", 
    ar: "استكشاف الأصول والأسس وشرارة الإبداع في جامعة اليمامة بالخبر." 
  },
  date: "2025-11-20T10:00:00",
  location: { en: "Al Yamamah University, Khobar Campus", ar: "جامعة اليمامة، فرع الخبر" },
  lumaUrl: "https://lu.ma/tedxyukhobar",
  liveUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  volunteerUrl: "https://forms.gle/placeholder-volunteer-form",
  announcement: { 
    en: "Tickets for 'Min Badeet' are now live!", 
    ar: "تذاكر 'من بدأت' متاحة الآن!" 
  },
  universityLogo: "https://raw.githubusercontent.com/tedx-yu/assets/main/yu-logo-black.png", 
  eventLogo: "https://raw.githubusercontent.com/tedx-yu/assets/main/tedx-yu-khobar.png",
  themeLogo: "https://raw.githubusercontent.com/tedx-yu/assets/main/min-badeet-calligraphy.png",
  socialLinks: {
    twitter: "https://twitter.com/tedxyukhobar",
    instagram: "https://instagram.com/tedxyukhobar",
    linkedin: "https://linkedin.com/company/tedxyukhobar",
    youtube: "https://youtube.com/@tedxyukhobar"
  }
};

export const SPEAKERS: Speaker[] = [
  {
    id: "1",
    name: { en: "Dr. Sarah Al-Faisal", ar: "د. سارة الفيصل" },
    role: { en: "AI Ethics Researcher", ar: "باحثة في أخلاقيات الذكاء الاصطناعي" },
    talkTitle: { en: "The Soul in the Machine", ar: "الروح في الآلة" },
    talkDescription: {
      en: "This talk delves into the philosophical implications of artificial consciousness. Can a machine truly have a 'soul' or is it just a complex mirror of our own biases?",
      ar: "تتعمق هذه الكلمة في التداعيات الفلسفية للوعي الاصطناعي. هل يمكن للآلة أن تمتلك 'روحاً' حقاً أم أنها مجرد مرآة معقدة لانحيازاتنا الخاصة؟"
    },
    bio: { 
      en: "Dr. Sarah has spent a decade exploring how artificial intelligence impacts human culture.", 
      ar: "قضت د. سارة عقدًا من الزمن في استكشاف كيفية تأثير الذكاء الاصطناعي على الثقافة الإنسانية." 
    },
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: "2",
    name: { en: "Khalid Mansour", ar: "خالد منصور" },
    role: { en: "Architect & Urbanist", ar: "مهندس معماري وعمراني" },
    talkTitle: { en: "Cities of Tomorrow", ar: "مدن الغد" },
    talkDescription: {
      en: "Riyadh and Khobar are transforming. Khalid presents a vision where architecture isn't just about buildings, but about breathing ecosystems.",
      ar: "الرياض والخبر في تحول مستمر. يقدم خالد رؤية حيث لا تقتصر العمارة على المباني فحسب، بل على الأنظمة البيئية الحية."
    },
    bio: { 
      en: "Khalid is pioneering sustainable urban development in the heart of the Eastern Province.", 
      ar: "خالد رائد في التطوير العمراني المستدام في قلب المنطقة الشرقية." 
    },
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
    socials: { instagram: "#" }
  }
];

export const SCHEDULE: ScheduleItem[] = [
  { id: "1", startTime: "10:00", endTime: "11:00", title: { en: "Arrival & Min Badeet Experience", ar: "الوصول وتجربة من بدأت" } },
  { id: "2", startTime: "11:00", endTime: "11:30", title: { en: "Opening: Where it Began", ar: "الافتتاح: من حيث بدأنا" } }
];

export const SPONSORS: Sponsor[] = [
  { 
    id: "s1", 
    name: "Al Yamamah University", 
    tier: "Platinum", 
    logo: "https://picsum.photos/seed/yu/200/100", 
    url: "#",
    description: {
      en: "Our host and primary partner in fostering innovation.",
      ar: "مضيفنا وشريكنا الأساسي في تعزيز الابتكار."
    }
  }
];

export const TEAM: TeamMember[] = [
  { id: "t1", name: { en: "Faisal Al-Majid", ar: "فيصل الماجد" }, role: { en: "Lead Organizer", ar: "المنظم الرئيسي" }, team: { en: "Organizing Team", ar: "فريق التنظيم" }, photo: "https://i.pravatar.cc/300?u=t1" },
  { id: "t2", name: { en: "Reem Khalid", ar: "ريم خالد" }, role: { en: "Co-Curator", ar: "منسق مشارك" }, team: { en: "Organizing Team", ar: "فريق التنظيم" }, photo: "https://i.pravatar.cc/300?u=t2" },
  { id: "t3", name: { en: "Omar Fahad", ar: "عمر فهد" }, role: { en: "Production Lead", ar: "رئيس الإنتاج" }, team: { en: "Production Team", ar: "فريق الإنتاج" }, photo: "https://i.pravatar.cc/300?u=t3" },
  { id: "t4", name: { en: "Sarah Ibrahim", ar: "سارة إبراهيم" }, role: { en: "Stage Manager", ar: "مديرة المسرح" }, team: { en: "Production Team", ar: "فريق الإنتاج" }, photo: "https://i.pravatar.cc/300?u=t4" },
  { id: "t5", name: { en: "Abdullah Ali", ar: "عبدالله علي" }, role: { en: "Sound Engineer", ar: "مهندس صوت" }, team: { en: "Production Team", ar: "فريق الإنتاج" }, photo: "https://i.pravatar.cc/300?u=t5" },
  { id: "t6", name: { en: "Noura Ahmed", ar: "نورة أحمد" }, role: { en: "Marketing Lead", ar: "رئيسة التسويق" }, team: { en: "Marketing Team", ar: "فريق التسويق" }, photo: "https://i.pravatar.cc/300?u=t6" },
  { id: "t7", name: { en: "Hamad Salem", ar: "حمد سالم" }, role: { en: "Social Media Manager", ar: "مدير التواصل الاجتماعي" }, team: { en: "Marketing Team", ar: "فريق التسويق" }, photo: "https://i.pravatar.cc/300?u=t7" },
  { id: "t8", name: { en: "Layan Mohammed", ar: "ليان محمد" }, role: { en: "Graphic Designer", ar: "مصممة جرافيك" }, team: { en: "Marketing Team", ar: "فريق التسويق" }, photo: "https://i.pravatar.cc/300?u=t8" },
  { id: "t9", name: { en: "Sultan Aziz", ar: "سلطان عزيز" }, role: { en: "Logistics Lead", ar: "رئيس الخدمات اللوجستية" }, team: { en: "Logistics Team", ar: "فريق الخدمات" }, photo: "https://i.pravatar.cc/300?u=t9" },
  { id: "t10", name: { en: "Hessah Ali", ar: "حصة علي" }, role: { en: "Volunteer Coordinator", ar: "منسقة المتطوعين" }, team: { en: "Logistics Team", ar: "فريق الخدمات" }, photo: "https://i.pravatar.cc/300?u=t10" }
];

export const FAQ: FAQItem[] = [
  { 
    id: "f1", 
    question: { en: "Is this event only for students?", ar: "هل هذه الفعالية للطلاب فقط؟" }, 
    answer: { 
      en: "No, TEDx events are open to the general public and thinkers from all walks of life.", 
      ar: "لا، فعاليات تيدكس مفتوحة للجمهور العام والمفكرين من جميع مجالات الحياة." 
    } 
  }
];
