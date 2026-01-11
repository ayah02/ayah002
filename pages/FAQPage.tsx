
import React, { useState } from 'react';
import { Language } from '../types';
import { FAQ } from '../constants';

const FAQPage: React.FC<{ lang: Language }> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
      <h1 className="text-6xl md:text-8xl font-black uppercase mb-16 text-center italic">{lang === 'en' ? 'Common' : 'الأسئلة'} <span className="text-ted-red">FAQs</span></h1>

      <div className="space-y-4">
        {FAQ.map((item) => (
          <div key={item.id} className="border border-white/10 rounded-2xl overflow-hidden bg-zinc-900/50">
            <button 
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-4"
            >
              <span className={`text-xl font-bold ${openId === item.id ? 'text-ted-red' : 'text-white'}`}>
                {item.question[lang]}
              </span>
              <span className={`text-ted-red transition-transform duration-300 ${openId === item.id ? 'rotate-45' : ''}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-6 md:p-8 pt-0 text-white/60 leading-relaxed text-lg border-t border-white/5">
                {item.answer[lang]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
