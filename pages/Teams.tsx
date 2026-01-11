
import React, { useState } from 'react';
import { Language } from '../types';
import { useData } from '../context/DataContext';
import VolunteerModal from '../components/VolunteerModal';

const Teams: React.FC<{ lang: Language }> = ({ lang }) => {
  const { team } = useData();
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  
  // Group team members by team name
  const teamsGrouped = team.reduce((acc, member) => {
    const teamName = member.team[lang];
    if (!acc[teamName]) acc[teamName] = [];
    acc[teamName].push(member);
    return acc;
  }, {} as Record<string, typeof team>);

  // Define team order for consistent display
  const teamOrder = [
    lang === 'en' ? "Organizing Team" : "فريق التنظيم",
    lang === 'en' ? "Production Team" : "فريق الإنتاج",
    lang === 'en' ? "Marketing Team" : "فريق التسويق",
    lang === 'en' ? "Logistics Team" : "فريق الخدمات"
  ];

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase mb-6 tracking-tighter">
          {lang === 'en' ? 'The' : 'فريق'} <span className="text-ted-red">Creators</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          {lang === 'en' 
            ? 'A collective of innovative minds from Al Yamamah University, dedicated to pushing boundaries and creating a legacy.' 
            : 'مجموعة من العقول المبتكرة من جامعة اليمامة، مكرسة لتخطي الحدود وصنع إرث.'}
        </p>
      </header>

      <div className="space-y-32">
        {teamOrder.map((teamName) => {
          const members = teamsGrouped[teamName];
          if (!members) return null;
          
          return (
            <section key={teamName} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                <div className="text-center md:text-left shrink-0">
                  <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">
                    {teamName}
                  </h2>
                  <div className="h-1 w-20 bg-ted-red mt-4 mx-auto md:mx-0"></div>
                </div>
                <div className="h-px flex-grow bg-white/10 hidden md:block"></div>
                <div className="text-white/20 font-black text-xs uppercase tracking-[0.3em] shrink-0">
                  {members.length} {lang === 'en' ? 'Members' : 'أعضاء'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-16 gap-x-8">
                {members.map((member) => (
                  <div key={member.id} className="text-center group perspective-1000">
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 transition-all duration-500 transform group-hover:rotate-y-12 group-hover:scale-105">
                      <img 
                        src={member.photo} 
                        alt={member.name[lang]} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                      <div className="absolute inset-0 border-2 border-white/5 group-hover:border-ted-red/50 rounded-2xl transition-colors"></div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-white font-black text-lg group-hover:text-ted-red transition-colors">
                        {member.name[lang]}
                      </h3>
                      <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">
                        {member.role[lang]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <section className="mt-32 p-12 bg-zinc-900/50 rounded-[3rem] border border-white/5 text-center backdrop-blur-md">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
          {lang === 'en' ? 'Want to join us next year?' : 'هل تريد الانضمام إلينا العام القادم؟'}
        </h2>
        <p className="text-white/60 mb-10 max-w-xl mx-auto">
          {lang === 'en' 
            ? 'We are always looking for passionate volunteers and creatives to help grow the TEDx community in Khobar.' 
            : 'نحن نبحث دائماً عن متطوعين ومبدعين شغوفين للمساعدة في تنمية مجتمع تيدكس في الخبر.'}
        </p>
        <button 
          onClick={() => setIsVolunteerModalOpen(true)}
          className="inline-block px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-xl hover:bg-ted-red hover:text-white transition-all shadow-xl shadow-white/5"
        >
          {lang === 'en' ? 'Apply to Volunteer' : 'قدم كمتطوع'}
        </button>
      </section>

      <VolunteerModal isOpen={isVolunteerModalOpen} onClose={() => setIsVolunteerModalOpen(false)} lang={lang} />
    </div>
  );
};

export default Teams;
