
import React from 'react';
import { Language, SiteSettings } from '../types';

interface ShareCardProps {
  name: string;
  lang: Language;
  settings: SiteSettings;
}

const ShareCard: React.FC<ShareCardProps> = ({ name, lang, settings }) => {
  return (
    <div id="registration-card" className="relative w-full aspect-[1.91/1] bg-black border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between p-8 md:p-12 group">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-ted-red/5 blur-[120px] -z-10"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl -z-10"></div>

      {/* Top Section: Branding */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col items-start leading-none">
          <div className="flex items-baseline gap-1">
            <span className="text-ted-red font-black text-3xl tracking-tighter">TED</span>
            <span className="text-ted-red font-bold text-xl -ml-0.5 transform -translate-y-[2px]">X</span>
          </div>
          <span className="text-white/60 font-bold text-[10px] tracking-[0.3em] uppercase mt-1">
            {settings.eventName.en.replace('TEDx ', '')}
          </span>
        </div>
        
        {/* Min Badeet Star Logo */}
        <div className="text-ted-red w-12 h-12">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
          </svg>
        </div>
      </div>

      {/* Center Section: The Message */}
      <div className="flex-grow flex flex-col justify-center py-4">
        <p className="text-ted-red font-black text-xs uppercase tracking-[0.4em] mb-4">
          {lang === 'en' ? 'Official Attendee' : 'مشارك رسمي'}
        </p>
        <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight overflow-hidden text-ellipsis whitespace-nowrap">
          {name || (lang === 'en' ? 'Your Name' : 'اسمك هنا')}
        </h3>
        <p className="text-white/40 text-lg font-medium italic">
          {lang === 'en' ? 'Joining the conversation at' : 'ينضم إلى الحوار في'} <span className="text-white">Min Badeet</span>
        </p>
      </div>

      {/* Bottom Section: Date & Location */}
      <div className="flex justify-between items-end border-t border-white/10 pt-6">
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 space-y-1">
          <p>{new Date(settings.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'ar-SA', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          <p>{settings.location[lang]}</p>
        </div>
        <div className="flex items-end gap-1 h-6">
          <div className="w-1 h-full bg-orange-500 rounded-full"></div>
          <div className="w-1 h-[70%] bg-orange-500 rounded-full"></div>
          <div className="w-1 h-[90%] bg-white rounded-full"></div>
          <div className="w-1 h-[40%] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ShareCard;
