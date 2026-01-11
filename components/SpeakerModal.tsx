
import React, { useEffect } from 'react';
import { Speaker, Language } from '../types';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
  lang: Language;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose, lang }) => {
  useEffect(() => {
    if (speaker) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [speaker]);

  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-500 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 text-white rounded-full md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
          <img 
            src={speaker.photo} 
            alt={speaker.name[lang]} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:hidden"></div>
        </div>

        {/* Info Section */}
        <div className="flex-grow p-8 md:p-12 overflow-y-auto no-scrollbar">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="text-ted-red font-black text-xs uppercase tracking-[0.2em] mb-2 block">
                {speaker.role[lang]}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white">{speaker.name[lang]}</h2>
            </div>
            <button 
              onClick={onClose}
              className="hidden md:block p-2 text-white/40 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="grid gap-12">
            {/* Talk Section */}
            <section>
              <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-ted-red"></span>
                {lang === 'en' ? 'The Talk' : 'الكلمة'}
              </h3>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 italic leading-tight">
                "{speaker.talkTitle[lang]}"
              </h4>
              <p className="text-white/70 text-lg leading-relaxed">
                {speaker.talkDescription[lang]}
              </p>
            </section>

            {/* About Section */}
            <section>
              <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-white/20"></span>
                {lang === 'en' ? 'Personal Profile' : 'الملف الشخصي'}
              </h3>
              <p className="text-white/60 leading-relaxed whitespace-pre-wrap">
                {speaker.bio[lang]}
              </p>
            </section>

            {/* Socials */}
            <div className="flex gap-6 pt-4 border-t border-white/5">
              {Object.entries(speaker.socials).map(([platform, url]) => (
                <a 
                  key={platform} 
                  href={url as string} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-ted-red transition-colors capitalize font-bold text-sm"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerModal;
