
import React from 'react';
import { Language } from '../types';

const AboutTED: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-6xl md:text-8xl font-black uppercase mb-12">About <span className="text-ted-red">TED</span></h1>
      
      <div className="space-y-12 text-xl text-white/70 leading-relaxed">
        <p>
          {lang === 'en' 
            ? 'TED is a nonprofit organization devoted to Ideas Worth Spreading, often in the form of short talks delivered by leading thinkers and doers.' 
            : 'تيد هي منظمة غير ربحية مخصصة لأفكار تستحق الانتشار، غالباً ما تكون على شكل كلمات قصيرة يلقيها مفكرون ومؤثرون رواد.'}
        </p>

        <div className="p-8 md:p-12 bg-white/5 rounded-3xl border border-white/10 italic text-2xl text-white font-medium text-center">
          {lang === 'en' 
            ? '"Ideas can change attitudes, lives and, ultimately, the world."' 
            : '"يمكن للأفكار أن تغير المواقف والحياة، وفي النهاية، العالم."'}
        </div>

        <h2 className="text-3xl font-black text-white">{lang === 'en' ? 'TED\'s Mission' : 'مهمة تيد'}</h2>
        <p>
          {lang === 'en' 
            ? 'Many of these talks are given at TED’s annual conference in Vancouver, British Columbia, and made available, free, on TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Monica Lewinsky, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.' 
            : 'يتم إلقاء العديد من هذه الكلمات في مؤتمر تيد السنوي في فانكوفر، وتتاح مجاناً على موقع TED.com. شمل متحدثو تيد بيل جيتس، جين جودال، إليزابيث جيلبرت، وسير ريتشارد برانسون.'}
        </p>

        <h2 className="text-3xl font-black text-white">{lang === 'en' ? 'What is TEDx?' : 'ما هو تيدكس؟'}</h2>
        <p>
          {lang === 'en' 
            ? 'In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TEDTalks video and live speakers combine to spark deep discussion and connection in a small group.' 
            : 'بروح الأفكار التي تستحق الانتشار، تيدكس هو برنامج فعاليات محلية منظمة ذاتياً تجمع الناس لمشاركة تجربة شبيهة بتجربة تيد. في فعاليات تيدكس، يتم الجمع بين فيديوهات تيد والمتحدثين المباشرين لإثارة نقاش عميق.'}
        </p>
      </div>
    </div>
  );
};

export default AboutTED;
