
import React from 'react';
import { Language } from '../types';
import { useData } from '../context/DataContext';

const Agenda: React.FC<{ lang: Language }> = ({ lang }) => {
  const { schedule, speakers, siteSettings } = useData();
  
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <header className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-tighter">{lang === 'en' ? 'Event' : 'جدول'} <span className="text-ted-red">Agenda</span></h1>
        <p className="text-white/60">{siteSettings.location[lang]}</p>
      </header>

      <div className="space-y-4">
        {schedule.map((item, idx) => {
          const speaker = item.speakerId ? speakers.find(s => s.id === item.speakerId) : null;
          return (
            <div key={item.id} className="relative group flex items-stretch gap-6">
              <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full ${speaker ? 'bg-ted-red' : 'bg-white/20'} mt-7`}></div>
                {idx !== schedule.length - 1 && <div className="w-px flex-grow bg-white/10 my-1"></div>}
              </div>

              <div className="flex-grow pb-12">
                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-white/10 transition-all backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <span className="text-xl font-bold font-mono text-white/40">{item.startTime} — {item.endTime}</span>
                    {speaker && <span className="px-3 py-1 bg-ted-red/10 text-ted-red text-xs font-bold rounded-full border border-ted-red/20">{lang === 'en' ? 'TALK' : 'كلمة'}</span>}
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-2">{item.title[lang]}</h3>
                  
                  {speaker && (
                    <div className="flex items-center gap-4 mt-6 p-4 bg-white/5 rounded-xl border border-white/5">
                      <img src={speaker.photo} alt={speaker.name[lang]} className="w-12 h-12 rounded-full object-cover grayscale" />
                      <div>
                        <p className="text-white font-bold">{speaker.name[lang]}</p>
                        <p className="text-xs text-white/50">{speaker.role[lang]}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Agenda;
