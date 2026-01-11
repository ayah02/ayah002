
import React from 'react';
import { Language } from '../types';

const University: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 leading-none">
            {lang === 'en' ? 'Al Yamamah' : 'جامعة'} <br />
            <span className="text-ted-red">{lang === 'en' ? 'University' : 'اليمامة'}</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-8">
            {lang === 'en' 
              ? 'Established in Riyadh, Al Yamamah University is a leading educational institution that fosters innovation, leadership, and excellence.' 
              : 'تأسست جامعة اليمامة في الرياض، وهي مؤسسة تعليمية رائدة تعزز الابتكار والقيادة والتميز.'}
          </p>
          <a 
            href="https://yu.edu.sa" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-3 bg-white text-black font-bold rounded hover:bg-white/90 transition-all"
          >
            {lang === 'en' ? 'Visit Official Website' : 'زيارة الموقع الرسمي'}
          </a>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-white/5">
          <img src="https://picsum.photos/seed/yu-campus/800/600" alt="University Campus" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-10 bg-zinc-900 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">{lang === 'en' ? 'Vision' : 'الرؤية'}</h3>
          <p className="text-white/60 leading-relaxed">
            {lang === 'en' 
              ? 'To be the preferred choice for students seeking a distinctive education and professional success.' 
              : 'أن نكون الخيار المفضل للطلاب الذين يسعون للحصول على تعليم متميز ونجاح مهني.'}
          </p>
        </div>
        <div className="p-10 bg-zinc-900 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">{lang === 'en' ? 'Mission' : 'الرسالة'}</h3>
          <p className="text-white/60 leading-relaxed">
            {lang === 'en' 
              ? 'Providing a high-quality academic environment that integrates theory with practice.' 
              : 'توفير بيئة أكاديمية عالية الجودة تدمج النظرية مع التطبيق.'}
          </p>
        </div>
        <div className="p-10 bg-zinc-900 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">{lang === 'en' ? 'Community' : 'المجتمع'}</h3>
          <p className="text-white/60 leading-relaxed">
            {lang === 'en' 
              ? 'Fostering a sense of belonging and community through events like TEDx.' 
              : 'تعزيز الشعور بالانتماء والمجتمع من خلال فعاليات مثل تيدكس.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default University;
