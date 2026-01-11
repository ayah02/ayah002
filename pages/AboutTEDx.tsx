
import React from 'react';
import { Language } from '../types';

const AboutTEDx: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="mb-24">
        <h1 className="text-6xl md:text-9xl font-black uppercase mb-8 leading-none">
          {lang === 'en' ? 'The Event' : 'الفعالية'}
        </h1>
        <div className="h-2 w-32 bg-ted-red mb-12"></div>
        <p className="text-2xl md:text-3xl text-white font-medium max-w-4xl leading-tight">
          {lang === 'en' 
            ? 'TEDx Al Yamamah University brings together our local community to share ideas that spark deep discussion and connection.' 
            : 'تيدكس جامعة اليمامة تجمع مجتمعنا المحلي لمشاركة الأفكار التي تثير نقاشاً وتواصلاً عميقاً.'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mb-24">
        <div className="text-center">
          <div className="text-7xl font-black text-ted-red mb-2 tracking-tighter">500+</div>
          <div className="text-white/40 uppercase font-bold tracking-widest">{lang === 'en' ? 'Attendees' : 'حضور'}</div>
        </div>
        <div className="text-center">
          <div className="text-7xl font-black text-ted-red mb-2 tracking-tighter">12</div>
          <div className="text-white/40 uppercase font-bold tracking-widest">{lang === 'en' ? 'Speakers' : 'متحدثون'}</div>
        </div>
        <div className="text-center">
          <div className="text-7xl font-black text-ted-red mb-2 tracking-tighter">100+</div>
          <div className="text-white/40 uppercase font-bold tracking-widest">{lang === 'en' ? 'Volunteers' : 'متطوعون'}</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-24">
         <img src="https://picsum.photos/seed/yu-tedx-1/800/800" className="rounded-3xl aspect-square object-cover" alt="Gallery 1" />
         <div className="grid grid-rows-2 gap-8">
            <img src="https://picsum.photos/seed/yu-tedx-2/800/400" className="rounded-3xl w-full h-full object-cover" alt="Gallery 2" />
            <img src="https://picsum.photos/seed/yu-tedx-3/800/400" className="rounded-3xl w-full h-full object-cover" alt="Gallery 3" />
         </div>
      </div>

      <div className="max-w-3xl">
        <h2 className="text-3xl font-black text-white mb-6 uppercase italic">{lang === 'en' ? 'Our Vision' : 'رؤيتنا'}</h2>
        <p className="text-xl text-white/60 leading-relaxed">
          {lang === 'en' 
            ? 'We believe in the power of ideas to transform our local community and the world. TEDx Al Yamamah University aims to provide a platform for those ideas to flourish and inspire the next generation of leaders in Saudi Arabia.' 
            : 'نؤمن بقوة الأفكار في تحويل مجتمعنا المحلي والعالم. يهدف تيدكس جامعة اليمامة لتوفير منصة لهذه الأفكار لتزدهر وتلهم الجيل القادم من القادة في المملكة العربية السعودية.'}
        </p>
      </div>
    </div>
  );
};

export default AboutTEDx;
