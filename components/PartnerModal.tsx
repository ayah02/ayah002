
import React, { useEffect } from 'react';
import { Sponsor, Language } from '../types';

interface PartnerModalProps {
  partner: Sponsor | null;
  onClose: () => void;
  lang: Language;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ partner, onClose, lang }) => {
  useEffect(() => {
    if (partner) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [partner]);

  if (!partner) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-center mb-10">
            <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
              partner.tier === 'Platinum' ? 'border-ted-red text-ted-red bg-ted-red/10' : 'border-white/20 text-white/50'
            }`}>
              {partner.tier} {lang === 'en' ? 'Partner' : 'شريك'}
            </span>
            <button onClick={onClose} className="text-white/30 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-48 h-24 bg-white/5 rounded-2xl flex items-center justify-center p-6 mb-6">
              <img src={partner.logo} alt={partner.name} className="max-w-full max-h-full object-contain" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4">{partner.name}</h2>
            {partner.description && (
              <p className="text-white/60 leading-relaxed text-lg max-w-lg">
                {partner.description[lang]}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <a 
              href={partner.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              {lang === 'en' ? 'Visit Website' : 'زيارة الموقع'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
