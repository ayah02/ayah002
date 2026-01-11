
import React from 'react';
import { Language } from '../types';
import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom';

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  const { siteSettings } = useData();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand & University Logo */}
          <div className="col-span-1 lg:col-span-2 space-y-8">
            <div className="flex items-center gap-6">
               <Link to="/" className="leading-none group">
                  <h2 className="text-ted-red font-black text-4xl tracking-tighter mb-1 transition-colors group-hover:text-white">TEDx</h2>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">{siteSettings.eventName.en.replace('TEDx ', '')}</p>
               </Link>
               <div className="h-12 w-px bg-white/10 hidden sm:block"></div>
               {/* University Pillar Representation */}
               <Link to="/university" className="flex items-end gap-1.5 h-10 hover:opacity-80 transition-opacity">
                  <div className="w-1.5 h-full bg-orange-500 rounded-full"></div>
                  <div className="w-1.5 h-[80%] bg-orange-500 rounded-full"></div>
                  <div className="w-1.5 h-[60%] bg-orange-500 rounded-full"></div>
                  <div className="w-1.5 h-[70%] bg-white rounded-full"></div>
                  <div className="w-1.5 h-[85%] bg-white rounded-full"></div>
                  <div className="w-1.5 h-[95%] bg-white rounded-full"></div>
               </Link>
            </div>

            <div className="space-y-4">
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                {lang === 'en' 
                  ? 'An independent TEDx event hosted by Al Yamamah University, dedicated to bringing voices that matter to the forefront of the Eastern Province.' 
                  : 'فعالية تيدكس مستقلة تستضيفها جامعة اليمامة، مخصصة لإيصال الأصوات المؤثرة إلى واجهة المنطقة الشرقية.'}
              </p>
              <div className="flex gap-4">
                {[
                  { id: 'twitter', label: 'Twitter', url: siteSettings.socialLinks.twitter },
                  { id: 'instagram', label: 'Instagram', url: siteSettings.socialLinks.instagram },
                  { id: 'linkedin', label: 'LinkedIn', url: siteSettings.socialLinks.linkedin },
                  { id: 'youtube', label: 'YouTube', url: siteSettings.socialLinks.youtube }
                ].map(social => (
                  <a 
                    key={social.id} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-white/40 hover:text-ted-red hover:bg-white/5 hover:border-ted-red/20 transition-all"
                  >
                    <span className="sr-only">{social.label}</span>
                    <div className="w-5 h-5 bg-current rounded-[2px] opacity-50"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Section 1 */}
          <div className="col-span-1">
            <h3 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">{lang === 'en' ? 'Navigate' : 'التنقل'}</h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'Home' : 'الرئيسية'}</Link></li>
              <li><Link to="/about-ted" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'About TED' : 'عن تيد'}</Link></li>
              <li><Link to="/about-tedx" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'About TEDx' : 'عن تيدكس'}</Link></li>
              <li><Link to="/speakers" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'Speakers' : 'المتحدثون'}</Link></li>
              <li><Link to="/agenda" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'Agenda' : 'الجدول'}</Link></li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div className="col-span-1">
            <h3 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">{lang === 'en' ? 'Join Us' : 'انضم إلينا'}</h3>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link to="/teams" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'The Team' : 'فريق العمل'}</Link></li>
              <li><Link to="/live" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'Live Stream' : 'البث المباشر'}</Link></li>
              <li><Link to="/registration" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'Registration' : 'التسجيل'}</Link></li>
              <li><Link to="/faq" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'FAQ' : 'الأسئلة الشائعة'}</Link></li>
              <li><Link to="/university" className="text-white/40 hover:text-white transition-colors">{lang === 'en' ? 'The University' : 'الجامعة'}</Link></li>
            </ul>
          </div>

          {/* Contact & Map handled separately or within the last col if space allows */}
          <div className="col-span-1 lg:col-span-4 mt-8 lg:mt-0 pt-16 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
               <div className="space-y-4">
                  <h3 className="text-white font-black uppercase tracking-[0.2em] text-[10px]">{lang === 'en' ? 'Contact' : 'اتصل بنا'}</h3>
                  <div className="space-y-2">
                    <p className="text-white/70 text-sm font-bold">{siteSettings.location[lang]}</p>
                    <a href={`mailto:tedx@yu.edu.sa`} className="text-ted-red text-sm font-black border-b border-ted-red/20 pb-1 hover:text-white hover:border-white transition-all">tedx@yu.edu.sa</a>
                  </div>
               </div>

               <div className="col-span-1 md:col-span-2 lg:col-span-3">
                  <div className="w-full h-48 md:h-64 bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.338958784092!2d50.2179585!3d26.380234700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef8515c0ce03%3A0x34117412d3a5535f!2sAl%20Yamamah%20University!5e0!3m2!1sen!2ssa!4v1768140700997!5m2!1sen!2ssa" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Event Location Map"
                    ></iframe>
                  </div>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/20">
          <p className="text-center md:text-left">© {new Date().getFullYear()} {siteSettings.eventName.en}. This independent TEDx event is operated under license from TED.</p>
          <div className="flex gap-8">
            <Link to="/faq" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/faq" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/admin" className="text-white/10 hover:text-white transition-colors">CMS Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
