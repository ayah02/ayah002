
import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { useData } from '../context/DataContext';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const VolunteerModal: React.FC<VolunteerModalProps> = ({ isOpen, onClose, lang }) => {
  const { addVolunteerApplication } = useData();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', reason: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call and Email sending
    await new Promise(r => setTimeout(r, 1500));
    
    addVolunteerApplication(formData);
    
    // Construct mailto for real email simulation if desired
    const mailBody = `New Volunteer Application:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nReason: ${formData.reason}`;
    window.location.href = `mailto:tedx@yu.edu.sa?subject=New Volunteer Application - ${formData.name}&body=${encodeURIComponent(mailBody)}`;
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in" onClick={onClose}></div>
      
      <div className="relative w-full max-w-xl bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="p-8 md:p-12">
          {!isSuccess ? (
            <>
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-black text-white">{lang === 'en' ? 'Join the' : 'انضم إلى'} <span className="text-ted-red">{lang === 'en' ? 'Team' : 'الفريق'}</span></h2>
                <button onClick={onClose} className="text-white/30 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{lang === 'en' ? 'Full Name' : 'الاسم الكامل'}</label>
                  <input required className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-ted-red transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{lang === 'en' ? 'Email Address' : 'البريد الإلكتروني'}</label>
                    <input type="email" required className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-ted-red transition-all" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{lang === 'en' ? 'Phone Number' : 'رقم الهاتف'}</label>
                    <input type="tel" required className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-ted-red transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-white/30 mb-2">{lang === 'en' ? 'Why do you want to volunteer?' : 'لماذا ترغب في التطوع؟'}</label>
                  <textarea required className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-ted-red transition-all h-32" value={formData.reason} onChange={e => setFormData({...formData, reason: e.target.value})} />
                </div>
                <button disabled={isSubmitting} className="w-full py-5 bg-ted-red text-white font-black rounded-xl hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  ) : (lang === 'en' ? 'Submit Application' : 'إرسال الطلب')}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">{lang === 'en' ? 'Application Sent!' : 'تم إرسال الطلب!'}</h3>
              <p className="text-white/50 mb-10 leading-relaxed">{lang === 'en' ? 'Thank you for your interest. We will contact you soon. An email draft has been prepared for your records.' : 'شكراً لاهتمامك. سنتواصل معك قريباً. تم إعداد مسودة بريد إلكتروني لسجلاتك.'}</p>
              <button onClick={onClose} className="px-12 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all">{lang === 'en' ? 'Close' : 'إغلاق'}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;
