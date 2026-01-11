
import React, { useState } from 'react';
import { Language, Speaker } from '../types';
import { useData } from '../context/DataContext';
import SpeakerModal from '../components/SpeakerModal';

const Speakers: React.FC<{ lang: Language }> = ({ lang }) => {
  const { speakers } = useData();
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-20">
        <h1 className="text-6xl md:text-8xl font-black uppercase mb-6 tracking-tighter">
          {lang === 'en' ? 'Meet the' : 'تعرف على'} <span className="text-ted-red">Speakers</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl">
          {lang === 'en' ? 'Dynamic voices and innovative minds ready to challenge the status quo.' : 'أصوات ديناميكية وعقول مبتكرة مستعدة لتحدي الوضع الراهن.'}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {speakers.map((speaker) => (
          <div 
            key={speaker.id} 
            onClick={() => setSelectedSpeaker(speaker)}
            className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-ted-red/30 transition-all group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={speaker.photo} alt={speaker.name[lang]} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
            </div>
            <div className="p-8">
              <span className="text-ted-red font-bold text-xs uppercase tracking-widest">{speaker.role[lang]}</span>
              <h3 className="text-2xl font-black text-white mt-2 mb-4">{speaker.name[lang]}</h3>
              <div className="h-1 w-12 bg-ted-red mb-6 transition-all group-hover:w-24"></div>
              <p className="text-white/70 mb-6 italic line-clamp-2">"{speaker.talkTitle[lang]}"</p>
              
              <button className="text-white/40 group-hover:text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                {lang === 'en' ? 'Read Full Bio' : 'اقرأ السيرة الذاتية'}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <SpeakerModal 
        speaker={selectedSpeaker} 
        onClose={() => setSelectedSpeaker(null)} 
        lang={lang} 
      />
    </div>
  );
};

export default Speakers;
