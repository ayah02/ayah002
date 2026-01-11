
import React, { useState } from 'react';
import { Language } from '../types';
import { useData } from '../context/DataContext';
import ShareCard from '../components/ShareCard';

const Registration: React.FC<{ lang: Language }> = ({ lang }) => {
  const { siteSettings } = useData();
  const [hasRegistered, setHasRegistered] = useState(false);
  const [userName, setUserName] = useState('');
  const [showCopied, setShowCopied] = useState(false);

  const linkedInPostText = lang === 'en' 
    ? `I'm excited to announce that I'll be attending ${siteSettings.eventName.en}: Min Badeet! 🚀\n\nCan't wait to explore the ideas shaping our future at Al Yamamah University. See you there!\n\n#TEDx #MinBadeet #YU #Khobar #IdeasWorthSpreading`
    : `يسعدني أن أعلن عن حضوري لفعالية ${siteSettings.eventName.ar}: من بدأت! 🚀\n\nأتطلع لاستكشاف الأفكار التي تشكل مستقبلنا في جامعة اليمامة بالخبر. نراكم هناك!\n\n#تيدكس #من_بدأت #جامعة_اليمامة #الخبر #أفكار_تستحق_الانتشار`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(linkedInPostText);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.origin);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto flex flex-col items-center">
      {!hasRegistered ? (
        <div className="text-center animate-in fade-in duration-700">
          <div className="w-24 h-24 bg-ted-red/10 rounded-full flex items-center justify-center mb-8 border border-ted-red/20 mx-auto">
            <svg className="w-10 h-10 text-ted-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase mb-8">{lang === 'en' ? 'Secure Your' : 'احجز'} <span className="text-ted-red">Spot</span></h1>
          
          <div className="max-w-2xl bg-zinc-900 p-8 md:p-12 rounded-3xl border border-white/5 mb-12">
            <p className="text-xl text-white/70 leading-relaxed mb-8">
              {lang === 'en' 
                ? `Registration for ${siteSettings.eventName.en} is managed exclusively through Luma.` 
                : `تتم إدارة التسجيل في ${siteSettings.eventName.ar} حصرياً من خلال لوما.`}
            </p>

            <div className="space-y-4 mb-10 max-w-md mx-auto text-left">
              {[
                { en: '1. Click "Register" below to visit Luma', ar: '١. اضغط على "سجل الآن" لزيارة لوما' },
                { en: '2. Complete your details and payment', ar: '٢. أكمل بياناتك وعملية الدفع' },
                { en: '3. Return here to share your badge', ar: '٣. عد إلى هنا لمشاركة بطاقتك' }
              ].map((step, i) => (
                <div key={i} className="flex gap-4 text-white/60">
                  <span className="text-ted-red font-bold">{i+1}.</span>
                  <span>{step[lang]}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={siteSettings.lumaUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setTimeout(() => setHasRegistered(true), 2000)}
                className="w-full sm:w-auto px-12 py-5 bg-ted-red hover:bg-red-700 text-white font-black text-xl rounded-xl transition-all shadow-2xl shadow-ted-red/20 text-center"
              >
                {lang === 'en' ? 'Register on Luma' : 'سجل عبر لوما'}
              </a>
              <button 
                onClick={() => setHasRegistered(true)}
                className="text-white/40 hover:text-white text-sm font-bold border-b border-white/10"
              >
                {lang === 'en' ? "Already registered? Share now" : "مسجل بالفعل؟ شارك الآن"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700">
          <header className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
              {lang === 'en' ? "Share your" : "شارك"} <span className="text-ted-red">Excitement</span>
            </h2>
            <p className="text-white/50">{lang === 'en' ? "Tell the world you're joining the conversation." : "أخبر العالم أنك ستنضم إلى الحوار."}</p>
          </header>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Input Side */}
            <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
              <div className="p-8 bg-zinc-900 rounded-3xl border border-white/5 space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                    {lang === 'en' ? 'Display Name on Badge' : 'الاسم المعروض على البطاقة'}
                  </label>
                  <input 
                    type="text" 
                    placeholder={lang === 'en' ? 'Enter your full name...' : 'أدخل اسمك الكامل...'}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:border-ted-red outline-none transition-all text-lg font-bold"
                  />
                </div>

                <div className="pt-6 border-t border-white/5">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                    {lang === 'en' ? 'LinkedIn Caption' : 'نص المنشور'}
                  </label>
                  <div className="relative group">
                    <div className="bg-black/50 p-4 rounded-xl text-sm text-white/60 leading-relaxed min-h-[120px] border border-white/5">
                      {linkedInPostText}
                    </div>
                    <button 
                      onClick={handleCopyText}
                      className={`absolute top-2 right-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all ${
                        showCopied ? 'bg-green-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {showCopied ? (lang === 'en' ? 'Copied!' : 'تم النسخ!') : (lang === 'en' ? 'Copy Text' : 'نسخ النص')}
                    </button>
                  </div>
                </div>

                <button 
                  onClick={shareOnLinkedIn}
                  className="w-full py-5 bg-[#0077b5] text-white font-black text-xl rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#0077b5]/20"
                >
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  {lang === 'en' ? 'Post on LinkedIn' : 'انشر في لينكد إن'}
                </button>
              </div>

              <button 
                onClick={() => setHasRegistered(false)}
                className="text-white/20 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 mx-auto"
              >
                <span className={lang === 'ar' ? 'rotate-180' : ''}>←</span>
                {lang === 'en' ? 'Back to registration info' : 'العودة لمعلومات التسجيل'}
              </button>
            </div>

            {/* Preview Side */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-6 text-center">
                {lang === 'en' ? 'Live Preview' : 'معاينة مباشرة'}
              </label>
              <div className="sticky top-32">
                <ShareCard name={userName} lang={lang} settings={siteSettings} />
                <p className="mt-8 text-center text-white/30 text-xs italic leading-relaxed">
                  {lang === 'en' 
                    ? 'Note: LinkedIn pulls image data from the website link. To share your personal badge, take a screenshot or snip of the preview above!' 
                    : 'ملاحظة: يقوم لينكد إن بسحب بيانات الصورة من رابط الموقع. لمشاركة بطاقتك الشخصية، التقط صورة شاشة للمعاينة أعلاه!'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
