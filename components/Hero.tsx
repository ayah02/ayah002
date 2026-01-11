
import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';
import { Language } from '../types';
import TrailerModal from './TrailerModal';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const { siteSettings } = useData();
  const [showTrailer, setShowTrailer] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number }>({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(siteSettings.date) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          d: Math.floor(difference / (1000 * 60 * 60 * 24)),
          h: Math.floor((difference / (1000 * 60 * 60)) % 24),
          m: Math.floor((difference / 1000 / 60) % 60),
          s: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [siteSettings.date]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(235,0,40,0.12)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Theme Title - Min Badeet */}
        <div className="mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="inline-block text-ted-red font-black text-sm uppercase tracking-[0.5em] mb-4">
            {siteSettings.eventName[lang]} {lang === 'en' ? 'Presents' : 'يقدم'}
          </span>
          <div className="relative inline-block">
             <h2 className={`text-7xl md:text-[10rem] font-black leading-none tracking-tighter text-white uppercase italic ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {siteSettings.themeName[lang]}
            </h2>
            {/* Visual element representing the red compass star from the image */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 w-8 h-8 md:w-12 md:h-12 text-ted-red animate-pulse">
               <svg viewBox="0 0 100 100" fill="currentColor">
                 <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
               </svg>
            </div>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-medium text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed tracking-tight">
          {siteSettings.heroSubtitle[lang]}
        </h1>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
          <a
            href={siteSettings.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-12 py-5 bg-ted-red text-white font-black text-xl rounded-xl transition-all overflow-hidden shadow-2xl shadow-ted-red/40"
          >
            <span className="relative z-10">{lang === 'en' ? 'Get Tickets' : 'احصل على التذاكر'}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </a>
          <button 
            onClick={() => setShowTrailer(true)}
            className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white font-black text-xl rounded-xl border border-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            {lang === 'en' ? 'Watch Trailer' : 'شاهد الإعلان'}
          </button>
        </div>

        <div className="flex justify-center gap-8 md:gap-16 border-t border-white/5 pt-12">
          {[
            { label: lang === 'en' ? 'Days' : 'أيام', val: timeLeft.d },
            { label: lang === 'en' ? 'Hours' : 'ساعات', val: timeLeft.h },
            { label: lang === 'en' ? 'Mins' : 'دقائق', val: timeLeft.m },
            { label: lang === 'en' ? 'Secs' : 'ثواني', val: timeLeft.s },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-white tracking-tighter">{String(item.val).padStart(2, '0')}</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-ted-red font-black mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* University Pillars Graphic - Inspired by the provided image */}
      <div className="absolute bottom-0 right-0 w-1/3 h-64 opacity-10 pointer-events-none flex items-end justify-end gap-2 px-12">
         <div className="w-4 h-full bg-orange-500 rounded-t-full"></div>
         <div className="w-4 h-[80%] bg-orange-500 rounded-t-full"></div>
         <div className="w-4 h-[60%] bg-orange-500 rounded-t-full"></div>
         <div className="w-4 h-[70%] bg-white rounded-t-full"></div>
         <div className="w-4 h-[85%] bg-white rounded-t-full"></div>
         <div className="w-4 h-[95%] bg-white rounded-t-full"></div>
      </div>

      <TrailerModal 
        isOpen={showTrailer} 
        onClose={() => setShowTrailer(false)} 
        videoUrl={siteSettings.trailerUrl} 
      />
    </section>
  );
};

export default Hero;
