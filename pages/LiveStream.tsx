
import React from 'react';
import { Language } from '../types';
import { SITE_SETTINGS } from '../constants';

const LiveStream: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
        <div>
           <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-ted-red/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-ted-red animate-ping"></div>
            <span className="text-ted-red text-xs font-black uppercase tracking-widest">{lang === 'en' ? 'Live Now' : 'مباشر الآن'}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase">{lang === 'en' ? 'Watch' : 'شاهد'} <span className="text-ted-red">Live</span></h1>
        </div>
        <p className="text-white/60 max-w-md md:text-right">{lang === 'en' ? 'Broadcasting live from the Al Yamamah University Main Auditorium.' : 'بث مباشر من المسرح الرئيسي في جامعة اليمامة.'}</p>
      </header>

      <div className="aspect-video w-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
        <iframe 
          className="w-full h-full"
          src={SITE_SETTINGS.liveUrl}
          title="Live Stream"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="p-8 bg-zinc-900 rounded-2xl border border-white/5">
          <h3 className="text-white font-bold mb-2">{lang === 'en' ? 'Chat' : 'المحادثة'}</h3>
          <p className="text-white/50 text-sm">{lang === 'en' ? 'Join the conversation on YouTube Live.' : 'انضم للمحادثة في يوتيوب مباشر.'}</p>
        </div>
        <div className="p-8 bg-zinc-900 rounded-2xl border border-white/5">
          <h3 className="text-white font-bold mb-2">{lang === 'en' ? 'Quality' : 'الجودة'}</h3>
          <p className="text-white/50 text-sm">{lang === 'en' ? 'Supports up to 4K resolution.' : 'يدعم دقة تصل إلى 4K.'}</p>
        </div>
        <div className="p-8 bg-zinc-900 rounded-2xl border border-white/5">
          <h3 className="text-white font-bold mb-2">{lang === 'en' ? 'Archive' : 'الأرشيف'}</h3>
          <p className="text-white/50 text-sm">{lang === 'en' ? 'Recording will be available after the session.' : 'سيتوفر التسجيل بعد الجلسة.'}</p>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;
