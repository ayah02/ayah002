
import React, { useState } from 'react';
import Hero from '../components/Hero.tsx';
import { Language, Speaker, Sponsor } from '../types.ts';
import { useData } from '../context/DataContext.tsx';
import { Link } from 'react-router-dom';
import SpeakerModal from '../components/SpeakerModal.tsx';
import PartnerModal from '../components/PartnerModal.tsx';

const Home: React.FC<{ lang: Language }> = ({ lang }) => {
  const { speakers, sponsors, siteSettings } = useData();
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [selectedPartner, setSelectedPartner] = useState<Sponsor | null>(null);
  
  return (
    <div>
      {siteSettings.announcement && (siteSettings.announcement.en || siteSettings.announcement.ar) && (
        <div className="bg-ted-red py-3 px-6 text-center animate-in slide-in-from-top duration-700">
          <p className="text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            {siteSettings.announcement[lang]}
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          </p>
        </div>
      )}

      <Hero lang={lang} />

      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              {lang === 'en' ? 'What is ' : 'ما هو '}
              <span className="text-ted-red">TEDx?</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              {lang === 'en' 
                ? 'In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience.' 
                : 'بروح الأفكار التي تستحق الانتشار، تيدكس هو برنامج فعاليات محلية منظمة ذاتياً تجمع الناس لمشاركة تجربة شبيهة بتجربة تيد.'}
            </p>
            <Link to="/about-tedx" className="inline-flex items-center gap-2 text-ted-red font-bold hover:gap-4 transition-all">
              {lang === 'en' ? 'Learn more' : 'اقرأ المزيد'} 
              <span className={lang === 'ar' ? 'rotate-180' : ''}>→</span>
            </Link>
          </div>
          <div className="relative">
             <img src="https://picsum.photos/seed/tedxstage/800/600" alt="Stage" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-ted-red/10" />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ted-red/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
              {lang === 'en' ? 'Our Speakers' : 'متحدثونا'}
            </h2>
            <Link to="/speakers" className="text-white/60 hover:text-white border-b border-white/20 pb-1">
              {lang === 'en' ? 'View All' : 'الكل'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.slice(0, 3).map((speaker) => (
              <div 
                key={speaker.id} 
                onClick={() => setSelectedSpeaker(speaker)}
                className="group relative overflow-hidden rounded-xl bg-zinc-900 aspect-[4/5] cursor-pointer"
              >
                <img 
                  src={speaker.photo} 
                  alt={speaker.name[lang]} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute bottom-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-ted-red font-bold text-sm uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{speaker.role[lang]}</p>
                  <h3 className="text-2xl font-black text-white mb-2">{speaker.name[lang]}</h3>
                  <p className="text-white/60 text-sm line-clamp-1 group-hover:line-clamp-none transition-all">{speaker.talkTitle[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/10 bg-zinc-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/40">{lang === 'en' ? 'Our Partners' : 'شركاؤنا'}</h2>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-scroll space-x-12 px-12 min-w-full items-center">
            {[...sponsors, ...sponsors].map((sponsor, idx) => (
              <div 
                key={`${sponsor.id}-${idx}`} 
                onClick={() => setSelectedPartner(sponsor)}
                className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group relative"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-16 w-auto object-contain transition-transform group-hover:scale-110" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-[10px] font-bold text-ted-red uppercase tracking-widest transition-opacity whitespace-nowrap">
                   {lang === 'en' ? 'Click for Info' : 'انقر للمعلومات'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SpeakerModal 
        speaker={selectedSpeaker} 
        onClose={() => setSelectedSpeaker(null)} 
        lang={lang} 
      />

      <PartnerModal 
        partner={selectedPartner}
        onClose={() => setSelectedPartner(null)}
        lang={lang}
      />
    </div>
  );
};

export default Home;
